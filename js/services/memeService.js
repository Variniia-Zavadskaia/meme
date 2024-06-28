'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 0,
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
    const elImg = new Image()
    elImg.src = gImgs[gMeme.selectedImgId].url
    elImg.onload = () => {
        coverCanvasWithImg(elImg)
    }
}
function onSelectImg(gImgs) {
    coverCanvasWithImg(gImgs)
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
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
