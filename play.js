//import library readline-nodejs
const rl = require('readline-sync');
//welcome to the survival game
console.log('"Te despiertas entre escombros. El cielo es rojo, y la ciudad está en ruinas. Debes encontrar suministros y un refugio seguro antes del anochecer."');
//initialized vars
let lives=5;
let members=3;
let inventary=[];

console.log('Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.');
console.log('-------------------------------------------------------------------------------------------------------');
console.log('El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?');

//Buscar comida
let opA_result=['comida','agua'];
let opB_result=['linterna'];
console.log('A: Ir al supermercado abandonado');
console.log('B: Robar mochila a un sobreviviente');

let res=rl.question('Escoge una opcion(A/B): ').toUpperCase();

if(res==='A'){
    inventary=inventary.concat(opA_result)
    console.log('Has agregado al inventario: '+ opA_result);
    lives--;
    console.log('CASO: Encuentro leve con saqueador');
    console.log('Vidas restantes: '+lives);
    console.log(inventary);
    
}else if(res==='B'){
    inventary=inventary.concat(opB_result)
    console.log('Has agregado al inventario: '+ opB_result);
    console.log('CASO: Obtienen linterna, pero pierden 1 miembro por represalia.');
    members--;
    console.log('Miembros restantes: '+members);
    console.log(inventary);
    
}else{
    console.log('ERROR, INSTRUCCION NO ENCONTRADA...REINICIA EL JUEGO')
}

console.log('--------------------------------------------------------------------------------------------------------');
//Lugar de refugio
console.log('Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.');
let opA2_result=['botiquin'];
let opB2_result=[];
let opC2_result=['bateria'];

console.log('A: Esconderse en una farmacia');
console.log('B: Ir a una estación de buses');
console.log('C: Refugiarse en una tienda de campaña abandonada');

res=rl.question('Escoge una opcion(A/B/C)').toUpperCase();

if(res==='A'){
    inventary=inventary.concat(opA2_result);
    console.log('Has agreado al inventario: '+opA2_result);
    lives++;
    console.log('Aumenta 1 vida: '+lives);
    console.log(inventary);
    
}else if(res==='B'){
    inventary=inventary.concat(opB2_result);
    console.log('No encuentras nada...');
    console.log('Hay escombros, uno se lastima.');
    lives--;
    console.log('Vidas restantes: '+lives);
    console.log(inventary);
    
}else if(res==='C'){
    inventary=inventary.concat(opC2_result);
    console.log('Has agregado al inventario: '+opC2_result);
    console.log('CASO: Hay signos de radioactividad cerca.');
    lives--;
    console.log('Vidas restantes: '+lives);
    console.log(inventary);
    
}else{
    console.log('ERROR, INSTRUCCION NO ENCONTRADA...REINICIA EL JUEGO');
}

console.log('-------------------------------------------------------------------------------------------------------');
//ayudar o ignorar
console.log('Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión?');

let opA3_result=['mapa'];
let opB3_result=[];
let opC3_result=['linterna'];
let opD3_result=['comida'];

console.log('A: Ayudar a una familia atrapada');
console.log('B: Ignorar y seguir avanzando');
console.log('C: Distraer a los enemigos y liberar a la familia a distancia');
console.log('D: Robar los recursos de la familia sin ser vistos');

res=rl.question('Escoge una opcion(A/B/C/D)').toUpperCase();

if(res==='A'){
    inventary=inventary.concat(opA3_result);
    console.log('Has agregado al inventario: ')+opA3_result;
    members++;
    console.log('Aumento de miembros: '+members);
    console.log(inventary);
}else if(res==='B'){
    console.log('CASO: Nada ganado.');
    members--;
    console.log('Decremento de miembros: '+members);
    console.log(inventary);
}else if(res==='C'){
    inventary=inventary.concat(opC3_result);
    lives--;
    console.log('Vidas restantes: '+lives);
    console.log(inventary);
}else if(res==='D'){
    inventary=inventary.concat(opD3_result);
    members-=2;
    console.log('CASO: Pierden 2 miembros por represalia.'+members);
    console.log(inventary);
}else{
    console.log('ERROR, INSTRUCCION NO ENCONTRADA...REINICIA EL JUEGO');
}

console.log('-------------------------------------------------------------------------------------------------------');
//señal de humo
console.log('Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.');

let opAH_result=['gasolina','llave vieja'];
let opBH_result=[];

console.log('A: Investigar la señal');
console.log('B: Evitar la zona');

res=rl.question('Escoge una opcion(A/B)').toUpperCase();

if(res==='A'){
    inventary=inventary.concat(opAH_result);
    console.log(inventary);
}else if(res==='B'){
    console.log('CASO: Evitan una emboscada, pero pierden oportunidad de obtener objetos.');
    console.log(inventary);
    
}

console.log('-------------------------------------------------------------------------------------------------------');
//exploracion alta o baja
let opA4_result=['Dron intel'];
let opB4_result=[];
let opC4_result=['Tarjeta-acceso'];

console.log('A: Subir a un edificio a observar');
console.log('B: Moverse por callejones');
console.log('C: Usar una alcantarilla conectada al metro');

res=rl.question('Escoge una opcion(A/B/C)').toUpperCase();

if(res==='A'){
    inventary=inventary.concat(opA4_result);
    console.log('Encuentran un dron con información.');
    console.log(inventary);
}else if(res==='B'){
    console.log('CASO: Se enfrentan a animales salvajes.');
    lives--;
    console.log('Vidas restantes: '+lives);
    console.log(inventary);
    
}else if(res==='C'){
    inventary=inventary.concat(opC4_result);
    console.log('Llegan cerca de una entrada secreta al siguiente nivel.');
    console.log(inventary);
}else{
    console.log('ERROR, INSTRUCCION NO ENCONTRADA...REINICIA EL JUEGO');
}

console.log('-------------------------------------------------------------------------------------------------------------');

//medio de transporte
console.log('La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.');

let opA5_result=['medicina','bateria']
let opB5_result=[];

console.log('A: Reparar una bicicleta');
console.log('B: Ir a pie');

res=rl.question('Escoge una opcion(A/B)').toUpperCase();

if(res==='A'){
    console.log('Avanzan rápido, encuentran mochila con recursos.')
    inventary=inventary.concat(opA5_result);
    console.log(inventary);
}else if(res==='B'){
    console.log('CASO: Caminan mucho, cansancio general.');
    lives--;
    console.log('Vidas restantes: '+lives);
}else{
    console.log('ERROR, INSTRUCCION NO ENCONTRADA...REINICIA EL JUEGO');
}

console.log('A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.');
console.log();
console.log();
console.log('--------------FIN-----------------------------------------------------------------------------------------------------------');
console.log();

console.log('FIN DEL JUEGO...');
console.log('Estadisticas: ');

console.log('VIDAS: '+lives);
console.log('Miembros: '+members);
console.log('Inventario: '+inventary);

if (lives >= 3 && inventary.length >= 2 && inventary.includes('mapa')) {
    console.log("✅ ingresar al Túnel del Metro.");
} else {
    console.log("❌ No puedes entrar al metro, quedan atrapados en la ciudad.");
}





