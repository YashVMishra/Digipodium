// Add 10% discount to all laptop price. (use map)

const laptop = [
    { brand : "HP", model : "Pavilion", prices : 50000, colors : ["black", "silver"] },
    { brand : "Lenovo", model : "Thinkpad", prices : 56000, colors : ["black"] },
    { brand : "HP", model : "Elitebook", prices : 60000, colors : ["black", "blue"] },
    { brand : "Asus", model : "Ultrabook", prices : 70000, colors : ["silver", "blue"] }
]

console.log(laptop.map((lap) => { return lap.prices * 0.9}));