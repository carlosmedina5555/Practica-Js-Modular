import { SetItem, GetItem } from "./local-storage-logic.js"
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js"

function createUser (username, password,name, adress, rol) {
    const newUser ={username, password,name, adress, rol}
    let users = getArrayAndReplace();


  
    SetItem(LOCAL_STORAGE_KEYS.user,{
        username: username,
        password: password,
        name: name,
        adress: adress,
        rol: rol,
    });
};

function getArrayAndReplace(newUser) {
    let users = GetItem(LOCAL_STORAGE_KEYS.user);
    if(users === null) {
        users = [];
    }
    users.push(newUser)
    return users;
}

function login () {

}

function logout () {

}

export {createUser, login, logout}