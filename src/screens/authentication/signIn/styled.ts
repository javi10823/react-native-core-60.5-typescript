import styled from 'styled-components/native';
import { responsiveSize } from '../../../utils/dimensions';

export const Container = styled.SafeAreaView(() => ({
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Spacing = styled.View((props: { size?: number }) => ({
  height: responsiveSize(props.size || 10),
}));
