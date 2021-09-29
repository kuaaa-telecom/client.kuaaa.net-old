import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {LoginArea} from '../Login';
import {More} from '../Guide/more';

import './style.css';

class FullpageWrapper extends React.Component {
  render() {
    return (
      <div>
        <Header/>
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
                  <More/>
                </div>
                <div className="section" id="slide_about">
                </div>
                <div className="section" id="slide_observation">
                </div>
                <div className="section" id="slide_seminar">
                </div>
                <div className="section" id="slide_exhibition">
                </div>
                <div className="section" id="slide_etc">
                </div>
                <div className="section" id="slide_contact">
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const Header = () => {
  return (
    <div id="header"> 고려대학교 아마추어 천문회 | Korea University Amateur Astronomical Association </div>
  );
};

export default FullpageWrapper;
