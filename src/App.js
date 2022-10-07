import logo from './logo.svg';
import './App.css';
import Card from './Components/Cards/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="card-container col-lg-9 mt-5">
          <div className="title d-flex align-items-center" >
            <span className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span>
            <h2>Pro-Active-Club</h2>
          </div>
          <Card></Card>
        </div>
        <div className="col-lg-3">
          <h2>this is sidebar component</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
