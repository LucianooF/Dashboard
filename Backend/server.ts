import express from 'express'
import cors from 'cors'
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT ?? 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

type user = {user: string, password:string}
const usersData: user[] = [
    {user: "test123", password: "123"}
]

app.use(cors())

app.post('/api/login', async (req, res) => {
    const { user, password} = req.body
    console.log(req.body)
    if (!user || !password){
        return res.status(500).json({
            message: 'user and password is required'
        })
    }
    const userFound = usersData.find(u => u.user === user)

    if(!userFound) {
        return res.status(401).json({
            message: 'Incorrect user'
        })
    }
    if(userFound.password !== password) {
        return res.status(401).json({
            message: 'Incorrect password'
        })
    } 
    res.json({
        message: "Login Successful",
        user: userFound
    })
})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`)
})