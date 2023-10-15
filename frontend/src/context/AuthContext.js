import React, { createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'; 
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    // localStorage.setItem('   
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    const history = useHistory()

    let loginUser = async(e ) => {

        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/token/', { 
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body:JSON.stringify({ 
            'username':e.target.username.value,
            'password':e.target.password.value
        }),
        })
        let data = await response.json()
        console.log("data:",  data)
        console.log("response:",response)
        if(response.status === 200){

            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history.push('/')
        } else {
            console.log("Invalid credentials")
        }
    } 
    let contextData = {  
        user:user,
        loginUser:loginUser

    }
    return(
        <AuthContext.Provider value={contextData}> 
        {children}
        </AuthContext.Provider>
    )
}