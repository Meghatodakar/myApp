import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import TransactionsDetails from "./Components/TransactionsDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route exact path="/account/:index" element={<UserPage />} />
        <Route
          exact
          path="/transactions/:index"
          element={<TransactionsDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
