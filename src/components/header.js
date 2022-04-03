import React from 'react';
import Link from './link';

const Header = () => {
  // const { SITE_NAME,  NAVI } = process.env;
  const Navi = [
    {
      text: 'Homepage',
      url: 'https://feature.sh/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/BLOCKCHAINDEVWEB/uptime-status'
    }
  ]
  return (
    <div id="header">
      <div className="container">
        <a className="logo" href="/">Uptime status</a>
        <div className="navi">
          {Navi.map((item, index) => (
            <Link key={index} text={item.text} to={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
