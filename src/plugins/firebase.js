import Vue from 'vue';
import firebase from "firebase";
import store from "../store";

var firebaseConfig = {
  apiKey: "AIzaSyBGYY-FfPkzkIsGYqEdGmkkaz3_Gq5cvYI",
  authDomain: "watchflix-vue.firebaseapp.com",
  projectId: "watchflix-vue",
  storageBucket: "watchflix-vue.appspot.com",
  messagingSenderId: "694503762596",
  appId: "1:694503762596:web:849df1f221edebec319431",
  measurementId: "G-R7NKKPQK60"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("addUser", { name: user.displayName, email: user.email });
});

Vue.prototype.$firebase = firebase;

export default firebase;