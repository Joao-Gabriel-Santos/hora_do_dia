function carregar() {
var p = window.document.getElementsByTagName('p')[0]
var img = window.document.getElementById('img')

//Recebendo o horario
var a = new Date()
var hora = a.getHours()

if (hora >= 6 && hora <= 11) {
    document.body.style.background = 'rgb(251, 228, 100)'
    p.innerHTML = 'Agora são ' + hora + " horas!!!"
    img.style.backgroundImage = 'url(img/manha.jpg)'
}
else if (hora > 11 && hora < 18) {
    document.body.style.background = 'rgb(116, 43, 16)'
    p.innerHTML = 'Agora são ' + hora + " horas!!!"
    img.style.backgroundImage = 'url(img/tarde.jpg)'
}
else {
    document.body.style.background = 'gray'
    p.innerHTML = 'Agora são ' + hora + " horas!!!"
    img.style.backgroundImage = 'url(img/noite.jpg)'
}
}