'use strict'
var gElCanvas
var gCtx
var gImg = null

function onOpenEditor(meme = null) {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'block'

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()

    meme = getMeme()
    gImg = new Image()
    gImg.src = getImgById(meme.selectedImgId)
    gImg.onload = () => renderMeme()

    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    renderImg(gImg)
    

    drawLineTxt(meme.lines[meme.selectedLineIdx], gElCanvas.width * 0.5, gElCanvas.height * 0.1)
    document.getElementById('line-inp').value = meme.lines[meme.selectedLineIdx].txt
}

function renderImg(gImg) {
    gCtx.drawImage(gImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onSetLineTxt() {
    const elLineTxtIn = document.getElementById('line-inp')
    const newLineTxt = elLineTxtIn.value

    console.log('dsds')
    console.log(newLineTxt)

    setLineTxt(newLineTxt)
    renderMeme()
}

function drawLineTxt(line, x, y) {
    gCtx.beginPath()

    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle =  line.fillColor
    gCtx.font = line.size + 'px ' + 'Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}
