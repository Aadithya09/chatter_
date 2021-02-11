var firebaseConfig = {
      apiKey: "AIzaSyDUiDLaNV28uhj6PaZvlfQfD_KVjbgWOyM",
      authDomain: "kwitter-db-b5be0.firebaseapp.com",
      projectId: "kwitter-db-b5be0",
      storageBucket: "kwitter-db-b5be0.appspot.com",
      messagingSenderId: "200616770658",
      appId: "1:200616770658:web:5ec33e9f5e688a6ea9e53b"
    };
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
