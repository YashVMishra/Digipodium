// Create an array of full names and use map to keep only first name.(use split function)

const names = ["Yash Vardhan Mishra", "Akash Kumar", "Yashika Yadav", "Virendra Verma",
"Vibhash Dwivedi", "Utkarsh Sinha", "Vaibhav Srivastava"];

const newNames=names.map((p) => {return p.split(" ")[0]});
console.log(newNames);