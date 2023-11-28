import { SetItem, GetItem } from "./local-storage-logic.js";
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";


//#region Get User (R - Read - leer)
function getSeminars () {
    let seminars = GetItem(LOCAL_STORAGE_KEYS.seminar);

    if(seminars !== null){
        seminars.forEach(seminar => {
            seminar.modifySeminar = updateSeminar;
        });
    }
    return seminars;
}
//#endregion
function createSeminar (title, description, date, time, picture, speakers) {
    let seminars = getArrayAndReplace({title, description, date, time, picture, speakers});
    SetItem(LOCAL_STORAGE_KEYS.seminar, seminars);
};
  
function getArrayAndReplace(newSeminar) {
    let seminars = getSeminars()
        
    if(users === null) {
        seminars = [];
    }
    users.push(newSeminar)
    return seminars;
}

function updateSeminar(id, title, description, date, time, picture, speakers){
    const seminars = getSeminars(); 
    if(seminars !== null && seminars.length > 0) {
        let index = seminars.findIndex(function(seminar){
            return seminar.id === id;
        });

        let seminar = seminars[index];
        seminar.title = title;
        seminar.description = description;
        seminar.date = date;
        seminar.time = time;
        seminar.picture = picture;
        seminar.speakers = speakers;
        seminar[index] = seminar;
        SetItem(LOCAL_STORAGE_KEYS.seminar, seminars)
    }
}


function deleteSeminar(id){
    const seminars = getSeminars();
    if(seminars !== null && seminars.length > 0){
        let newSeminarArray = seminars.filter(function(seminar){
            seminar.id !== id
        })
        SetItem(LOCAL_STORAGE_KEYS.seminar, newSeminarArray)
    }
}

export {getSeminars, createSeminar, deleteSeminar, updateSeminar}