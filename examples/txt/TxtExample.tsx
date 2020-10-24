import React from 'react';
import { Container, createTheme, ThemeProvider, Txt } from '../../src';

// Parent
const themeValue = createTheme({
  text: {
    subtitle: { fontSize: 20, color: '#444' },
    heading: { fontSize: 24, color: '#666' },
    default: { fontSize: 16, color: '#888', fontWeight: 'bold' },
  },
});

declare module '../../src/components/Txt' {
  interface TxtProps {
    type?: keyof NonNullable<typeof themeValue.text>;
  }
}

const TxtExample = () => {
  return (
    <ThemeProvider theme={themeValue}>
      <Child />
    </ThemeProvider>
  );
};

const Child: React.FC<any> = () => {
  return (
    <Container centered grow>
      <Txt>Default Text</Txt>
      <Txt type="subtitle">Subtitle Text</Txt>
      <Txt type="subtitle" style={{ color: 'blue' }}>
        Subtitle Text overide
      </Txt>
      <Txt type="heading">Heading Text</Txt>
    </Container>
  );
};

export default TxtExample;
