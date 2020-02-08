function generateTemp(){
    return`
    <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${manager.name}
            </div>
            <ul class="list-group list-group-flush">
              <li c
              lass="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          `
}

module.exports = generateTemp ;