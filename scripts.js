all = ['form', 'input', 'textarea', 'a', 'button', 'div', 'footer', 'h1', 'h2', 'header', 'hgroup', 'img', 'li',
    'main', 'nav', 'p', 'pre', 'section', 'ul']

function changeTheme() {
    if (sessionStorage.getItem('Theme') == 0) {
        themeLight()
    }
    else if (sessionStorage.getItem('Theme') == 1) {
        themeDark()
    }
}

function themeLight() {

    for (let i = 0; i < all.length; i++) {
        e = document.querySelectorAll(all[i])
        for (let j = 0; j < e.length; j++) {
            e[j].style.backgroundColor = 'azure'
            e[j].style.borderColor = 'black'
            e[j].style.color = 'black'
        }
    }
    sessionStorage.setItem('Theme', 0)
    document.querySelector('body').style.backgroundColor = 'gainsboro'
    try {
        document.querySelector('iframe').style.borderColor = 'black'
    }
    catch { }
}

function themeDark() {
    for (let i = 0; i < all.length; i++) {
        e = document.querySelectorAll(all[i])
        for (let j = 0; j < e.length; j++) {
            e[j].style.backgroundColor = '#222'
            e[j].style.borderColor = 'azure'
            e[j].style.color = 'azure'
        }
    }
    sessionStorage.setItem('Theme', 1)
    document.querySelector('body').style.backgroundColor = 'black'
    try {
        document.querySelector('iframe').style.borderColor = 'azure'
    }
    catch { }
}

function drag(e) {
    e.dataTransfer.setData('id', e.target.id)
}

function drop(e) {
    e.preventDefault()
    var data = e.dataTransfer.getData('id')
    document.getElementById('removeMe').remove()
    e.target.appendChild(document.getElementById(data))
    document.location.href = 'about.html'
}

function allowDrop(e) {
    e.preventDefault()
}