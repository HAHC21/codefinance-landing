import React from 'react';

const EthicsPage = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Código de Ética Grupal
          </h1>
          <p className="text-xl text-gray-600">
            Políticas y compromisos que guían nuestro trabajo en equipo
          </p>
        </div>

        {/* Políticas de Convivencia */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <svg className="w-6 h-6 text-green-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Políticas de Convivencia y Trabajo en Equipo
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En CodeFinance, creemos que el respeto, la responsabilidad y la comunicación efectiva son pilares fundamentales para lograr grandes resultados. Por eso, hemos establecido los siguientes compromisos:
          </p>
          
          <h3 className="text-xl font-semibold text-black mb-4">Compromisos para la Convivencia y el Éxito del Equipo</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">1</div>
              <span className="text-gray-700">Respetar los tiempos, opiniones y espacios de participación de cada integrante.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">2</div>
              <span className="text-gray-700">Cumplir con las tareas asignadas conforme al cronograma establecido.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">3</div>
              <span className="text-gray-700">Fomentar un ambiente de respeto, colaboración y escucha activa, donde todas las voces sean valoradas.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">4</div>
              <span className="text-gray-700">Brindar apoyo mutuo en caso de dificultades técnicas, académicas o personales.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">5</div>
              <span className="text-gray-700">Realizar revisiones grupales antes de cada entrega para asegurar la calidad del trabajo.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-0.5">6</div>
              <span className="text-gray-700">Promover la proactividad, la responsabilidad compartida y la mejora continua.</span>
            </div>
          </div>
        </div>

        {/* Manejo de Conflictos */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ¿Qué hacer en caso de conflicto?
          </h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">1</div>
              <span className="text-gray-700">Escuchar activamente todas las versiones del conflicto, sin interrupciones ni juicios.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">2</div>
              <span className="text-gray-700">Buscar acuerdos colaborativos que beneficien al equipo, sin señalar culpables.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">3</div>
              <span className="text-gray-700">Si el conflicto persiste, escalarlo a la docente o tutor como mediadores externos.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">4</div>
              <span className="text-gray-700">Documentar brevemente el conflicto y las decisiones tomadas en un acta del grupo, para mantener transparencia y aprendizaje.</span>
            </div>
          </div>
        </div>

        {/* Incumplimiento de Acuerdos */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            ¿Qué hacer si un integrante incumple los acuerdos?
          </h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">1</div>
              <span className="text-gray-700">Informarle de manera respetuosa y directa sobre el incumplimiento (puede hacerse en privado o en grupo).</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">2</div>
              <span className="text-gray-700">Solicitarle una solución o una nueva fecha de entrega razonable para mitigar el impacto.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">3</div>
              <span className="text-gray-700">Si hay reincidencia, el equipo podrá redistribuir la tarea entre otros miembros para asegurar el cumplimiento.</span>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">4</div>
              <span className="text-gray-700">Si afecta la calidad general del trabajo, se informará al docente o tutor, adjuntando evidencias del proceso.</span>
            </div>
          </div>
        </div>

        {/* Canales de Comunicación */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Canales de Comunicación del Equipo
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Para garantizar la eficiencia, transparencia y colaboración constante, usamos los siguientes canales:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
              <p className="text-gray-600 text-sm">Grupo activo para coordinación rápida, recordatorios y toma de decisiones cotidianas.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-2">Google Meet / Zoom</h4>
              <p className="text-gray-600 text-sm">Reuniones semanales o extraordinarias para revisar avances, resolver bloqueos y alinear entregables.</p>
            </div>
          </div>

          <h4 className="font-semibold text-black mb-3">¿Cómo fortalecen nuestro trabajo en equipo?</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
              <span>Facilitan un flujo constante de información.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
              <span>Permiten una mejor organización de tareas y seguimiento inmediato.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
              <span>Abren espacios seguros para compartir ideas, resolver dudas y crecer juntos.</span>
            </li>
          </ul>
        </div>

        {/* Código de Valores */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Código de Valores de CodeFinance
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-700"><strong>Responsabilidad:</strong> Cada integrante responde por su parte y por el éxito colectivo.</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-700"><strong>Empatía:</strong> Escuchamos y comprendemos antes de juzgar.</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-700"><strong>Innovación:</strong> Estamos abiertos a nuevas ideas y formas de hacer las cosas.</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-700"><strong>Excelencia:</strong> No nos conformamos con lo mínimo, buscamos entregar lo mejor.</span>
            </div>
            <div className="flex items-center md:col-span-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-gray-700"><strong>Compromiso:</strong> Con el equipo, los objetivos y nuestra formación profesional.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicsPage;
