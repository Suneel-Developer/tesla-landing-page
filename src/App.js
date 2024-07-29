import './App.css';
import CountPrize from './components/CountPrize';
import Footer from './components/Footer';
import Giveaway from './components/Giveaway';
import Header from './components/Header';
import Info from './components/Info';
import Information from './components/Information';
import Participate from './components/Participate';
import Transication from './components/Transication';

function App() {
  return (
    <main className='max-w-[1240px] w-full mx-auto pt-4 px-5 pb-[40px]'>
      <div className='background'></div>
      <div className='background2'></div>

      <div>
        <Header />
        <Giveaway />
        <Info />
        <Information />
        <CountPrize />
        <Participate />
        <Transication />
        <Footer />
      </div>
    </main>
  );
}

export default App;
