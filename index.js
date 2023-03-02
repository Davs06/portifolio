let clickHabilidades = document.querySelector('.habilidades-content-img')


clickHabilidades.addEventListener("click", (e) => {

    let aparece = document.querySelector('.aparecer')
    let aparece1 = document.querySelector('.aparecer1')

    switch (clickHabilidades) {

        case document.querySelector('.habilidades-html'):
            if (aparece.style.display === 'block') {

                aparece.style.display = "none"
            } else {
                aparece.style.display = "block"

            } break;

        case document.querySelector('.habilidades-css'):
            if (aparece1.style.display === 'block') {

                aparece1.style.display = "none"
            } else {
                aparece1.style.display = "block"

            } break;

    }


    e.preventDefault()
})