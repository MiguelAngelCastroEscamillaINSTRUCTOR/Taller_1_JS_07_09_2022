addEventListener("DOMContentLoaded", ()=>{
    // 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo

    let velocidad = Number(prompt("Ingrese la velocidad del proyectil expresado en KM\n\t Ejemplo 1KM = 1000M", 2));
    let distancia = Number(prompt("Ingrese la cantidad de minutos que recorrio el proyectil\n\t Ejemplo 1M = 60s", 5));
    let metros = velocidad*1000;
    let segundos = distancia*60;
    let resultado = metros / segundos;
    console.log(`El proyectil recicorrio ${velocidad}Km espresados en metros son ${metros}M`);
    console.log(`La distancia recicorrio ${distancia}M espresados en segundos son ${segundos}s`);
    console.log(`Resultado de la velocidad ${resultado}KM/s`);
})