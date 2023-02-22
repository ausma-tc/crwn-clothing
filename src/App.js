import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
