const users = [];

function passLoginData() {

    var emailId = document.getElementById('email-id-input').value
    var passwordID = document.getElementById('password-input').value
    var tokenID = 0;
    console.log(emailId, passwordID)

    const headers = { 'Authorization': 'Bearer <token>','Content - type': 'application / json'}; // auth header with bearer token
    post('https://reqres.in/api/login' + '/' + emailId + '/' + passwordID, { headers })
        .then(response => response.json())
        .then(data => tokenID = data.id);


    alert("Successfully logged in")


    get('https://reqres.in/api' + '/' + tokenID , { headers })
        .then(response => response.json())
        .then(data => {


            console.log(data.data)

            data.data.forEach(d => {

                users.push(d.name);

            });

            console.log(users);
        });


}

