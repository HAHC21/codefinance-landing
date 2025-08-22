import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import TeamMemberPage from './components/TeamMemberPage'

function App() {
  const [activePage, setActivePage] = useState('home')

  // Sample data for team members
  const teamMembers = {
    member1: {
      memberId: '1',
      memberName: 'Carlos Rodríguez',
      role: 'Director Financiero',
      description: 'Experto en estrategias financieras corporativas con más de 10 años de experiencia en el sector bancario y de inversiones.',
      skills: ['Análisis Financiero', 'Gestión de Riesgos', 'Planificación Estratégica', 'Mercados de Capitales'],
      experience: [
        { title: 'Director Financiero', company: 'Banco de Bogotá', period: '2020 - Presente' },
        { title: 'Gerente de Inversiones', company: 'Grupo Aval', period: '2017 - 2020' }
      ],
      education: [
        { degree: 'Maestría en Finanzas', institution: 'Universidad de los Andes', year: '2017' },
        { degree: 'Ingeniería Industrial', institution: 'Universidad Nacional', year: '2015' }
      ]
    },
    member2: {
      memberId: '2',
      memberName: 'Ana María Silva',
      role: 'Analista de Riesgos',
      description: 'Especialista en evaluación y gestión de riesgos financieros, con amplia experiencia en modelos cuantitativos y análisis estadístico.',
      skills: ['Modelado de Riesgos', 'Análisis Estadístico', 'Regulaciones Financieras', 'Python/R'],
      experience: [
        { title: 'Analista Senior de Riesgos', company: 'Superintendencia Financiera', period: '2019 - Presente' },
        { title: 'Consultor de Riesgos', company: 'Deloitte', period: '2016 - 2019' }
      ],
      education: [
        { degree: 'Maestría en Estadística', institution: 'Universidad Javeriana', year: '2016' },
        { degree: 'Matemáticas Aplicadas', institution: 'Universidad de Antioquia', year: '2014' }
      ]
    },
    member3: {
      memberId: '3',
      memberName: 'David Martínez',
      role: 'Especialista en Tecnología Financiera',
      description: 'Desarrollador de soluciones tecnológicas para el sector financiero, experto en blockchain, APIs y sistemas de trading automatizado.',
      skills: ['Blockchain', 'APIs Financieras', 'Machine Learning', 'Desarrollo Full-Stack'],
      experience: [
        { title: 'Tech Lead Fintech', company: 'Rappi', period: '2021 - Presente' },
        { title: 'Desarrollador Senior', company: 'Bancolombia', period: '2018 - 2021' }
      ],
      education: [
        { degree: 'Ingeniería de Sistemas', institution: 'Universidad EAFIT', year: '2018' },
        { degree: 'Certificación AWS', institution: 'Amazon Web Services', year: '2020' }
      ]
    },
    member4: {
      memberId: '4',
      memberName: 'Laura Fernández',
      role: 'Consultora de Inversiones',
      description: 'Asesora experta en inversiones personales y corporativas, con especialización en mercados emergentes y portafolios diversificados.',
      skills: ['Asesoría de Inversiones', 'Análisis de Mercados', 'Gestión de Portafolios', 'Finanzas Personales'],
      experience: [
        { title: 'Consultora Senior', company: 'Credicorp Capital', period: '2018 - Presente' },
        { title: 'Analista de Inversiones', company: 'BBVA Colombia', period: '2015 - 2018' }
      ],
      education: [
        { degree: 'MBA en Finanzas', institution: 'INCAE Business School', year: '2018' },
        { degree: 'Economía', institution: 'Universidad del Rosario', year: '2015' }
      ]
    }
  }

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
