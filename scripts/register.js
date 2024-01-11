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
let counter=0;

//object constructor (function)
function Pet(n,a,g,s,b){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.service = s;
    this.breed = b;
    this.id = counter++;
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
    if(isValid(newPet) == true){
        //push the object
        petSalon.pets.push(newPet);
        displayPetCards();
        $("input").val(""); //clear the inputs
        showNotification("notifications","alert-success","Registration was successful");
    }else{
        showNotification("notifications","alert-danger","Insert all the required fields");
    }

    //display the pets array on the console
}



function isValid(aPet){
    let validation = true;
    $("input").removeClass("bg-red");
    if(aPet.name==""){
        validation=false;
        $("#txtName").addClass("bg-red");
    }
    if(aPet.age==""){
        validation=false;
        $("#txtAge").addClass("bg-red");
    }
    return validation;
}

function showNotification(id,styling,message){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(300).delay(2000).slideUp(300);
}

function deletePet(petID){
    document.getElementById(petID).remove(); //remove from the HTML
    let indexDelete;
    for(i=0;i<petSalon.pets.length;i++){
        let selected = petSalon.pets[i];
        if(selected.id===petID){//getting the current pet
            indexDelete=i; //we found the pet from the array
        }
    }
    showNotification("notifications","alert-secondary","The pet " + petSalon.pets[indexDelete].name + " was deleted");

    petSalon.pets.splice(indexDelete,1); //remove from the array
}

function addServices(){
    let services = readArray();
    for(let i=0;i<services.length;i++){
        $("#txtService").append(`<option value="${services[i].description}">${services[i].description}</option>`)
    }
}


function init(){
    //create pets using the constructor
    let p1 = new Pet("Scooby",60,"Male","Hair Cut","Dane");
    let p2 = new Pet("Mora", 7,"Female", "Shower", "Chihuahua");
    let p3 = new Pet("Chilin", 3, "Male", "Nails Cut", "Pitbull");

    petSalon.pets.push(p1,p2,p3);
    displayPetCards();
    addServices();
    $("#notifications").hide();
}

window.onload = init; //waits until the window is loaded to execute the function




