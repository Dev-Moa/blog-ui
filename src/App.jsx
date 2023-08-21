import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import { ThemeProvider } from "@/components/theme-provider"
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='px-[15%] py-[3%]'>

        {/* header */}
        <Header />
        {/* main */}
        <div className='my-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='posts/:postId' element={<SinglePost />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default App