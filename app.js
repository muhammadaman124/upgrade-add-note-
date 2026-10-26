
const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
const button = document.getElementById("addButton");

function addTask() {
  const word = input.value.trim();

  if (word === "") return;

  // Naya li element create karein
  const li = document.createElement("li");

  // Input ka word li mein add karein
  li.textContent = word;

  // Purani list ko remove kiye baghair naya word add karein
  ul.appendChild(li);

  // Sirf input clear hoga, list nahi
  input.value = "";
  input.focus();
}

button.addEventListener("click", addTask);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

li.textContent = word; 

li.addEventListener("click", function() {
  li.remove();
});

ul.appendChild(li);
