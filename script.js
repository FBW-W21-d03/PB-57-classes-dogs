class hund {
    constructor(hundename, rasse, alter) {
      this.hundename = hundename;
      this.rasse = rasse;
      this.alter = alter;
    }
  };
  let hund1 = new hund ("Name","rasse", "alter" );
  let hund2 = new hund ("","","");
  let hund3 = new hund ("","","");

  const hunde = [hund1, hund2, hund3];
  console.log(hunde);