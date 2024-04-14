import './App.css';
import { Home } from './Pages/Home';
import { Route, Routes, Switch } from 'react-router-dom';
import EventPage from './Pages/Event'



function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='evento' element={<EventPage />} />
      
    </ Routes>
    </div>
  );
}

export default App;

