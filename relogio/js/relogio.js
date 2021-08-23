function showTime(){
    var date = new Date();
    var hora = date.getHours();
    var minuto = date.getMinutes();
    var segundo = date.getSeconds();
    var sessao = "AM"

    if(hora==0){
        hora=12;
    }

    if(hora>12){
        hora = hora - 12;
        sessao = "PM"
    }

    hora = (hora<10) ? "0" + hora : hora;
    minuto = (minuto<10) ? "0" + minuto : minuto;
    segundo = (segundo<10) ? "0" + segundo : segundo;

    var time = hora + ":" + minuto + ":" + segundo + " " + sessao;
    document.getElementById("relogio").innerHTML = time;
    document.getElementById("relogio").textContent = time;


    setTimeout(showTime, 1000);

}
showTime();