const lecturesData = [
  {
    title: "Modul 1",
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
    pdfHomework: [{ file: "Aufgabe-Einheit01.pdf", label: "Aufgabenblatt 1" }],
  },
  {
    title: "Modul 2",
    terms: ["Referenzintervalle", "Liedanfänge", "Konsequente Bezeichnung"],
    tasks: [
      "Intervalle von bestimmten Tönen aufbauen",
      "Intervalle bezeichnen",
      "Intervallreihe tonal",
    ],
    pdfHomework: [{ file: "Aufgabe-Einheit02.pdf", label: "Aufgabenblatt 2" }],
  },
  {
    title: "Modul 3",
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
    pdfHomework: [{ file: "Aufgabe-Einheit03.pdf", label: "Aufgabenblatt 3" }],
  },
];

function renderLectures() {
  const container = document.getElementById("lectures-container");
  // console.log(container);
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
  unitHeading.textContent = `Modul ${unitNumber}`;
  unitHeading.className = "sectionHeading";

  const termList = document.createElement("ul");
  lectureData.terms.forEach((term) => {
    const termListItem = document.createElement("li");
    termListItem.textContent = term;
    termList.appendChild(termListItem);
  });

  const taskHeading = document.createElement("h3");
  taskHeading.textContent = "Hausaufgabe";

  const taskList = document.createElement("ul");
  lectureData.tasks.forEach((task) => {
    const taskListItem = document.createElement("li");
    taskListItem.textContent = task;
    taskList.appendChild(taskListItem);
  });

  const pdfHeading = document.createElement("h3");
  pdfHeading.textContent = "PDFs & Aufgaben";

  const linkList = document.createElement("div");
  linkList.className = "link-container";

  if (lectureData.pdfHomework.length > 0) {
    lectureData.pdfHomework.forEach((file) => {
      const openLink = document.createElement("a");
      openLink.href = file.file;
      openLink.target = "_blank";

      const openButton = document.createElement("button");
      openButton.textContent = `Hausaufgabe ${unitNumber} öffnen`;
      openLink.appendChild(openButton);

      const downloadLink = document.createElement("a");
      downloadLink.href = file.file;
      downloadLink.download = "";

      const downloadButton = document.createElement("button");
      downloadButton.textContent = `Aufgabenblatt ${unitNumber} herunterladen`;
      downloadLink.appendChild(downloadButton);
      linkList.appendChild(openLink);
      linkList.appendChild(downloadLink);
    });
  }

  section.appendChild(unitHeading);
  section.appendChild(termList);
  section.appendChild(taskHeading);
  section.appendChild(taskList);
  section.appendChild(pdfHeading);
  section.appendChild(linkList);

  return section;
}

const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#dialog');
const closeBtn = document.querySelector('#close-modal');

openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());

// Darkmode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('themeSwitch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active')
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if(darkmode === "active") enableDarkmode(); 

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
// <-- Darkmode

renderLectures();

