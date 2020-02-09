function generateTemp(intern){
    return`
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${intern.getName()}
              ${intern.getRole()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${intern.getId()}</li>
              <li class="list-group-item">${intern.getEmail()}</li>
              <li class="list-group-item">${intern.school}</li>
            </ul>
          </div>
          `
}

module.exports = generateTemp ;