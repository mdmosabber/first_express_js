const express = require('express');
const app = express();
const port = 8080;


app.get('/',(req, res)=> {
    res.send('<h1>This is home page</h1>');
    res.end()
})

app.get('/about',(req, res)=> {
    res.send('<h1>This is about page</h1>');
    res.end()
})

app.get('/contact',(req, res)=> {
    res.send('<h1>This is contact page</h1>');
    res.end()
})

//for post man
app.post('/',(req, res)=> {
    res.send('<h1>This is post method run by postman</h1>');
    res.end()
})

app.put('/',(req, res)=> {
    res.send('<h1>This is put method run by postman</h1>');
    res.end()
})

app.patch('/',(req, res)=> {
    res.send('<h1>This is patch method run by postman</h1>');
    res.end()
})



app.listen(port, ()=>{
    console.log(`Server Run Successfully at http://localhost:${port}`);
})