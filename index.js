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
};
// 2 )
let hund_1 = new Hunde ("Max","Haski",3);
let hund_2 = new Hunde ("Bella","havaneser",5);
let hund_3 = new Hunde ( "Alx","Haare rasse",2);
// 3 )
const hunde = [hund_1,hund_2,hund_3];
console.log(hunde);
hund_1.HundBellen();
hund_2.HundBellen();
hund_3.HundBellen();