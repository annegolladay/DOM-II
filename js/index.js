//Logo Heading Fun Bus
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', function (event) {
    event.target.style.color = ('teal');
});
debugger;
console.log(logo);

//Nav
const navLinks = document.querySelectorAll('nav > a');
navLinks.addEventListener('dblclick', function (event) {
    event.target.style.fontSize = '2.5rem';
});

// navLinks.forEach(function(link) {
//     link.addEventListener('mouseover', function (event) {
//         link.style.color = ('violet');
//     });
// });

//Images
//Intro (Bus in Sand Image)
const intro = document.querySelector('.intro');
intro.addEventListener('mouseover', function (event) {
    intro.style.backgroundColor = ('pink');
});
//Map Image
const mapImg = document.querySelector('.img-content img');

const adventureImg = document.querySelector('.content-section.inverse-content img');

const destinationImg = document.querySelector('.content-destination img');

//Welcome to Fun Bus Section
const welcomeTitle = doucment.querySelector('intro h2');
welcomeTitle.addEventListener('click', function (event) {
    if(welcomeTitle.style.textTransform !== 'uppercase') {
        welcomeTitle.style.textTransform = 'uppercase'
    } else {
        welcomeTitle.style.textTransform = 'lowercase'
    }
});

const welcomeText = document.querySelector('.intro p');
welcomeText.addEventListener('mouseleave', function (event) {
    event.target.style.fontSize = '2rem';
});


//Main Section
//Let's Go Section
//const letsGo = document.querySelector('.textContent');
const letsGo = document.querySelector('.text-content');
letsGo.addEventListener('mouseover', function (event) {
    letsGo.style.backgroundColor = ('red');
});

//Adventure Awaits Section
//const adventureAwaits = document.querySelector('.textContent');
const adventureAwaits = document.querySelector('.text-content:nth-of-type(2)');
adventureAwaits.addEventListener('mouseover', function (event) {
    adventureAwaits.style.backgroundColor = ('yellow');
});


//Pick Your Destination Section
const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('mouseover', function (event) {
    contentDestination.style.backgroundColor = ('blue');
});


//Bottom Section
//Fun in the Sun 
const funSun = document.querySelector('.destination:nth-of-type(1)');
funSun.addEventListener('mouseover', function (event) {
    funSun.style.backgroundColor = ('gray');
    funSun.style.borderRadius = ('4%');
});

//Mountain Excursion
const mountainExcursion = funSun.nextElementSibling;
mountainExcursion.addEventListener('mouseover', function (event) {
    mountainExcursion.style.backgroundColor = ('teal');
    mountainExcursion.style.borderRadius = ('4%');
    setTimeout(function() {
        mountainExcursion.style.backgroundColor = '';
        console.log('testing');
    }, 500);
}, false);

//Island Getaway
const islandGetaway = mountainExcursion.nextElementSibling;
islandGetaway.addEventListener('mouseover', function(event) {
    islandGetaway.style.backgroundColor = ('orange');
    islandGetaway.style.borderRadius = ('4%');
    setTimeout(function() {
        islandGetaway.style.backgroundColor = '';
    }, 500);
}, false);

//Sign Up Button
const signMeUpButton = document.querySelectorAll('.btn');
