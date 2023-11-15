import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";

import { INITIAL_ROLES } from "../configurations/seed.js";

import {LocalStorageLength, SetItem } from "./local-storage-logic.js";
import { createUser } from "./user.app.js";

if( LocalStorageLength === 0) {
    SetItem(LOCAL_STORAGE_KEYS.roles, INITIAL_ROLES)
    createUser(
        "cmm",
        "1234",
        "carlos",
        "medina",
        INITIAL_ROLES.find((x) => x.id === 3)
    );
}
