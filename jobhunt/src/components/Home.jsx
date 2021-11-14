import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const NavWrapper = styled.div`
.navbar{
    text-align: left;
    display: grid;
    grid-template-columns: 3fr 2fr 1.5fr 1.5fr 1.5fr;
    background-color: tomato;
    padding: 10px;
    color: white;
    font-size: larger;
    font-weight: bolder;
}
`

const Home = () => {
    return <NavWrapper>
        <div className="navbar">
            <span>Goodera Job Hunt</span>
            <span>Home</span>
            <span>About</span>
            <span>Login</span>
            <NavLink to="/post"><button>Post a job</button></NavLink>
        </div>
         <div>hom epage</div>
        </NavWrapper>
}
export {Home}