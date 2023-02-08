import { useState } from "react";
import styled from "styled-components";
import InputBox from "../Components/InputBox";
import ToDoItemList from "../Components/ToDoItemList";

const Todo = () => {
  let Token = "";
  if (!localStorage.getItem("access_Token")) {
    console.log("todo");
    window.location.replace("/signin");
  } else {
    Token = localStorage.getItem("access_Token");
  }

  const [reFetch, setReFetch] = useState(false)

  return (
    <ToDoStyle>
      {/* ToDo생성 */}
      <InputBox Token={Token} reFetch={reFetch} setReFetch={setReFetch}/>

      {/* ToDo리스트 */}
      <ToDoItemList Token={Token} reFetch={reFetch} setReFetch={setReFetch}/>

      {/* 완료한 ToDo리스트 */}
      <ToDoItemList />
    </ToDoStyle>
  );
};

export default Todo;

const ToDoStyle = styled.div``;
