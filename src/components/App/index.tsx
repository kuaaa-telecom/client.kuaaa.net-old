import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './style.css';

class FullpageWrapper extends React.Component {
  render() {
    return (
      <ReactFullpage
        render={({state, fullpageApi}) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section" id="section0">
                <h3>Hi</h3>
              </div>
              <div className="section main" id="section1">
                <div className="slide">
                  <h3>엄</h3>
                </div>
                <div className="slide">
                  <h3>준</h3>
                </div>
                <div className="slide">
                  <h3>식</h3>
                </div>
              </div>
              <div className="section foot" id="section2">
                <h3>은 살아있다</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
