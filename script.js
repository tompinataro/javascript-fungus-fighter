let ourAP = 150;
let fungusHP = 150;
let ourAPScore = document.querySelector('.ap-text');
let fungusHPScore = document.querySelector('.hp-text'); 
let enemyClasses = document.querySelector('.freaky-fungus');


function onReady() {
    console.log("Ready to go!")
    
    ourAPScore.textContent = `${ourAP} AP`;
    fungusHPScore.textContent = `${fungusHP} HP`;
}

onReady()


function scoreStateMinimum(event) {
event.preventDefault();
    if (ourAP < 0) {
        ourAP = 0;
        ourAPScore.textContent = `${ourAP} AP`;
    }
    if (fungusHP < 0) {
        fungusHP = 0;
        fungusHPScore.textContent = `${fungusHP} HP`;
    }
}
function handleArcaneClick(event) {
event.preventDefault();
ourAP = ourAP - 12;
fungusHP = fungusHP - 14;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleEntangleClick(event) {
event.preventDefault();
ourAP = ourAP - 23;
fungusHP = fungusHP - 9;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleDragonClick(event) {
event.preventDefault();
ourAP = ourAP - 38;
fungusHP = fungusHP - 47;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}

function handleStarClick(event) {
event.preventDefault();
ourAP = ourAP - 33;
fungusHP = fungusHP - 25;

ourAPScore.textContent = `${ourAP} AP`;
fungusHPScore.textContent = `${fungusHP} HP`;

}


