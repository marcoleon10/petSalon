//object literal: creating the properties directly

let petSalon = {
    name: "The Fashion Pet",
    address: {
        street: "Av. Universidad",
        number: "7250",
        zip: "22900"
    },
    hours: {
        open: "9:00 am",
        close: "8:00 pm"
    },
    pets: []
}

//object constructor (function)
function Pet(n,a,g,s,b){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.service = s;
    this.breed = b;
}

function register(){
    //get values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;

    //creating the object
    let newPet = new Pet(inputName, inputAge, inputGender, inputService, inputBreed);

    //push the object
    petSalon.pets.push(newPet);

    //display the pets array on the console
    
}

//create pets using the constructor
//let p1 = new Pet("Scooby",60,"Male");
//let p2 = new Pet("Mora", 7,"Female");
//let p3 = new Pet("Chilin", 3, "Male");

//petSalon.pets.push(p1,p2,p3);


