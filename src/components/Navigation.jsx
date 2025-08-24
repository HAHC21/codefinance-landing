import { useState } from 'react';

const Navigation = ({ activePage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const teamMembers = [
    { id: 'home', name: 'Inicio', path: '/' },
    { id: 'member1', name: 'Deydianith Lobope', path: '/miembro-1' },
    { id: 'member2', name: 'Harold Hidalgo', path: '/miembro-2' },
    { id: 'member3', name: 'Jose Manuel Correa', path: '/miembro-3' },
    { id: 'member4', name: 'Yeison Santa', path: '/miembro-4' },
    { id: 'ethics', name: 'Código de Ética', path: '/codigo-etica' },
  ];

  const renderNavButton = (member) => (
    <button
      key={member.id}
      onClick={() => onPageChange(member.id)}
      className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
        activePage === member.id
          ? member.id === 'ethics' 
            ? 'bg-green-800 text-white'
            : 'bg-yellow-500 text-black'
          : member.id === 'ethics'
            ? 'bg-green-800 text-white hover:bg-green-900'
            : 'text-white hover:bg-green-800 hover:text-yellow-500'
      }`}
    >
      {member.name}
    </button>
  );

  const renderMobileNavButton = (member) => (
    <button
      key={member.id}
      onClick={() => {
        onPageChange(member.id);
        setIsMobileMenuOpen(false);
      }}
      className={`block w-full text-left px-3 py-2 rounded-full text-base font-medium transition-colors duration-200 ${
        activePage === member.id
          ? member.id === 'ethics' 
            ? 'bg-green-800 text-white'
            : 'bg-yellow-500 text-black'
          : member.id === 'ethics'
            ? 'bg-green-800 text-white hover:bg-green-900'
            : 'text-white hover:bg-green-800 hover:text-yellow-500'
      }`}
    >
      {member.name}
    </button>
  );

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onPageChange('home')}
              className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <img 
                src="/CodeFinance.png" 
                alt="CodeFinance Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-xl font-bold text-yellow-500">CodeFinance</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {teamMembers.map(renderNavButton)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-500 focus:outline-none focus:text-yellow-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {teamMembers.map(renderMobileNavButton)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
