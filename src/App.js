import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Signin from './Components/Logincred/Signin';
import Page2 from './Components/Page2/page2';
import Page3 from './Components/Page3/page3';
import Page4 from './Components/Page4/Page4';
import Page5 from './Components/Page5/Page5';
function App() {
 
  return (
    <div className="App">
      <h1>Furniture store</h1>
      <Homepage></Homepage>
      <Page2></Page2>
      <Page3 />
      <Page4 />
      <Page5 />
    <Signin />
    </div>
  );
}

export default App;
