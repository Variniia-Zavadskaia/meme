'use strict'
var gElCanvas
var gCtx

function onOpenEditor() {
    document.querySelector('.galery').style.display = 'none'
    document.querySelector('.editor').style.display = 'block'
    // document.querySelector('.saved').style.display = 'none'
    renderMeme()
}

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    getMeme()
    resizeCanvas() 
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    drawLine('Drawing text!',0, 0, gElCanvas.width, gElCanvas.height)
}