//1. Crea un programa que imprima en consola los números impares del 1 al 50.
//bucle de repeticion
for (let indice = 1; indice <= 50; indice++){
    if (indice % 2 !== 0){// 1/2 = .5
        console.log(indice)//
    }
}
//3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

// contamos a partir de 0
let arreglo = [3, "Hola", true, 5 , 19, "Vanessa", false]

console.log("elementos numericos de mi arreglo:")

//lenght = a largo del arreglo
for (let i = 0; i < arreglo.length; i++){
    if(typeof arreglo[i] === "number"){
        console.log(arreglo[i]);
    }
}

//string
let arreglo2 = [3, "Hola", true, 5 , 19, "Vanessa", false]

console.log("elementos string de mi arreglo:")

//lenght = a largo del arreglo
for (let i = 0; i < arreglo.length; i++){
    if(typeof arreglo[i] === "string"){
        console.log(arreglo[i]);
    }
}
//Boolean
let arreglo3 = [3, "Hola", true, 5 , 19, "Vanessa", false]

console.log("elementos Boolean de mi arreglo:")

//lenght = a largo del arreglo
for (let i = 0; i < arreglo.length; i++){
    if(typeof arreglo[i] === "boolean"){
        console.log(arreglo[i]);
    }
}


//2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

let usuario =Number(prompt("Ingresa un número del 1 al 100") )
let pokemons =
[ 'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb' ]

    
    
    console.log(pokemons.length)

for(let i =1; i<usuario; i++){
    if(i%5 ==0){
        console.log(pokemons[i])
    }
}
