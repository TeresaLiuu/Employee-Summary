function generateTemp(manager){
    return`
    <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${manager.getName()}
            ${manager.getRole()}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.getId()}</li>
              <li class="list-group-item">${manager.getEmail()}</li>
              <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
          </div>
          `
}

module.exports = generateTemp ;