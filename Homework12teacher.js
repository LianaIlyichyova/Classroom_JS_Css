
let learners=JSON.parse(localStorage.getItem("students"));

let table,logout, btnM,btn;

enter.innerHTML="";

function createTeachersMainPage(){
  let teacherPageTitle = enter.appendChild(document.createElement("h2"));
  teacherPageTitle.innerHTML = "Teachers Page";

  logout= enter.appendChild(document.createElement("input"));
  logout.setAttribute("type","submit");
  logout.className = "button";
  logout.id="logout";
  logout.value = "Log Out";
  enter.appendChild(document.createElement('br'));

  let dropdown= enter.appendChild(document.createElement("div"));
  dropdown.className="dropdown";

  btn=dropdown.appendChild(document.createElement("button"));
  btn.className="dropbtn";
  btn.innerHTML = findLesson(scedule);

  let content= dropdown.appendChild(document.createElement("div"))
  content.className="dropdown-content";

  let hover= content.appendChild(document.createElement("p"));
  hover.innerHTML=sceduleTable(scedule); 

  let dropdownMenu= enter.appendChild(document.createElement("div"));
  dropdownMenu.id="dropdownMenu";

  btnM=dropdownMenu.appendChild(document.createElement("button"));
  btnM.className="dropbtn";
  btnM.innerHTML = "Choose lesson";

  let contentM= dropdownMenu.appendChild(document.createElement("div"))
  contentM.className="dropdown-content";
  for(let lesson of lessons){
    hoverM= contentM.appendChild(document.createElement("a"));
    hoverM.innerHTML=lesson; 

    hoverM.addEventListener("click",function(){
    hoverM.style.backgroundColor = "darkgray";
    hoverM.style.backgroundColor = "white";
    btnM.innerHTML = lesson;
    if(table){
      table.remove();
      createTable(learners);
    }else{
      createTable(learners);
    }
  });
  }
}

createTeachersMainPage()



 


function createTable(arg){
  table = enter.appendChild(document.createElement("table"));
  for(let i=0; i<arg.length+1; i++){
    let tr = table.appendChild(document.createElement("tr"));
    
    for(let j=0; j<=16; j++){
      if(i===0){
        let th = tr.appendChild(document.createElement("th"));
        let day=j-1;
        day = j<11 ? `0${day}` : j-1;
        th.innerHTML = j===0  || j===1 ? "" : `${day}/11` ;
      }else{
        let td = tr.appendChild(document.createElement("td"));
        td.className="td";
        td.innerHTML = j===0 ? i : j===1 ? `${arg[i-1].firstName} ${arg[i-1].lastName}` : "";
        if(j>1){
          let tdInput=td.appendChild(document.createElement("input"));
          tdInput.type="text";
          tdInput.className="tdInput";
          let choice=btnM.innerHTML
          tdInput.value=arg[i-1].marks[choice][j-2] ? arg[i-1].marks[choice][j-2] : "";
        }
      }
    }
  }
  return table;
}




function saveMarks(pupils){
  let arg=table.children;
  for(let i=1; i<arg.length; i++){
    let argChildren = arg[i].children;
    for(let j=2; j<argChildren.length; j++){
      let pupil=argChildren[1].innerHTML.split(" ");
      let category = btnM.innerHTML;
        if(pupils[i-1].firstName === pupil[0] && pupils[i-1].lastName === pupil[1]){

          (pupils[i-1].marks[category][j-2]) = argChildren[j].firstChild.value ? argChildren[j].firstChild.value : "";
        }
      }
  }
  return pupils;
}

//events
logout.addEventListener("click",function(){
  window.location.reload();
});

body.addEventListener("click",function(){
  if(table){
    localStorage.setItem("students",JSON.stringify(saveMarks(learners)));
  } 
});










