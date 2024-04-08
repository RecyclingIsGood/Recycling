// flipping cards

const Options = document.querySelectorAll("#whyOptions > div > div, #howOptions > div > div, #forOptions > div > div, #chooseCard>div>div")
const forms = document.querySelectorAll('#formGeneral, #formPWHS')


for (let i = 0; i < Options.length; i++) {
    Options[i].addEventListener("click", function () {
        if (Options[i].classList.contains('front')) {
            Options[i].style.transform = 'rotateY(180deg)';
            Options[i + 1].style.transform = 'rotateY(360deg)';
        }
        else if (Options[i].classList.contains('back')) {
            Options[i].style.transform = 'rotateY(180deg)'
            Options[i - 1].style.transform = 'rotateY(360deg)'
        }

        if (Options[i].classList.contains('switch')) {
            if (Options[i].classList.contains('front')) {
                forms[1].style.display = 'flex'
                forms[0].style.display = 'none'

            }
            else if (Options[i].classList.contains('back')) {
                forms[0].style.display = 'flex'
                forms[1].style.display = 'none'

            }
        }
    })
}

// menu icon eventlistener to container

const menuIcon = document.querySelector('.menuIcon')
const menuDiv = document.querySelector('#dropdown')
const openMenu = document.querySelector('#openMenu')
// Keep track of timeout IDs
var timeoutIds = [];
// Function to create a timeout and add its ID to the array
function createTimeout(func, delay) {
    var timeoutId = setTimeout(func, delay);
    timeoutIds.push(timeoutId);
}

// Function to clear all timeouts
function clearAllTimeouts() {
    timeoutIds.forEach(function (timeoutId) {
        clearTimeout(timeoutId);
    });
    timeoutIds = []; // Clear the array
}

menuDiv.addEventListener("click", function () {
    clearAllTimeouts()
    if (menuIcon.classList.contains('change')) {
        // already open
        menuIcon.classList.remove('change')
        menuIcon.style.opacity = '0'
        menuIcon.src = 'pictures/menu-burger.png'
        menuIcon.style.opacity = '1'
        openMenu.style.opacity = '0'
        createTimeout(function () {
            openMenu.style.display = 'none'
        }, 600)
    }


    else if (menuIcon.classList.contains('change') === false) {

        menuIcon.style.opacity = '0'
        menuIcon.classList.add('change')
        menuIcon.src = 'pictures/cross.png'
        menuIcon.style.opacity = '1'


        openMenu.style.display = 'inline'
        createTimeout(function () {
            openMenu.style.opacity = '1'
        }, 10)

    }

})

// scrolling title change

const title = document.querySelector('h1')

function isNearTop(element, lower, upper) {
    var rect = element.getBoundingClientRect();
    var elementTop = rect.top;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var distanceFromTop = Math.abs(elementTop);
    var lowerLimit = windowHeight * (lower / 100); // Calculate threshold based on percentage
    var upperLimit = windowHeight * (upper / 100);
    return distanceFromTop <= lowerLimit && distanceFromTop >= upperLimit
}

const subTitles = document.querySelectorAll('.myH2')

window.addEventListener('scroll', function () {
    if (isNearTop(subTitles[0], 50, 9)) {
        title.textContent = 'Why Recycle?'
    }
    else if (isNearTop(subTitles[1], 50, 9)) {
        title.textContent = 'How to Recycle?'
    }
    else if (isNearTop(subTitles[2], 50, 9)) {
        title.textContent = 'More Information:'
    }
    else if (isNearTop(subTitles[3], 50, 9)) {
        title.textContent = 'Take our Survey!'
    }
})


// moving survey
const formButton = document.querySelector('#formHeader')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}




setInterval(function () {
    formButton.classList.add("moving");

    setTimeout(function () {
        formButton.classList.remove("moving")

    }, 1000)
}, getRandomInt(5000, 15000))

// menu when clicked on also change title without scrolling

const menuLinks = document.querySelectorAll(".menuLinks")

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        title.textContent = menuLinks[i].textContent
    })
}


console.log('version 1.16')