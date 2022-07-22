let username = "" ;
username = prompt() ;
console.log(username) ;

const onyaziEl = document.querySelector(".onyazi") ; 
onyaziEl.innerHTML = `Merhaba, ${username} Saat ve Tarih Bilgilendirme Sayfasına Hoş Geldiniz! Burada bulabileceğiniz bilgilendirmeler 
saat ve tarih bilgileridir.`
onyaziEl.classList += " text-info"



const saatEl = document.querySelector("#saat") ;

showTime();

function showTime() {
    let today= new Date().toLocaleTimeString();
    saatEl.innerHTML =  today ;
    setTimeout(showTime, 1000);
}

const tarihEl = document.querySelector("#tarih") ;


function tarih() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    tarihEl.innerHTML = today
    setTimeout(tarih, 1000*60*60*24);
}

tarih();