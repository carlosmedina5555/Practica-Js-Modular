import { SetItem, GetItem, RemoveItem } from "./local-storage-logic.js";
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";
import { ERROR_MESSAGES } from "../configurations/messages.config.js";
import { getError } from "../helpers/error.helpers.js";
import { INITIAL_ROLES, ROLES_VALUES } from "../configurations/seed.js";

//#region  Errores
function GetErrorNotFound() {
  return getError(ERROR_MESSAGES.not_found);
}

function GetErrorNotMatch() {
  return getError(ERROR_MESSAGES.not_match);
}
//#endregion

//#region  Get User (R - Read - Leer)
function getUsers() {
  return GetItem(LOCAL_STORAGE_KEYS.user);
}
//#endregion

//#region  Add User (A - Alta)
function createUser(username, password, name, lastname, rol) {
  let users = getArrayAndReplace({ username, password, name, lastname, rol });
  SetItem(LOCAL_STORAGE_KEYS.user, users);
}

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
 
  let users = getUsers();
 
  if (users === null) {
    users = [];
  }


  users.push(newUser);


  return users;
}
//#endregion

//#region  Login and Logout
function login(username, password) {
  let users = getUsers();

  if (users === null) {
    return GetErrorNotFound();
  }

  let userFound = users.find((user) => user.username === username);

  if (!userFound) {
    return GetErrorNotMatch();
  }

  if (userFound.password !== password) {
    return GetErrorNotMatch();
  }

  SetItem(LOCAL_STORAGE_KEYS.activeUser, userFound);
  delete userFound.password;
  return {
    ok: true,
    user: userFound,
  };
}

function logout() {
  RemoveItem(LOCAL_STORAGE_KEYS.activeUser);
}

//#endregion Login and Logout

export { createUser, login, logout, createrUserRolCommon, getUsers };