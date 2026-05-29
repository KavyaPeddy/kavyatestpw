// class Chiranjeevi {
//     screenName: string;
//     constructor(screenName: string) {
//         this.screenName = screenName;

//     }
//     displayS(): void {
//         console.log("The screen name of the actor is: " + this.screenName);
//     }   
//     const chiru = new Chiranjeevi("Megastar");
//     chiru.display();
// }


class nagarjuna {
    constructor() {
        console.log("This is the constructor of the class Nagarjuna.");
    }
    property1(): void {
        console.log("Tpropert1 is a method of the class Nagarjuna.");
    }
}
class chaithanya extends nagarjuna {

    property1(): void {
        console.log("propert2 is a method of the class chaithanya.");
    }
}

const chai = new chaithanya();
chai.property1();

