import { AuthenticationContext, adalFetch } from 'react-adal';
//To login through http://limsreact.azurewebsites.net, use this adalConfig variable

// export const adalConfig = {
//   tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
//   clientId: '859c085f-f3d7-40d9-8994-cfebc8407fde',
//   endpoints: {
//     api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
//   },
//   postLogoutRedirectUri : "http://limsreact.azurewebsites.net/#/login",
//   cacheLocation: 'localStorage',
// };

// To login through http://localhost:3000, use this adalConfig variable

// export const adalConfig = {
//   tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
//   clientId: '859c085f-f3d7-40d9-8994-cfebc8407fde',
//   endpoints: {
//     api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
//   },
//   postLogoutRedirectUri : "http://limsreact.azurewebsites.net/#/login",
//   cacheLocation: 'localStorage',
// };

// To login through http://localhost:3000, use this adalConfig variable
export const adalConfig = {
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: 'fa61fc30-ea79-4d93-8038-65273b42c71c',
  endpoints: {
    api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
  },
  postLogoutRedirectUri : "http://localhost:3000/#/",
  cacheLocation: 'localStorage',
};

export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);