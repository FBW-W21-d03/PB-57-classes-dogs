class hund {
    constructor(hundename, rasse, alter) {
      this.hundename = hundename;
      this.rasse = rasse;
      this.alter = alter;
    }
    bellen(){
        console.log("Wuff! Wuff! Wuff!");
    }
}
  let hund1 = new hund ("Bello","Husky", "4" );
  let hund2 = new hund ("Bruno","Terrier","3");
  let hund3 = new hund ("Bratan","Pitbull","2");

  const hunde = [hund1, hund2, hund3];
  console.log(hunde);
hund1.bellen();
hund2.bellen();
hund3.bellen();