import styled from 'styled-components';

import { IThemeWithProps } from '../theme/types';

export const AppWrapper = styled.div`
  height: 100vh;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  height: calc(100vh - ${({ theme }: IThemeWithProps) => theme.header.height} - 24px);
`;

export const LeftPanelWrapper = styled.div`
  flex: 0 0 ${({ theme }: IThemeWithProps) => theme.leftPanel.width};
  padding: 0 40px 0 80px;
  box-sizing: border-box;
`;

export const TableWrapper = styled.div`
  width: 100%;
  padding-right: 48px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
`;