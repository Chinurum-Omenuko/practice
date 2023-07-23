var hamburger = document.getElementById("burger")
var menu = document.querySelector(".nav-menu")

const display = {
    show : 'display: block',
    hide : 'display: none'
}



function change(){
    let menuStyle = menu.getAttribute('style')
    let menuState = menuStyle == display.hide || !menu.hasAttribute('style') ? `${display.show}`:`${display.hide}`
    menu.setAttribute('style', menuState )

    // if(menuStyle == display.hide || !menu.hasAttribute('style')){
    //     menu.setAttribute('style', `${display.show}`)
    // }
    // else{
    //     menu.setAttribute('style', `${display.hide}`)
    // }

    
}


