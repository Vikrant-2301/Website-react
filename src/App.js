import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Preloader from './components/Preloader/Preloader';
// import Flipbook from './Flipbok/Flipbook';


const App=()=>{
  return (
    <>
    <Preloader/>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      {/* <Testimonials/> */}
      {/* <Flipbook/> */}
      <Blog/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
