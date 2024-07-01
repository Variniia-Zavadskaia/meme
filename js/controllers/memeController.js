'use strict'
var gElCanvas
var gCtx
var gImg = null
var gDrag = false
var gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

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
    addListeners()
    // renderMeme()
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
            line.pos = pos
        }

        line.dimentions = drawLineTxt(line, idx === meme.selectedLineIdx)
    })

    document.getElementById('line-inp').value = meme.lines[meme.selectedLineIdx].txt
    document.getElementById('icon-btn-fill').value = meme.lines[meme.selectedLineIdx].fillColor
    document.getElementById('icon-btn-stroke').value = meme.lines[meme.selectedLineIdx].strokeColor
    document.getElementById('font-size').value = meme.lines[meme.selectedLineIdx].size
    document.getElementById('font-family').value = meme.lines[meme.selectedLineIdx].font
}

function renderImg(gImg) {
    gCtx.drawImage(gImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onAddLineTxt() {
    addLineTxt()
    renderMeme()
}

function onDeleteLineTxt(){
    deleteLineTxt()
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

function onChangeFontFamily(){
    const elFont = document.getElementById('font-family')
    let font = elFont.value 

    changeFontFamily(font) 
    renderMeme()
}

function onChangeFontSize(){
    const elFont = document.getElementById('font-size')
    let size = elFont.value 

    changeFontSize(size)
    renderMeme()
}

function onDown(ev) {
    console.log('onDown')
    const pos = getEvPos(ev)
    const currIdx = findLineTxtIdxCliked(pos)
    console.log(pos, currIdx)
    if (currIdx === -1) return
    setLineTxtIdx(currIdx)
    renderMeme()

    gDrag = true
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    if (!gDrag) return

    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y

    moveLineTxt(dx, dy)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    gDrag = false
    document.body.style.cursor = 'auto'
}

function onKeyDown(event) {
    if (document.querySelector('.editor').style.display === 'none') return
    console.log(event.code)
    switch (event.code) {
        case 'ArrowLeft':
            moveLineTxt(-3, 0)
            break
        case 'ArrowRight':
            moveLineTxt(3, 0)
            break
        case 'ArrowUp':
            moveLineTxt(0, -3)
            break
        case 'ArrowDown':
            moveLineTxt(0, 3)
            break

        default:
            return null
    }
    renderMeme()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()

    window.addEventListener('resize', () => {
        resizeCanvas()
        const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        renderMeme()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function drawLineTxt(line, selected) {
    var height = line.size * 1.1
    var width
    var x = line.pos.x
    var y = line.pos.y

    gCtx.beginPath()

    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor
    gCtx.font = line.size + 'px ' + line.font
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    width = gCtx.measureText(line.txt).width + 8
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
