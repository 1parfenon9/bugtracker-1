import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create/Create';
import Authorization from './Components/Autorization/Autorization';
import Registration from './Components/Registration/Registration';
import Tasks from './Components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
