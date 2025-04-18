import React from 'react'
import { useState } from 'react'
import Footer from './companents/footer/footer'
import "./App.css"

import ImgNav from "./assets/Dummy Logo.png"
import Imgsec1 from "./assets/business-3d-waving-goodbye-man-1-close-up 1.png"
import Imgsec2 from "./assets/77.png"

const App = () => {
  return (
    <div>
      <Footer img={ImgNav} />
      <div className="section1">
        <div className="contenirText">
          <p className='textGo'>Go digital with us</p>
          <p>We have designed hundreds of websites and helped <br /> improve their online performance through SEO, <br /> SEM and Social Media Marketing</p>
          <button className='btnSee'>See Portofolio</button>
        </div>
        <img src={Imgsec1} alt="" />
      </div>
      <img src={Imgsec2} className='Imgsec2' alt="" />
    </div>
  )
}

export default App


//   < input
// value = { Addname }
// onChange = {(e) => setAddname(e.target.value)}
// type = "text"
//   />
//   <button onClick={Add} >Save</button>
// {
//   data.map((e) => {
//     return (
//       <div key={e.id}>
//         <h1>{e.name}</h1>
//         <input type="checkbox" checked={e.status} />
//         <button onClick={() => deletUser(e.id)}>delet</button>
//         <button onClick={() => chekUser(e.id)}>chek</button>
//       </div>
//     )
//   })
// }




// let list = [{ name: "Hakim", id: 1, status: true }, { name: "ALi", id: 2, status: false }]
// const [data, setData] = useState(list)
// const [Addname, setAddname] = useState("")

// function deletUser(id) {
//   let newData = data.filter((e) => e.id != id)
//   setData(newData)
// }

// function Add() {
//   let newUser =
//   {
//     id: Date.now(),
//     name: Addname,
//   }
//   setData([...data, newUser])
// }

// function chekUser(id) {
//   let newData = data.map((e) => {
//     if (e.id == id) {
//       return {
//         ...e,
//         status: !e.status
//       }
//     }
//     return e
//   })
//   setData(newData)
// }