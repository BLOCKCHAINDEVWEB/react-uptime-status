import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Uptime from './components/uptime';

const App = () => {

  const API_KEYS = [
    'm791282847-eb135224ad13bbd14906f37b',
    'm791282851-8d3a1eb5907b6a78ba66ef4f',
    'm791282845-176a23ec25ade8e8fdb07f0a'
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
