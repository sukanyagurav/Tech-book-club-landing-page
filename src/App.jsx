import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className='bg-[url(./assets/images/pattern-light-bg.svg)] py-8 px-6'>
        <Header />
        <Hero/>
      </div>
    </>
  );
}

export default App;
