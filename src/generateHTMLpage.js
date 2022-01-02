generateHTML = (data) => {

    // array for cards 
    arrayCards = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            arrayCards.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);

            arrayCards.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateInternCard(employee);

            arrayCards.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = arrayCards.join('')

    // return to generated page
    const generateTeam = generateHtmlPage(employeeCards); 
    return generateTeam;

}

const generateHtmlPage = function (employeeData) {   
    return`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <!-- Font Awesome -->
                <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                  rel="stylesheet"
                />
                <!-- Google Fonts -->
                <link
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  rel="stylesheet"
                />
                <!-- MDB -->
                <link
                  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.1/mdb.min.css"
                  rel="stylesheet"
                />
                <title>Team Profile Generator</title>
            </head>
            <style>
                .row>* {
                    padding: 0px;
                    margin: 5px;
                }
            </style>
            <body>
                <nav  style="background-color: #39C0ED;">
                    <div class="container-fluid">
                        <h1 class="navbar-text" style="text-align: center;"><img src="../icons/team.png" alt="">
                            My Team
                        </h1>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div class="row justify-content-center">

                        <!--Team Cards-->
                        ${employeeData}
                        
                    </div>
                </div>

               
                <!-- MDB -->
                <script
                  type="text/javascript"
                  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.15.1/mdb.min.js"
                ></script>
            </body>
            </html>
        `;
}

// generating manger card
const generateManagerCard = function (manager) {
    return `
        <div class="card  shadow-5 " style="width: 20rem;">
            <div class="card-header" style="background-color: #39C0ED;">
                <h3>${manager.name}</h3>
                <h4>Manager <img src="../icons/team-management.png" alt=""></h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${manager.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// generating engineer card
const generateEngineerCard = function (engineer) {
    return `
        <div class="card  shadow-5 " style="width: 20rem; ">
            <div class="card-header" style="background-color: #39C0ED;">
                <h3>${engineer.name}</h3>
                <h4>Engineer <img src="../icons/programmer.png" alt=""></h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${engineer.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// generating intern card
const generateInternCard = function (intern) {
    return `
        <div class="card  shadow-5 " style="width: 20rem;">
            <div class="card-header" style="background-color: #39C0ED;">
                <h3>${intern.name}</h3>
                <h4>Intern <img src="../icons/internship.png" alt=""></h4>
            </div>
            <div class="card-body border border-primary">
                <div class="card" style="width: 15rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${intern.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School:${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

module.exports = generateHTML;