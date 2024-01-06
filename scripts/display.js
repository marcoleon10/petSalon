function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array (for)
    for(i=0;i<petSalon.pets.length;i++){
        //create  the HTML template
        let pet = petSalon.pets[i];
        card+=`
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
            <td> <button onclick="deletePet(${pet.id})">🗑️</button> </td>
        </tr>
        `
        
    }

    DIV.innerHTML=card;

    
    //insert the HTML template into register.html
}