const sql = require('./mysql.scheme')


const getData = (req, res) => {
  sql.conn.query(sql.getter, function(err, result, fields) {
    if(err) throw err;
    res.json(result)
  })
}

const addData = (req, res) => {
  const newData = {
    email: req.body.email,
    password: req.body.password
  }
  
  sql.conn.query(sql.posting(newData.email, newData.password), (err, result, fields) => {
    if (err) throw err;
    res.json(fields)
  })
}


const getUserData = (req, res) => {
  sql.conn.query(sql.getUser, (err,result,fields) => {
    if(err) throw err;
    res.json(result);
  })
}

const addUserData = (req, res) => {
  const newUserData = {
    name: req.body.name,
    alamat: req.body.alamat
  }
  sql.conn.query(sql.postUsers(newUserData.name, newUserData.alamat), (err, result, fields) => {
    if(err) throw err;
    
    res.json('fetch data');
  })
}

const controller = {
  getData,
  addData,
  getUserData,
  addUserData
}

module.exports = controller;