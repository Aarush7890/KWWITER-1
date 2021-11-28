function adduser(){
username=document.getElementById("username").value;
localStorage.setItem("user_name",username);
window.location("kwiiter_room");
}