// Find the sum of all laptop prices.

const laptop = [
    { brand : "HP", model : "Pavilion", prices : 50000, colors : ["black", "silver"] },
    { brand : "Lenovo", model : "Thinkpad", prices : 56000, colors : ["black"] },
    { brand : "HP", model : "Elitebook", prices : 60000, colors : ["black", "blue"] },
    { brand : "Asus", model : "Ultrabook", prices : 70000, colors : ["silver", "blue"] }
]

let sum = 0;
for(lap of laptop) {
    sum = sum + lap.prices;
}

console.log(sum);