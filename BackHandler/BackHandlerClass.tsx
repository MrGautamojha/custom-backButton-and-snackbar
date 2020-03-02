import {BackHandler} from 'react-native';
import Toast from 'react-native-root-toast';

class BackButtonHandler {
  counter = 0;
  handleBackButtonStart;
  handleBackButtonStop;

  mount(back, navigation) {
    this.addBackButtonListeners(back, navigation);
  }

  addBackButtonListeners(back, navigation) {
    this.handleBackButtonStart = navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation),
      ),
    );

    this.handleBackButtonStop = navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation),
      ),
    );
  }

  onBackButtonPressAndroid = (back, navigation) => {
    const shortToast = message => {
      Toast.show(message, {
        duration: Toast.durations.LONG,
        // position: Toast.positions.BOTTOM,
      });
    };
    if (back) {
      navigation.goBack();
      return true;
    }
    if (this.counter > 0) {
      BackHandler.exitApp();
    } else {
      setTimeout(() => {
        this.counter = 0;
      }, 3000);
      this.counter++;
      //   alert('Press again to exit.');
      shortToast('Press again to quit the application');
      return true;
    }
  };

  unmount() {
    this.removeBackButtonListeners();
  }

  removeBackButtonListeners() {
    this.handleBackButtonStart && this.handleBackButtonStart.remove();
    this.handleBackButtonStop && this.handleBackButtonStop.remove();
  }
}

export default new BackButtonHandler();
