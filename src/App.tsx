import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import location from './assets/json/location.json'
import Map from './pages/Map'
import MyPage from './pages/MyPage'
import MainPage from './pages/MainPage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import UserInfoAlter from './pages/UserInfoAlter'
import { EmailCheck } from './pages/EmailCheck'

export interface UserInfo {
  userId: number;
  email: string;
  password: string;
  name: string;
  birth: string;
  sex: number;
  addressName: string;
  let: number;
  lnt: number;
}

export type AcademyType = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  location: string;
};

const App = () => {
  const [locations, setLocations] = useState("경상북도 의성군 봉양면");
  const academyList: AcademyType[] = location.positions;
  const [citation, setCitation] = useState<string>('인증번호 발송')

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage location={locations} />} />
        <Route path='/map' element={<Map academyList={academyList} location={locations} setLocation={setLocations} />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register citation={citation} />} />
        <Route path='/alteruser/:id' element={<UserInfoAlter />} />
        <Route path='/emailCheck/:email' element={<EmailCheck setCitation={setCitation} />} />
      </Routes>
    </div>
  )
}

export default App;