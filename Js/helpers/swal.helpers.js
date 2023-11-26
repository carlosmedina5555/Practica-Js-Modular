 const SwalAlerts = {
    error: (text) =>
    Swal.fire({
        title: "Ocurrio un Error",
        text: text,
        icon:"error",
        confirmButtonText: "Ok", 
    }),
    succes: (text, title) => {
        Swal.fire({
            title: title,
            text: text,
            icon:"error",
            confirmButtonText: "Ok", 
        })
    } 
 }

 export {SwalAlerts}