import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    let lala = {
      email: email,
      password: password,
    };

    try {
      let response = await axios.post(
        `https://pre-onboarding-selection-task.shop/auth/signin`,
        lala
      );

      localStorage.setItem("access_Token", response.data.access_token);
      alert("로그인을 성공하였습니다.");
      navigate("/todo");
      console.log(response);
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error.response);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
      setEmail("");
      setPassword("");
    }
  };

  if (localStorage.getItem("access_Token")) {
    window.location.replace("/todo");
  }

  return (
    <SignInStyle>
      <input
        data-testid="email-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        data-testid="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        data-testid="signin-button"
        disabled={email.includes("@") && password.length >= 8 ? false : true}
        onClick={handleLogin}
      >
        로그인
      </button>

      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </SignInStyle>
  );
};

export default SignIn;

const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;

  input {
    font-size: 13px;
    text-decoration: none solid rgb(12, 13, 14);
    color: #0c0d0e;
    height: 28px;
    width: 268px;
    border: 1px solid #babfc4;
    margin: 5px 0 5px 0;
    cursor: text;
  }

  button {
    width: 268px;
    height: 48px;
    padding: 10.4px;
    margin: 16px 2px 0 2px;
    background-color: black;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;
