// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Store = require('electron-store');
const store = new Store();

store.clear();

let allCards = document.getElementById('allCards');
let loadData = store.get('svData');
console.log(loadData);

if (loadData !== undefined) {
    document.getElementById('firstIMG').style.display = "none";
    document.getElementById('progressor-contents').style.display = "block";

    let str1 = '<div class="task-card"><div class="card-left"><img src="assets/icon_1.png"></div><div class="card-middle"><div class="mid-in"><h1>';
    let str2 = '</h1><h2>';
    let str3 = '</h2><div><div class="task-prg"><div class="task-bar"><div class="task-bar-fill" id="';
    let str4 = '"></div></div></div><div class="task-per-num" id="'
    let str5 = '"><h2>';
    let str6 = '</h2></div></div></div></div><div class="card-right"><img src="assets/opt_btn.png"></div></div>';

    let dataObj = JSON.parse(loadData);
    let noCards = dataObj.length;

    let tempInner = '';
    for (var i = 0; i < noCards; i++) {
        let tempTitle = dataObj[i].title;
        let tempDescription = dataObj[i].description;
        tempInner += str1+tempTitle+str2+tempDescription+str3+'taskPerc'+(i+1)+str4+'taskPerNum'+(i+1)+str5+'48%'+str6;
    }
    // tempInner = str1+'Lorem Ipsum dolor Sit amet.'+str2+'Lorem ipsum dolor sit amet.'+str3+'taskPerc1'+str4+'taskPerNum1'+str5+'48%'+str6;
    allCards.innerHTML = tempInner;

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

      let str1 = '<div class="task-card"><div class="card-left"><img src="assets/icon_1.png"></div><div class="card-middle"><div class="mid-in"><h1>';
      let str2 = '</h1><h2>';
      let str3 = '</h2><div><div class="task-prg"><div class="task-bar"><div class="task-bar-fill" id="';
      let str4 = '"></div></div></div><div class="task-per-num" id="'
      let str5 = '"><h2>';
      let str6 = '</h2></div></div></div></div><div class="card-right"><img src="assets/opt_btn.png"></div></div>';

      let tempInner = allCards.innerHTML;
      let count = dataJSON.length;
      tempInner += str1+taskTitle+str2+taskDesctription+str3+'taskPerc'+count+str4+'taskPerNum'+count+str5+'48%'+str6;
      allCards.innerHTML = tempInner;
      popup();
    }else {
      console.log("Title field can't be empty... !");
    }
});
