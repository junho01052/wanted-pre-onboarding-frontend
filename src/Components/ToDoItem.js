import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const ToDoItem = ({ Token, todo, reFetch, setReFetch }) => {
  const [editTodo, setEditTodo] = useState(todo.todo);
  const [completed, setCompleted] = useState(todo.isCompleted);
  const [isEdit, setIsEdit] = useState(false);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setReFetch(!reFetch);
    } catch (error) {
      alert(error);
    }
  };

  const cancelModify = () => {
    setIsEdit(false);
  };

  const submitEdit = (id) => {
    axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        isCompleted: completed,
        todo: editTodo,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setCompleted(!completed);
          setReFetch(!reFetch);
          setIsEdit(false);
        }
      })
      .catch((err) => alert(err));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCheckbox = (id) => {
    axios({
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        isCompleted: !completed,
        todo: todo.todo,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setCompleted(!completed);
          setReFetch(!reFetch);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <ToDoItemStyle>
      <li>
        <label>
          <input
            type="checkbox"            
            defaultChecked={completed}
            onClick={() => handleCheckbox(todo.id)}
          />
          {isEdit ? (
            <input
              data-testid="modify-input"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            ></input>
          ) : (
            <span>{todo.todo}</span>
          )}
        </label>
        {isEdit ? (
          <button
            data-testid="submit-button"
            onClick={() => submitEdit(todo.id)}
          >
            제출
          </button>
        ) : (
          <button data-testid="modify-button" onClick={() => handleEdit()}>
            수정
          </button>
        )}

        {isEdit ? (
          <button data-testid="cancel-button" onClick={() => cancelModify()}>
            취소
          </button>
        ) : (
          <button
            data-testid="delete-button"
            onClick={() => deleteTodo(todo.id)}
          >
            삭제
          </button>
        )}
      </li>
    </ToDoItemStyle>
  );
};

export default ToDoItem;

const ToDoItemStyle = styled.div``;
