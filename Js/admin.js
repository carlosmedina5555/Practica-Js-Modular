import { getUsers } from "./Service/user.app.js";
import { getSeminars } from "./Service/seminar.app.js";
import { getSeminarById } from "./Service/seminar.app.js";

//#region HTML References
const usersTable = document.getElementById("users-table");
const seminarstable = document.getElementById("seminars-table")
const deleteSeminarBtn = document.getElementById("deleteSeminar")
const cancelDeleteSeminarBtn = document.getElementById("cancelDeleteSeminar")
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

            seminarstable.appendChild(tr);
        })

        data.seminars.forEach((seminar) => {
           const btnModify = document.getElementById(seminar.id);
           if(btnModify){
            btnModify.addEventListener("click", (e) => {
                currents.seminar = getSeminarById(e.target.parentElement.id);
               })
           }
           
        })
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