var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views', './views');

app.use(express.static('public'));

app.get('/topic', function(req, res){
    var topics = ['JavaScript is ...', 'NodeJS is ...', 'Express is ...'];
    var output = `
    <a href = "/topic?id=0">JavaScript</a><br>
    <a href = "/topic?id=1">NodeJS</a><br>
    <a href = "/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
})

app.get('/mina', function(req, res){
    res.send('Hello Mina, <img src = "/mina01.jpg">');
})

app.get('/template', function(req, res){
    res.render('temp', {time:Date(), _title:'jade'});
})

app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i = 0 ; i < 5 ; i++){
        lis = lis + '<li>coding</li>'
    }
    
    var time = Date();
    var output = `
    <!DOCTYPE <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
        <script src="main.js"></script>
    </head>
    <body>
        Hello Static
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
})

app.get('/', function(req, res){
    res.send('Hello home page'); 
});

app.get('/login', function(req, res){
    res.send('Login please');
});

app.listen(3000, function(){
    console.log('Connected 3000 port!')
});