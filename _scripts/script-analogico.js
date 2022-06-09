var agora;

function mostrarHora (){

    agora = new Date();
    var hr = agora.getHours();
    var min = agora.getMinutes();
    var seg = agora.getSeconds();
    var mil = agora.getMilliseconds();

    var ponteiroHora = hr * 30 + min/2;
    var ponteiroMinuto = min * 6 + (seg*6)/60;
    var ponteiroSegundo = seg * 6 + mil/166;

    hora.style.transform = "rotate(" + ponteiroHora + "deg)";
    minuto.style.transform = "rotate(" + ponteiroMinuto + "deg)";
    segundo.style.transform = "rotate(" + ponteiroSegundo + "deg)";

}
var intervalo = setInterval(mostrarHora, 1);





var intervalo2;

function setDoisDigitos(tempo2) {
    if(tempo2<10){
        return "0" + tempo2;
    } else {
        return tempo2;
    }
}



function mostrarHora2(){
    agora1 = new Date();
    var hora1 = setDoisDigitos(agora1.getHours());
    var minuto1 = setDoisDigitos(agora1.getMinutes());
    var segundo1 = setDoisDigitos(agora1.getSeconds());

    relogio2.innerHTML = hora1 + ":" + minuto1 +  ":" + segundo1;
}

function iniciar2 (){
    intervalo2 = setInterval(mostrarHora2, 1000)




}



window.onload = iniciar2;