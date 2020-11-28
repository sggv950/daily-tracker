import { Header } from './components/Header/';
import './App.scss';
import { TrackingList } from './components/TrackingList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <TrackingList />
        <div className='refresh-button'>
          <FontAwesomeIcon icon={faSyncAlt} size='2x' spin={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
