let x = Math.floor(Math.random() * 6);
if (x == 0) {
    document.getElementById("featured1").style.display = "grid";
}else if (x==1) {
    document.getElementById("featured2").style.display = "grid";
}else if (x==2) {
    document.getElementById("featured3").style.display = "grid";
}else if (x==3) {
    document.getElementById("featured4").style.display = "grid";
}else if (x==4) {
    document.getElementById("featured5").style.display = "grid";
}else{
    document.getElementById("featured6").style.display = "grid";
}
