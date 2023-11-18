import { SetItem, GetItem } from "./local-storage-logic.js";
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";


//#region Get User (R - Read - leer)
function GetSeminars () {
    return GetItem(LOCAL_STORAGE_KEYS.seminar);
}
//#endregion
function createSeminar (title, description, date, time, picture, speakers) {
    let seminars = getArrayAndReplace({title, description, date, time, picture, speakers});
    SetItem(LOCAL_STORAGE_KEYS.seminar, seminars);
};


function createrUserRolCommon(username, password, name, lastname) {
    createUser(
      username,
      password,
      name,
      lastname,
      INITIAL_ROLES.find((rol) => rol.id === ROLES_VALUES.CONCURRENTE)
    );
  }

  
function getArrayAndReplace(newUser) {
    let users = GetUsers()
        
    if(users === null) {
        users = [];
    }
    users.push(newUser)
    return users;
}

//#endregion
