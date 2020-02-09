function generateTemp(intern){
    return`
    <div class="card d-inline-flex" style="width: 18rem;">
    <div class="card-header">
        ${intern.getName()}
        <br>
        <i class="fas fa-user-tie fa-2x"></i>${intern.getRole()}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
          `
}

module.exports = generateTemp ;