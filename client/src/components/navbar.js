import { Link, Navigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
export const Navbar = ()=>{
    const [cookies, setCookies] = useCookies(["access_token"])
const navigate = useNavigate();
    const Logout = () =>{
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return (<>
   
    <div className="navbar">
    {/* <Link to="/" className="logo">
          recipe<span><strong>Talk</strong></span>
        </Link>     */}
        <div className="logo">
            <span>recipe<span><strong>Talk</strong></span>
</span>
        {/* recipe<span><strong>Talk</strong></span> */}
  
        </div>
        <div className="content">
        <Link to="/" >Home</Link>

<Link to="/create-recipe">Create Recipe</Link>
<Link to="/Search">Search Recipes</Link>
{!cookies.access_token ? (<Link to="/auth">Login/Register</Link>) : (<button onClick={Logout}>Logout</button>)}
        </div>
   


    </div></>)
}