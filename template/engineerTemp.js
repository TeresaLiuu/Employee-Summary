function generateTemp(engineer){
    return`
    <div class="card d-inline-flex" style="width: 18rem;">
    <div class="card-header">
        ${engineer.getName()}
        <br>
        <i class="fas fa-user-tie fa-2x"></i>${engineer.getRole()}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email:${engineer.getEmail()}</li>
        <li class="list-group-item">Github: ${engineer.githubName}</li>
    </ul>
</div>
          `
}

module.exports = generateTemp ;