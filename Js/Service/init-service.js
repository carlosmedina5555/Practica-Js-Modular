import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";

import { INITIAL_ROLES } from "../configurations/seed.js";

import {LocalStorageLength, SetItem } from "./local-storage-logic.js";

if( LocalStorageLength === 0) {
    SetItem(LOCAL_STORAGE_KEYS.roles, INITIAL_ROLES)
    SetItem(LOCAL_STORAGE_KEYS.activeUser, {
        username: "Admin",
        theme: "White",
        rol: INITIAL_ROLES.find( x => x.id === 3)
    } );
};






