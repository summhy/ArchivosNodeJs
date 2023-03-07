const fs = require("fs");
const path = "./files/localidades.json"
const path2 = "./files/localidades2.json"

function crearArchivo(){
    if(fs.existsSync(path)){
        fs.appendFile(path, "{nombre:'Marisol'}", ()=>{ console.log("Archivo Creado")}) 
    }else{
        fs.writeFile(path, `{"nombre":"Susana"}`, ()=>{ console.log("Archivo Creado")})   
    }
}

function leerArchivo(){
    fs.readFile(path, { encoding: "utf-8" }, (err, data)=>{
        console.log(data);
    })
}
//crearArchivo();
//leerArchivo();
//fs.rename(path, path2,(err)=>{})

fs.unlink(path, (err)=>{})
