import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';

const trackUrls = [
  'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
  'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
  'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
  'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
  'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
];

const [trackIndex, setTrackIndex] = useState(0)


const goToNextTrack = () => {
  setTrackIndex(trackIndex + 1);
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Quoi ?</h1>
      </header>
      <div className="App-images">
        <p>Feur !</p>
      </div>
      <div className="App-buttons">
      <audio src={trackUrls[trackIndex]} autoPlay controls />
<button onClick={goToNextTrack}>
    Next track
</button>
      </div>
    </div>
  );
};

export default App;
