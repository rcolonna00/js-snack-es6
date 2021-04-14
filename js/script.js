// 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack
// const let
const biciclette = [
    {
        'nome': 'nome1',
        'peso': 10
    },
    {
        'nome': 'nome2',
        'peso': 8
    },
    {
        'nome': 'nome3',
        'peso': 7
    },
    {
        'nome': 'nome4',
        'peso': 10
    },
    {
        'nome': 'nome5',
        'peso': 11
    },
]

const [ bici1, bici2, bici3, bici4, bici5] = biciclette;

let biciPiuLeggera = bici1;

for ( let i = 0; i < biciclette.length; i++ ) {
    let bicicletteI = biciclette[i];
    
    if ( bicicletteI.peso < biciPiuLeggera.peso ) {
        biciPiuLeggera = bicicletteI;
    };
};
console.log(biciPiuLeggera)

const caratteristicheBici = `
    <ul>
        <li>la bici più leggera è la ${biciPiuLeggera.nome}</li>
        <li>e pesa ${biciPiuLeggera.peso} kg</li>
    </ul>
`;

document.getElementById('bici').innerHTML = caratteristicheBici;

// 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli
// subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli 
// subiti e stampiamo tutto in console.
