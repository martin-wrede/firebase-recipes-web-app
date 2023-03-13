
import { useState } from "react"
import FirebaseAuthService from "./FirebaseAuthService"
import LoginForm from "./components/LoginForm"
import './App.css'


 import firebase from './FirebaseConfig'


function App() {
  
  const [user, setUser] = useState(null)

  FirebaseAuthService.subscribeToAuthChanges(setUser)

  return (
    <div className="App">
    <div  className="title-row">
    <h1  className="title">Firebase Recipe</h1>
    <LoginForm existingUser={user}></LoginForm>
    </div>
    </div>
  )
}

export default App
 