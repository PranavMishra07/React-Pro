import { useEffect, useState } from 'react'

const App = () => {
  let [formdata,setformdata]=useState({
    username:"",age:"",contact:""
  })
  let [Userdata,setUserdata]=useState()
  function inputvalue(e){
         console.log(e.target.value)
         const {name,value}=e.target
         setformdata({...formdata,[name]:value})
  }

  function finalsubmit(e){
         e.preventDefault()
         localStorage.setItem("userdata",JSON.stringify(formdata))
  }
  useEffect(()=>{
    let localdata=JSON.parse(localStorage.getItem("userdata"))
    setUserdata(localdata)
  },[])
  return (
    <div>
     <h1>{} </h1>
      <form onSubmit={finalsubmit}>
        <h1>Name{formdata.username}</h1>
        <h1>Age{formdata.age}</h1>
        <h1>Contact{formdata.contact}</h1>
        <label  >Name</label>
        <input type="text" name="username" onChange={inputvalue} /> <br /> <br />
        <label>Age</label>
        <input type="text" name="age" onChange={inputvalue} /> <br /> <br />
        <label htmlFor="">Contact</label>
        <input type="text" name="contact" onChange={inputvalue} /> <br /> <br />
        <input type="submit" />
      </form>

      
    </div>
  )
}

export default App
