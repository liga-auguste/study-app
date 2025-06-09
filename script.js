let unitCounter = 3;
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
