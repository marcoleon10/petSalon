function saveArray(item){
    let anArray = readArray();
    anArray.push(item);
    let st = JSON.stringify(anArray); //convert the array into a string
    localStorage.setItem("services",st); //save the string into local storage
}

function readArray(){
    console.log(localStorage.getItem("services"));
    let ser = JSON.parse(localStorage.getItem("services")); //convert the string back into an array
    if(ser == null){
        ser = [];
    }
    return ser;
}