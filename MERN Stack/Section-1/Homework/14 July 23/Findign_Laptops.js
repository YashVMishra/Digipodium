// Filter all the laptop having price more than 40000 and 60000 (use filter)

const laptop = [
    { brand : "HP", model : "Pavilion", prices : 50000, colors : ["black", "silver"] },
    { brand : "Lenovo", model : "Thinkpad", prices : 56000, colors : ["black"] },
    { brand : "HP", model : "Elitebook", prices : 60000, colors : ["black", "blue"] },
    { brand : "Asus", model : "Ultrabook", prices : 70000, colors : ["silver", "blue"] }
]

console.log(laptop.filter((lap) => { return (lap.prices > 40000 && lap.prices < 60000)}));