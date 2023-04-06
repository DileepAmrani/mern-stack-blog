import './App.css';
import { Navbar } from './componets';
import { Routes, Route } from 'react-router-dom'
import { Login, Register, Posts } from "./pages"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
