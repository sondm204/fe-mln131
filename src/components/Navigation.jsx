import React from 'react';

function Navigation({ onNavigate, currentPage }) {
  const navItems = [
    { id: 'home', label: '🏠 Trang Chủ', color: '#0071e3' },
    { id: 'info', label: '📖 Kiến Thức', color: '#0071e3' },
    { id: 'quiz', label: '🎮 Trắc Nghiệm', color: '#34c759' },
    { id: 'game', label: '🧩 Xây Dựng', color: '#ff9500' },
    { id: 'chatbot', label: '🤖 Trợ Lý AI', color: '#af52de' }
  ];

  return (
    <nav className="nav-container">
      <div className="logo">Triết Học <span>Pro</span></div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            style={{ '--accent-color': item.color }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;