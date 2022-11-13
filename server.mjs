import  express  from 'express';
const app = express();
const port = process.env.PORT || 3000

app.get('/water', (req, res) => {
  res.send('there is water!')
})
app.get('/food', (req, res) => {
    res.send('there is food')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})