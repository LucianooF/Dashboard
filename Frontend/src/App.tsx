import React, { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm.jsx'
import MainPage from './components/MainPage.jsx'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {



  return (
    <>
      <div>
      {/* <LoginForm  /> */}
        <div className='container-fluid'>
          <MainPage />
          


        </div>
        

      
      </div>
    </>
  )
}

export default App
