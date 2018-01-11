import React, { Component } from 'react';
// import { withRouter } from 'react-router';

export var requireAuth = (path) => {

      if(localStorage.getItem('limsuser')!==null)
        {
            console.log(JSON.parse(localStorage.getItem('limsuser')))
            console.log("yes")
            console.log(path)
            window.location = path
        }
        else
        {
            console.log("No")
            console.log(path)
            window.location.replace("http://localhost:3000/#/")
        }
}