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

const select = document.getElementsByTagName(`select`)[0];

let crayon = 'red'
function change (event){crayon = event.target.value}
select.addEventListener(`change`, change)


  // const value = event.target.value
//   if (target.className){
//     target.className = ''

//   } else {
//     target.className = '';
//   }
//   console.log (event.target.value)
  // }





table.addEventListener('click', colorize)

function colorize (event) {
  const target = event.target
  if (target.className){
    target.className = "";
  } else {
    target.className = crayon
  }console.log("clicked!")
  }


 

