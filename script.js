/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

 var highscoreTable = {
  highscores:{game1:{
      User1:99999,
      User2:10000,
    
  },
  game2:{
      User1:13,
      User2:14,
   
  }
}
}

var highscoreTable2 = {
  highscores:{game1:{
      User1:99999,
      User2:10000,
      User3:3010,
      User4:4332,
      User5:90405,
    
  },
  game2:{
      User1:13,
      User2:14,
      User3:78,
      User4:443,
      User5:2210,
   
  }
}
}

 




/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}

function goodbye(){
  firebase.database().ref('/').set(
    {
      message: 'Goodbye!'
    }
  )
}

function simpleRead() {
    console.log("Reading message");
    firebase.database().ref('/').child('message').once('value', displayRead);
    console.log("Leaving simpleRead")
}

function safeRead() {
   console.log("Reading message");
    firebase.database().ref('/').child('message').once('value', display, fb_readError);

    console.log("Leaving safeRead")

}

function safeReadListener() {
   console.log("Reading message");
    firebase.database().ref('/').child('message').on('value', display, fb_readError);


}

function stopSafeReadListener() {
    firebase.database().ref('/').child('message').off();
    console.log("Leaving safeRead")

}

function fb_readHighScores() {
    console.log("Reading Highscores");
    firebase.database().ref('/highscores/game1').once('value', fb_displayHighScores, fb_readError);
}

function fb_displayHighScores(snapshot) {
  var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
        HTML_OUTPUT.innerHTML = 'There was no record when trying to read the message';
    }else{var highscores = snapshot.val()
    console.log("User1 got "+highscores["User1"]+" points")
}}
    

function displayRead(snapshot) {
    console.log("Running displayRead(), the message is: " + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
}

function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
        HTML_OUTPUT.innerHTML = 'There was no record when trying to read the message';
    }
    else {
        console.log("The message is: " + dbData)
        HTML_OUTPUT.innerHTML = snapshot.val();
    }
    
}



function resetDatabase(){
  firebase.database().ref('/').set(highscoreTable)
}

function resetDatabase2(){
  firebase.database().ref('/').set(highscoreTable2)
}

function changeScore(){
  firebase.database().ref('/highscores/game1/User1/').set(123)
}

function fb_readAllHighScores() {
    console.log("Reading Highscores");
    firebase.database().ref('/highscores/').once('value', readAllScores, fb_readError);
}

function readAllScores(snapshot){
 var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
        HTML_OUTPUT.innerHTML = 'There was no record when trying to read the message';
    }else{ var highscores = snapshot.val()
  let names= Object.keys(highscores);
console.log(highscores);
  for(i=0;i<names.length;i++){
    let key = names[i]
    console.log(highscores[key])
    
    console.log("score "+i+" is for "+ key+". "+highscores[key]["User1"]+" points.")
  }
}
}

function fb_readHighScores2() {
    console.log("Reading Highscores");
    firebase.database().ref('/highscores/game1').orderByValue().once('value', fb_displayHighScores2, fb_readError);
}

function fb_displayHighScores2(snapshot){
  var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
        HTML_OUTPUT.innerHTML = 'There was no record when trying to read the message';
    }else{
  snapshot.forEach(fb_showScores)
    }
}

function fb_showScores(child){
  console.log(child.key+" got "+child.val()+" points");
}

