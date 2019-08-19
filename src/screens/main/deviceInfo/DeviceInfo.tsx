import React from 'react';
import deviceInfo from 'react-native-device-info';

import { Container, Content } from './styles';
import { Spacing, Typography, BackButton } from '../../../components';
import { goBack } from '../../../navigation';

const DeviceInfo = () => {
  return (
    <Container>
      <BackButton onPress={() => goBack()} text="Device info example" />
      <Content>
        <Typography size={13}>{`DeviceInfo.getApplicationName() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getApplicationName()}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.getBuildNumber() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getBuildNumber()}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.getBundleId() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getBundleId()}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.getDeviceName() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getDeviceName()}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.getTimezone() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getTimezone()}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.isEmulator() ->`}</Typography>
        <Typography size={15} variant="bold">
          {String(deviceInfo.isEmulator())}
        </Typography>
        <Spacing />
        <Typography size={13}>{`DeviceInfo.getDeviceType() ->`}</Typography>
        <Typography size={15} variant="bold">
          {deviceInfo.getDeviceType()}
        </Typography>
        <Spacing />
      </Content>
    </Container>
  );
};

export default DeviceInfo;
