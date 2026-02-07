
import React, { useState } from 'react';
import { Page } from './types';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import StudiesPage from './pages/StudiesPage';
import InterclassesPage from './pages/InterclassesPage';
import GalleryPage from './pages/GalleryPage';
import SchoolPage from './pages/SchoolPage';
import AboutPage from './pages/AboutPage';
import { SCHOOL_NAME } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigateTo} />;
      case 'announcements': return <AnnouncementsPage />;
      case 'studies': return <StudiesPage />;
      case 'interclasses': return <InterclassesPage />;
      case 'gallery': return <GalleryPage />;
      case 'school': return <SchoolPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center text-white font-black text-xl italic group-hover:rotate-6 transition-transform">
              AF
            </div>
            <span className="font-black text-blue-900 uppercase tracking-tighter text-xl">
              Portal <span className="text-yellow-500">Américo</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {['announcements', 'studies', 'interclasses', 'school', 'about'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page as Page)}
                className={`text-[10px] font-black uppercase tracking-widest hover:text-blue-700 transition-colors ${
                  currentPage === page ? 'text-blue-800 border-b-2 border-yellow-400' : 'text-slate-400'
                }`}
              >
                {page === 'announcements' ? 'Avisos' : 
                 page === 'studies' ? 'Estudos' : 
                 page === 'interclasses' ? 'Esportes' : 
                 page === 'school' ? 'Escola' : 'Sobre'}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-blue-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {['home', 'announcements', 'studies', 'interclasses', 'school', 'about'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigateTo(page as Page)}
                  className={`text-left text-xs font-black uppercase tracking-widest p-2 ${
                    currentPage === page ? 'text-blue-800 bg-blue-50 rounded-lg' : 'text-slate-500'
                  }`}
                >
                  {page === 'home' ? 'Início' : 
                   page === 'announcements' ? 'Avisos' : 
                   page === 'studies' ? 'Estudos' : 
                   page === 'interclasses' ? 'Esportes' : 
                   page === 'school' ? 'Escola' : 'Sobre'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-black mb-6 italic uppercase tracking-tighter text-yellow-400">{SCHOOL_NAME}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Escola Estadual Américo Franco - Compromisso com o ensino público de qualidade e o protagonismo juvenil em Poá.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => navigateTo('school')} className="hover:text-yellow-400 transition-colors">Calendário Letivo</button></li>
                <li><button onClick={() => navigateTo('announcements')} className="hover:text-yellow-400 transition-colors">Comunicados Oficiais</button></li>
                <li><button onClick={() => navigateTo('studies')} className="hover:text-yellow-400 transition-colors">Dicas de Estudo</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-yellow-400 transition-colors">Fale com o Grêmio</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 mb-6">Atendimento</h4>
              <p className="text-slate-400 text-sm mb-2">Secretaria: Seg-Sex, 08h às 17h</p>
              <p className="text-slate-400 text-sm">Tel: (11) 4636-6322</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} EE Américo Franco - Grêmio Estudantil</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
