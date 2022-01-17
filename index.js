// 1 )
class Hunde {
    constructor(name,rasse,alter) {
      this.HundeName = name;
      this.Rasse =rasse;
      this.Alter= alter;
     
    }
    HundBellen(){
        console.log("Wuff! Wuff! Wuff!");
    }};

    // 2 )

    let hund_1 = new Hunde ("BenneFox","Dobermann",5);
    let hund_2 = new Hunde ("Hurdy","Deutsche Schäferhund",3);
    let hund_3 = new Hunde ("BradPit","Greyhound ",2);
    
    // 3 )
    const alleHunde = [];
    let hunde =alleHunde.push(hund_1,hund_2,hund_3);
    console.log(alleHunde);

    hund_1.HundBellen();
    hund_2.HundBellen();
    hund_3.HundBellen();
    
 