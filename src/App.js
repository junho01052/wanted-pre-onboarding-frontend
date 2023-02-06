import { Routes, Route } from "react-router-dom";

import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Todo from "./Components/ToDo";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
