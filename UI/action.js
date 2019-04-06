

let state = true;
function popup() {
    if(state){
        document.getElementById('modal').style.display = "block";
        document.getElementById('btnAdd').style.transform = "rotate(45deg)";
        state = false;
    }else{
        document.getElementById('modal').style.display = "none";
        document.getElementById('btnAdd').style.transform = "rotate(0deg)";
        state = true;
    }
}

function addTask() {
    let taskTitle = document.getElementById('etName').value;
    let taskDesctription = document.getElementById('etDesc').value;
    let tempJson = {};
    tempJson.title = taskTitle;
    tempJson.description = taskDesctription;
    console.log(tempJson);
    document.getElementById('modal').style.display = "none";
}