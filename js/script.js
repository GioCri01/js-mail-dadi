/*
Mail
.1 Chiedi all’utente la sua email,
.2 controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
.3 stampa un messaggio appropriato sull’esito del controllo.
*/

const email = prompt("inserisci Email");
const autorizzati = ["ninogalba@gmail.it","dariolampa@hotmail.it","stefanodistefano@icloud.com"]
console.log(email);
console.log(autorizzati);

var emailTrovata = false;


for(i = 0 ; i < autorizzati.length ; i++){

   if(email === autorizzati[i]){
    emailTrovata = true;
   }
                     
       
            
}

if(emailTrovata == true){
    alert("Benvenuto")
}else {
    alert("Non sei autorizzato!")        
            
        }


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

let numeroGiocatore = Math.ceil(Math.random() * 6);
let numeroPc = Math.ceil(Math.random() * 6) ;
let text = `Numero Giocatore estratto : ${numeroGiocatore} Numero Pc estratto : ${numeroPc}`;
document.getElementById("estrazione").innerHTML += text;
const bottone = document.getElementById("gioca");
vsdx

bottone.addEventListener("click", function(){
    if(numeroGiocatore > numeroPc){
        document.getElementById("risultato").innerHTML += "Hai vinto"
        
    }else if(numeroGiocatore === numeroPc){
        document.getElementById("risultato").innerHTML += "Pareggio"
        
    
    }else if(numeroGiocatore < numeroPc){
        document.getElementById("risultato").innerHTML += "Hai perso"
        
    }

});



   
    
    




 
            
            
        


