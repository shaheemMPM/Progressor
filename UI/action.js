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
