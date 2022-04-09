const generateCards = roster => {
    if (!roster) {
        return ''
    }

    return roster.map(({name, id, email, role, ...sub}) =>
    `
    <div class="card" >
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <div class="d-flex">
              <i class="bi bi-cup"></i>
              <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email:
            <a href="mailto: ${email}" class="card-link">${email}</a>
          </li>
          ${sub.github ? `<li class="list-group-item">Github: <a href = "https://www.github.com/${sub.github}" target="_blank" class="card-link">${sub.github}</a></li>` : ""}
          ${sub.school ? `<li class="list-group-item">School: ${sub.school}</li>` : ""}
          ${sub.officeNumber ? `<li class="list-group-item">Office Number: ${sub.officeNumber}</li>` : ""}

        </ul>
        </div>
    </div>
    `
    ).join("\n")
}

module.exports = roster => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
      <title>Team Roster</title>
    </head>

    <body>
      <header>
        <h1 class="h1 bg-primary text-white√">Team Roster</h1>
      </header>
      <main>
        <div class="container">
          <div class="card-deck d-flex" style="justify-content:space-evenly">
    ${generateCards(roster)}

        </div>
        </div>
      </main>


    </body>

    </html>
    `
}