function generateTemp(engineer){
    return`
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${engineer.getName()}
              ${engineer.getRole()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${engineer.getId()}</li>
              <li class="list-group-item">${engineer.getEmail()}</li>
              <li class="list-group-item">${engineer.githubName}</li>
            </ul>
          </div>
          `
}

module.exports = generateTemp ;