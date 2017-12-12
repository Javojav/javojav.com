var config = {
  apiKey: "AIzaSyCbJ45GtG6rpjttXy0fQk1SbPYgNZOfaFU",
  authDomain: "like-2dc3b.firebaseapp.com",
  databaseURL: "https://like-2dc3b.firebaseio.com",
  projectId: "like-2dc3b",
  storageBucket: "like-2dc3b.appspot.com",
  messagingSenderId: "436558297379"
};
firebase.initializeApp(config);

const Likes = firebase.database().ref('Likes');

Likes.on('value', data => {
  let Likenumber = data.val();
  document.getElementById("likenumber").innerHTML = Likenumber + " Likes";
});

function newlike() {
  Likes.once('value', data => {
    let NewLikeNumber = data.val();
    Likes.set(NewLikeNumber+1);
  });
}
