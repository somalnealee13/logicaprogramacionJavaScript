import readline from "readline";

const interfaz = readline.createInterface({ input:process.stdin, output:process.stdout })

 const volverHaHacerpregunta =() => interfaz.question("porfavor ingrese su nombre: ", (nombre) =>{interfaz.question("porfavor ingrese su edad ", (edad) => {
    console.log("hola!" + nombre + "su edad es :" + edad);

let num = parseInt(edad)

if (num >= 18) {
    console.log("eres mayor de edad");

volverHaHacerpregunta()

} else if (num >= 13 && num <= 15){
    console.log("eres adolescente porque tienes " + num);
    volverHaHacerpregunta()

} else if( num >= 16 && num <= 17){
    console.log("eres un adulto joven" + num);
    volverHaHacerpregunta()
} 
else if (num <=12){
    console.log("eres un niño de edad" + num);
    volverHaHacerpregunta()
}

else{
    console.log("rando de edades invalidas");
}

})
})







