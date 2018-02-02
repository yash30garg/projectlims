// eslint-disable-next-line
import { AuthenticationContext, adalFetch } from 'react-adal';


// // To login through https://limsreact.azurewebsites.net/#/, use this adalConfig variable


// export const adalConfig = {
//   tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
//   clientId: '859c085f-f3d7-40d9-8994-cfebc8407fde',
//   endpoints: {
//     api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
//   },
//   postLogoutRedirectUri : "http://limsreact.azurewebsites.net/#/login",
//   cacheLocation: 'localStorage',
// };

// // To login through http://localhost:3000, use this adalConfig variable
// export const adalConfig = {
//   tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
//   clientId: 'fa61fc30-ea79-4d93-8038-65273b42c71c',
//   endpoints: {
//     api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
//   },
//   postLogoutRedirectUri : "http://localhost:3000/#/",
//   cacheLocation: 'localStorage',
// };

// export const authContext = new AuthenticationContext(adalConfig);
 
// export const adalApiFetch = (fetch, url, options) =>
//   adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);


// import AuthenticationContext from 'adal-angular';

// To login through http://localhost:3000, use this adalConfig variable
// const config = {
//   instance: 'https://login.microsoftonline.com/',
//   tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
//   clientId: 'fa61fc30-ea79-4d93-8038-65273b42c71c',
//   redirectUri:'http://localhost:3000/#/',
//   postLogoutRedirectUri: 'http://localhost:3000/#/login',
//   cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost
//   endpoints: {
//     graphApiUri: "https://graph.microsoft.com"
//   }
// };

// To login through https://limsreact.azurewebsites.net/#/, use this adalConfig variable
const config = {
  instance: 'https://login.microsoftonline.com/',
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: '859c085f-f3d7-40d9-8994-cfebc8407fde',
  redirectUri:'https://limsreact.azurewebsites.net/#/',
  postLogoutRedirectUri: 'https://limsreact.azurewebsites.net/#/login',
  cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost
  endpoints: {
    graphApiUri: "https://graph.microsoft.com"
  }
};

export const authContext = new AuthenticationContext(config);

const isCallback = authContext.isCallback(window.location.hash);

authContext.handleWindowCallback();	

if (isCallback && !authContext.getLoginError()) {
  //console.log(('Check Login');
  window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
  localStorage.setItem('limsuser',JSON.stringify(authContext._user))
  //console.log((authContext)
}