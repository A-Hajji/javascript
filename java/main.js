// const personDiv = document.querySelector(".persons");
const carsDiv = document.querySelector(".cars")

// const person = {
//  firstname:"Adib",
//  lastname:"Hajji",
//  hobby:"voetbal",
// };

// const person1 = {
//     firstname:"Taiyab",
//     lastname:"Hussain",
//     hobby:"twerking",
// };

// const personsArray = [person, person1]

// for (let i = 0; i < personsArray.length; i++) {
//     const persons = personsArray[i];
    
//     personDiv.innerHTML += `<li>
//     ${persons.firstname}
//     ${persons.lastname}
    
//     </li>`
//     personDiv.innerHTML += `<li>
//     ${persons.hobby}
    
//     </li>`
// };

const cars = {
    brand: "audi",
    model: "rs7",
    buildyear: "2023",
    price: 206640,
};

const cars1 = {
    brand: "golf 8",
    model: "GTI",
    buildyear: "2023",
    price: 58210,
};
let total = 0;

const carsArray = [cars, cars1, ]

for (let i = 0; i < carsArray.length; i++) {
    const car = carsArray[i];

    carsDiv.innerHTML += `<div>
    
    <h1>merk:${car.brand}</h1>
    <h5>model:${car.model}</h5>
    <h5>buildyear:${car.buildyear}</h5>
    <h5>price:${car.price}</h5>
    </div>`
    
    total += car.price
};

 carsDiv.innerHTML += `<p> 
    <h1>price:${total} </h1>
 </p>`
