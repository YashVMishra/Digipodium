// use of Objects

const user = {
    name : "Yash",
    email : "yash@gmail.com",
    age: 25,
    password : "nadn"
}

console.log(user.email);
console.log(user['email']);
console.log(typeof user);

// adding value to the object
user.address = "Aliganj";

// overwrites the existing value.
user.age = 17;

console.log(user);
console.log("----------------------------");
console.log(user.age);

// using loop
for(let i of Object.keys(user)){

    // prints keys.
    console.log(i);
}

console.log("----------------------------");

for(let i of Object.values(user)){

    // prints values.
    console.log(i);
}

console.log("----------------------------");

for(let i of Object.entries(user)){

    // prints entries.
    console.log(i);
}

const laptop = [
    { brand : "HP", model : "Pavilion", prices : 50000, colors : ["black", "silver"] },
    { brand : "Lenovo", model : "Thinkpad", prices : 56000, colors : ["black"] },
    { brand : "HP", model : "Elitebook", prices : 60000, colors : ["black", "blue"] },
    { brand : "Asus", model : "Ultrabook", prices : 70000, colors : ["silver", "blue"] }
]

// syntax to get prices of ultrabook.
console.log(laptop[3].prices);

// syntax to replace silver colored with grey in ultrabook
laptop[3].colors[0] = "grey";
console.log(laptop[3].colors);

// syntax to print brand of all elements.
for(let i of laptop) {
    console.log(i.brand);
}

// syntax to filter laptops having price less than 70000.
console.log(laptop.filter((lap) => {return lap.prices < 70000}));

// syntax to filter laptops having black color.
console.log(laptop.filter((lap) => {return lap.colors.includes("black")}));