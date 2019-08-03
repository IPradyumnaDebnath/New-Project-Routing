import React from 'react';
import './App.css';
import ProposalListPage from './ProposalListPage';
import ProposalDetailsPage from './ProposalDetailsPage';
import{BrowserRouter as Router,Switch,Route} from'react-router-dom';
import {Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Link to="/proposals">Proposal List</Link>
      <Switch>
      <Route path="/" exact component={Home} ></Route>
      <Route path="/proposals" exact component={ProposalListPage} ></Route>
      <Route path="/proposals/proposal_id" exact component={ProposalDetailsPage}></Route>
      </Switch>
      </Router>
    </div>
  );
}
const Home = ()=>(
  <div>
    <h1>
      Home Page
    </h1>
  </div>
)
export default App;
