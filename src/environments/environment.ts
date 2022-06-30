// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName : "DEV",
  MSAL:{
    clientId: '6ac25636-f735-46a2-ba87-d6550709e35c', // Application (client) ID from the app registration
    authority: 'https://login.microsoftonline.com/651d0ce8-93a6-43ef-9001-bb540ea99448', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    redirectUri: 'http://localhost:4200'// This is your redirect URI
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
