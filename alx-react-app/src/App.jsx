import './App.css'
import  Footer  from './Footer'
import  Header  from './Header'
import  MainContent  from '.MainContent'
import WelcomeMessage from './components/WelcomeMessage'

function App() {


  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
