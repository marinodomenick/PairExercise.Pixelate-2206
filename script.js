// Your code here
const table = document.getElementsByTagName(`table`)[0];

function makeRow() {
  const row = document.createElement(`tr`);
  for (let i = 0; i < 5; i++) {
    const td = document.createElement(`td`);
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();
makeRow();
makeRow();

const addButton = document.getElementById(`add-row`);
addButton.addEventListener(`click`, makeRow);
