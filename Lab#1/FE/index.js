function fetchEmployees() {
  fetch("http://localhost:3000/api/v1/employee")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataTable");
      tableBody.innerHTML = "";
      const list = data.data;
      list.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "del-btn");
        deleteButton.addEventListener("click", () => deleteEmployee(item.id));
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

// TODO
// add event listener to submit button
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  createEmployee();
});

// TODO
// add event listener to delete button
//! NOTE: I added it when creating the delete button in line 23

// TODO
function createEmployee() {
  // get data from input field
  // send data to BE
  // call fetchEmployees

  // 1. getting data from input field
  // 1.1 getting name
  const nameInput = document.querySelector("#name");
  const name = nameInput.value;
  // 1.2 getting id
  const idInput = document.querySelector("#id");
  const id = idInput.value;

  // 2. send data to BE
  fetch("http://localhost:3000/api/v1/employee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, id: id }),
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
    fetchEmployees();
    alert(res['message'])
  })
  .catch(e => console.log('Error: ' + e));
}

// TODO
async function deleteEmployee(id) {
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: "DELETE"
  }).then((_) => fetchEmployees());
    
  console.log(id);
}

fetchEmployees();
// createEmployee()
