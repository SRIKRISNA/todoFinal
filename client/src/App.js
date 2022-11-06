import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import TODO from './components/todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="todo" element={<TODO/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
