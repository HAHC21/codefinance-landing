import { useState } from 'react';

const TeamMemberPage = ({ memberId, memberName, role, description, skills, experience, education, bitacora, image }) => {
  const [activeSection, setActiveSection] = useState('bio');

  // Helper functions for rendering Bitácora sections
  const renderLifeMilestones = () => (
    <div className="space-y-4">
      {bitacora.lifeMilestones.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );

  const renderHobbies = () => (
    <div className="space-y-4">
      {bitacora.hobbies.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );

  const renderIkigai = () => (
    <div className="flex justify-center">
      <img 
        src={bitacora.ikigai} 
        alt={`Ikigai de ${memberName}`}
        className="max-w-full h-auto rounded-lg shadow-lg"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="hidden text-center text-gray-500 py-8">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p>Imagen de Ikigai no disponible</p>
      </div>
    </div>
  );

  const renderCoreInterests = () => (
    <div className="space-y-4">
      {bitacora.coreInterests.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );

  const renderPersonalEthics = () => (
    <div className="space-y-4">
      {bitacora.personalEthics.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      ))}
    </div>
  );

  const renderPretest = () => (
    <div className="flex justify-center">
      <img 
        src={bitacora.pretest} 
        alt={`Pretest de ${memberName}`}
        className="max-w-full h-auto rounded-lg shadow-lg"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="hidden text-center text-gray-500 py-8">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p>Imagen de Pretest no disponible</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-800 to-yellow-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img 
                src={image}
                alt={memberName}
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
          <h1 className="text-4xl font-bold text-black mb-2">{memberName}</h1>
          <p className="text-xl text-green-800 mb-4">{role}</p>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Section Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveSection('bio')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === 'bio'
                  ? 'bg-yellow-500 text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Biografía
            </button>
            <button
              onClick={() => setActiveSection('bitacora')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === 'bitacora'
                  ? 'bg-yellow-500 text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Bitácora
            </button>
          </div>
        </div>

        {/* Bio Section */}
        {activeSection === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Habilidades
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
                Experiencia
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-black">{exp.title}</h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Educación
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-800 pl-4">
                    <h3 className="font-semibold text-black">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">miembro{memberId}@codefinance.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Bogotá, Colombia</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bitácora Section */}
        {activeSection === 'bitacora' && (
          <div className="space-y-8">
            {/* Hitos de mi historia vida */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hitos de mi historia vida
              </h3>
              {renderLifeMilestones()}
            </div>

            {/* Hobbies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Hobbies
              </h3>
              {renderHobbies()}
            </div>

            {/* Ikigai */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Ikigai
              </h3>
              {renderIkigai()}
            </div>

            {/* Interés en el núcleo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interés en el núcleo
              </h3>
              {renderCoreInterests()}
            </div>

            {/* Código de ética personal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-green-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Código de ética personal
              </h3>
              {renderPersonalEthics()}
            </div>

            {/* Pretest */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Pretest
              </h3>
              {renderPretest()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberPage;
