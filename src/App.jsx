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
      memberName: 'Deydianith Lobope',
      role: 'Analista de Procesos',
      description: 'Profesional apasionada por la optimización de procesos y la automatización, con experiencia en gestión documental y análisis de eficiencia operativa.',
      skills: [
        'Modelado y documentación de procesos',
        'Análisis de eficiencia operativa',
        'Gestión documental (Mantum / Hércules)',
        'Automatización de tareas con n8n',
        'Conectividad con APIs y flujos RPA básicos',
        'Uso avanzado de Excel',
        'Fundamentos de programación en Python',
        'Pensamiento estratégico y enfoque a resultados'
      ],
      experience: [
        { title: 'Analista de Procesos', company: 'Soberana Colombia', period: '2023 - Presente' },
        { title: 'Administradora de Punto de Venta', company: 'Panadería antojitos de u', period: '2019 - 2022' },
        { title: 'Auxiliar Administrativa y chef', company: 'Restaurantes y empresas familiares', period: '2014 - 2019' }
      ],
      education: [
        { degree: 'Estudiante de Ingeniería Financiera y de Riesgos', institution: 'CEIPA Business School', year: 'Becaria destacada - Actualmente cursando' },
        { degree: 'Técnico Laboral en Auxiliar Administrativo', institution: 'Instituto politécnico de Colombia', year: '2023' },
        { degree: 'Técnico Laboral en Cocina', institution: 'Escuela gastronómica de Medellín', year: '2023' },
        { degree: 'Bachiller Académica', institution: 'Mariscal sucre (Buenavista, Córdoba)', year: '2012' }
      ]
    },
    member2: {
      memberId: '2',
      memberName: 'Harold Hidalgo',
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
      memberName: 'Jose Manuel Correa',
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
      memberName: 'Yeison Santa',
      role: 'Analista de Infraestructura',
      description: 'Profesional especializado en infraestructura tecnológica, desarrollo de aplicaciones y administración de sistemas Microsoft, con amplia experiencia en automatización y gestión de tecnologías empresariales.',
      skills: [
        'Automatización de procesos',
        'Desarrollo de aplicaciones en Power APPS',
        'Administración de Directorios Activo (AD)',
        'Reportes en Power Bi',
        'Administrador de Microsoft 365',
        'Instructor de Microsoft',
        'Fundamentos de programación en Python',
        'Reparación de computadores',
        'Redes de computación',
        'Fundamentos de nube (azure y aws)'
      ],
      experience: [
        { title: 'Analista de infraestructura', company: 'LANDERS Y C.I.A - Colombia', period: '2023 - Presente' },
        { title: 'Director de aplicaciones', company: 'AUTOCONTROLES EMPRESARIAS - España', period: '2022 - 2023' },
        { title: 'Analista de desarrollo', company: 'BGW - Colombia', period: '2020 - 2022' }
      ],
      education: [
        { degree: 'Estudiante de Ingeniería de sistemas', institution: 'CEIPA Business School', year: 'Actualmente cursando' },
        { degree: '7 semestres en Tecnología de sistemas de información', institution: 'ITM', year: '2008-2010' },
        { degree: 'Técnico de reparación de computadores y Redes', institution: 'Politécnico Mundial', year: '2007' },
        { degree: 'Bachiller Académica', institution: 'Colegio ciudadela las americas', year: '2005' }
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
