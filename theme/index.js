import { extendTheme } from '@chakra-ui/react'
import typography from './foundations/typography'

// Solo incluimos lo que quiero sobreescribir/extender
// el resto sigue siendo los valores default de Chakra
const overrides = {
  colors: {
    brand: 'tomato'
  },
  ...typography,
}

export default extendTheme(overrides)