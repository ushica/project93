var firebaseConfig = {
  apiKey: "AIzaSyC22oeUyqUVTJubg55OsBIXh1xdRnRmgBE",
  authDomain: "kwitter-86d2b.firebaseapp.com",
  databaseURL: "https://kwitter-86d2b-default-rtdb.firebaseio.com",
  projectId: "kwitter-86d2b",
  storageBucket: "kwitter-86d2b.appspot.com",
  messagingSenderId: "241162922994",
  appId: "1:241162922994:web:f264d7c03359d3d0e4d96b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
