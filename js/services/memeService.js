'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red',
        },
    ],
}

function getMeme() {
    return gMeme
}

function drawImg() {
    gImgs = new Image()
    gImgs.url = 'imgs/1.jpg'
    // elImg.src = 'img/wide.jpg'
    // elImg.src = 'img/tall.jpg'
    gImgs.onload = () => {
        gCtx.drawImage(gImgs, 0, 0, gImgs.naturalWidth, gImgs.naturalHeight)
    }
}
function onSelectImg(gImgs) {
    coverCanvasWithImg(gImgs)
}
function coverCanvasWithImg(gImgs) {
    gElCanvas.height = (gImgs.naturalHeight / gImgs.naturalWidth) * gElCanvas.width
    gCtx.drawImage(gImgs, 0, 0, gElCanvas.width, gElCanvas.height)
}
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    //* Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth - 2
    renderImg()
}
function renderImg(src = 'img/square.jpg') {
    const elImg = new Image()
    elImg.src = src
    coverCanvasWithImg(elImg)
}
function drawLine(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}



function onDraw(ev) {
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    const { offsetX, offsetY } = ev
    // console.log('offsetX, offsetY:', offsetX, offsetY)

    switch (gCurrShape) {
        case 'text':
            drawText('Hello', offsetX, offsetY)
            break
    }
}

function getCanvasCenter() {
    return {
        x: gElCanvas.width / 2,
        y: gElCanvas.height / 2
    }
}