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
  lecturesData.forEach((lectureData) => {
    console.log(lectureData);
    const lectureSection = createLectureSection(lectureData);
    container.appendChild(lectureSection);
  });
}

function createLectureSection(data) {
    const section = document.createElement("section");
    section.innerHTML = data.title;
    return section;

}

renderLectures();
