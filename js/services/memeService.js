'use strict'

var gImgNextId = 1

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [
    { id: gImgNextId++, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: gImgNextId++, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
    selectedImgId: 1,
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

function getImgs() {
    return gImgs
}

function getImgById(id) {
    return gImgs.find(img => img.id === id).url
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setLineTxt(txt) {
    gMeme.lines[selectedLineIdx].txt = txt
}
