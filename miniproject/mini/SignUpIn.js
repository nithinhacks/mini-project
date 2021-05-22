var firebaseConfig = {
    apiKey: "AIzaSyAb5rcc8qgEJSzgg5ClOPN-3BVHyZL05rI",
    authDomain: "healthisimportant4us.firebaseapp.com",
    databaseURL: "https://healthisimportant4us-default-rtdb.firebaseio.com",
    projectId: "healthisimportant4us",
    storageBucket: "healthisimportant4us.appspot.com",
    messagingSenderId: "604815506249",
    appId: "1:604815506249:web:e622cd60209544b9023898",
    measurementId: "G-RZ7KL407T5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.then(
        function(value) {
            alert("Signed Up Sucessfull!!!");
            window.open("videos.html");
        },

        function(error) {
            alert(error);
        }
    )
}


function signIn() {

    var Email = document.getElementById("Email");
    var Password = document.getElementById("Password");
    const promise = auth.signInWithEmailAndPassword(Email.value, Password.value);
    promise.then(
        function(value) {
            alert("Log In Sucessfull!!!");
            window.open("videos.html");
        },

        function(error) {
            alert(error);
        }
    )
}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}