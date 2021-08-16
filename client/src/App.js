import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import MyCalendar from './components/calendar/MyCalendar.component';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MyCalendar} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
