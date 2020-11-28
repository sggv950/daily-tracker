import { Header } from './components/Header/';
import './App.scss';
import { ItemForm } from './components/ItemForm';
import { TrackingList } from './components/TrackingList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='item-form-container'>
        <ItemForm />
      </div>
      {/* <main className='main'>
        <TrackingList />
        <div className='refresh-button'>
          <FontAwesomeIcon icon={faSyncAlt} size='2x' spin={true} />
        </div>
      </main> */}
    </div>
  );
}

export default App;
