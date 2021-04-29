import '../src/styles/App.css';
import HamBurgerMenu from '../src/components/HamBurgerMenu';


function App() {
  return (
    <div className="App">
      <div className="box">
      <HamBurgerMenu />
        <div className="text1">
          <p>Vásárlásról és kiszállításról</p>
          <p>Termékek listája</p>
          <p>Szolgáltatások</p>
          <p>Kapcsolat</p>
        </div>
        <div className="text2">
          <p>Általásnos szerződési feltételek</p>
          <p>Adatkezelési nyilatkozat</p>
          <p>Impresszum</p>
        </div>
        <div className='title'>
          <h3>Morella</h3>
        </div>
      </div>
    </div>
  );
}
export default App;
