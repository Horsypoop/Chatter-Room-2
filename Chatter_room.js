
var firebaseConfig = {
  apiKey: "AIzaSyCcFgbtJpvet3geMqq2PDyF6rUrwM2Z_H8",
  authDomain: "chatter-room-f47fb.firebaseapp.com",
  databaseURL: "https://chatter-room-f47fb-default-rtdb.firebaseio.com",
  projectId: "chatter-room-f47fb",
  storageBucket: "chatter-room-f47fb.appspot.com",
  messagingSenderId: "186719749442",
  appId: "1:186719749442:web:dc008363088d1dd75fb4db"
};

firebase.initializeApp(firebaseConfig);

      


getData();

function logout(){
      window.location="index.html";
}     