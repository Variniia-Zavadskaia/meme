'use strict'
var gElCanvas
var gCtx

function onOpenEditor() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'block'
    // document.querySelector('.saved').style.display = 'none'
    renderMeme()
}

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    getMeme()
    drawImg()
    drawLine('Drawing text!', gElCanvas.width * 0.5, gElCanvas.height * 0.1)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth
    renderMeme()
}
