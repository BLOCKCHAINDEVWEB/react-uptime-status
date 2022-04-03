import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Uptime from './components/uptime';

const App = () => {

  const API_KEYS = [
    'm791244724-b42a93574ec7c6a5ea809b73',
    'm791267304-951c351f521da117c47eab8d',
    'm791267317-9ee1c697360fb8849c0e3bb5',
    'm791267349-71f3642ebc5d2c24339b3771',
    'm791267367-293b03b00905556a16df97f4'
  ];
  const SITE_NAME = 'Uptime Status';

  useEffect(() => {
    window.document.title = SITE_NAME;
  }, [SITE_NAME]);

  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          {API_KEYS.map(i => (
            <Uptime key={i} apikey={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
