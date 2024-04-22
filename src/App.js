import './App.css';
import { Home } from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import EventPage from './Pages/Event'
import Register from './Components/Register'; 



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/evento' element={<EventPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

