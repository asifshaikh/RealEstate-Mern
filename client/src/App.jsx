import Navbar from './assets/components/navbar/Navbar';
import './assets/layout.scss';
import HomePage from './routes/homPage/homePage';

function App() {
  return (
    <div className='layout'>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
