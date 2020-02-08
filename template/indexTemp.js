function myTeam() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c9c3a0343e.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>Employee Summary</title>
        <style>
          .text-center{
            background-color: #73add9;
            color:white;
            height:100px;
            padding:20px;
          }    
        </style>
    </head>
    <body>
        <div>
            <h1 class="text-center">Team Members </h1>
        </div>
    </body>
    
    </html>`

};


module.exports = {
    myTeam
}