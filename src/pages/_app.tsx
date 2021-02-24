import '../styles/global.css'
import {ChallengesProvider} from '../contexts/ChallengesContext'

function MyApp({Component, pageProps}) {
  return (
    <ChallengesProvider>
      {/** Elementos dentro do provider tem acesso ao dados armazenados dentro do conetexto*/}
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
