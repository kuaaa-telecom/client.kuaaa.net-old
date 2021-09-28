import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {LoginArea} from '../Login';

import './style.css';

class FullpageWrapper extends React.Component {
  render() {
    return (
      <ReactFullpage
        navigation={true}
        navigationPosition="right"
        navigationTooltips={['로그인', 'KUAAA란?', '관측회', '세미나', '사진전', '그 외', '연락처 / 찾아오는 길']}
        showActiveTooltip={true}
        render={({state, fullpageApi}) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section" id="slide_login">
                <LoginArea/>
              </div>
              <div className="section foot" id="slide_about">
              </div>
              <div className="section main" id="slide_observation">
              </div>
              <div className="section foot" id="slide_seminar">
              </div>
              <div className="section foot" id="slide_exhibition">
              </div>
              <div className="section foot" id="slide_etc">
              </div>
              <div className="section foot" id="slide_contact">
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
