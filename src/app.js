require("./db/connection")
const yargs = require('yargs')
const {addUser, deleteUser, addMovie, addGenre, list, deleteMovie} = require("./utils")
const command = process.argv[2]
const user = yargs.argv.user
const pass = yargs.argv.pass
const title = yargs.argv.title
const actor = yargs.argv.actor
const watched = yargs.argv.watched
const genre = yargs.argv.genre

const app = () => {
    if (command === 'add user'){
        addUser(user, pass)
    } else if (command === 'delete user'){ 
        deleteUser(user, pass)
    } else if (command === 'add movie'){
        addMovie(title, actor, genre)
    }  else if (command === 'add genre'){
        addGenre(genre)
    } else if (command === 'list'){
        list()
    } else if (command === 'delete movie'){
        deleteMovie(title)
    } 
}

app()