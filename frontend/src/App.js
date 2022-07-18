
import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import './App.css';
import ChatePage from './Pages/ChatePage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
        <Route path='/' exact component ={Homepage} />
        <Route path='/chats' component ={ChatePage} />
    </div>
  );
}

export default App;
