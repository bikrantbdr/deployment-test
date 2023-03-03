import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({type:"LOGIN_START"})
      try {
        const res = await axios.post("/api/auth/login", credentials)
        dispatch({type:"LOGIN_SUCCESS", payload: res.data})
        navigate('/')
      } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
      }
    }
  return (
    <>
        <input name='username' onChange={ handleChange } placeholder="username" />
        <input name='password' onChange={ handleChange } placeholder="password" />
        <button disabled={loading} onClick={ handleSubmit }>Submit</button>
        { error && <span>{ error.message }</span> }
    </>
  )
}
