const app = require('express')()
const PORT = 5555

app.get('/',(req,res) => {
    console.log('Api: Getting /, response JSON')
    res.send({
        name: 'Chinurum',
        age: 21
    })
})



app.listen(PORT,(req,res)=>{
    console.log('listening')
})

