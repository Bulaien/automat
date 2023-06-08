
const auswahl = document.getElementById('auswahl')
let fach
const ausgabe = document.getElementById('ausgabe')
let buttons = document.querySelectorAll('.buttons')
let btnFaecher = document.querySelectorAll('.btnFaecher')
let service = document.getElementById('service')
let guthaben = 0.00
let zweiEuro = document.getElementById('zwei_euro')
let einEuro = document.getElementById('ein_euro')
let fuenfzigCent = document.getElementById('fuenfzig_cent')
let zwanzigCent = document.getElementById('zwanzig_cent')
let zehnCent = document.getElementById('zehn_cent')

let guthabenAusgabe = document.getElementById('guthaben_ausgabe')
zweiEuro.addEventListener('click', () => {
    guthaben += 2.00

    guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
})
einEuro.addEventListener('click', () => {
    guthaben += 1.00

    guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
})
fuenfzigCent.addEventListener('click', () => {
    guthaben += 0.50

    guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
})
zwanzigCent.addEventListener('click', () => {
    guthaben += 0.20

    guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
})
zehnCent.addEventListener('click', () => {
    guthaben += 0.10

    guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
})

function geldeinwurf() {

}



let enter = document.getElementById('ENTER')
fach = [
    {
        Fach: 0,
        Sorte: 'Snickers',
        Preis: '1.20',
        vorhanden: 5
    },
    {
        Fach: 1,
        Sorte: 'MARS',
        Preis: '1.20',
        vorhanden: 8
    },
    {
        Fach: 2,
        Sorte: 'RAIDER',
        Preis: '1.20',
        vorhanden: 2
    },
    {
        Fach: 3,
        Sorte: 'TWIX',
        Preis: '1.20',
        vorhanden: 4
    },
    {
        Fach: 4,
        Sorte: 'Cannabis',
        Preis: '12',
        vorhanden: 2
    },
    {
        Fach: 5,
        Sorte: 'vorgedrehte \'Tüte\'',
        Preis: '11.20',
        vorhanden: 1
    },
    {
        Fach: 6,
        Sorte: 'Joghurt Erdbeere',
        Preis: '0.70',
        vorhanden: 4
    },
    {
        Fach: 7,
        Sorte: 'Joghurt Lassagne',
        Preis: '1.40',
        vorhanden: 3
    },
    {
        Fach: 8,
        Sorte: 'Käsebrot',
        Preis: '1.30',
        vorhanden: 6
    },
    {
        Fach: 9,
        Sorte: 'Wurstsemmel',
        Preis: '1.50',
        vorhanden: 4
    },
    {
        Fach: 10,
        Sorte: 'Kakao',
        Preis: '1.10',
        vorhanden: 3
    },
    {
        Fach: 11,
        Sorte: 'Kaffe schwarze Füß',
        Preis: '1.00',
        vorhanden: 8
    },
    {
        Fach: 12,
        Sorte: 'Rothändle ohne Filter',
        Preis: '4.80',
        vorhanden: 8
    },
    {
        Fach: 13,
        Sorte: 'Nutellabrot',
        Preis: '1.20',
        vorhanden: 8
    },
    {
        Fach: 14,
        Sorte: 'Tüte Otternasen',
        Preis: '2.20',
        vorhanden: 2
    },
    {
        Fach: 15,
        Sorte: 'Lerchenzungen',
        Preis: '3.20',
        vorhanden: 1
    },
    {
        Fach: 16,
        Sorte: 'eingelegte Lerchenzungen',
        Preis: '1.20',
        vorhanden: 8
    }


]
let faecherfuellen = document.querySelectorAll('.p_button')

for (let i = 0; i < faecherfuellen.length; i++) {

    faecherfuellen[i].innerHTML = `Nummer ${fach[i + 1].Fach}<br> ${fach[i].Sorte}<br>€${fach[i].Preis}<br>noch ${fach[i].vorhanden}`
}

orderButtonClicked()



function orderButtonClicked() {

    for (let i = 0; i < faecherfuellen.length; i++) {
        handler = function () {
            console.log(guthaben)
          

            if(guthaben >= fach[i].Preis){
                if (fach[i].vorhanden < 1) {
                    faecherfuellen[i].innerHTML = `AUSVERKAUFT`
    
                    auswahl.innerHTML = `<br><br>${fach[i].Sorte} ist leider ausverkauft`
                    return
                }
                }
                else {
                    auswahl.innerHTML=`Sie haben gewählt:<br>Fach: ${fach[i + 1].Fach}<br>Produkt: ${fach[i].Sorte}<br>Preis: ${fach[i].Preis}<br>Bitte ${(fach[i].Preis - guthaben).toFixed(2)} einwerfen`
                    return
                }
                
                auswahl.innerHTML = `Sie haben gewählt:<br>Fach: ${fach[i + 1].Fach}<br>Produkt: ${fach[i].Sorte}<br>Preis: ${fach[i].Preis}<br><br>Vielen Dank für Ihren Einkauf.<br>Bitte entnehmen Sie ${fach[i].Sorte} aus dem Ausgabefach`
            fach[i].vorhanden = fach[i].vorhanden - 1
            if (fach[i].vorhanden < 1) {
                faecherfuellen[i].innerHTML = `AUSVERKAUFT`

               
                
            }
            
            else {
                faecherfuellen[i].innerHTML = `Nummer ${fach[i + 1].Fach}<br> ${fach[i].Sorte}<br>€${fach[i].Preis}<br>noch ${fach[i].vorhanden}`
            }

            
            
            guthaben = guthaben - fach[i].Preis
            guthabenAusgabe.innerText = `Ihr Guthaben beträgt: € ${guthaben.toFixed(2)}`
        }
       
            btnFaecher[i].addEventListener('click', handler)
            
        
    }



}
function someotherfunction(i) {
    console.log("jawoll")
    auswahl.innerHTML = `Sie haben gewählt:<br>Fach: ${fach[i + 1].Fach}<br>Produkt: ${fach[i].Sorte}<br>Preis: ${fach[i].Preis}<br><br>Leider reicht ihr Guthaben nicht aus!`
    
}










auswahl.value = 0


