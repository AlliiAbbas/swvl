import React from 'react'
import Header from './Header'
import ContainerOne from './ContainerOne'
import ContainerTwo from './ContainerTwo'
import ContainerThree from './ContainerThree'
import ContainerFour from './ContainerFour'
import ContainerFive from './ContainerFive' 
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import {  setOff } from '../redux/headerSlice'

export default function SwvlEnglish() {
  const dispatch = useDispatch()
  const {lang} = useSelector((state)=> state.langHandl)
  const handlLang =()=>{
    if(lang === false){
      dispatch(setOff())
    }
    
  }
  return (
    <div onClick={handlLang}>
        <Header />
        <ContainerOne />
        <ContainerTwo />
        <ContainerThree />
        <ContainerFour />
        <ContainerFive />
        <Footer />
    </div>
  )
}
