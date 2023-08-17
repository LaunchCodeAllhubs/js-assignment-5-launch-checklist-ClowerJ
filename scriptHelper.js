// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}
// validate user input to test if user has provided a string and return an appropriate reponse for value given
function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty'
    } else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number'
    } else {
        return 'Not a Number'
    }
}
//runs user input information form through for validation
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let launchstatus = document.getElementById('launchStatus');
   let cargoStatus = document.getElementById('cargostatus');
   

   //validates to make sure submission fields have been filled out
    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || 
    validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert('Launch will not commence until all fields have been submitted correctly.');
    }

    //validates pilot and copilot are string values and fuelLevel and cargoLevel are integer

    else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
        alert('Pilot names cannot include integers.');
    }else if (validateInput(cargoLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Not a Number'){
        alert('Fuel and Cargo levels must be entered as integers');
    }

    //accept pilot and copilot status and report
    else {pilotStatus.innerHTML = `Pilot ${pilot} is READY`;
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is READY`;
    list.style.visibility = 'hidden';

    }

    //validate fuel levels for and update the faultyItems and make list visible with launch status indicators

    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = 'Not enough fuel to complete mission.';
        list.style.visibility = 'visible';
        launchstatus.innerHTML = 'Shuttle not ready for launch.';
        launchstatus.style.color = '#C7254E';

    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = 'Too much cargo to takeoff';
        list.style.visibility = 'visible';
        launchstatus.innerHTML = 'Shuttle not ready for launch';
        launchstatus.style.color = '#C7254E';
    
    } else if (Number(fuelLevel) > 10000 && Number(cargoLevel) < 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level acceptable for mission';
        cargoStatus.innerHTML = 'Cargo level acceptable for mission.';
        launchstatus.innerHTML = 'Shuttle prepared for Launch';
        launchstatus.style.color = '#419F6A';
        
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
