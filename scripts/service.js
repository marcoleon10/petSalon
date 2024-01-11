let services=[];
let counter=0;
//creating the constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//create the register function
function register(){
    
    let inputDescription = $("#txtDescription").val();
    let inputPrices = $("#txtPrice").val();

    let newService = new Service(inputDescription,inputPrices);

    if(isValid(newService) == true){
        //push the object
        $("input").val(""); //clear the inputs
        saveArray(newService); //converting array into string and saving it 
    }

}

function isValid(aService){
    let validation = true;
    $("input").removeClass("bg-red");
    if(aService.description==""){
        validation=false;
        $("#txtDescription").addClass("bg-red");
    }
    if(aService.price==""){
        validation=false;
        $("#txtPrice").addClass("bg-red");
    }
    return validation;
}


//create the init function
function init(){
    //hook events
    let s1 = new Service("Grooming",20);
    services.push(s1);
    $("#btnRegister").on("click",register);
}

//wait for render the HTML
window.onload=init;