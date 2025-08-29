import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import { UserProfile } from './components/UserProfile'

function App() {


  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile />
      <Footer />
    </div>
  )
}

export default App
