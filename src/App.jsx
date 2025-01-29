import About from './components/About';
import CDC from './components/CDC';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Patrocinio from './components/Patrocinio';
import Programacao from './components/Programacao';
import Local from './components/Local';
import Covid from './components/Covid';
import KCEE from './components/KCEE';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Programacao />
      <Local />
      <Patrocinio />
      <CDC />
      <Covid />
      <Footer />
      <KCEE />
    </>
  );
}

export default App;
