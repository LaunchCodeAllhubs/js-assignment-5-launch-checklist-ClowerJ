// Write your JavaScript code here!

window.addEventListener("load", function () {
    /*|*/
    const form = document.querySelector("form");
    let list = document.getElementById('faultyItems');
    list.style.visiblity = 'hidden';
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //initialize values based on user input and store values 25.9.3
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        

        //calling formSubmission function to take user values and run them through for validation
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })

    /*|*/

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        let planetPicked = pickPlanet(listedPlanets);


        /*  let name = planets.name;
          let diameter = planets.diameter;
          let star = planets.star;
          let distance = planets.distance;
          let imageUrl = planets.image;
          let moons = planets.moons;
   */
        addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);


    })

});