const genManagerHTML = function(managerData) {
    return `
    <div class="card s12 m4">
        <div class="card-content center orange white-text">
            <span class="card-title">${managerData.name}</span>
            <p>Manager <span class="material-icons">groups</span></p>
            <p>ID#: ${managerData.id}</p>
            <p>Email: <a href="mailto:${managerData.email}">${managerData.email}</a></p>
            <p>Office#: ${managerData.officeNumber}</p>
        </div>
    </div>`
}
const genEngineerHTML = function(engineerData) {
    return `
    <div class="card s12 m4">
        <div class="card-content amber white-text center">
            <span class="card-title">${engineerData.name}</span>
            <p>Engineer <span class="material-icons">engineering</span></p>
            <p>ID#: ${engineerData.id}</p>
            <p>Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></p>
            <p>Github: ${engineerData.github}</p>
        </div>
    </div>`
}
const genInternHTML = function(internData) {
    return `
    <div class="card s12 m4">
        <div class="card-content white-text yellow center">
            <span class="card-title">${internData.name}</span>
            <p>Intern <span class="material-icons">supervisor_account</span></p>
            <p>ID#: ${internData.id}</p>
            <p>Email: <a href="mailto:${internData.email}">${internData.email}</a></p>
            <p>School: ${internData.school}</p>
        </div>
    </div>`
}

const genHTML = function(data) {
    let htmlArr = [];
    
    for (let i = 0; i < data.length; i++) {
        const role = data[i].getRole()

        if (role === 'Manager') {
            const managers = genManagerHTML(data[i]);
            htmlArr.push(managers);
        }
        if (role === 'Engineer') {
            const engineers = genEngineerHTML(data[i]);
            htmlArr.push(engineers);
        }
        if (role === 'Intern') {
            const interns = genInternHTML(data[i]);
            htmlArr.push(interns);
        }

        const pageData = htmlArr.join('');
        const genTeam = genTeamHTML(pageData);
        return genTeam;
    }
}

const genTeamHTML = (pageData) => {
    let pageHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>${pageData.managerData.name}'s Team</title>
        <style>
            .row .col {
            padding: 0;
            }
            .card .card-content .card-title i {
            line-height: 0;
            }
        </style>
    </head>
    <body>
        <header>
            <div class="row blue darken-3">
                <div class="s12 center">
                    <h2 class="white-text">${pageData.managerData.name}'s Team</h2>
                </div>
            </div>
        </header>
        <main>
            <div class="row container">
            
            ${pageData}

            </div>
        </main>
    </body>
    </html>`

    return pageHTML;
}
// Export gen functions
module.exports = genHTML;