/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function kontrollerTall(tall) {
  if (tall % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}
console.log(kontrollerTall(6));
console.log(kontrollerTall(3));

//ARROW function Partall - oddetall
const kontrollerTallArrow = (tall) => {
  return tall % 2 === 0 ? "Partall" : "Oddetall";
};

console.log(kontrollerTallArrow(3));
console.log(kontrollerTallArrow(8));

//funkjson som henter input og viser resultat

function sjekk() {
  const tall = document.getElementById("tallInput").value;
  const resultatTekst = kontrollerTallArrow(tall);
  document.getElementById("resultat").textContent =
    "Tallet " + tall + " er et " + resultatTekst;
}
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

function capsLock(tekst) {
  return tekst.toUpperCase() + "!";
}
console.log(capsLock("dette er kult"));
console.log(capsLock("jeg liker is"));
console.log(capsLock("kodehode er så kjekt"));
// Arrow function
const capsLockArrow = (tekst) => tekst.toUpperCase();
const capsLow = (tekst) => tekst.toLowerCase();

console.log(capsLockArrow("jeg liker deg arrow funksjon"));
console.log(capsLow("JEG ER VELDIG MORSOM"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

function helloFriend(navn, time) {
  if (time === undefined) {
    return "feil: Ingen timeverdi motatt";
  }

  if (time < 0 || time > 23) {
    return "ugyldig tid";
  }

  if (time >= 0 && time <= 5) {
    return "God natt " + navn;
  } else if (time >= 6 && time <= 11) {
    return "God morgen " + navn;
  } else if (time >= 12 && time <= 17) {
    return "God dag " + navn;
  } else {
    return "God kveld " + navn;
  }
}

console.log(helloFriend("Therese", 16));
console.log(helloFriend("Ironman", 1));
console.log(helloFriend("Batman", 19));
console.log(helloFriend("Medusa", 7));
console.log(helloFriend("Hulk", 24));

// Arrow function

const helloArrow = (forNavn, tid) => {
  if (tid === undefined) return "Feil: Ingen timeverdi mottatt.";
  if (tid < 0 || tid > 23) return "Ugyldig tid";
  if (tid <= 5) return `God natt ${forNavn}`;
  if (tid <= 11) return `God Morgen ${forNavn}`;
  if (tid <= 17) return `God dag ${forNavn}`;
  return `God kveld ${forNavn}`;
};

console.log(helloArrow("Tess", 6));
console.log(helloArrow("Liam", 12));
console.log(helloArrow("Shrek", 18));
console.log(helloArrow("Batman", 24));
console.log(helloArrow("Spiderman"));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

function ytterPunkter(arr) {
  if (arr.length <= 2) {
    return [];
  }
  return arr.slice(1, arr.length - 1);
}

console.log(ytterPunkter(["rød", "blå", "Lilla", "Oransje", "grønn"]));
console.log(ytterPunkter([1, 2, 3, 4, 5, 6]));

const fjernYtterPunkter = (heis) => (heis.length <= 2 ? [] : heis.slice(1, -1));

console.log(fjernYtterPunkter(["rød", "Grønn", "Blå", "Gul"]));
console.log(fjernYtterPunkter(["En", "To", "Tre", "Fire", "Fem", "Seks"]));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

function erstattOrdet(ord) {
  let ryddet = ord.trim();
  let oppdatert = ryddet.replace("vanskelig", "gøy");
  return oppdatert;
}

console.log(erstattOrdet("  Javaskript er vanskelig  "));
console.log(erstattOrdet("  Det er vanskelig å bruke metoder  "));
console.log(erstattOrdet("   vanskelig   "));

const erstattOrdetArrow = (word) =>
  word.trim().replace("kjedelig", "spennende");

console.log(erstattOrdetArrow("Kodehode er kjedelig "));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
//1
const firstItems = items.shift();
console.log(items);

//2
const itemsViskelær = items.indexOf("Viskelær");
if (itemsViskelær !== -1) {
  items[itemsViskelær] = "Linjal";
}

//3
items.splice(0, 2, "Markeringspenn");
console.log(items);

//4
const kombinert = items.join(" | ");
console.log(kombinert);

//5
const medE = items.filter((item) => item.toLowerCase().includes("e"));

console.log(medE);
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her




//Noe vi øvde på i timen
function isPalindrome(word) {
  const baklengs = word.split("").reverse().join("");
  if (word === baklengs) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}

console.log(isPalindrome("racecar")); // Racecar is a palindrome
console.log(isPalindrome("banana")); // Banana is not a palindrome
