import express from 'express';
const app = express()
const port = 3000

let counter = 0;

console.log("het werkt");

app.get('/counter', (req, res) => {
    let increment = 1
    if(req.query.incrementby){
        increment = Number ( req.query.incrementby );
    }
    counter = counter + increment;
    res.send("totaal: " + counter);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})