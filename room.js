const firebaseConfig = {
    apiKey: "AIzaSyBAS9VZqbtFMsZBHfJMXPXUW-DA_BUzLSA",
    authDomain: "kwiiter-a1900.firebaseapp.com",
    databaseURL: "https://kwiiter-a1900-default-rtdb.firebaseio.com",
    projectId: "kwiiter-a1900",
    storageBucket: "kwiiter-a1900.appspot.com",
    messagingSenderId: "344790799677",
    appId: "1:344790799677:web:c251902cb015ccea026154"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}