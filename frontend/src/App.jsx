import './App.css'
import  { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'
import ProfilePage from './pages/ProfilePage'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/community/:communityId' element={<CommunityPage/>}></Route>
        <Route path='/user/:userId' element={<ProfilePage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
