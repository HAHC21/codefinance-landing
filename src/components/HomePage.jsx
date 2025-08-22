const HomePage = ({ onPageChange }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      role: 'Director Financiero',
      image: '/member-1.jpg'
    },
    {
      id: 2,
      name: 'Ana María Silva',
      role: 'Analista de Riesgos',
      image: '/member-2.jpg'
    },
    {
      id: 3,
      name: 'David Martínez',
      role: 'Especialista en Tecnología Financiera',
      image: '/member-3.jpg'
    },
    {
      id: 4,
      name: 'Laura Fernández',
      role: 'Consultora de Inversiones',
      image: '/member-4.jpg'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMemberClick = (memberId) => {
    onPageChange(`member${memberId}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Full screen height minus navigation */}
      <div className="relative overflow-hidden h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Bienvenidos a{' '}
              <span className="text-green-800">Code</span>
              <span className="text-yellow-500">Finance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Un equipo de cuatro profesionales apasionados por las finanzas y la tecnología, 
              comprometidos con la excelencia y la innovación en el sector financiero.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('team-section')}
                className="btn btn-primary bg-yellow-500 text-black hover:bg-yellow-600 cursor-pointer"
              >
                Conoce Nuestro Equipo
              </button>
              <button 
                onClick={() => scrollToSection('values-section')}
                className="btn btn-primary bg-green-800 text-white hover:bg-green-900 cursor-pointer"
              >
                Conoce Nuestros Valores
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Overview Section - Full screen height */}
      <div id="team-section" className="h-screen bg-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cuatro mentes brillantes trabajando juntas para transformar el futuro de las finanzas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleMemberClick(member.id)}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-800 to-yellow-500 p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to top arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Values Section - Full screen height */}
      <div id="values-section" className="h-screen bg-green-800 text-white flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-yellow-500 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y relaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-300">
                Comprometidos con la calidad en cada proyecto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-300">
                Siempre buscando nuevas soluciones y enfoques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Colaboración</h3>
              <p className="text-gray-300">
                Trabajando juntos para lograr resultados excepcionales
              </p>
            </div>
          </div>
        </div>

        {/* Back to top arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
