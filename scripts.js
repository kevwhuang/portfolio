function themeLoad() {

    if (sessionStorage.getItem('Theme') == 0) {
        themeLight()
    }
    else if (sessionStorage.getItem('Theme') == 1) {
        themeDark()
    }

}

function themeLight() {

    sessionStorage.setItem('Theme', 0)

    ele = document.getElementsByClassName('xt')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.backgroundColor = 'white'
        ele[i].style.borderColor = 'black'
        ele[i].style.color = 'black'
    }

    ele = document.querySelectorAll('hr')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.backgroundColor = 'steelblue'
    }

    ele = document.querySelectorAll('h2')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.color = 'steelblue'
    }

    ele = document.getElementsByClassName('accent')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.color = '#464BB4'
    }

    try {
        document.querySelector('iframe').style.borderColor = 'steelblue'
    }
    catch { }

    document.querySelector('body').style.backgroundColor = 'gainsboro'

}

function themeDark() {

    sessionStorage.setItem('Theme', 1)

    ele = document.getElementsByClassName('xt')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.backgroundColor = '#222'
        ele[i].style.borderColor = 'white'
        ele[i].style.color = 'white'
    }

    ele = document.querySelectorAll('hr')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.backgroundColor = 'slateblue'
    }

    ele = document.querySelectorAll('h2')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.color = 'slateblue'
    }

    ele = document.getElementsByClassName('accent')
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.color = '#5A84CD'
    }

    try {
        document.querySelector('iframe').style.borderColor = 'slateblue'
    }
    catch { }

    document.querySelector('body').style.backgroundColor = 'black'

}

function drop() {

    document.getElementById('removeText').remove()
    document.getElementById('removeImage').remove()

    p = document.createElement('p')
    p.classList.add('xt')
    p.textContent = 'Loading...'
    document.getElementById('addText').appendChild(p)

    img = new Image(512, 512)
    img.classList.add('xt')
    img.src = 'assets/index-padlock-unlocked.png'
    document.getElementById('addImage').appendChild(img)

    themeLoad()
    setTimeout(function () { document.location.href = 'about.html' }, 2000)

}

function allowDrop(ele) {

    ele.preventDefault()

}