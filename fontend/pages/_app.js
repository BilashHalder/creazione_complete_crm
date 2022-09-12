import '../styles/globals.css'
import '../public/assets/css/demo_1/style.css'
import { Provider } from 'react-redux'
import {store} from '../services/store/menuStore'

function MyApp({ Component, pageProps }) {
  return (<>
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  
  </>)
}

export default MyApp
