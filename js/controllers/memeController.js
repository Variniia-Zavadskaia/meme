'use strict'
var gElCanvas
var gCtx
var gImg = null

function onOpenEditor() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'block'
    
    getMeme()

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas() 

    gImg = new Image()
    gImg.src = gImgs[gMeme.selectedImgId].url
    gImg.onload = () => renderMeme()

    renderMeme()

}


function renderMeme() {
    const meme = getMeme()
    renderImg(gImg) 
   
    drawLineTxt(meme.selectedLineIdx, gElCanvas.width * 0.5, gElCanvas.height * 0.1)
    document.getElementById('line-inp').value = meme.lines[meme.selectedLineIdx].txt
}

function renderImg(gImg) {
    gCtx.drawImage(gImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawLineTxt(line, x, y) {
    var txt = line.txt
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}
