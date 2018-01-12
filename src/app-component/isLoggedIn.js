import React, { Component } from 'react';
// import { withRouter } from 'react-router';

export var requireAuth = (path) => {

      if(localStorage.getItem('limsuser')!==null)
        {
            if(path==="http://localhost:3000/#/"||path==="http:localhost:3000") {
                window.location = "http://localhost:3000/#/home"
            }
            else {
                console.log(JSON.parse(localStorage.getItem('limsuser')))
                console.log("yes")
                console.log(path)
                window.location = path
            }
        }
        else
        {
            console.log("No")
            console.log(path)
            // window.location.replace("http://localhost:3000/#/")
            window.locaton.href = "http://localhost:3000/#/"
        }
}