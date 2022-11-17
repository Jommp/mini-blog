import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>

      <main className="mainContent">
        <Home />
      </main>
    </div>
  );
};

export default App;
