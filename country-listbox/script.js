const options = document.querySelectorAll(".option");
const selectedTagsContainer = document.getElementById("selectedTags");
const searchInput = document.getElementById("search");

options.forEach(option => {
  option.addEventListener("click", () => {
    option.classList.toggle("selected");
    updateSelectedTags();
  });
});

function updateSelectedTags() {
  selectedTagsContainer.innerHTML = "";
  const selectedOptions = document.querySelectorAll(".option.selected");
  selectedOptions.forEach(option => {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerHTML = `${option.textContent} <button onclick="removeTag('${option.dataset.value}')">x</button>`;
    selectedTagsContainer.appendChild(tag);
  });
}

function removeTag(value) {
  const option = document.querySelector(`.option[data-value="${value}"]`);
  if (option) {
    option.classList.remove("selected");
    updateSelectedTags();
  }
}

document.getElementById("selectAll").addEventListener("click", () => {
  options.forEach(option => option.classList.add("selected"));
  updateSelectedTags();
});

document.getElementById("clearAll").addEventListener("click", () => {
  options.forEach(option => option.classList.remove("selected"));
  updateSelectedTags();
});

document.getElementById("copySelection").addEventListener("click", () => {
  const selected = [...document.querySelectorAll(".option.selected")].map(opt => opt.textContent);
  if (selected.length) {
    navigator.clipboard.writeText(selected.join(", "));
    alert("Copied: " + selected.join(", "));
  } else {
    alert("No countries selected!");
  }
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  options.forEach(option => {
    if (option.textContent.toLowerCase().includes(searchValue)) {
      option.style.display = "";
    } else {
      option.style.display = "none";
    }
  });
});
