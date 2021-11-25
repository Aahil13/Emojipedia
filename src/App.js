import { Container } from 'react-bootstrap';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Switch>
        <div>
          <Container>
            <Route exact path="/" >
              <Home/>
          </Route>
          </Container>
        </div>
    </Switch> 
  );
}

export default App;
