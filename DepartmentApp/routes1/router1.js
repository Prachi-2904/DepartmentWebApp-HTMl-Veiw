const express = require("express");
var myroute = express.Router();

var connection = require("../db1/dbconnect")

myroute.get("/dept",function(req,resp){

    connection.query("select * from dept",(err,data,fields)=>{
        if(err){
            console.log("No data found");
        }
        else{
            // console.log(data);
            resp.render("index",{deptarr:data});
        }

    })
});
myroute.get("/adddept",function(req,resp){
    resp.render("add-dept");
});

myroute.post("/insertdept",function(req,resp){
    connection.query("insert into dept values(?,?,?)",[req.body.DEPTNO,req.body.DNAME,req.body.LOC],(err,result)=>{
        if(err){
        resp.status(500).send("No data found")
        }
        else{
        resp.redirect("/dept")
        }
    });
});


myroute.get("/deletedept/:DEPTNO",function(req,resp){
    connection.query("delete from dept where deptno=?",[req.params.DEPTNO],(err,result)=>{
        if(err){
            resp.status(500).send("no data deleted")
        }
        else{
            resp.redirect("/dept");
        }
    })
});
module.exports=myroute;