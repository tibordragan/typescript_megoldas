//1. feladat
function DiakInfo(nev: string, csoport: number, tipus: boolean) {
    let eredmeny: String = nev;
    eredmeny += " [Team" + csoport + "]";
    if (tipus) {
        eredmeny += " - Junior Frontend";
    }
    else {
        eredmeny += " - Webprogramozó";
    }
    return eredmeny;
}
console.log(DiakInfo("Minta Márton", 8, true));

//2.feladat
function SzovegesErtekeles(jegy: number) {
    let tuple: [string, string];
    if (jegy == 5) {
        tuple = ["Példás", "Példás"];
        return tuple;
    }
    else if (jegy == 4) {
        tuple = ["Jó", "Jó"];
        return tuple;
    }
    else if (jegy == 3) {
        tuple = ["Változó", "Változó"];
        return tuple;
    }
    else if (jegy == 2) {
        tuple = ["Hanyag", "Rossz"];
        return tuple;
    }
    else { return "Hibás számot adott meg"; }
}
let tupleeredmeny = SzovegesErtekeles(3);
console.log(tupleeredmeny[0] + ", " + tupleeredmeny[1]);

//3. feladat
function HarommalOszthatokSzama(tomb: number[]) {
    let eredmeny: number = 0;
    for (let i: number = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            eredmeny++;
        }
    }
    return eredmeny;
}
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));

//4. feladat
function Nyeroszamok(mennyiseg: number, alsohatar: number, felsohatar: number) {
    let generaltszamok: number[] = [];
    for (let i = 0; i < mennyiseg; i++) {
        let generalt: number = Math.round(Math.random() * (felsohatar - alsohatar) + alsohatar)
        if (!generaltszamok.includes(generalt)) {
            generaltszamok.push(generalt);
        }
    }
    return generaltszamok;
}
console.log(Nyeroszamok(5, 1, 90));