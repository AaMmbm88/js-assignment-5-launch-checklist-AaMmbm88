// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(destination) {
   // Here is the HTML formatting for our mission target div.
   let missionTargetDiv = document.getElementById("missionTarget");
   missionTargetDiv.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${destination.name}</li>
                   <li>Diameter: ${destination.diameter}</li>
                   <li>Star: ${destination.star}</li>
                   <li>Distance from Earth: ${destination.distance}</li>
                   <li>Number of Moons: ${destination.moons}</li>
               </ol>
               <img src="${destination.image}">
               ` 
};

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
// }

function validateInput(testInput) {

    if (testInput.value === ""){
                    return "Empty"
                }else if (!isNaN(parseInt(testInput.value))){
                    return "Is a Number";
                }else{
                    return "Not a Number";
                };    
}
//    let launchForm = document.getElementById("launchForm");
//    launchForm.addEventListener("submit", function(event){
    // let pilotName = document.querySelector("input[name=pilotName");
    // let copilotName = document.querySelector("input[name=copilotName");
    // let fuelLevel = document.querySelector("input[name=fuelLevel");
    // let cargoMass = document.querySelector("input[name=cargoMass");
    // let formInputArray = [pilotName, copilotName, fuelLevel, cargoMass]
    // for (let i=0; i<formInputArray.length; i++){
//         if (testInput === ""){
//             alert("All fields are required!");
//             event.preventDefault();
//             return "Empty"
//         }else if (!isNaN(parseInt(testInput))){
//             return "Is a Number";
//         }else{
//             return "Not a Number";
//         };    
//    });
// };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    if (validateInput(pilot) === "Not a Number"){
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value}: Ready`;
    }else{
        alert("Please enter name of pilot.");
        document.getElementById("pilotStatus").innerHTML = `Enter name of pilot.`;
        event.preventDefault();
    };
    if (validateInput(copilot) === "Not a Number"){
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot.value}: Ready`;
    }else{
        alert("Please enter name of Co-Pilot.");
        document.getElementById("pilotStatus").innerHTML = `Enter name of co-pilot.`;
        event.preventDefault();   
    };
    if (validateInput(fuelLevel) === "Is a Number"){
        if(parseInt(fuelLevel.value) < 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey. Please fill to at least 10,000L.`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
            document.getElementById("launchStatus").style.color = "red";
            event.preventDefault();
        };
        }else{
            alert("Please enter fuel level as a number.")
            event.preventDefault();
        };   

    if (validateInput(cargoMass) === "Is a Number"){
        if (parseInt(cargoMass.value) > 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = `There is too much mass for the journey. Please lower cargo weight to less than 10,000 kg.`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch.`;
            document.getElementById("launchStatus").style.color = "red";
            event.preventDefault();
        };
        }else{
            alert("Please enter cargo mass as a number.")
            event.preventDefault();
    };      
        if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && parseInt(fuelLevel.value) >= 10000 && validateInput(cargoMass) === "Is a Number" && parseInt(cargoMass.value) <= 10000){
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";      
    };
};

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         console.log(response.json())

//         });

//     return planetsReturned = response.json();
// }

// function pickPlanet(planets) {
// }

async function myFetch() {
    let json = [];
    let planets = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        json = response.json
        });
    return json
};

function pickPlanet(planets) {
        let planetsIndex = Math.floor(Math.random()*planets.length);
        return planets[planetsIndex];
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
