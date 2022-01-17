class Dogs {
    constructor(dogsName, breed, old){
    this.Hund_Name = dogsName;
    this.Rasse = breed;
    this.Alter = old;
    }
    bellaen() {
    console.log("Wuff! Wuff! Wuff!")
}
};

let firstDog = new Dogs("Baron", "American Buldog", "6 Jahre alt");
let secondDog = new Dogs("Bella", "German Shepherd", "16 Jahre alt");
let thirdDog = new Dogs("Polar", "Husky", "2 Jahre alt");




console.log(firstDog);
firstDog.bellaen();
console.log(secondDog);
secondDog.bellaen();
console.log(thirdDog);
thirdDog.bellaen();
