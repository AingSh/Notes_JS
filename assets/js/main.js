let addBtn = document.getElementById("addBtn");// делаем переменую которая обращается к всему файлу и елементу addBtn
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText"); // делаем переменую которая обращается к всему файлу и елементу addText
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (elements, index) {
        html += `
    <div class="noteCard my-2 mx-2 card" style="width:18rem;">
    <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button class="btn btn-danger" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
</div>
    </div> `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0 ){
        notesElm.innerHTML = html;
    }else {
        notesElm.innerHTML = `Nothing to Show! Create your first Note!`;
    }
}

function deleteNote