import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark'
}

const colors = {
  primary: '#00a8ff',
  checkColor: '#F4C27F'
}

export default extendTheme({ config, colors })
