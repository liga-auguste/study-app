let unitCounter = 3;

const data = [
  {
    title: "Einheit 1",
    terms: [
      "Tonraum „Oktave“",
      "Konsonanz und Dissonanz",
      "Komplementärintervalle",
      "Liedanfänge",
      "Intervalle von bestimmten Tönen aufbauen",
    ],
    tasks: [
      "Intervalle von bestimmten Tönen aufbauen",
      "Intervallreihe tonal in zwei andere Tonarten übertragen",
      "Tabelle mit Liedanfängen vervollständigen",
    ],
    pdfHomework: [],
  },
  {
    title: "Einheit 2",
    terms: ["Referenzintervalle", "Liedanfänge", "Konsequente Bezeichnung"],
    tasks: [
      "Intervalle von bestimmten Tönen aufbauen",
      "Intervalle bezeichnen",
      "Intervallreihe tonal",
    ],
    pdfHomework: [],
  },
  {
    title: "Einheit 3",
    terms: [
      "Bezeichnung der Tonhöhen",
      "Oktavennamen",
      "Alterationen",
      "Notation: Schlüssel",
      "Vorzeichen",
      "Halsrichtung",
    ],
    tasks: [
      "Fehler der Notation erkennen, benennen",
      "Töne entsprechend der Bezeichnung notieren",
      "Intervalle ↑↓ aufbauen",
      "Hans-Peter Braun: Musiklehre (s. 310–316 lesen)",
    ],
    pdfHomework: [],
  },
];

function generateLecture() {
  const container = document.getElementById("lectures-container");

  const section = document.createElement("section");
  section.className = "lecture";

  const heading = document.createElement("h2");
  heading.textContent = `Einheit ${unitCounter}`;

  section.appendChild(heading);
  container.appendChild(section);

  unitCounter++;
}

function addListItem(containerId, listCategory = "text") {
  const container = document.getElementById(containerId);
  const nicename = listCategory.charAt(0).toUpperCase() + listCategory.slice(1);

  // Neues Listenelement
  const li = document.createElement("li");

  // Wrapper für Input + Button
  const itemWrapper = document.createElement("div");
  itemWrapper.className = "input-wrapper";

  // Eingabefeld
  const input = document.createElement("input");
  input.type = "text";
  input.name = `${listCategory}`;
  input.className = `${listCategory}-input longInput`;
  input.placeholder = `Bitte ${nicename} eingeben`;

  // Entfernen-Button
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "✕";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = function () {
    container.removeChild(li);
  };

  // Elemente zusammensetzen
  itemWrapper.appendChild(input);
  itemWrapper.appendChild(removeBtn);
  li.appendChild(itemWrapper);
  container.appendChild(li);
}

addListItem("inhalt-list", "begriff");
addListItem("tasks:list", "aufgabe");

// function addListItem(listId) {
//   const ul = document.getElementById(listId);
//   const li = document.createElement("li");
//   const input = document.createElement("input");
//   input.type = "text";
//   input.className = "form-inline longInput";
//   input.value = listId === "inhalt-list" ? "Neuer Begriff" : "Neue Aufgabe";
//   input.onfocus = function () {
//     this.value = "";
//   };
//   li.appendChild(input);
//   ul.appendChild(li);
// }

// function speichern() {
//   const inhaltInputs = document.querySelectorAll("#inhalt-list input");
//   const aufgabenInputs = document.querySelectorAll("#tasks:list input");

//   const inhalte = Array.from(inhaltInputs)
//     .map((input) => input.value.trim())
//     .filter(Boolean);
//   const tasks:= Array.from(aufgabenInputs)
//     .map((input) => input.value.trim())
//     .filter(Boolean);

//   const daten = {
//     inhalte,
//     tasks:
//   };

//   // In sessionStorage speichern
//   sessionStorage.setItem("lectureData", JSON.stringify(daten));
//   alert("Daten gespeichert!");
// }

// // Beim Laden: gespeicherte Daten wieder einfügen
// window.onload = function () {
//   const gespeicherteDaten = sessionStorage.getItem("lectureData");
//   if (!gespeicherteDaten) return;

//   const { inhalte, tasks:} = JSON.parse(gespeicherteDaten);

//   const inhaltList = document.getElementById("inhalt-list");
//   const aufgabenList = document.getElementById("tasks:list");

//   inhaltList.innerHTML = "";
//   aufgabenList.innerHTML = "";

//   inhalte.forEach((text) => {
//     const li = document.createElement("li");
//     const input = document.createElement("input");
//     input.type = "text";
//     input.className = "form-inline longInput";
//     input.value = text;
//     input.onfocus = function () {
//       this.value = "";
//     };
//     li.appendChild(input);
//     inhaltList.appendChild(li);
//   });

//   tasks:forEach((text) => {
//     const li = document.createElement("li");
//     const input = document.createElement("input");
//     input.type = "text";
//     input.className = "form-inline longInput";
//     input.value = text;
//     input.onfocus = function () {
//       this.value = "";
//     };
//     li.appendChild(input);
//     aufgabenList.appendChild(li);
//   });
// };
