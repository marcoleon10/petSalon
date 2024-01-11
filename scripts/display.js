function displayPetCards(){
    const DIV = document.getElementById("pets");
    const DIV2 = document.getElementById("pets2");
    let card="";
    let slider="";
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
        `;
        console.log(pet.breed);
        if(pet.breed=='Dane'){
            slider+=`
            <li class="card">
                <div class="img"><img src="./imgs/dane.jpg" alt="img" draggable="false"></div>
                <h2>Name: ${pet.name}</h2>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Service: ${pet.service}</p>
                
            </li>`;
        }
        if(pet.breed=="Chihuahua"){
            slider+=`
            <li class="card">
                <div class="img"><img src="./imgs/chihuahua.jpg" alt="img" draggable="false"></div>
                <h2>Name: ${pet.name}</h2>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Service: ${pet.service}</p>
                
            </li>`;
        }
        if(pet.breed=="Pitbull"){
            slider+=`
            <li class="card">
                <div class="img"><img src="./imgs/perrito.jpg" alt="img" draggable="false"></div>
                <h2>Name: ${pet.name}</h2>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Service: ${pet.service}</p>
                
            </li>`;
        }
        
        
    }

    DIV.innerHTML=card;
    DIV2.innerHTML=slider;

    
    //insert the HTML template into register.html
}