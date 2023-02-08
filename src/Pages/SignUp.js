import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  //이메일, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleButton = async () => {
    axios({
      url: "https://pre-onboarding-selection-task.shop/auth/signup",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("성공");
          alert("회원가입에 성공하였습니다");
          navigate("/signin");
        }
      })
      .catch((err) => alert(err));
  };

  const emailVaidity = email.includes("@");
  const passwordValidity = password.length >= 8;

  if (localStorage.getItem("access_Token")) {
    window.location.replace("/todo");
  }

  return (
    <SignUpStyle>
      <input
        data-testid="email-input"
        type="email"
        placeholder="사용할 이메일을 입력해주세요"
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailVaidity ? (
        <p className="valid">사용가능한 이메일입니다</p>
      ) : (
        <p>이메일에는 '@'가 포함되어야 합니다</p>
      )}

      <input
        data-testid="password-input"
        type="password"
        placeholder="사용할 비밀번호를 입력해주세요"
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordValidity ? (
        <p className="valid">사용가능한 비밀번호입니다</p>
      ) : (
        <p>비밀번호는 8자 이상이어야 합니다</p>
      )}

      <button
        data-testid="signin-button"
        onClick={handleButton}
        disabled={!emailVaidity || !passwordValidity ? "disabled" : undefined}
      >
        회원가입
      </button>
    </SignUpStyle>
  );
};

export default SignUp;

const SignUpStyle = styled.div`
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
    margin: 16px 2px 22px 2px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
  }

  p {
    font-size: 15px;
    color: #ff8282;
  }

  .valid {
    color: #0b96fe;
  }
`;
