import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDZ6K8BJRZVQZ1ALnvVK_WwkkT5QcI5HA4",
    authDomain: "burger-queen-sap004.firebaseapp.com",
    databaseURL: "https://burger-queen-sap004.firebaseio.com",
    projectId: "burger-queen-sap004",
    storageBucket: "burger-queen-sap004.appspot.com",
    messagingSenderId: "880907009304",
    appId: "1:880907009304:web:285ada2b6c05f10626726d"
};


firebase.initializeApp(firebaseConfig);
const firebaseFunctions = {
    auth: firebase.auth(),
    db: firebase.firestore(),
    firestore: firebase.firestore
}
export default firebaseFunctions