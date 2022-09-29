import React from 'react';
import _ from 'lodash';

import '../style.css';
import '../style.scss';

const App = () => {
  const myName = 'やる夫';
  const words = 'こまけぇこたぁいいんだよ';

  return (
    <div>
      {_.join(['webpack', '動いてるお〜'], ' ')}
      <br />
      {myName}口グセなのか？
      <br />
      {words}
      <div></div>
    </div>
  );
};

export default App;
