import {extendTheme, ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fontmode = {
  fonts: {
    heading: 'Source Sans Pro',
    body: 'Source Sans Pro',
  },
};

const theme = extendTheme({config, fontmode});


export default theme;
