import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyle>
      <h1>ToDoList</h1>
      <div className="buttonContainer">
        <Link to="/signin">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
      <Link to="/todo">
        <div className="todo">ToDoList 작성하기</div>
      </Link>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;

  h1 {
    margin-bottom: 100px;
    font-size: 70px;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 150px;
    height: 48px;
    padding: 10.4px;
    margin: 5px 2px 5px 2px;
    background-color: black;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  .todo {
      margin-top: 20px;
      font-size: 35px;
  }
`;
