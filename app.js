
homeClick = 0
awayClick = 0

function homeTeam() {
    homeClick += 1
    console.log(homeClick)
    let homeTemplate = document.getElementById("homeScore") //getting id homeScore from html. Stores in a variable the JS can interact with.
    homeTemplate.innerHTML = homeClick //sets homeCLick into innerHTML language
}

function awayTeam() {
    awayClick += 1
    console.log(awayClick)
    let awayTemplate = document.getElementById("awayScore")
    awayTemplate.innerHTML = awayClick
}


