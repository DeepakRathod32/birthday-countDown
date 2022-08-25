import {Welcome, Counter, Pictures, SetCounter, RouterCounter} from './index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let name = 'Anjali';
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' element={<Counter />}/>
        <Route exact path='/birthday/welcome' element={<Welcome name={name}/>}/>
        <Route exact path='/birthday/picture' element={<Pictures />}/>
        <Route exact path='/birthday/setcounter' element={<SetCounter />}/>
        <Route exact path='/birthday/:name/:day/:month' element={<RouterCounter />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
