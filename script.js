const lecturesData = [
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

function renderLectures() {
  const container = document.getElementById("lectures-container");
  console.log(container);
  container.innerHTML = "";
  let unitNumber = 1;
  lecturesData.forEach((lectureData) => {
    const lectureSection = createLectureSection(lectureData, unitNumber);
    container.appendChild(lectureSection);
    unitNumber++;
  });
}


function createLectureSection(lectureData, unitNumber) {
  const section = document.createElement("section");
  // section.innerHTML = data.title;
  section.className = "lecture";

  const unitHeading = document.createElement("h2");
  unitHeading.textContent = `Einheit ${unitNumber}`;

  section.appendChild(unitHeading);
  return section;
}

renderLectures();
