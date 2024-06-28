'use strict'

function renderGallery() {
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.editor').style.display = 'none'

    const elGallery = document.querySelector('.gallery')

    
}

function onSelectImg(gImgs) {
    coverCanvasWithImg(gImgs)
}