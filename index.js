const images = [{
        name: 'squirrel',
        src: "https://media.npr.org/assets/img/2018/10/10/ap_18255676439361_wide-21f8494854c9fd88cf6af6acf336bdfd46e0a9b0-s800-c85.jpg"
    },
    {
        name: 'rabbit',
        src: "https://media.newyorker.com/photos/5a8862150095ae7e55570156/master/w_727,c_limit/Mead-Peter-Rabbit.jpg"
    },
    {
        name: 'porcupine',
        src: "https://i.ytimg.com/vi/W4Z-Ehf4BDU/maxresdefault.jpg"
    }

]


function findAndAssignObjects() {
    for (let i = 0; i < images.length; i++) {

        const main = document.getElementById("searchField")
        const img = document.createElement("img")

        img.alt = images[i].name
        img.src = images[i].src

        img.style.height = "25%"
        img.style.position = "absolute"

        img.style.bottom = randomInt(0, 30) + "rem"
        img.style.left = randomInt(0, 60) + "rem"


        main.appendChild(img)







    }

}

function randomInt(a, b) {
    return Math.floor(Math.random() * b) + a

}

window.addEventListener("DOMContentLoaded", function() {
    findAndAssignObjects()

}, false);