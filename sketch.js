// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Get input from user
var fruitInput;
var totalInput;

// Keep list of DOM elements for clearing later when reloading
var listItems = [];
var database;

function setup() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA7-uF7pExpFUfreiyHILJ44iV6K5wIkHg",
        authDomain: "fall2020steamkeys.firebaseapp.com",
        projectId: "fall2020steamkeys",
        storageBucket: "fall2020steamkeys.appspot.com",
        messagingSenderId: "968642904822",
        appId: "1:968642904822:web:cd350468ae59ec3c5d62d7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    var ref = database.ref('accesscodes')
    var data = {
        name: "testcode",
        score: 43,
        code: "JAIWOGUBEA-WGIAWNGA"
    }
    ref.push(data);
    // Input fields
    fruitInput = select('#fruit');
    totalRemaining = select('#total');

    // Retrieve button
    var retrieve = select('#retrieve');
    retrieve.mousePressed(sendToFirebase);
    retrieve.mousePressed(getFromFirebase);

    // Start loading the data
    loadFirebase();
}

function loadFirebase() {
    var ref = database.ref("fruits");
    ref.on("value", gotData, errData);
}

function errData(error) {
    console.log("Something went wrong.");
    console.log(error);
}

// The data comes back as an object
function gotData(data) {
    var fruits = data.val();
    // Grab all the keys to iterate over the object
    var keys = Object.keys(fruits);

    // clear previous HTML list
    clearList();

    // Make an HTML list
    var list = createElement('ol');
    list.parent('data');

    // Loop through array
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var fruit = fruits[key];
        var li = createElement('li', fruit.fruit + ': ' + fruit.total + ", key: " + key);
        li.parent(list);
        listItems.push(li);
    }
}

// Clear everything
function clearList() {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].remove();
    }
}

// This is a function for sending data
function sendToFirebase() {
    var fruits = database.ref('fruits');

    // Make an object with data in it
    var data = {
        fruit: fruitInput.value()
    }

    var fruit = fruits.push(data, finished);
    console.log("Firebase generated key: " + fruit.key);

    // Reload the data for the page
    function finished(err) {
        if (err) {
            console.log("ooops, something went wrong.");
            console.log(err);
        } else {
            console.log('Data saved successfully');
        }
    }
}

function getFromFirebase(){
    totalRemaining = select('#total');
    totalRemaining.value = 0;
}