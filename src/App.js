
import './App.css';
import { Video } from 'react-video-stream';
const url = 'http://example.com/manifest.mpd'
 
const options = {
  requestHeader: 'Authorization',
  requestToken: 'access_token'
}

const App() {
  return (
    <div className="App">
      <div>
      <Video
        className='video-class'
        controls={true}
        autoPlay={true}
        options={options}
        remoteUrl={url}
      />
    </div>
    </div>
  );
}

export default App;
