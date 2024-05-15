import React, { useState } from 'react'
import '../stylesheets/LoginForm.css'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
function LoginForm(props) {

    const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const [userData, setUserData] = useState({
        user: '',
        password: ''
    })
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target

        setUserData({
            ...userData,
            [name] : value
        })
        console.log(userData)
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        try {
            const res = await axios.post('http://localhost:3000/api/login', userData)
            console.log(res.data,res.json)
            toast.success('Iniciando sesion...')
            //if(!res.status) return [new Error(`error login user ${userData.name} ${res.statusText}`)]
            const json = res

            return [undefined, json.data]
            
        } catch(error) {
            if(error instanceof Error) {
                console.log('aca')
                toast.error(error.response.data.message)
                return [error]
            }
            
        }
        return [new Error('Unkown error')]
    }

    return (
    <div className='login-container'>
        <Toaster />
        <h1>Dahsboard</h1>
        <form 
            className='login-form'
            onSubmit={handleSubmit}
            >
            <input
            className='login-input'
            type='text'
            placeholder='Username'
            name='user'
            onChange={handleChange}
            />
            <input
            className='login-input'
            type='text'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            />
            <button 
                className='login-button'>
                Login
            </button>
        </form>
    </div>
    )
}

export default LoginForm;