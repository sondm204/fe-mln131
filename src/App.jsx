import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';
import QuizGame from './components/QuizGame';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'info':
        return <InfoPage onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizGame />;
      case 'chatbot':
        return <Chatbot />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {/* Navigation được đưa lên đầu, đóng vai trò Header */}
      <header className="app-header">
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      </header>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2026 Triết Học Mác-Lênin</p>
          <span className="footer-divider">•</span>
          <p>Học tập & Nghiên cứu</p>
        </div>
      </footer>
    </div>
  );
}

export default App;