import { Route } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
