import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT ?? 3000

type user = {user: string, password:string}
const usersData: user[] = [
    {user: "test123", password: "123"}
]

app.use(cors())

app.get('/api/login', async (req, res) => {
    const { user, password} = req.body
    if (!user){
        return res.status(500).json({
            message: 'user and password is required'
        })
    }
    const userFound = usersData.find(u => u.user === user)

    if(!userFound) {
        return res.status(404).json({
            message: 'incorrect user'
        })
    }
    if(userFound.password !== password) {
        return res.status(404).json({
            message: 'incorrect password'
        })
    } 

    res.send('login successful')
})

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`)
})