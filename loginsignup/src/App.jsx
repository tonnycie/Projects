import { Formik, Form, Field, ErrorMessage } from 'formik';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Signup } from './Pages/Signup';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Layout } from './Layout';



function App() {
  
return (
    <Router>
      
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      
    </Router>
  );
  
}

export default App
