import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import ListUser from './components/Listuser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h5>React CRUD Operation using PHP API and MYSQL</h5>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              {/* Add a leading slash before "user/create" */}
              <Link to="/user/create">Create Users</Link>
            </li>
          </ul>
        </nav>
      
      <Routes>
        <Route index element={<ListUser />} />
        {/* Add a leading slash before "user/create" */}
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/:id/edit" element={<EditUser/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
