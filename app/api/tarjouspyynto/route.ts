export const runtime="nodejs";
const serviceChoices=new Set(["Kylpyhuone","Huoneisto","Keittiö","Vesivahinko","Terassi / ulkotila","Muu"]);
const maxFile=3_000_000,maxTotal=15_000_000;
const bad=(error:string,status=400)=>Response.json({error},{status});
const textValue=(data:FormData,key:string)=>String(data.get(key)||"").trim();
function isImage(buffer:Buffer,mime:string){
 if(mime==="image/jpeg")return buffer[0]===0xff&&buffer[1]===0xd8&&buffer[2]===0xff;
 if(mime==="image/png")return buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
 if(mime==="image/webp")return buffer.toString("ascii",0,4)==="RIFF"&&buffer.toString("ascii",8,12)==="WEBP";
 return false;
}
export async function POST(request:Request){
 try{
  const origin=request.headers.get("origin");
  if(origin&&origin!==new URL(request.url).origin)return bad("Pyyntöä ei voitu käsitellä.",403);
  if(Number(request.headers.get("content-length")||0)>17_000_000)return bad("Kuvat ovat liian suuria.",413);
  const apiKey=process.env.RESEND_API_KEY,from=process.env.LEAD_FROM_EMAIL,to=process.env.LEAD_TO_EMAIL;
  if(!apiKey||!from||!to)return bad("Lomake ei ole vielä käytettävissä. Soita numeroon 050 347 6660.",503);
  const data=await request.formData();
  if(textValue(data,"website"))return bad("Pyyntöä ei voitu käsitellä.",400);
  const service=textValue(data,"service"),city=textValue(data,"city"),postcode=textValue(data,"postcode");
  const description=textValue(data,"description"),name=textValue(data,"name"),phone=textValue(data,"phone"),email=textValue(data,"email");
  if(!serviceChoices.has(service))return bad("Valitse remontin tyyppi.");
  if(!city||city.length>100||!description||description.length>3000||!name||name.length>150||!phone||phone.length>50||!email||email.length>200||!/^.+@.+\..+$/.test(email))return bad("Tarkista pakolliset kentät.");
  if(postcode&&!/^\d{5}$/.test(postcode))return bad("Postinumeron tulee olla viisinumeroinen.");
  const images=data.getAll("images").filter((item):item is File=>item instanceof File&&item.size>0);
  if(images.length>5||images.some(file=>file.size>maxFile)||images.reduce((sum,file)=>sum+file.size,0)>maxTotal)return bad("Liitä enintään 5 kuvaa, korkeintaan 3 Mt kukin.");
  const attachments=[];
  for(const [index,file] of images.entries()){
   const bytes=Buffer.from(await file.arrayBuffer());
   if(!isImage(bytes,file.type))return bad("Liitä vain JPG-, PNG- tai WebP-kuvia.");
   const ext=file.type==="image/jpeg"?"jpg":file.type==="image/png"?"png":"webp";
   attachments.push({filename:"kohde-"+(index+1)+"."+ext,content:bytes.toString("base64")});
  }
  const id=crypto.randomUUID();
  const lines=[
   "Uusi remonttipyyntö","Tunniste: "+id,"Palvelu: "+service,"Paikkakunta: "+city,
   "Postinumero: "+(postcode||"ei annettu"),"Nimi: "+name,"Puhelin: "+phone,
   "Sähköposti: "+email,"Kuvia: "+images.length,"","Kuvaus:",description
  ];
  const response=await fetch("https://api.resend.com/emails",{
   method:"POST",
   headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json","Idempotency-Key":"remonttipyynto/"+id},
   body:JSON.stringify({from,to:[to],reply_to:email,subject:"Remonttipyyntö: "+service+" / "+city,text:lines.join("\n"),attachments}),
   signal:AbortSignal.timeout(12000)
  });
  if(!response.ok){console.error("Resend rejected lead",response.status);return bad("Lähetys epäonnistui. Soita numeroon 050 347 6660.",502)}
  const result=await response.json() as {id?:string};
  if(!result.id)return bad("Lähetyksen vahvistus puuttuu. Soita numeroon 050 347 6660.",502);
  return Response.json({ok:true,id},{status:201});
 }catch(error){console.error("Lead request failed",error);return bad("Lähetys epäonnistui. Yritä uudelleen tai soita numeroon 050 347 6660.",500)}
}
