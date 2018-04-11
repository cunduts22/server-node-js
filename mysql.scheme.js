const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sorycundu'
})
const getter = "SELECT * FROM users";
const poster = "INSERT INTO users (email, password) VALUES";
function posting(email,password) {
    return poster+" ('"+email+"','"+password+"')";
} 

const getUser = "SELECT * FROM members";
const postUser = "INSERT INTO members (name, alamat) VALUES";
function postUsers(name, alamat) {
  return postUser+"('"+name+"','"+alamat+"')";
}



const sql = {
  getter,
  posting,
  getUser,
  postUsers,
  conn
}

module.exports = sql;