'use strict'

var gImgNextId = 1

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
    { id: gImgNextId++, url: 'img/1.jpg', keywords: ['funny', 'Trump'] },
    { id: gImgNextId++, url: 'img/2.jpg', keywords: ['cute', 'puppies'] },
    { id: gImgNextId++, url: 'img/3.jpg', keywords: ['cute', 'baby'] },
    { id: gImgNextId++, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: gImgNextId++, url: 'img/6.jpg', keywords: ['funny', 'man'] },
    { id: gImgNextId++, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
    { id: gImgNextId++, url: 'img/8.jpg', keywords: ['funny', 'man'] },
    { id: gImgNextId++, url: 'img/9.jpg', keywords: ['funny', 'baby'] },
    { id: gImgNextId++, url: 'img/10.jpg', keywords: ['funny', 'Obama'] },
    { id: gImgNextId++, url: 'img/11.jpg', keywords: ['funny', 'pair'] },
    { id: gImgNextId++, url: 'img/12.jpg', keywords: ['funny', 'man'] },
    { id: gImgNextId++, url: 'img/13.jpg', keywords: ['funny', 'DiCaprio'] },
    { id: gImgNextId++, url: 'img/14.jpg', keywords: ['funny', 'Morpheus'] },
    { id: gImgNextId++, url: 'img/15.jpg', keywords: ['funny', 'Boromir'] },
    { id: gImgNextId++, url: 'img/16.jpg', keywords: ['funny', 'man'] },
    { id: gImgNextId++, url: 'img/17.jpg', keywords: ['funny', 'Putin'] },
    { id: gImgNextId++, url: 'img/18.jpg', keywords: ['funny', 'pair'] },
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            fillColor: '#ffffff',
            strokeColor: '#000000',
        },
    ],
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function getImgById(id) {
    return gImgs.find(img => img.id === id).url
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setLineTxtIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
