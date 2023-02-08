import styled from "styled-components";
import axios from "axios";

const ToDoItem = ({Token, el, reFetch, setReFetch}) => {

    const deleteTodo = async (id) => {
        try {
          await axios.delete(
            `https://pre-onboarding-selection-task.shop/todos/${id}`,
            { headers: {
                "Authorization": `Bearer ${Token}`,
                "Content-Type": "application/json"}  }
          );
          setReFetch(!reFetch)
        } catch (error) {
          alert(error);
        }
      }

  return (
    <ToDoItemStyle>
      <li>
        <label>
          <input type="checkbox" />
          <span>{el.todo}</span>
          <button type="button">수정</button>
          <button type="button" onClick={() => deleteTodo(el.id)}>삭제</button>
        </label>
      </li>
    </ToDoItemStyle>
  );
};

export default ToDoItem;

const ToDoItemStyle = styled.div``;
