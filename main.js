//  main.js 
   
//  GET request using fetch() 
var myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'hello world',
    'Authorization': 'Bearer BQBBpaovOI_JeOVp5jt_RWRWffkW7wK_s6Ds4jnluMpCp3bgjdhNWQBmcklpmZCohoZijluZ7zWzNSvCIz0I-hyMSK-z79T09qOmFMn6b974V2YstKhbfMSJL0LbHjnTFg-1NWTQMlKfC_3KFP4dBRumuvvpT_on5nK3PPZqAbQ'
  });
  fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist', {
    headers: myHeaders
  })
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(json => { 
   
        // Create a variable to store HTML 
        let li = `<tr><th>Name</th><th>Songs</th></tr>`; 
        console.log(json);
        console.log(json.tracks);
        
        // Loop through each data and add a table row 
        // json.forEach(user => { 
        //     li += `<tr> 
        //         <td>${user.name} </td> 
        //         <td>${user.artist}</td>          
        //     </tr>`; 
        // }); 

        var x, txt = "";
        for (x in json.tracks) {
            li += `<tr> 
                <td>${JSON.stringify(json.name)} </td>
                <td>${JSON.toString(json.artists)} </td>      
            </tr>`; 
        };

   
    // Display result 
    document.getElementById("users").innerHTML = li; 
}); 