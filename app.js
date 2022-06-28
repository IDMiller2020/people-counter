let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

// comment

function increment() {
  count += 1
  countEl.textContent = count 
}

function save() {
  let savedCount = count + " - "
  saveEl.textContent += savedCount
  count = 0
  countEl.textContent = 0
}