import './App.scss';
import {About,Footer,Header,Skills,Works,Testimony, Footerr} from './Container';
import Navbar from './Components/Navbar/Navbar';
import Certificate from './Container/Certificate/Certificate';

function App() {

  return (
        <div className="app">
           <Navbar/>
           <Header/>
           <About/>
           <Works/>
           <Certificate/>
           <Skills/>        
           <Footer/>
        </div>  
  ); 
}

export default App;
