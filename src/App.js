import React from 'react';
import './App.css';
import ModalContent from './ModalContent';
import Listing from './Listing';
import DestinationContextProvider from './Context/DestinationContext';

function App() {
  return (
    <div className='App'>
       <DestinationContextProvider>
        <Listing/>
      </DestinationContextProvider>
    </div>
     
  );
}

export default App;
