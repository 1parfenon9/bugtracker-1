import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create/Create';
import Authorization from './Components/Autorization/Autorization';
import Registration from './Components/Registration/Registration';
import Tasks from './Components/Tasks/Tasks';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/main" element={<Tasks />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/login"
          element={<Authorization setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/registration"
          element={<Registration setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
