const express = require('express')
const app = express();
app.use(express.json());

app.get('/test',async(requestAnimationFrame,res)=>{
    res.send("Hi,there!")
})

const port=8888;

    app.listen(port,()=>{
        console.log(`server is running sucessfully at http://localhost:${port}`)

    })

app.post('/submit',async(res,req)=>{
    try {
        const {username, email , password , dateofbirth }= res.body;
        if(!username){
            res.status(400).json({message:"Username cnannot be empty"})

        }
        if(!email){
            res.status(400).json({message:"Email cannot be empty"})

        }
        const len=password.length();
        if(len<8||len>16){
            res.status(400).json({message:"Password lenght should be greater than 8 or less than or equal to 16"})
        }
            res.send("sucess")
        if(!dateofbirth){
            res.status(400).json({message:"All should be in method of DDMMYY"})
        }
    } catch (error) {
        console.log(error.message);
    }
})