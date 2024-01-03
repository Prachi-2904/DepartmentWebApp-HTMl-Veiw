const sql = require("mysql");

const myconnection=sql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root123',
    database: 'iacsd0923',
    port:3306 
});
myconnection.connect((err)=>{
    if(!err)
    console.log("Connected succesfully");
    else
    console.log("connection error",err);
});

module.exports=myconnection;