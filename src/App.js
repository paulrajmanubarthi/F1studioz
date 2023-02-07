import Navbar from '../src/components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Page2 from './components/folder2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/page4/Page4';
import Page5 from './components/page5/Page5';





function App() {
  return (
    <div className="App container-fluid">
   <Navbar/>
   <Header/>
   <Page2/>
   <Page3/>
   <Page4/>
   <Page5/>
    </div>
  );
}

export default App;
