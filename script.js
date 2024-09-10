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