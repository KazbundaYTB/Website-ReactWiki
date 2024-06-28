import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Footer from "./components/Footer"
import Title from './components/Title';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">

        <Navbar />
        <Title />    
        <Categories />    
        <Footer />
      
    </div>
  );
}


