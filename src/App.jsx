import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dasdboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// import axios from "axios";

function App() {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => setData(res.data))
  // }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p>
                hello world!!!
                <button>Login</button>
              </p>
            </div>
          }
        />

        <Route path="/dashbord" element={<Dasdboard />} />
      </Routes>
    </Router>
    // <div className="Auth-form-container">
    //   {/* <img src="https://www.seydevplus.com/wp-content/uploads/devplus-logo-no-tagline-01.png" /> */}
    //   <div></div>
    //   <div>
    //     <form className="Auth-form">
    //       <div className="Auth-form-content">
    //         <h3 className="Auth-form-title">Login</h3>
    //         <div className="form-group mt-3">
    //           <label>Email</label>
    //           <input
    //             type="email"
    //             className="form-control mt-1"
    //             placeholder="Enter email"
    //           />
    //         </div>
    //         <div className="form-group mt-3">
    //           <label>Password</label>
    //           <input
    //             type="password"
    //             className="form-control mt-1"
    //             placeholder="Enter password"
    //           />
    //         </div>
    //         <div className="d-grid gap-2 mt-3">
    //           <button type="submit" className="btn btn-primary">
    //             Login
    //           </button>
    //         </div>
    //         <p className="forgot-password text-right mt-2">
    //           Forgot <a href="#">password?</a>
    //         </p>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default App;
