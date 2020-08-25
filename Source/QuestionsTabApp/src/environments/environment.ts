export const environment = {
    production: false,
    apiBaseUrl: "https://qbotazmaxxwork.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotazmaxxwork-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "90d83010-48d9-44fe-97a1-283eeb31ab42",
        clientId: "222236b4-2bec-4cf0-94ac-10b7f2ffd2ed",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
