import { Aleo } from 'next/font/google'

const aleo = Aleo({
  subsets: ['latin'],
  display: 'swap',
})

const typography = {
  fonts: {
      body: aleo.style.fontFamily,
      heading: aleo.style.fontFamily,
      mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
}

export default typography