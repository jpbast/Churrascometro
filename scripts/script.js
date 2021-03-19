function calcula() {
    let adulto = Number(document.getElementById("input1").value)
    let crianca = Number(document.getElementById("input2").value)
    let duracao = Number(document.getElementById("input3").value)
    let p1 = document.getElementById("carne") 
    let p2 = document.getElementById("cerveja")
    let p3 = document.getElementById("refri")    
    let bebida
    let refri

    if (isValid(adulto, crianca, duracao)) {
        if (duracao > 5) {
            carne = adulto*0.625 + crianca*0.325
            bebida = adulto*6
            refri = adulto + crianca
        } else {
            carne = adulto*0.4 + crianca*0.2
            bebida = adulto*4
            refri = adulto + crianca
        }
        p1.innerText = carne.toFixed(2).toString() + " Kg de carne"
        p2.innerText = bebida.toString() + " latas de cerveja"
        p3.innerText = refri.toString() + " pets 2l de refrigerante"
    } else
        alert("Insira apenas valores maiores ou iguais a zero!")
}

function isValid(adulto, crianca, duracao) {
    if (adulto >= 0 && crianca >= 0 && duracao >= 0)
        return true
    else
        return false
}