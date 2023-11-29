import { SetItem, GetItem } from "./local-storage-logic.js";
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";


//#region Get User (R - Read - leer)
function getSeminars () {
    return GetItem(LOCAL_STORAGE_KEYS.seminar);
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


function getSeminarById(id){
    const seminars = getSeminars();
    return seminars.find((seminar) => seminar.id === id)
}
export {getSeminars, createSeminar, deleteSeminar, updateSeminar, getSeminarById}