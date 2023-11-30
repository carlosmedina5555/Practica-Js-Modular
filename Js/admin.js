import { getUsers } from "./Service/user.app.js";
import { deleteSeminar, getSeminars } from "./Service/seminar.app.js";
import { getSeminarById } from "./Service/seminar.app.js";

//#region HTML References
const usersTable = document.getElementById("users-table");
const seminarsTable = document.getElementById("seminars-table")
const deleteSeminarBtn = document.getElementById("deleteSeminar")
const updateSeminarBtn = document.getElementById("update")
const updatePicture = document.getElementById("picture");
const updateDifficult = document.getElementById("difficult");
const updateStars = document.getElementById("stars");
const updateDescription = document.getElementById("descriptionTxtArea");
const updateTitle = document.getElementById("title");
//#endregion HTML References


//#region Variables
let data = {
    users: [],
    seminars: [],
};


let currents = {
    user: {},
    seminar: {},
}
//#endregion Variables


//#region InitData
refresh(refreshUsers)

refresh(refreshSeminars)
//#endregion InitData

//#region Events
deleteSeminarBtn.addEventListener("click", () => {
    deleteSeminar(currents.seminar.id);
    window.location.reload()
})

updateSeminarBtn.addEventListener("click", () =>{
    currents.seminar;
})


//#region Functions
function refreshUsers(){
    data.users = getUsers();
    if(data.users){
        data.users.forEach(user => {
            delete user.password;
        });
    }
}

function refreshSeminars() {

    seminarsTable.innerHTML = "";
    data.seminars = getSeminars()
    if(data.seminars) {
        data.seminars.forEach((seminar) => {
            let tr = document.createElement("tr")
            let tdTitle = document.createElement("td")
            let tdDate = document.createElement("td")
            let tdTime = document.createElement("td")
            let tdDifficult = document.createElement("td")
            let tdRank = document.createElement("td")
            let tdActions = document.createElement("td")

            tdTitle.innerText = seminar.title;
            tdDate.innerText = seminar.date;
            tdTime.innerText = seminar.time;
            tdDifficult.innerText = getEmojiText(seminar.difficult);
            tdRank.innerText = getEmojiText(seminar.stars);
            tdActions.innerHTML = `<a id="${seminar.id}" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#adminModal">Administrar</a>`

            tr.appendChild(tdTitle);
            tr.appendChild(tdDate);
            tr.appendChild(tdTime);
            tr.appendChild(tdDifficult);
            tr.appendChild(tdRank);
            tr.appendChild(tdActions);

            seminarsTable.appendChild(tr);
        })

        data.seminars.forEach((seminar) => {
           const btnModify = document.getElementById(seminar.id);
           if (btnModify) {
            btnModify.addEventListener("click", (e) => {
              console.log(e.target.parentElement.id);
              currents.seminar = getSeminarById(e.target.parentElement.id);
    
              if (currents.seminar) {
                updateTitle.value = currents.seminar.title;
                updatePicture.value = currents.seminar.picture;
                updateDifficult.value = currents.seminar.difficult;
                updateStars.value = currents.seminar.stars;
                updateDescription.value = currents.seminar.description;
              } else {
                updateTitle.value = "";
                updatePicture.value = "";
                updateDifficult.value = "";
                updateStars.value = "";
                updateDescription.value = "";
              }
            });
          }
        });
      }
    }


function getEmojiText(number) {
    let finalString = "";
    for(let index = 0; index < number; index++ ){
        finalString += "⭐"
    }
    return finalString
}


function refresh(callback){
    callback();
}
//#endregion Functions