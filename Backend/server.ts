import express from 'express'
import cors from 'cors'
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT ?? 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

type user = {user: string, password: string}
const usersData: user[] = [
    {user: "test123", password: "123"}
]

type order = {sku: string, total: number, channel:string , date: Date}
const DB: order[] = [
    {sku: "azul", total: 125, channel: "MercadoLibre", date: new Date(2024,5,21 )},
    {sku: "amarillo", total: 140, channel: "MercadoLibre", date: new Date(2024,4,21) },
    {sku: "rojo", total: 130, channel: "MercadoLibre", date: new Date(2024,4,19) },
    {sku: "verde", total: 100, channel: "AMZ", date: new Date(2024,5,10) },
    {sku: "violeta", total: 90, channel: "AMZ", date: new Date(2024,5,2) }
]

interface QueryParams {
    sku?: string;
    channel?: string;
    dateFrom?: Date; // O el tipo correcto para la fecha
    dateTo?: Date; // O el tipo correcto para la fecha
}

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

app.get('/api/query', async (req, res) => {
    const { sku, channel, dateFrom, dateTo } = req.query
    if(typeof(sku)!='string'){
        throw new Error("sku has to be of type string")
    }
    if(typeof(channel)!='string'){
        throw new Error("channel has to be of type string")
    }
    if(dateFrom instanceof Date!=true || dateTo instanceof Date!=true){
        throw new Error("dates need to be of type date")
    }


    

    const filteredData = DB.filter(order => {
        return  (!sku || order.sku.includes(sku) ) &&
                (!channel || order.channel.includes(channel)) &&
                (!dateFrom || order.date >= new Date(dateFrom)) &&
                (!dateTo || order.date <= new Date(dateTo) )
    })



    res.json(filteredData)
})


app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`)
})