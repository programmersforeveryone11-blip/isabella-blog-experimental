const pages=document.querySelectorAll('.page');
let currentPage=0;
const totalPages=pages.length;

// Ajustamos el z-index inicial para que las páginas estén en orden
pages.forEach((page, index)=> {
        page.style.zIndex=totalPages - index;
    });

function autoFlip() {
    if (currentPage < totalPages) {
        // Pasa la página actual
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }

    else {

        // Si llegó al final, espera un poco y reinicia el libro
        setTimeout(()=> {
                pages.forEach((page, index)=> {
                        page.classList.remove('flipped');
                        // Restaurar z-index original
                        page.style.zIndex=totalPages - index;
                    });
                currentPage=0;
            }

            , 2000); // Pausa de 2 seg al final antes de reiniciar
    }
}

// Ejecutar cada 3 segundos (3000ms)
setInterval(autoFlip, 3000);