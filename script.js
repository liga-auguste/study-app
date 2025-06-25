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

function addListItem(containerId) {
  const container = document.getElementById(containerId);

  // Neues Listenelement
  const li = document.createElement("li");

  // Wrapper für Input + Button
  const itemWrapper = document.createElement("div");
  itemWrapper.className = "input-wrapper";

  // Eingabefeld
  const input = document.createElement("input");
  input.type = "text";
  input.name = "begriffe[]";
  input.className = "begriff-input longInput";

  // Optional: Input beim Fokus leeren
  input.onfocus = function () {
    this.value = '';
  };

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

