import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const SignOut = () => {

    const navigate = useNavigate()

    const handleSignOut = () => {
        localStorage.removeItem("access_Token")
        navigate("/")
    }

    const Token = localStorage.getItem("access_Token")


    return (        
        <SignOutStyle>
            {Token? <div onClick={handleSignOut}>SignOut</div> : null}            
        </SignOutStyle>
    );
}
 
export default SignOut;

const SignOutStyle = styled.div` 
 
  margin: 2vh 0 0 2vh;
  cursor: pointer;
  font-size: 15px;
`