import './App.css';
import CharacterList from './pages/CharacterList';
import { Routes, Route } from 'react-router-dom';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/abcd" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
