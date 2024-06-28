'use strict'

function renderGallery() {
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.editor').style.display = 'none'

    const imgs = getImgs()
    const elGallery = document.querySelector('.gallery-container')

    const strHTMLs = imgs.map(img =>{
        return `<div class="img-card">
                    <img src="${img.url}" onclick="onImgSelect(${img.id})" />
                </div>`
    })

    elGallery.innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    onOpenEditor()
}