import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Fetchapi() {
  let [apidata, setapidata] = useState([])
  let [frm, setfrm] = useState(false)
  let [editdata,setEditdata]=useState()
  function mydelete(id) {
    axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(r = alert("Data deleted"))
  }
  useEffect(() => {
    axios.get('http://localhost:3000/userdata').then(res => setapidata(res.data))
  }, [mydelete])

  function handleinput(e){
   const {name,value}=e.target
   setEditdata({...editdata,[name]:value})
  }
  function finaleditsubmit(e){
    e.preventDefault()
    axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
    .then(r=>alert("Edit Successfull"))
    setfrm(false)
  }

  return (<>
    <h1>Get Data from Api</h1>
    <table border={"2"}>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>contact</th>
        <th>city</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
      {
        apidata.map((e) => {
          return <tr>
            <td>{e.id}</td>
            <td>{e.uname}</td>
            <td>{e.age}</td>
            <td>{e.contact}</td>
            <td>{e.city}</td>
            <td><button onClick={() => mydelete(e.id)} >Delete</button></td>
            <td><button onClick={() => { setfrm(true),setEditdata(e) }} >Update</button></td>
          </tr>
        })
      }
    </table>

    {
      frm && (
        <>
          <h1>Edit Form</h1>
          <form onSubmit={finaleditsubmit}>
            <label> Id</label>
            <input type="text" value={editdata.id} onChange={handleinput}  name="id" id="" readOnly /> <br />
            <label >Name</label>
            <input type="text" onChange={handleinput} name='uname' value={editdata.uname}/> <br /> 
            <label >Age</label>
            <input type="text" onChange={handleinput} value={editdata.age} name="age" id="" /> <br />
            <label >Contact</label>
            <input type="text" onChange={handleinput} value={editdata.contact} name="contact" id="" /> <br />
            <label >City</label>
            <input type="text" onChange={handleinput} value={editdata.city} name="city" id="" /> <br /> <br />
           
            <input type="submit" name="" id="" /> <br />
          </form>
        </>
      )
    }
  </>
  )
}



export default Fetchapi
