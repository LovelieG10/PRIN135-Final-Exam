function add() {
  var titleInput = document.getElementById("titleInput");
  var title = titleInput.value;

  var detailsInput = document.getElementById("detailsInput");
  var details = detailsInput.value;

  if (title.trim() === "" || details.trim() === "") {
    alert("Please enter both title and details before adding.");
    return;
  }
  
  var titleList = document.getElementById("titleList");

  var listItem = document.createElement("li");
  listItem.textContent = `Title: ${title}, Details: ${details}`;

  titleList.appendChild(listItem);

  // Clear the input fields
  titleInput.value = "";
  detailsInput.value = "";
}

function fifo() {
  var titleList = document.getElementById("titleList");
    var detailsList = document.getElementById("detailsList");
    var duoList = document.getElementById("duoList");

    // Move each item from To Do to Done
    while (titleList.firstChild) {
      // Create a new list item for Done
      var doneListItem = document.createElement("li");
      doneListItem.textContent = titleList.firstChild.textContent;

      // Append the new Done item to the Done list
      duoList.appendChild(doneListItem);

      // Remove the item from To Do
      titleList.removeChild(titleList.firstChild);

      // Optionally, you can do the same for the details
      var doneDetailsItem = document.createElement("li");
      doneDetailsItem.textContent = detailsList.firstChild.textContent;
      duoList.appendChild(doneDetailsItem);
      detailsList.removeChild(detailsList.firstChild);
  }
}

function filo() {
  var titleList = document.getElementById("titleList");
  var detailsList = document.getElementById("detailsList");
  var duoList = document.getElementById("duoList");

  while (titleList.lastChild) {

    var doneListItem = document.createElement("li");
    doneListItem.textContent = titleList.lastChild.textContent;

    duoList.appendChild(doneListItem);

    titleList.removeChild(titleList.lastChild);

    var doneDetailsItem = document.createElement("li");
    doneDetailsItem.textContent = detailsList.lastChild.textContent;
    duoList.appendChild(doneDetailsItem);
    detailsList.removeChild(detailsList.lastChild);
  }
}

function reset() {
  var titleList = document.getElementById("titleList");
  var detailsList = document.getElementById("detailsList");
  var duoList = document.getElementById("duoList");
  
  titleList.innerHTML = "";
  detailsList.innerHTML = "";
  duoList.innerHTML = "";
}

function clearInput() {
  var titleInput = document.getElementById("titleInput");
  titleInput.value = "";

  var detailsInput = document.getElementById("detailsInput");
  detailsInput.value = "";
}

