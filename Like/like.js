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
const Comments = firebase.database().ref('Comments');

let page = 1;
let names = [];
let text = [];
let date = [];

Comments.on('value', data => {
  names = [];
  text = [];
  let comms = data.val();
  let keys = Object.keys(comms);
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    names.push(comms[k].name);
    text.push(comms[k].text);
    date.push(comms[k].date);
  }
  displaycomments();
});

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

function cancel() {
  document.getElementById("commenttext").value = "";
}

function comment() {
  if (document.getElementById("commenttext").value != "" && document.getElementById("yourname").value != "") {
    let data = {
      name: document.getElementById("yourname").value,
      text: document.getElementById("commenttext").value,
      date: Date()
    }
    Comments.push(data);
    document.getElementById("commenttext").value = "";
  }
}

function displaycomments() {
  document.getElementById("commentbox").innerHTML = "";
  for (let i = text.length-1;i > -1; i--) {
    let commentdiv = document.createElement("div");
    commentdiv.classList.add("comment");
    let name = document.createElement("p");
    name.classList.add("name");
    let nametext = document.createTextNode(names[i]);
    name.appendChild(nametext);
    let deit = document.createElement("p");
    deit.classList.add("deit");
    deittext = document.createTextNode(date[i]);
    deit.appendChild(deittext);
    let ctext = document.createElement("p");
    ctext.classList.add("text");
    let texttext = document.createTextNode(text[i]);
    ctext.appendChild(texttext);
    commentdiv.appendChild(name);
    commentdiv.appendChild(ctext);
    commentdiv.appendChild(deit);
    document.getElementById("commentbox").appendChild(commentdiv);
  }
}
