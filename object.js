let car = {
    mark: "volvo",
    model: "ripHonda",
    year: 2018
}

console.log(car.mark);
// console.log(car["mark"]);

let thisYear = 2025;

if(car.year + 10 > thisYear){
    console.log("car is not 10 years old");
} else{
    console.log("car an old hag fr");
}
