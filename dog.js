class Dog {
  constructor(name, rasse, age, Color, Gender) {
    this.HundeName = name;
    this.Rasse = rasse;
    this.Alter = age;
    this.Color = Color;
    this.Gender = Gender;
  }
  bellen() {
    console.log("Wuff! Wuff! Wuff!");
  }
}
let dog1 =  new Dog("Mr Dips", "American Bully XXl","3 Jahre","Brindel","Male");
let dog2 =  new Dog("Amira", "American Bully Standart","2,8 Jahre","Lilac Tri","Female");
let dog3 =  new Dog("Gelato","American Bully Classic","2,9 Jahre","Blue Merle","Female");



console.log(dog1);
console.log(dog2);
console.log(dog3);


dog1.bellen("Mr Dips");
dog2.bellen("Amira");
dog3.bellen("Gelato");




