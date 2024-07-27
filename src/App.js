import logo from './logo.svg';
import './App.css';
import Shopping from './components/Shopping';
import MemoryGame from './components/MemoryGame';
import ComponentLocalStorage from './components/ComponentLocalStorage';

function App() {
  const images = [
        "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
        "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
        "https://images.unsplash.com/photo-1520763185298-1b434c919102",
        "https://images.unsplash.com/photo-1442458017215-285b83f65851",
        "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
        "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
   ]
  return (
    <div className="App">
        <div>testing</div>
        <Shopping/>
        {/*<MemoryGame images={images}/>*/}
	{/*<ComponentLocalStorage/>*/}
    </div>
  );
}

export default App;
