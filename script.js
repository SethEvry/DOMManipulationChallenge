const btnContainer = document.querySelector(".btn-container");
const container = document.querySelector(".container");

//initialize timeout variable.
let timeoutId = 0;

//makes url with random doggo
const generateUrl = () => {
  const random = Math.floor(Math.random()*1000);

  return "url(https://placedog.net/" + random+")";

}

//checks how many cells are in each row and ands a row full of cells.
const addRows = () => {

  const row = document.createElement("tr");
  row.className = "row";

  const table = document.querySelector(".table");
  const size = table.querySelector(".row").children.length || 0;

  for (let i = 0; i < size; i++) {
    data = document.createElement("td");
    data.className = "data";

    const random = Math.floor(Math.random()*1000);
        data.style.backgroundImage = generateUrl();

    row.appendChild(data);
  }
  table.appendChild(row);
};

//finds all rows and iterates through each adding a cell
const addColumns = () => {

    const table = document.querySelector(".table");
    const rows = table.querySelectorAll(".row");

    for(let row of rows){

        const data = document.createElement('td');
        data.className="data";

        const random = Math.floor(Math.random()*1000);
        data.style.backgroundImage = generateUrl();
        row.appendChild(data);
    }
};

//clears table and creates a new one
const resetSize = () => {
    btnContainer.innerHTML = '';
    container.innerHTML = '';
    createTable(2,2)};

//if a timeout call is running, clears it, otherwise starts a 5 second countdown to refresh page
const reloadPage = (e) => {
    if(timeoutId){
        clearTimeout(timeoutId);
        timeoutId = 0;
        e.target.textContent = "Refresh";
        console.log("canceled reload!");
    }else{
        console.log("reloading!");
        e.target.textContent = "Cancel";
        timeoutId = setTimeout(()=>{
            window.location.reload();
        }, 5000);
    }
};

//initializes a table and control buttons
const createTable = (rows, columns) => {
  const btn1 = document.createElement("button");
  btn1.textContent = "Add Row";
  btn1.addEventListener("click", addRows);

  const btn2 = document.createElement("button");
  btn2.textContent = "Add Column";
  btn2.addEventListener("click", addColumns);

  const btn3 = document.createElement("button");
  btn3.textContent = "Reset";
  btn3.addEventListener("click", resetSize);

  const btn4 = document.createElement("button");
  btn4.textContent = "Refresh";
  btn4.addEventListener("click", reloadPage);

  const table = document.createElement("table");
  table.className = "table";

  //creates x number of rows
  for (let i = 0; i < rows; i++) {

    const row = document.createElement("tr");
    row.className = "row";

    //creates y number of cells and appends each to the row
    for (let j = 0; j < columns; j++) {

      const data = document.createElement("td");
      data.className = "data";

      data.style.backgroundImage = generateUrl();

      row.appendChild(data);
    }
    table.appendChild(row);
  }
  btnContainer.appendChild(btn1);
  btnContainer.appendChild(btn2);
  btnContainer.appendChild(btn3);
  btnContainer.appendChild(btn4);
  container.appendChild(table);
};

//creates table 5 seconds after page loads
setTimeout(() => createTable(2, 2), 5000);
