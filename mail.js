const firebaseConfig = {
  apiKey: "AIzaSyBOq0__nontshTfIpEnsEnX4yxeKaAyPt4",
  authDomain: "contactform-ff3f7.firebaseapp.com",
  databaseURL: "https://contactform-ff3f7-default-rtdb.firebaseio.com",
  projectId: "contactform-ff3f7",
  storageBucket: "contactform-ff3f7.appspot.com",
  messagingSenderId: "1055313462949",
  appId: "1:1055313462949:web:b8356c55abcc4b650a2f4c"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var number = getElementVal("number");
  var msgContent = getElementVal("msgContent");


  saveMessages(name, emailid, number,msgContent,);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid,number,msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    number : number,
    msgContent: msgContent,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
