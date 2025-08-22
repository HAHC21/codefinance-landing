import { useState } from 'react';

const Navigation = ({ activePage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const teamMembers = [
    { id: 'home', name: 'Inicio', path: '/' },
    { id: 'member1', name: 'Carlos Rodríguez', path: '/miembro-1' },
    { id: 'member2', name: 'Ana María Silva', path: '/miembro-2' },
    { id: 'member3', name: 'David Martínez', path: '/miembro-3' },
    { id: 'member4', name: 'Laura Fernández', path: '/miembro-4' },
  ];

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/CodeFinance.png" 
              alt="CodeFinance Logo" 
              className="h-12 w-auto mr-3"
            />
            <span className="text-xl font-bold text-yellow-500">CodeFinance</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {teamMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => onPageChange(member.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activePage === member.id
                      ? 'bg-yellow-500 text-black'
                      : 'text-white hover:bg-green-800 hover:text-yellow-500'
                  }`}
                >
                  {member.name}
                </button>
              ))}
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
              {teamMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => {
                    onPageChange(member.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-full text-base font-medium transition-colors duration-200 ${
                    activePage === member.id
                      ? 'bg-yellow-500 text-black'
                      : 'text-white hover:bg-green-800 hover:text-yellow-500'
                  }`}
                >
                  {member.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
