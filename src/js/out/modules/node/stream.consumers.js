var k=(o)=>{return import.meta.require(o)};var{Bun:p}=globalThis[Symbol.for("Bun.lazy")]("primordials"),O=p.readableStreamToArrayBuffer,c=p.readableStreamToText,g=(o)=>p.readableStreamToText(o).then(JSON.parse),h=async(o)=>{return new Buffer(await O(o))},i=p.readableStreamToBlob,v={[Symbol.for("CommonJS")]:0,arrayBuffer:O,text:c,json:g,buffer:h,blob:i};export{c as text,g as json,v as default,h as buffer,i as blob,O as arrayBuffer};
