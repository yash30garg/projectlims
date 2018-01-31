export var requireAuth = (path) => {

      if(localStorage.getItem('limsuser')!==null&&localStorage.getItem('adal.token.renew')!=="")
        {
            if(path==="http://localhost:3000/#/login") {
                window.location = "http://localhost:3000/#/"
            }
            else {
                // console.log(JSON.parse(localStorage.getItem('limsuser')))
                console.log("yes")
                // console.log(path)
                window.location = path
            }
        }
        else
        {
            console.log("No")
            // console.log(path)
            window.location.replace("http://localhost:3000/#/login")
            // window.locaton = "http://localhost:3000/#/login"
        }
}

// export var requireAuth = (path) => {

//       if(localStorage.getItem('limsuser')!==null&&localStorage.getItem('adal.token.renew')!=="")
//         {
//             if(path==="https://limsreact.azurewebsites.net/#/login") {
//                 window.location = "https://limsreact.azurewebsites.net/#/"
//             }
//             else {
//                 // console.log(JSON.parse(localStorage.getItem('limsuser')))
//                 console.log("yes")
//                 // console.log(path)
//                 window.location = path
//             }
//         }
//         else
//         {
//             console.log("No")
//             // console.log(path)
//             window.location.replace("https://limsreact.azurewebsites.net/#/login")
//             // window.locaton = "http://localhost:3000/#/login"
//         }
// }