const INITIAL_ROLES = [{
    id: 1,
    description: "Disertante",
},
{
    id: 2,
    description: "Concurrente",
},
{
    id: 3,
    description: "Admin",
}];


const SEMINARS = [
    {
        id:1,
        name: "Introducion a html",
        description: "Charla dedicada por un experto en html",
        date: Date.now(),
        time: "18hs",
        picture: "...",
        speakers:"",
    }
]

const ROLES_VALUES = {
    DISERTANTE: 1,
    CONCURRENTE: 2,
    ADMIN: 3,
}



export {INITIAL_ROLES, ROLES_VALUES, SEMINARS};