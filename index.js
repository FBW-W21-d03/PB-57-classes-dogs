// 1 )
class Hunde{
    constructor(Hundename,Rasse,Alter,){
    this.hundeName = Hundename; 
    this.hundeRasse = Rasse;
    this.hundeAlter =Alter;
}
HundBellen(){
    console.log("Wuff! Wuff! Wuff!");
}
hundFütern(){
    console.log("Füttere den Hund um 14 Uhr");   
}
hundSpazieren(){
    console.log("Ich gehe um 16 Uhr mit dem Hund spazieren");
}
};
// 2 )
let hund_1 = new Hunde ("Max","Haski",3);
let hund_2 = new Hunde ("Bella","havaneser",5);
let hund_3 = new Hunde ( "Alx","Haare rasse",2);
// 3 )
const alleHunde = [];
let hunde =alleHunde.push(hund_1,hund_2,hund_3)
console.log(alleHunde
    );
hund_1.HundBellen();
hund_2.HundBellen();
hund_3.HundBellen();

hund_1.hundFütern();
hund_2.hundFütern();
hund_3.hundFütern();

hund_1.hundSpazieren();
hund_2.hundSpazieren();
hund_3.hundSpazieren();