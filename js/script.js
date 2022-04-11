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

   
    
    




 
            
            
        


