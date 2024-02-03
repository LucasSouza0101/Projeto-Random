function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)

    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if ( min >= max ) {
        alert("O Valor mínimo deve ser MENOR que o valor máximo")
    } else if ( min <= "" ) {
        alert("Insira um número no primeiro input!")
    }
    else {
    alert(result)
    }
}