import './App.css';
import characters from './data/characters.json';
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CharactersPage from './Pages/CharactersPage';

function App() {
  
  return (
    <>
      
      <AboutPage />
      <ContactPage />
      <CharactersPage />
      
    </>
  );
}

export default App