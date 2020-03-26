import React, { Component } from 'react';
import { Card } from 'antd';
import WrappedNormalLoginForm from './LoginForm';
import './LoginFormStyle.css';
import FooterMain from '../../FooterTest';
import BackMainPageLogin from './BackMainPageLogin';

import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/authActions';

class CardLoginStyle extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const title = (
      <h2
        style={{
          fontFamily: 'Pacifico, cursive',
          fontSize: '27px',
          color: '#DD4124'
        }}
      >
        Σύνδεση στο EventPark
      </h2>
    );

    return (
      <div>
        <Provider store={store}>
          <section id="login-page_style">
            <BackMainPageLogin />
            <div id="parent">
              <div className="login-card">
                <Card title={title} style={{ borderRadius: '4px' }}>
                  <h4>
                    Συμπληρώστε τα παρακάτω στοιχεία για την ολοκλήρωση της
                    συνδεσής σας.
                  </h4>
                  <WrappedNormalLoginForm />
                </Card>
              </div>
            </div>
          </section>
          <footer>
            <FooterMain />
          </footer>
        </Provider>
      </div>
    );
  }
}

export default CardLoginStyle;
