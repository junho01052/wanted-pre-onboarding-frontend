import { Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Todo from "./Pages/ToDo";

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
