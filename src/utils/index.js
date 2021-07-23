const sql = require ("../db/connection")

exports.addUser = (username, password) => {
    try{
        const user = [username, password]
        sql.query("INSERT INTO users SET username = ?, password =?", user)

        //MySQL
        // INSERT INTO users SET username = '', password = ''

    }catch (error){
        console.log(error)
    }
    sql.close
}

exports.deleteUser = (username, password) => {
    try{
        const user = [username, password]

        sql.query("delete from users where username = ? and password = ?", user)
        console.log (`The user ${username} has been sucessfully deleted`)

        //MySQL
        //delete from users where username = '' and password = '';

    }catch (error){
        console.log(error)
    }
}

exports.addMovie = (title, actor, genre) => {
    try{
        const newMovie = [title, actor, genre]
        sql.query("Insert INTO movies SET title = ?, actors = ?, genre = ?", newMovie)
        console.log(`The movie ${title} has been added with the actor/s being ${actor} and genre = ${genre}`)
    }catch (error){
        console.log(error)
    }
}

exports.addGenre = (genre) => {
    try{
        sql.query("INSERT IGNORE INTO genre (genreType) values(?)", genre)
        sql.query("insert into genre set genreType = ? ", genre)

        //trying to insert if not duplicate

    }catch (error){
        console.log(error)
    }
    sql.close
}

exports.list = () => {
    try{
        sql.query("SELECT * FROM movies ", (error, results, fields)=>{
            console.log( results.toString())
            console.log( JSON.stringify( results))
        })

    }catch (error){
        console.log(error)
    }
    sql.close
}

exports.deleteMovie = (title) => {
    try{
      
        sql.query("delete from movies where title = ?", title)
        console.log (`The movie ${title} has been sucessfully deleted`)

    }catch (error){
        console.log(error)
    }
}