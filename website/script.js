function carregar(){
    let msg = document.getElementById('msg')
    let photo = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if(hora >= 0 && hora <=12){
        //Bom dia
        img.src = "fotomanha.png"
        document.body.style.background = '#f3c89d'
    }else{
        if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = "fototarde.png"
        document.body.style.background = '#dc9078'
        }else{
            //Boa Noite
            img.src = "fotonoite.png"
            document.body.style.background = '#10111e'
        }
    }
}