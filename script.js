// Navbar Toggle
const toggleNav = document.getElementById("toggle-nav");
const closeNav = document.getElementById("close-nav");
const sidebar = document.getElementById("sidebar");

toggleNav.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

closeNav.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});

// Save Note Functionality
const noteArea = document.getElementById("note-area");
const saveNote = document.getElementById("save-note");

saveNote.addEventListener("click", () => {
  const noteContent = noteArea.value;
  if (noteContent.trim()) {
    localStorage.setItem("savedNote", noteContent);
    alert("Note saved!");
  } else {
    alert("Note is empty!");
  }
});

// Load Note on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const savedNote = localStorage.getItem("savedNote");
  if (savedNote) {
    noteArea.value = savedNote;
  }
});
