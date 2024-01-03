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
    pets: [
        {
            name: "Lucas",
            age: 80,
            gender:"Male",
            service:"Grooming"
        },
        {
            name: "Scooby",
            age: 70,
            gender:"Male",
            service:"Nail cut"
        },
        {
            name: "Tweety",
            age: 79,
            gender:"Male",
            service:"Vaccine"
        }
    ]
}

console.log(petSalon);
console.table(petSalon.pets);

console.log(petSalon.pets[0].name);
