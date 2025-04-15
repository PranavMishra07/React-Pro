import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Insert() {
    let userNavigator = useNavigate()
    let [frmdata, setfrmdata] = useState({
        name: "", age: "", contact: "", city: ""
    })
    function handleinput(e) {
        const { name, value } = e.target
        setfrmdata({...frmdata, [name]: value })
    }
    function finalsubmit(e) {
        e.preventDefault()
        console.log(frmdata);
        axios.post("http://localhost:3000/userdata",frmdata)
        userNavigator("/fetch")
    }
    return (
        <>
            <form onSubmit={finalsubmit}>
                <label >Name</label>
                <input type="text" onChange={handleinput} name='uname'  /> <br />
                <label >Age</label>
                <input type="text" onChange={handleinput} name='age'  /> <br />
                <label >Contact</label>
                <input type="text" onChange={handleinput} name='contact' /> <br />
                <label >City</label>
                <input type="text" onChange={handleinput} name='city'  /> <br />
                <input type="submit"/>
            </form>
        </>
    )
}
export default Insert