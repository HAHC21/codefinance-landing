import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import TeamMemberPage from './components/TeamMemberPage'
import { teamMembers } from './data/teamMembers'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onPageChange={setActivePage} />
      case 'member1':
        return <TeamMemberPage {...teamMembers.member1} />
      case 'member2':
        return <TeamMemberPage {...teamMembers.member2} />
      case 'member3':
        return <TeamMemberPage {...teamMembers.member3} />
      case 'member4':
        return <TeamMemberPage {...teamMembers.member4} />
      default:
        return <HomePage onPageChange={setActivePage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation activePage={activePage} onPageChange={setActivePage} />
      {renderPage()}
    </div>
  )
}

export default App
