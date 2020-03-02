import React from 'react';
import {View} from 'react-native';
import {Snackbar} from 'react-native-paper';

type Props = {
  visible: boolean;
  action: any;
  duration: number;
  onDismiss?: any;
  children?: any;
  style: any;
  theme: string;
};

export default function SnackBar(props: Props) {
  const {
    visible,
    action,
    duration,
    onDismiss,
    children,
    style,
    theme,
  } = UseSnackbar(props);
  return (
    <View>
      <Snackbar
        visible={visible}
        action={action}
        onDismiss={onDismiss}
        duration={duration}
        style={style}
        theme={theme}>
        {children}
      </Snackbar>
    </View>
  );

  function UseSnackbar(props: Props) {
    const {
      visible,
      action,
      duration,
      onDismiss,
      children,
      style,
      theme,
    } = props;

    return {visible, action, duration, onDismiss, children, style, theme};
  }
}
