let teachers = [{
  firstName: "Anahit",
  lastName: "Hakobyan",
  username: "anahit@gmail.com",
  password: "Anahit123",
}];

let students = [{
  firstName: "Mark",
  lastName: "Ilyichyov",
  username: "mark@gmail.com",
  password: "Mark123",
  marks: {
    Mathematic:[],
    Armenian:[],
    English:[],
    Technology:[],
    Painting:[],
  },
}];

const scedule=[
  Mathematic={
      lesson: "Mathematic",
      start: "8:30",
      end: "9:15",
  },
  Armenian={
     lesson: "Armenian",
      start: "9:30",
      end: "10:15",
  },
  English={
     lesson: "English",
      start: "15:32",
      end: "15:45",
  },
  Technology={
      lesson: "Technology",
      start: "11:30",
      end: "12:15",
  },
  Mathematic={
     lesson: "Mathematic",
      start: "12:30",
      end: "13:15",
  },
  Painting={
     lesson: "Painting",
      start: "13:30",
      end: "14:15",
  }
];

let sceduleForCorrect=[...scedule];

const lessons=["Mathematic", "Armenian", "English", "Technology", "Painting"];

let body,enter,loginDiv,userName,password,message, signIn,register,loginText ;

//create the first page(login page);
function createMainPage(){
  body=document.querySelector("body");
  body.style.backgroundImage="url(Wallpaper.jpg)";
  body.id="body";
  enter = document.getElementById("login");
  loginDiv=enter.appendChild(document.createElement("div"));

  loginText = loginDiv.appendChild(document.createElement("h2"));
  loginText.innerHTML = "Log In";

  let div1 = loginDiv.appendChild(document.createElement("div"));
  let div2 = loginDiv.appendChild(document.createElement("div"));

  let userNameTitle  =div1.appendChild(document.createElement("p"))
  userNameTitle.innerHTML = "Log In";

  let passwordTitle = div2.appendChild(document.createElement("p"))
  passwordTitle.innerHTML = "Password";

  userName = div1.appendChild(document.createElement("input"));
  userName.id = "username"
  userName.type="email";
  userName.className = "input";

  password=div2.appendChild(document.createElement("input"));
  password.type="password";
  password.id="password"
  password.className = "input";

  message = div2.appendChild(document.createElement("p"));
  message.innerHTML = "Invalid login or password!";
  message.className = "falseUsername";
  message.style.visibility = "hidden";

  signIn= enter.appendChild(document.createElement("input"));
  signIn.setAttribute("type","submit");
  signIn.className = "button";
  signIn.id="signIn"
  signIn.value = "Sign In";

  enter.appendChild(document.createElement('br'));

  register = enter.appendChild(document.createElement("input"));
  register.setAttribute("type","submit");
  register.className="button";
  register.value="Register";
}
createMainPage()


let checkbox1,checkbox2, firstName, lastName,signUp;
let userNameRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//adding an another js file for teacher or student
function logIn(){
  if(!localStorage.getItem("teachers")){
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }
    teachers = JSON.parse(localStorage.getItem("teachers"));

  if(!localStorage.getItem("students")){
    localStorage.setItem("students", JSON.stringify(students));
  }
   students = JSON.parse(localStorage.getItem("students")); 

    for(let el of teachers){
      if(password.value===el.password && userName.value===el.username){
        let script = document.createElement("script"); 
        script.src = "Homework12teacher.js"; 
        document.body.appendChild(script);
        return;
      }
    };
    for(let el of students){
      if(password.value===el.password && userName.value===el.username){
        let script = document.createElement("script"); 
        script.src = "Homework12student.js"; 
        document.body.appendChild(script);
        return;
      } 
    };
    message.style.visibility="visible";
}


// changing view for registration
function registration(){
  loginText.remove();
  userName.value="";
  password.value="";
  let div3=loginDiv.insertAdjacentElement('afterbegin',document.createElement("div"));
  let div4=loginDiv.insertAdjacentElement('afterbegin',document.createElement("div"));
  let registrationText=loginDiv.insertAdjacentElement('afterbegin',document.createElement("h2"));
  registrationText.innerHTML="Registration";

  let lastNameTitle=div3.appendChild(document.createElement("p"))
  lastNameTitle.innerHTML="Lastname";
  
  let firstNameTitle=div4.appendChild(document.createElement("p"))
  firstNameTitle.innerHTML="Firstname";
  
  firstName=div4.appendChild(document.createElement("input"));
  firstName.type="text";
  firstName.className="input";
  
  lastName=div3.appendChild(document.createElement("input"));
  lastName.type="text";
  lastName.className="input";

  signIn.remove();
  register.remove();
  checkposition1=enter.appendChild(document.createElement("div"));
  checkposition1.className="check";

  checkbox1=checkposition1.appendChild(document.createElement("input"));
  checkbox1.type="checkbox";
  checkbox1.id="checkbox1";
  let checkbox1Label=checkposition1.appendChild(document.createElement("label"));
  checkbox1Label.for=checkbox1;
  checkbox1Label.innerHTML="Teacher";
  checkbox1.onclick=()=>{checkbox2.checked=false};
  checkbox1Label.onclick = function(){ 
    if(checkbox1.checked===false){
    checkbox1.checked=true;
    checkbox2.checked=false
    }else{
      checkbox1.checked=false;
    }
  };

  checkposition2=enter.appendChild(document.createElement("div"));
  checkposition2.className="check";

  checkbox2=checkposition2.appendChild(document.createElement("input"));
  checkbox2.type="checkbox";
  checkbox2.id="checkbox2";
  let checkbox2Label=checkposition2.appendChild(document.createElement("label"));
  checkbox2Label.for=checkbox2;
  checkbox2Label.innerHTML="Student";
  checkbox2.onclick=()=>{checkbox1.checked=false};
  checkbox2Label.onclick = function(){
    if(checkbox2.checked===false){
     checkbox2.checked=true;
     checkbox1.checked=false
   }
   else{
    checkbox2.checked=false;
   }
  };
  
  enter.appendChild(document.createElement('br'));

  signUp= enter.appendChild(document.createElement("input"));
  signUp.setAttribute("type","submit");
  signUp.className="button";
  signUp.value="Sign Up";  

  signUp.addEventListener("click",function(){
    addUser();
  });
}

//check password validation
function checkPassword(password){
  let numberCheck = false;
  let upperCaseCheck = false;
  let lowerCaseCheck = false;
  let result = false; 
      for (let i = 0; i < password.length; i++) {
          if(!isNaN(password[i])){
              numberCheck = true;
              continue;
          }
          else if(password[i] == password[i].toUpperCase()){
              upperCaseCheck = true;
              continue;
          }
          else if(password[i] == password[i].toLowerCase()){
              lowerCaseCheck = true;
              continue;
          }
      }
      if (numberCheck && upperCaseCheck && lowerCaseCheck) {
          result = true;
      }
      return result
}

//Add user
function User(first, last, username, pass,marks) {
  this.firstName = first;
  this.lastName = last;
  this.username = username;
  this.password = pass;
  this.marks = marks;
}

function createMarksObject(arg){
  let obj={};
  for(let lesson of lessons){
    obj[lesson] = [];
  }
  return obj;
}

function addUser(){
  if(!firstName.value){
    message.innerHTML="Add firstname";
    message.style.visibility = "visible";
    return;
  }
  if(!lastName.value){
    message.innerHTML="Add lastname";
    message.style.visibility = "visible";
    return;
  }
  if(!userNameRegex.test(userName.value)){
    message.innerHTML="Add valid username";
    message.style.visibility = "visible";
    return;
  }
  if(!checkPassword(password.value)){
    message.innerHTML="Add valid password";
    message.style.visibility = "visible";
    return;
  }
  if((!checkbox1.checked) && (!checkbox2.checked)){
    message.innerHTML="Choose teacher or student!";
    message.style.visibility = "visible";
    return;
  }
  else{
    let temp = new User(firstName.value, lastName.value, userName.value, password.value,
   createMarksObject(lessons));
      let localTeachers = localStorage.getItem("teachers")
      if(!localTeachers){
        localStorage.setItem("teachers",JSON.stringify(teachers)); 
    }
      teachers = JSON.parse(localStorage.getItem("teachers"));

      let localStudents = localStorage.getItem("students")
      if(!localStudents){
        localStorage.setItem("students",JSON.stringify(students)); 
    }
      students = JSON.parse(localStorage.getItem("students"));

      let users=[...teachers];
      users.push(...students);
      for(let user of users){
        if(temp.username === user.username){
        message.innerHTML="Already existing user!";
        message.style.visibility = "visible";
        return;
      }
    }  
      if(checkbox1.checked){
        delete temp.marks;
      teachers.push(temp);
      localStorage.setItem("teachers",JSON.stringify(teachers));
      let script = document.createElement("script"); 
      script.src = "Homework12teacher.js"; 
      document.body.appendChild(script);
      return;
    }
    else if(checkbox2.checked){
      students.push(temp);
      localStorage.setItem("students",JSON.stringify(students));
      let script = document.createElement("script"); 
      script.src = "Homework12student.js"; 
      document.body.appendChild(script);
        return;
      }  
}
}


///--------------events-----------
signIn.addEventListener("click",function(){
  logIn();
});

let input=document.getElementById("body");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      logIn();
  }
});

register.addEventListener("click",function(){
  registration();
});





//create scedule button for other pages
function findLesson(arg){
  let now = new Date();
  let hour=now.getHours();
  let minute=now.getMinutes();
  minute = minute<10 ? "0"+minute : minute;
  let time= String(hour)+minute;
  for(let j=0;;j++){
  for(let i=0; i<arg.length; i++){

    let start = arg[i].start.split(":").join("");
    let end = arg[i].end.split(":").join("");
    if(time >= start && time <= end){
      btn.style.backgroundColor="hsl(39, 82%, 47%)";
      return arg[i].lesson;
    }else if(+time+j>= start && +time+j <= end){
      return arg[i].lesson;
    }
    if(+time+j==2400){
      return arg[0].lesson
    }
    }
  }
}


function sceduleTable(arg){
  let str="";
  for(let lesson of arg){

    str+=`<b>${lesson.lesson}</b> <br/> ${lesson.start}-${lesson.end} <br/>`;
  }
  return str;
}



