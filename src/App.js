import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import { auth } from './fireBase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/counter/userSlice'
import SignUpScreen from './screens/SignUpScreen'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          {!user ? (
            <Route exact path='/' element={<HomeScreen />} />
          ) : (
            <Route path='/login' element={<LoginScreen />} />
          )}
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/signup' element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
