import { Link,Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
        <h1>LOGO</h1>
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/sign">Sign-in</Link></li>
        </ul>
      </nav>
     
     <div>
        <Outlet/>
     </div>

       <footer >
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallary</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallary</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallary</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallary</li>
        </ul>
       </footer>
    </div>
  )
}

export default Layout
