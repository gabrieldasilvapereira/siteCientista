function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var saudação = window.document.getElementById('saudação')
    var div = document.getElementById('msg')
    //var hora = 2


    div.innerHTML = `<strong>Agora são ${hora} horas e ${minutos} minutos</strong>`

    
    if (hora >= 0 && hora < 12) {

        //bom dia
        saudação.innerHTML = 'BOM DIA!'
        

    } else if (hora >= 12 && hora <= 18) {

        //boa tarde
        saudação.innerHTML = 'BOA TARDE!'

    } else {
        //boa noite
        saudação.innerHTML = 'BOA NOITE!'

    }

}


function mostrarAlerta() {
    window.alert("QUANDO SOU PEGO AOS BEIJOS COM A FILHA DO SOGRÃO.");
}


//window.alert('Você está na página principal') 


