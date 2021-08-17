import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage.pages';
import MyCalendar from './components/calendar/MyCalendar.component';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
