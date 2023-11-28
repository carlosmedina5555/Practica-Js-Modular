import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";

import { roleSelect } from "../template/roles.template.js";

import { GetItem } from "./local-storage-logic.js";

import { ROLES_VALUES } from "../configurations/seed.js";

const userLogged = GetItem(LOCAL_STORAGE_KEYS.activeUser);roleSelect

const adminItem = document.getElementById("admin-item");
const loginNav = document.getElementById("loginNav");
const btnLogout = document.getElementById("btnLogout")

if(userLogged !== null && userLogged !== undefined) {
    if(userLogged.rol.id === ROLES_VALUES.ADMIN) {
        adminItem.style.display = "block"
    }else {
        adminItem.style.display = "none"
    }

    loginNav.style.display ="none";
    btnLogout.style.display = "block";
}else{
    adminItem.style.display = "none";
    loginNav.style.display = "block";
    btnLogout.style.display = "none";
}