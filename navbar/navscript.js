var hamburger = document.getElementById("burger")
var navmenu = document.querySelector(".nav-menu")

const options = {
    show : 'display: block',
    hide : 'display: none'
}


console.log("queries selected")



function change(){
    let style = navmenu.getAttribute('style')
    console.log(style)
    
    if(style == options.hide || null){
        navmenu.setAttribute('style', `${options.show}`)
        console.log(`style changed to: ${style}`)
    }
    else{
        navmenu.setAttribute('style', `${options.hide}`)
        console.log(`style changed to: ${style}`)
    }
    

    
}


