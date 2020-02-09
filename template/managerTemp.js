function generateTemp(manager){
    return`
    <div class="card d-inline-flex" style="width: 18rem;">
        <div class="card-header">
            ${manager.getName()}
            <br>
            <i class="fas fa-user-tie fa-2x"></i>${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
          `
}

module.exports = generateTemp ;