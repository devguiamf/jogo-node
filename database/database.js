// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref,child, get } = require("firebase/database")
 
const firebaseConfig = {
  apiKey: "AIzaSyDfIhLQSuEM5HZ_G7rz2xLkllc6RQi_h8k",
  authDomain: "jogo-bloco.firebaseapp.com",
  databaseURL: "https://jogo-bloco-default-rtdb.firebaseio.com",
  projectId: "jogo-bloco",
  storageBucket: "jogo-bloco.appspot.com",
  messagingSenderId: "3129362093",
  appId: "1:3129362093:web:73833ede7f62a8fd93a824",
  measurementId: "G-0BL6N46R6T"
};
// Initialize Firebase
const appBanco = initializeApp(firebaseConfig)
async function geTabela(){
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `ranking`))
  if (snapshot.exists()){
    const players = Object.entries(snapshot.val()).map(([key, value]) => ({
      nome: key,
      score: value
    }))
    return players;
  } else{
    return [];
  }
}

module.exports = geTabela;