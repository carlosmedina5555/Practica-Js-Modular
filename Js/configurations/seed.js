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
        id: crypto.randomUUID(),
    title: "Introducción a HTML y CSS",
    description: "Charla dictada por un expero en html.",
    date: Date.now(),
    time: "18:00hs",
    picture:
      "https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png",
    stars: 5,
    difficult: 1,
    },
    {
        id: crypto.randomUUID(),
        title: "Aprendiendo JS",
        description: "Charla dictada por un expero en JS.",
        date: Date.now(),
        time: "18:00hs",
        picture:
          "https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png",
        stars: 5,
        difficult: 1,
    }
]

const ROLES_VALUES = {
    DISERTANTE: 1,
    CONCURRENTE: 2,
    ADMIN: 3,
}



export {INITIAL_ROLES, ROLES_VALUES, SEMINARS};