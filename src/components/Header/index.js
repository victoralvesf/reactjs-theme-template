import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Header = ({ switchTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h2>Template</h2>

      <Switch
        onChange={switchTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={24}
        width={45}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
      />
    </Container>
  );
}

export default Header;
