import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyB85b4FOrQzj6mqVvl8nqbCOYBWd_g_62I",
  authDomain: "nba-full-1fcd5.firebaseapp.com",
  databaseURL: "https://nba-full-1fcd5.firebaseio.com",
  projectId: "nba-full-1fcd5",
  storageBucket: "nba-full-1fcd5.appspot.com",
  messagingSenderId: "118933941632"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
};
