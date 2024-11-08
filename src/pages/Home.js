import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../slices/userSlice'
import { addNums } from '../slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dipatch = useDispatch()
    const selector = useSelector((state)=>state.usersInfo.nums)
    const navigate = useNavigate()
    let googles = {
        name:"",
        age:"",
        email:"",
        contact:"",
    }
    const [formInput,setFormInput] = useState(googles)

    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormInput((currentInput) => {
            return {...currentInput,[name] : value}
        })
    }

    console.log(formInput)

    const addUser = (event)=>{
        event.preventDefault()
        dipatch(setUsers(formInput))
        navigate('/about')
    }


  return (
    <div style={{textAlign : "center"}}>
        <form action=" ">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" name='name' value={formInput.name} onChange={handleChange}/>
            <br />
            <label htmlFor="">Age</label>
            <br />
            <input type="number" name='age' value={formInput.age} onChange={handleChange}/>
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" name='email' value={formInput.email} onChange={handleChange}/>
            <br />
            <label htmlFor="">Contact</label>
            <br />
            <input type="number" name='contact' value={formInput.contact} onChange={handleChange}/>
            <br />
            <button onClick={addUser}>Submit</button>
        </form>
        </div>
  )
}

export default Home