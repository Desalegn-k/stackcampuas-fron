import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import Fottor from './Fottor.jsx'
import '../componenets/SharedLayout.css'


export default function SharedLayout() {
  return (
    <div className="site-layout">
      <Header />
      <div className='main'>
        <Outlet />
      </div>
      <Fottor />
    </div>
  );
}
