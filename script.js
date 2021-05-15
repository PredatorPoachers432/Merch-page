////////// Toggle for mobile navigation /////////////

let menu = document.querySelector('.nav-link')

function toggleMenu() {

    if (menu.style.display === 'inline-block') {
        menu.style = 'none'
    } else {
        menu.style.display = 'inline-block'
    }
}

let menuLinks = document.querySelectorAll('#menuLink')
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', toggleMenu)
})

///////// end of toggle navigation ////////////






///////////// Construct Pop up //////////////

// function closeConstPopUp() {
//     document.querySelector('.construct-pop-up').style.display = 'none'
// }

///////////// End of construct Pop up ////////////// 




////////// Social media links ////////////////

function facebookLink(){
    window.open('https://www.facebook.com/Predatorpoachers432/', '_blank')
}

function youtubeLink(){
    window.open('https://www.youtube.com/channel/UCkKpoORVsBSScBbRGLbmfZQ', '_blank')
}

function githubLink(){
    window.open('https://github.com/PredatorPoachers432', '_blank')
}

////////// Social media links ////////////////
