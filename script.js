// Write your JavaScript code here!


window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
       launchForm.addEventListener("submit", function(event){
        let pilot = document.querySelector("input[name=pilotName");
        let copilot = document.querySelector("input[name=copilotName");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoMass = document.querySelector("input[name=cargoMass");
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
        event.preventDefault();
       });
   

   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let destination;
       destination = pickPlanet(listedPlanets);
       addDestinationInfo(destination);
   });
   
   
   
});