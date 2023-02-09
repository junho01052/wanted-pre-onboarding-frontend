import { useState } from "react";
import styled from "styled-components";
import InputBox from "../Components/InputBox";
import SignOut from "../Components/SignOut";
import ToDoItemList from "../Components/ToDoItemList";

const Todo = () => {
  const [reFetch, setReFetch] = useState(false);

  let Token = "";
  if (!localStorage.getItem("access_Token")) {
    window.location.replace("/signin");
  } else {
    Token = localStorage.getItem("access_Token");
  }

  return (
    <div>
      <SignOut></SignOut>
      <ToDoStyle>
        <InputBox Token={Token} reFetch={reFetch} setReFetch={setReFetch} />

        <ToDoItemList Token={Token} reFetch={reFetch} setReFetch={setReFetch} />
      </ToDoStyle>
    </div>
  );
};

export default Todo;

const ToDoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;
