import './App.css';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import GetAllPolicy from './components/GetAllPolicy';
import AddPolicy from './components/AddPolicy';
import FetchPolicy from './components/FetchPolicy';

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <hr></hr>
      <Router>
      <Routes>
      <Route path = '/counter1'element = {<Counter/>}/>
      <Route path = '/counterhook'element = {<CounterHook/>}/>
      <Route path = '/policy/all'element = {<GetAllPolicy/>}/>
      <Route path = '/addpolicy'element = {<AddPolicy/>}/>
      <Route path = '/policy/details/:policyId' element = {<FetchPolicy/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
