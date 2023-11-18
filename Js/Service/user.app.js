import { SetItem, GetItem, RemoveItem } from "./local-storage-logic.js"
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js"
import { ERROR_MESSAGE } from "../configurations/messages.config.js";
import { GetError } from "../helpers/error.helpers.js";

//#region errores

function GetErrorNotFound (){
    return GetError(ERROR_MESSAGE.not_found);
}

function GetErrorNotMatch () {
    return GetError(ERROR_MESSAGE.not_match);
}
//#endregion



//#region Get User (R - Read - leer)
function GetUsers () {
    return GetItem(LOCAL_STORAGE_KEYS.user);
}
//#endregion

//#region AddUsers (A- alta)  
function createUser (username, password,name, adress, rol) {
    let users = getArrayAndReplace({username, password,name, adress, rol});
    SetItem(LOCAL_STORAGE_KEYS.user, users);
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

//#region login y logout

function login (username, password) {
    let users = GetUsers();
    if(users === null) {
      return GetErrorNotFound()
    }
    let userFound = users.find((user) => user.username === username);
    if(!userFound) {
        return GetErrorNotMatch()
    }

    if(userFound.password !== password){
      return GetErrorNotMatch()
        }

    SetItem(LOCAL_STORAGE_KEYS.activeUser.userFound);
    delete userFound.password;
        return { 
            ok: true,
            user: userFound,
        }
    }
 
function logout () {
    RemoveItem(LOCAL_STORAGE_KEYS.activeUser);
}
//#endregion
export {createUser, login, logout, createrUserRolCommon}