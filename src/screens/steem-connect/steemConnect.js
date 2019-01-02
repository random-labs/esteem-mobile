import React, { PureComponent } from 'react';
import { View, WebView, Alert } from 'react-native';
import { connect } from 'react-redux';

import { loginWithSC2 } from '../../providers/steem/auth';
import { steemConnectOptions } from './config';

// Actions
import { addOtherAccount, updateCurrentAccount } from '../../redux/actions/accountAction';
import { login as loginAction, openPinCodeModal } from '../../redux/actions/applicationActions';

// Constants
import { default as ROUTES } from '../../constants/routeNames';

class SteemConnect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  _onNavigationStateChange = (event) => {
    let code;
    const { dispatch, setPinCodeState, handleOnModalClose } = this.props;
    const { isLoading } = this.state;
    console.log('event :', event);
    if (event.url.indexOf('?code=') > -1) {
      this.webview.stopLoading();
      try {
        code = event.url.match(/code=([^&]*)/);
      } catch (error) {
        // TODO: return
      }

      console.log('code :', code[1]);
      console.log('event.url :', event.url);
      if (!isLoading) {
        this.setState({ isLoading: true });
        handleOnModalClose();
        loginWithSC2(code[1])
          .then((result) => {
            if (result) {
              dispatch(updateCurrentAccount({ ...result }));
              dispatch(addOtherAccount({ username: result.name }));
              dispatch(loginAction(true));
              dispatch(openPinCodeModal());
              // TODO: return accesstoken
              setPinCodeState({ accessToken: result.accessToken, navigateTo: ROUTES.DRAWER.MAIN });
            } else {
              // TODO: Error alert (Toast Message)
            }
          })
          .catch((error) => {
            Alert.alert(error.toString());
            // TODO: return
          });
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: `${steemConnectOptions.base_url}?client_id=${
              steemConnectOptions.client_id
            }&redirect_uri=${encodeURIComponent(
              steemConnectOptions.redirect_uri,
            )}&response_type=code&scope=${encodeURIComponent(steemConnectOptions.scope)}`,
          }}
          onNavigationStateChange={this._onNavigationStateChange}
          ref={(ref) => {
            this.webview = ref;
          }}
        />
      </View>
    );
  }
}

export default connect()(SteemConnect);
