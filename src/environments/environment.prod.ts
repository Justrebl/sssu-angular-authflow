export const environment = {
  production: true,
  envName : "PROD",
  MSAL:{
    clientId: '6ac25636-f735-46a2-ba87-d6550709e35c', // Application (client) ID from the app registration
    authority: 'https://login.microsoftonline.com/651d0ce8-93a6-43ef-9001-bb540ea99448', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    redirectUri: 'https://green-plant-01417c703.1.azurestaticapps.net/profile', // This is your redirect URI,
    postLogoutRedirectUri: 'https://green-plant-01417c703.1.azurestaticapps.net' // This is your postlogout redirect URI,
  }
};
