import { AuthenticationContext, adalGetToken, adalFetch, acquireToken } from 'react-adal';
 
export const adalConfig = {
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: 'fa61fc30-ea79-4d93-8038-65273b42c71c',
  redirectUri: "http://localhost:3000/#/home",
//   endpoints: {
//     api: 'ce0a0b3e-fda3-4d28-a317-721943b90577',
//   },
  postLogoutRedirectUri : "http://localhost:3000/#/login",
  cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
  console.log(authContext)
//   console.log(AuthenticationContext.acquireToken())
 
//  https://social.mindtree.com/User%20Photos/Profile%20Pictures/m1043195_MThumb.jpg?t=63646089488