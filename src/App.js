import './App.css';
import Contact from './components/Contact';
import Desktop from './components/Desktop';
import MiniPictures from './components/MiniPictures';
import Header from './components/Header';
import Planners from './components/Planners';
import Paackages from './components/Packages';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
// import { DarkModeToggle } from './components/Toggle';

function App() {

  return (
    <div>
      {/* <DarkModeToggle /> */}
      <Header/>
      <Desktop/>
      <MiniPictures />
      <Contact />
      <Planners/>
      <Paackages />
      <Blogs/>
      <Footer />
    </div>
  );
}

export default App;