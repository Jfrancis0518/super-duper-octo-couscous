// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// save schedule locally
function saveSchedule() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }
  
  function handleTextareaChange(event) {
    var textarea = event.target;
    var timeBlockId = textarea.parentNode.id;
    var eventText = textarea.value;
  // save the comments
    schedule[timeBlockId] = eventText;
    saveSchedule();
  }
  
  function handleSaveButtonClick(event) {
    var saveButton = event.target;
    var timeBlockId = saveButton.parentNode.id;
    var eventText = saveButton.parentNode.querySelector(".description").value;
  
    schedule[timeBlockId] = eventText;
    saveSchedule();
  }
  
  function populateTimeBlocks() {
    var timeBlockElements = document.querySelectorAll(".time-block");
  
    timeBlockElements.forEach(function (timeBlockElement) {
      var timeBlockId = timeBlockElement.id;
      var textarea = timeBlockElement.querySelector(".description");
  
      if (schedule[timeBlockId]) {
        textarea.value = schedule[timeBlockId];
      }
    });
  }
  
  var schedule = JSON.parse(localStorage.getItem("schedule")) || {};
  
  var textareas = document.querySelectorAll(".description");
  var saveButtons = document.querySelectorAll(".saveBtn");
  
  textareas.forEach(function (textarea) {
    textarea.addEventListener("change", handleTextareaChange);
  });
  
  saveButtons.forEach(function (saveButton) {
    saveButton.addEventListener("click", handleSaveButtonClick);
  });
  
  populateTimeBlocks();
  