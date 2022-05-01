
import App, { AppContext, AppProps} from 'next/app'
import {ChakraProvider, Box} from '@chakra-ui/react'
import AppLayout from '../components/layouts/appLayout'
import {AnimatePresence} from 'framer-motion'
import {theme} from '../components/theme'
import {AccentGlobal} from '../components/theme/Accent'
import {FontsGlobal} from '../components/theme/fonts'


function MyApp({Component, pageProps}: AppProps) {
  return (
      <ChakraProvider theme={theme} resetCSS={true}>
        <FontsGlobal/>
        <AccentGlobal/>
        <AppLayout>
          <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Box>
              <Component {...pageProps} />
            </Box>
          </AnimatePresence>
        </AppLayout>
      </ChakraProvider>
  )
}

export default MyApp
