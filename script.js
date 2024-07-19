const randomize = () => {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const resultado = document.querySelector('.resultado')

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    resultado.style.opacity = 0;
    resultado.style.filter = 'blur(10px)';
    resultado.innerText = '';



    if (min >= max) {
        setTimeout(() => {
            resultado.innerHTML = `<div class="invalid">!<br><span style="font-weight: lighter; font-size: smaller;">Sequência Inválida</span></div>`;
            resultado.style.textAlign = 'center';
            setTimeout(() => {
                resultado.style.opacity = 1;
                resultado.style.filter = 'blur(0px)';
            }, 0);
        }, 600);
    } else {
        setTimeout(() => {
            resultado.innerText = result;
            setTimeout(() => {
                resultado.style.opacity = 1;
                resultado.style.filter = 'blur(0px)';
            }, 0);
        }, 600);
    }
}
