var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;

var config={
    user:'karthikskgit',
    database:'karthikskgit',
    host:'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test', function (err,result){
        if (err){
        res.status(500).send(err.toString());
    }
    else {
        res.send(JSON.stringify(result));
    }
    });
});


var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
    });
    
    
var names=[];
app.get('/submit-name',function(req,res) {
    // Getting name from requst
    console.log("sai");
    var name=req.query.name;
    names.push(name);
    // json obj notation
    res.send(JSON.stringify(names));
    
});



app.get('/:articleName',function(req,res){
pool.query('SELECT * FROM article WHERE title ='*+req.params.articleName+"'", function(err,result) {
    if (err){
        res.status(500).send(err.toString());
        
    }else{
        if(result.roows.length === 0) {
            res.status(404).send('Article not found');
            
        }else {
            var articleData=result.rows[0];
            res.send(createTemplate(articleData));
        }
        }
    });
});
    

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui,madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
