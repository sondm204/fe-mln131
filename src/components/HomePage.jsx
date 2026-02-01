import React, { useEffect } from 'react';
import './HomePage.css';

function HomePage({ onNavigate }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.intro-card, .feature-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      observer.observe(card);
    });

    // Team member cards không cần animation ban đầu
    const teamCards = document.querySelectorAll('.team-member-card');
    teamCards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <span className="hero-tagline">Chào mừng đến với</span>
        <h1 className="hero-title">Triết Học Mác-Lênin<br/>Học Tập & Nghiên Cứu</h1>
        <p className="hero-desc">
          Nền tảng học tập toàn diện về triết học Mác-Lênin, giúp bạn nắm vững các nguyên lý cơ bản, 
          phát triển tư duy biện chứng và áp dụng vào thực tiễn.
        </p>
      </section>

      {/* Giới thiệu về Website */}
      <section className="content-section">
        <div className="section-header">
          <h2>Về Trang Web</h2>
          <p>Nền tảng học tập và nghiên cứu triết học Mác-Lênin hiện đại</p>
        </div>

        <div className="bento-grid">
          <div className="intro-card span-12" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
            <div className="card-icon">🎓</div>
            <h3>Mục Tiêu</h3>
            <p>
              Trang web được xây dựng với mục tiêu cung cấp kiến thức toàn diện về triết học Mác-Lênin, 
              giúp học sinh, sinh viên và những người quan tâm có thể tiếp cận, học tập và nghiên cứu một cách 
              dễ dàng và hiệu quả nhất.
            </p>
          </div>

          <div className="intro-card span-6">
            <div className="card-icon">📚</div>
            <h3>Kiến Thức Phong Phú</h3>
            <p>
              Hệ thống bài học được tổ chức theo từng chương, bao gồm các khái niệm cơ bản, 
              nguyên lý và quy luật của triết học Mác-Lênin.
            </p>
          </div>

          <div className="intro-card span-6">
            <div className="card-icon">🎮</div>
            <h3>Trắc Nghiệm Tương Tác</h3>
            <p>
              Hệ thống câu hỏi trắc nghiệm theo từng chương giúp bạn kiểm tra và củng cố kiến thức, 
              với bảng xếp hạng để theo dõi tiến độ học tập.
            </p>
          </div>

          <div className="intro-card span-6">
            <div className="card-icon">🤖</div>
            <h3>Trợ Lý AI</h3>
            <p>
              Trợ lý thông minh sẵn sàng giải đáp thắc mắc, hỗ trợ học tập và nghiên cứu về triết học Mác-Lênin.
            </p>
          </div>

          <div className="intro-card span-6">
            <div className="card-icon">💡</div>
            <h3>Học Tập Linh Hoạt</h3>
            <p>
              Học mọi lúc, mọi nơi với giao diện thân thiện, dễ sử dụng trên mọi thiết bị.
            </p>
          </div>
        </div>
      </section>

      {/* Giới thiệu về Triết học Mác-Lênin */}
      <section className="content-section">
        <div className="section-header">
          <h2>Về Triết Học Mác-Lênin</h2>
          <p>Hệ thống lý luận khoa học và cách mạng</p>
        </div>

        <div className="bento-grid">
          <div className="intro-card span-12" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white'}}>
            <div className="card-icon">🌟</div>
            <h3>Định Nghĩa</h3>
            <p>
              <strong>Triết học Mác-Lênin</strong> là hệ thống lý luận khoa học và cách mạng, 
              được hình thành và phát triển bởi Karl Marx, Friedrich Engels và V.I. Lenin. 
              Đây là thế giới quan và phương pháp luận khoa học, là vũ khí tư tưởng của giai cấp công nhân 
              trong cuộc đấu tranh giải phóng mình và giải phóng toàn nhân loại.
            </p>
          </div>

          <div className="intro-card span-4">
            <div className="card-icon">🔬</div>
            <h3>Chủ Nghĩa Duy Vật Biện Chứng</h3>
            <p>
              Nghiên cứu về mối quan hệ giữa vật chất và ý thức, các quy luật vận động và phát triển 
              của tự nhiên, xã hội và tư duy.
            </p>
          </div>

          <div className="intro-card span-4">
            <div className="card-icon">📊</div>
            <h3>Duy Vật Lịch Sử</h3>
            <p>
              Nghiên cứu quy luật vận động và phát triển của xã hội loài người, 
              về phương thức sản xuất và các hình thái kinh tế - xã hội.
            </p>
          </div>

          <div className="intro-card span-4">
            <div className="card-icon">🎯</div>
            <h3>Chủ Nghĩa Xã Hội Khoa Học</h3>
            <p>
              Nghiên cứu về con đường xây dựng xã hội mới, về dân chủ, nhà nước và 
              các vấn đề của cách mạng xã hội chủ nghĩa.
            </p>
          </div>

          <div className="intro-card span-12" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white'}}>
            <div className="card-icon">💪</div>
            <h3>Ý Nghĩa Thực Tiễn</h3>
            <p>
              Triết học Mác-Lênin không chỉ là lý luận mà còn là kim chỉ nam cho hành động cách mạng. 
              Nó cung cấp phương pháp luận khoa học để nhận thức và cải tạo thế giới, 
              xây dựng xã hội công bằng, dân chủ, văn minh. Tại Việt Nam, triết học Mác-Lênin 
              là nền tảng tư tưởng của Đảng Cộng sản Việt Nam, định hướng cho sự nghiệp đổi mới 
              và phát triển đất nước.
            </p>
          </div>
        </div>
      </section>

      {/* Giới thiệu nhóm */}
      <section className="content-section">
        <div className="section-header">
          <h2>Đội Ngũ Phát Triển</h2>
          <p>Những thành viên đã xây dựng nên dự án này</p>
        </div>

        <div className="team-grid">
          {[
            { name: 'Nguyễn Văn A', studentId: 'SE123456', role: 'Frontend Developer', avatar: '👨‍💻' },
            { name: 'Trần Thị B', studentId: 'SE123457', role: 'Backend Developer', avatar: '👩‍💻' },
            { name: 'Lê Văn C', studentId: 'SE123458', role: 'UI/UX Designer', avatar: '🎨' },
            { name: 'Phạm Thị D', studentId: 'SE123459', role: 'Content Writer', avatar: '✍️' },
            { name: 'Hoàng Văn E', studentId: 'SE123460', role: 'Project Manager', avatar: '👔' },
            { name: 'Vũ Thị F', studentId: 'SE123461', role: 'QA Tester', avatar: '🔍' },
            { name: 'Đỗ Văn G', studentId: 'SE123462', role: 'Full-stack Developer', avatar: '🚀' }
          ].map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-avatar">
                <span className="avatar-emoji">{member.avatar}</span>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-student-id">MSSV: {member.studentId}</p>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Sẵn Sàng Bắt Đầu Học Tập?</h2>
          <p>Khám phá kiến thức, thử thách bản thân với trắc nghiệm và trải nghiệm trợ lý AI thông minh</p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={() => onNavigate && onNavigate('info')}>
              📖 Xem Kiến Thức
            </button>
            <button className="cta-btn secondary" onClick={() => onNavigate && onNavigate('quiz')}>
              🎮 Làm Trắc Nghiệm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

