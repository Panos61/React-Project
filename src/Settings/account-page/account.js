import React, { Component } from 'react';
import './account.css';
import {
  PageHeader,
  Tag,
  Descriptions,
  Card,
  Button,
  Divider,
  Modal,
} from 'antd';

import { Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Delete from '../modal_content/delete';
import FooterMain from '../../Footer';

class Account extends Component {
  state = {
    visible: false,
  };

  // Delete User Modal
  showDeleteModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  static propTypes = {
    Auth: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    const { user } = this.props.Auth;

    const layoutSecurity = {
      marginTop: '5vh',
    };

    const { visible } = this.state;

    return (
      <div>
        <PageHeader
          className="security-page-header"
          onBack={() => window.history.back()}
          title="Λογαριασμός"
          subTitle={<SettingOutlined />}
          extra={[
            <Button key="mainpage" size="small" type="primary">
              <Link to="/">Αρχική Σελίδα</Link>
            </Button>,
          ]}
        />

        <Divider dashed />
        {/* CONTENT CARDS  */}

        <section id="account-layout-style" style={layoutSecurity}>
          <div id="account-page-parent">
            <div className="account-page-card">
              {/*  Account Status */}
              <Card
                title="Γενικά"
                style={{ marginTop: '15px', borderColor: '#bfbfbf' }}
              >
                <Card type="inner" title="Κατάσταση Λογαριασμού">
                  <Descriptions size="default" column={1}>
                    <Descriptions.Item label="User Legacy">
                      {user ? `${user.username}` : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="E-mail">
                      {user ? `${user.email}` : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Από">
                      - / - / --
                    </Descriptions.Item>
                    <Descriptions.Item label="Κατάσταση">
                      <Tag color="green">Ενεργός/ή</Tag>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Card>

              {/* Delete Account */}
              <Card
                title="Επικίνδυνο"
                style={{ borderColor: '#a8071a', marginTop: '15px' }}
              >
                <Card type="inner" title="Διαγραφή Λογαριασμού">
                  <p>
                    Είστε σίγουροι;Αφού διαγράψετε τον λογαριασμό σας, δεν θα
                    μπορείτε να αναιρέσετε την επιλογή σας!
                  </p>
                  <Button
                    type="danger"
                    size="middle"
                    block={true}
                    onClick={this.showDeleteModal}
                  >
                    Διαγραφή Λογαριασμού
                  </Button>
                </Card>
              </Card>
            </div>
          </div>
        </section>
        <footer>
          <FooterMain />
        </footer>
        <Modal
          closable={false}
          visible={visible}
          title="Είστε σίγουροι;"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="dashed" onClick={this.handleCancel}>
              Ακύρωση
            </Button>,
            <Button key="submit" type="danger" onClick={this.onDelete}>
              <Link to="/delete-user"> Επιβεβαίωση </Link>
            </Button>,
          ]}
        >
          <Delete />
        </Modal>
      </div>
    );
  }
}

const mapToStateProps = (state) => ({
  Auth: state.Auth,
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapToStateProps)(Account);
