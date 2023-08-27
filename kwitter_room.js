// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCaBS6s0rYQXTERnQIlIMxOSDSdbdZjfwg",
  authDomain: "letschat-web-app-426d5.firebaseapp.com",
  projectId: "letschat-web-app-426d5",
  storageBucket: "letschat-web-app-426d5.appspot.com",
  messagingSenderId: "183161055192",
  appId: "1:183161055192:web:abe201f2673832ce3eb4ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
