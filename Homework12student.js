
let learners=JSON.parse(localStorage.getItem("students"));

enter.innerHTML="";

let table,logout,btn;

function createStudentsMainPage(){
  let studentsPageTitle = enter.appendChild(document.createElement("h2"));
  studentsPageTitle.innerHTML = "Students Page";

  logout= enter.appendChild(document.createElement("input"));
  logout.setAttribute("type","submit");
  logout.className = "button";
  logout.id="logout";
  logout.value = "Log Out";
  enter.appendChild(document.createElement('br'));

  dropdown= enter.appendChild(document.createElement("div"));
  dropdown.className="dropdown";

  btn=dropdown.appendChild(document.createElement("button"));
  btn.className="dropbtn";
  btn.innerHTML = findLesson(scedule);
  let content= dropdown.appendChild(document.createElement("div"))
  content.className="dropdown-content";
  let hover= content.appendChild(document.createElement("p"));
  hover.innerHTML=sceduleTable(sceduleForCorrect); 
}

createStudentsMainPage();



function createTable(arg){
 table = enter.appendChild(document.createElement("table"));
  let user;
  for(let learner of learners){
    if(learner.username===userName.value){
      user=learner;
      break;
    }
  }
  for(let i=0; i<arg.length+1; i++){
    let tr = table.appendChild(document.createElement("tr"));
    for(let j=0; j<=16; j++){
      if(i===0){
        let th = tr.appendChild(document.createElement("th"));
        let day=j-1
        day = j<11 ? `0${day}` : j-1;
        th.innerHTML = j===0  || j===1 ? "" : `${day}/11` ;
      }else{
        let lesson=arg[i-1];
        let td = tr.appendChild(document.createElement("td"));
        td.className="td";
        td.innerHTML = j===0 ? i : j===1 ? lesson : "";
        if(j>1){
          td.innerHTML= user.marks[lesson][j-2] ? user.marks[lesson][j-2] : "";
        }
      }
    }
  }
}
createTable(lessons);



logout.addEventListener("click",function(){
  window.location.reload();
});


 