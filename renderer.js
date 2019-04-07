// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Store = require('electron-store');
const store = new Store();

// store.clear();

let loadData = store.get('svData');
console.log(loadData);

if (loadData !== undefined) {
    document.getElementById('firstIMG').style.display = "none";
    document.getElementById('progressor-contents').style.display = "block";
}else {
    document.getElementById('firstIMG').style.display = "block";
    document.getElementById('progressor-contents').style.display = "none";
}

const action = document.getElementById("btn-set");

action.addEventListener("click", function() {
    let taskTitle = document.getElementById('etName').value;
    let taskDesctription = document.getElementById('etDesc').value;
    let tempJSON = {};
    tempJSON.title = taskTitle;
    tempJSON.description = taskDesctription;
    if (taskTitle !== "") {
      let tempData = store.get('svData');
      let dataJSON;
      if (tempData !== undefined) {
          dataJSON = JSON.parse(tempData);
      }else {
          dataJSON = [];
      }
      dataJSON.push(tempJSON);
      tempData = JSON.stringify(dataJSON);
      store.set('svData', tempData);
      console.log("Now Data : "+tempData);
      document.getElementById('etName').value = "";
      document.getElementById('etDesc').value = "";
      document.getElementById('firstIMG').style.display = "none";
      document.getElementById('progressor-contents').style.display = "block";
      popup();
    }else {
      console.log("Title field can't be empty... !");
    }
});
