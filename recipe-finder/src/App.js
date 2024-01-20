import './App.css';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';

import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <div>
      <ChakraProvider>
      <Navbar/>
      <Allroutes/>
      <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
