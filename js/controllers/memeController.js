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

    meme.lines.forEach((line, idx) => {
        var pos
        if (idx === 0) {
            pos = { x: gElCanvas.width / 2, y: gElCanvas.height * 0.07 }
        } else if (idx === 1) {
            pos = { x: gElCanvas.width / 2, y: gElCanvas.height * 0.93 }
        } else {
            pos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        }
        if (line.pos === null) {
            line.pos = { x, y }
        }

        drawLineTxt(line, idx === meme.selectedLineIdx)
    })

    document.getElementById('line-inp').value = meme.lines[meme.selectedLineIdx].txt
    // document.getElementById('icon-btn-fill').value = meme.lines[meme.selectedLineIdx].fillColor
    // document.getElementById('icon-btn-stroke').value = meme.lines[meme.selectedLineIdx].strokeColor
}

function renderImg(gImg) {
    gCtx.drawImage(gImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onAddLineTxt() {
    addLineTxt()
    renderMeme()
}

function onSwitchLineTxt() {
    switchLineTxt()
    renderMeme()
}

function onSetLineTxt() {
    const elLineTxtIn = document.getElementById('line-inp')
    const newLineTxt = elLineTxtIn.value

    setLineTxt(newLineTxt)
    renderMeme()
}

function onSetLineTxtFill() {
    const elChoiceClrFill = document.getElementById('icon-btn-fill')
    let fillColor = elChoiceClrFill.value

    setLineTxtFill(fillColor)
    renderMeme()
}

function onSetLineTxtStroke() {
    const elChoiceClrStroke = document.getElementById('icon-btn-stroke')
    let strokeColor = elChoiceClrStroke.value

    setLineTxtStroke(strokeColor)
    renderMeme()
}

function onLineTxtIncreaseFont() {
    lineTxtIncreaseFont()
    renderMeme()
}

function onLineTxtDecreaseFont() {
    lineTxtDecreaseFont()
    renderMeme()
}

function drawLineTxt(line, selected) {
    var height = line.size * 1.286
    var width
    var x = line.pos.x
    var y = line.pos.y

    gCtx.beginPath()

    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = line.size + 'px ' + 'Impact'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    width = gCtx.measureText(txt).width + 4
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
    if (selected) {
        gCtx.strokeStyle = 'black'
        gCtx.strokeRect(x - width / 2, y - height / 2, width, height)
    }
    return { width, height }
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
