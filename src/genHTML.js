// Import fs module
const fs = require('fs');

const genHTML = teamInfo => {
    const manager = teamInfo.manager.map(function(data) {
        let managerHTML = `
        <div class="card s12 m4">
            <div class="card-content center">
                <span class="card-title">${data.name}</span>
                <p>Manager</p>
                <p>ID#: ${data.id}</p>
                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p>Office#: ${data.officeNumber}</p>
            </div>
        </div>`
        return managerHTML;
    })

    const engineer = teamInfo.engineer.map(function(data) {
        let engineerHTML = `
        <div class="card s12 m4">
            <div class="card-content center">
                <span class="card-title">${data.name}</span>
                <p>Engineer</p>
                <p>ID#: ${data.id}</p>
                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p>Github: ${data.github}</p>
            </div>
        </div>`
        return engineerHTML;
    })

    const intern = teamInfo.intern.map(function(data){
        let internHTML = `
        <div class="card s12 m4">
            <div class="card-content center">
                <span class="card-title">${data.name}</span>
                <p>Engineer</p>
                <p>ID#: ${data.id}</p>
                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                <p>School: ${data.school}</p>
            </div>
        </div>`
        return internHTML;
    })
    
    return []
}

// Export gen functions
module.exports = genHTML;