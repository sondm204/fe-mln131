import { useState, useEffect } from 'react';
import './QuizGame.css';
import { API_CONFIG } from '../config/api';

// Dữ liệu câu hỏi cho chương 4
const questions = [
  // Trang 1: Dân chủ và Dân chủ XHCN
  {
    question: "Thuật ngữ 'Dân chủ' (Demokratos) ra đời vào khoảng thời gian nào?",
    options: [
      "Thế kỷ V - IV trước Công nguyên",
      "Thế kỷ VII - VI trước Công nguyên",
      "Thế kỷ III - II trước Công nguyên",
      "Thế kỷ I trước Công nguyên"
    ],
    correct: 1
  },
  {
    question: "'Demokratos' trong tiếng Hy Lạp có nghĩa là gì?",
    options: [
      "Quyền lực của vua",
      "Quyền lực thuộc về nhân dân",
      "Quyền lực của quý tộc",
      "Quyền lực của tư sản"
    ],
    correct: 1
  },
  {
    question: "Dân chủ có bao nhiêu phương diện cơ bản?",
    options: ["2", "3", "4", "5"],
    correct: 1
  },
  {
    question: "Dân chủ sẽ mất đi khi nào?",
    options: [
      "Khi có nhà nước",
      "Khi xã hội không còn giai cấp và nhà nước",
      "Khi có giai cấp",
      "Không bao giờ mất đi"
    ],
    correct: 1
  },
  {
    question: "Bản chất chính trị của nền dân chủ XHCN là gì?",
    options: [
      "Lãnh đạo của giai cấp tư sản",
      "Lãnh đạo chính trị của giai cấp công nhân thông qua Đảng Cộng sản",
      "Lãnh đạo của quý tộc",
      "Không có lãnh đạo"
    ],
    correct: 1
  },
  {
    question: "Bản chất kinh tế của nền dân chủ XHCN dựa trên:",
    options: [
      "Chế độ tư hữu",
      "Chế độ công hữu về tư liệu sản xuất",
      "Chế độ hỗn hợp",
      "Chế độ tập thể"
    ],
    correct: 1
  },
  {
    question: "Hệ tư tưởng chủ đạo của nền dân chủ XHCN là:",
    options: [
      "Chủ nghĩa tự do",
      "Mác - Lênin",
      "Chủ nghĩa dân tộc",
      "Chủ nghĩa tư bản"
    ],
    correct: 1
  },
  // Trang 2: Nhà nước XHCN
  {
    question: "Nhà nước XHCN ra đời từ đâu?",
    options: [
      "Từ cuộc cách mạng tư sản",
      "Từ cuộc cách mạng xã hội chủ nghĩa",
      "Từ cải cách",
      "Từ đàm phán"
    ],
    correct: 1
  },
  {
    question: "Chức năng căn bản nhất, quan trọng nhất của nhà nước XHCN là:",
    options: [
      "Chức năng giai cấp (Trấn áp)",
      "Chức năng xã hội (Tổ chức & Xây dựng)",
      "Chức năng đối ngoại",
      "Chức năng quân sự"
    ],
    correct: 1
  },
  {
    question: "Quyền lực nhà nước XHCN thuộc về:",
    options: ["Giai cấp tư sản", "Nhân dân", "Quý tộc", "Tư bản"],
    correct: 1
  },
  {
    question: "Bản chất chính trị của nhà nước XHCN là:",
    options: [
      "Mang bản chất của giai cấp tư sản",
      "Mang bản chất của giai cấp công nhân",
      "Mang bản chất của quý tộc",
      "Không có bản chất giai cấp"
    ],
    correct: 1
  },
  {
    question: "Chức năng trấn áp của nhà nước XHCN nhằm:",
    options: [
      "Bảo vệ thành quả cách mạng, giữ gìn trật tự xã hội",
      "Áp bức nhân dân",
      "Bảo vệ lợi ích tư bản",
      "Duy trì bất bình đẳng"
    ],
    correct: 0
  },
  // Trang 3: Thực tiễn tại Việt Nam
  {
    question: "Phương châm thực hiện dân chủ ở cơ sở là:",
    options: [
      "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng",
      "Chỉ dân biết",
      "Chỉ dân làm",
      "Chỉ dân thụ hưởng"
    ],
    correct: 0
  },
  {
    question: "Dân chủ trực tiếp là:",
    options: [
      "Nhân dân bầu đại biểu",
      "Nhân dân trực tiếp thảo luận, góp ý, biểu quyết",
      "Chỉ có đại biểu quyết định",
      "Không có dân chủ"
    ],
    correct: 1
  },
  {
    question: "Dân chủ gián tiếp (đại diện) là:",
    options: [
      "Nhân dân trực tiếp quyết định",
      "Nhân dân bầu ra các đại biểu vào Quốc hội và Hội đồng nhân dân",
      "Không có đại diện",
      "Chỉ có nhà nước quyết định"
    ],
    correct: 1
  },
  {
    question: "Nhà nước pháp quyền XHCN Việt Nam do ai lãnh đạo?",
    options: [
      "Giai cấp tư sản",
      "Đảng Cộng sản Việt Nam",
      "Quý tộc",
      "Tư bản"
    ],
    correct: 1
  },
  {
    question: "Theo Điều 4 Hiến pháp 2013, ai lãnh đạo Nhà nước pháp quyền XHCN Việt Nam?",
    options: [
      "Giai cấp tư sản",
      "Đảng Cộng sản Việt Nam",
      "Quý tộc",
      "Tư bản"
    ],
    correct: 1
  },
  {
    question: "Nguyên tắc của nhà nước pháp quyền XHCN Việt Nam là:",
    options: [
      "Tập trung độc đoán",
      "Tập trung dân chủ",
      "Dân chủ tuyệt đối",
      "Không có nguyên tắc"
    ],
    correct: 1
  },
  // Trang 4: Tổng kết
  {
    question: "Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN là:",
    options: [
      "Dân chủ XHCN là cơ sở, nền tảng cho việc xây dựng nhà nước XHCN",
      "Không có mối quan hệ",
      "Nhà nước XHCN là cơ sở của dân chủ",
      "Hai khái niệm độc lập"
    ],
    correct: 0
  },
  {
    question: "Nhiệm vụ hiện nay để củng cố nền dân chủ KHÔNG bao gồm:",
    options: [
      "Hoàn thiện hệ thống pháp luật",
      "Cải cách bộ máy nhà nước",
      "Đẩy mạnh đấu tranh phòng chống tham nhũng",
      "Xóa bỏ nhà nước"
    ],
    correct: 3
  },
  {
    question: "Nhà nước XHCN là gì đối với quyền làm chủ của nhân dân?",
    options: [
      "Cơ sở, nền tảng",
      "Công cụ, phương thức",
      "Mục tiêu",
      "Không liên quan"
    ],
    correct: 1
  }
];

// Tên chương
const chapterName = 'Dân Chủ Xã Hội Chủ Nghĩa Và Nhà Nước Xã Hội Chủ Nghĩa';

function QuizGame() {
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(true);

  // Load leaderboard từ API
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(API_CONFIG.LEADERBOARD_API);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
          setLeaderboard(result.data || []);
        } else {
          throw new Error(result.error || 'Failed to load leaderboard');
        }
      } catch (error) {
        console.error('Error loading leaderboard:', error);
        // Fallback: thử load từ localStorage nếu API lỗi
        const saved = localStorage.getItem('quizLeaderboard');
        if (saved) {
          try {
            setLeaderboard(JSON.parse(saved));
          } catch (e) {
            console.error('Error parsing localStorage:', e);
          }
        }
      } finally {
        setIsLoadingLeaderboard(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Lưu điểm vào leaderboard qua API
  const saveScore = async (name, score, total) => {
    const newEntry = {
      name,
      chapter: chapterName,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      date: new Date().toISOString()
    };

    try {
      const response = await fetch(API_CONFIG.LEADERBOARD_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setLeaderboard(result.data || []);
      } else {
        throw new Error(result.error || 'Failed to save score');
      }
    } catch (error) {
      console.error('Error saving score to API:', error);
      // Fallback: lưu vào localStorage nếu API lỗi
      const updated = [...leaderboard, newEntry]
        .sort((a, b) => {
          if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
          }
          return b.score - a.score;
        })
        .slice(0, 50);
      
      setLeaderboard(updated);
      localStorage.setItem('quizLeaderboard', JSON.stringify(updated));
      alert('Không thể kết nối server. Điểm đã được lưu tạm thời trên trình duyệt.');
    }
  };

  const handleStartQuiz = () => {
    if (!playerName.trim()) {
      alert('Vui lòng nhập tên của bạn!');
      return;
    }
    setShowNameInput(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswerClick = (selectedIndex) => {
    if (isAnswered) return;

    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Tính điểm cuối cùng: score đã được cập nhật trong handleAnswerClick với functional update
      // Vì đã dùng functional update, score đã bao gồm câu trả lời cuối nếu đúng
      setScore(prevScore => {
        const finalScore = prevScore; // prevScore đã bao gồm câu trả lời cuối nếu đúng
        // Lưu điểm vào leaderboard (async)
        saveScore(playerName, finalScore, questions.length);
        return prevScore;
      });
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setShowNameInput(false);
    setPlayerName('');
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    // Scroll to top khi reset
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Top 5 leaderboard
  const top5 = leaderboard.slice(0, 5);

  // Hiển thị màn hình nhập tên
  if (showNameInput) {
    return (
      <div className="quiz-game">
        <div className="quiz-container">
          <div className="name-input-section">
            <h2>Nhập Tên Của Bạn</h2>
            <p>Chương: {chapterName}</p>
            <input
              type="text"
              className="name-input"
              placeholder="Nhập tên của bạn..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz()}
              autoFocus
            />
            <div className="name-input-buttons">
              <button className="btn-secondary" onClick={() => {
                setShowNameInput(false);
                setPlayerName('');
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelectedAnswer(null);
                setIsAnswered(false);
              }}>
                Hủy
              </button>
              <button className="btn-primary" onClick={handleStartQuiz}>
                Bắt Đầu →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hiển thị kết quả
  if (showScore) {
    // Tính lại điểm cuối cùng để đảm bảo chính xác
    const isLastCorrect = selectedAnswer === questions[currentQuestion].correct;
    const finalScore = isLastCorrect ? score + 1 : score;
    const finalPercentage = Math.round((finalScore / questions.length) * 100);
    
    return (
      <div className="quiz-game">
        <div className="score-section">
          <h2>Kết Quả Quiz</h2>
          <p className="player-name-result">Người chơi: {playerName}</p>
          <p className="chapter-name-result">Chương: {chapterName}</p>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{finalScore}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="score-percentage">
              {finalPercentage}%
            </p>
          </div>
          <p className="score-message">
            {finalPercentage >= 90 ? "Xuất sắc! Bạn là chuyên gia về triết học Mác-Lênin! 🌟" :
             finalPercentage >= 70 ? "Rất tốt! Bạn có kiến thức vững về triết học Mác-Lênin! 👏" :
             finalPercentage >= 50 ? "Khá tốt! Hãy tiếp tục học hỏi thêm! 📚" :
             "Hãy cố gắng học thêm về triết học Mác-Lênin nhé! 💪"}
          </p>
          <div className="score-buttons">
            <button className="reset-button" onClick={resetQuiz}>
              🔄 Chơi Lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Hiển thị màn hình bắt đầu (chỉ khi chưa nhập tên)
  if (!playerName) {
    return (
      <div className="quiz-game">
        <div className="quiz-container">
          <div className="quiz-header">
            <h2>Trắc Nghiệm: {chapterName}</h2>
            <p>{questions.length} câu hỏi để kiểm tra kiến thức của bạn</p>
          </div>

          <div className="quiz-start-section">
            <div className="quiz-info-card">
              <div className="quiz-icon">📚</div>
              <h3>Chương 4</h3>
              <p>{chapterName}</p>
              <div className="quiz-stats">
                <div className="stat-item">
                  <span className="stat-number">{questions.length}</span>
                  <span className="stat-label">Câu hỏi</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20 phút</span>
                  <span className="stat-label">Thời gian ước tính</span>
                </div>
              </div>
              <button className="start-quiz-button" onClick={() => setShowNameInput(true)}>
                Bắt Đầu Làm Bài →
              </button>
            </div>
          </div>

          {/* Top 5 Leaderboard */}
          {isLoadingLeaderboard ? (
            <div className="leaderboard-section">
              <h3>🏆 Top 5 Người Chơi Xuất Sắc</h3>
              <p style={{textAlign: 'center', color: '#666', padding: '1rem'}}>Đang tải...</p>
            </div>
          ) : top5.length > 0 ? (
            <div className="leaderboard-section">
              <h3>🏆 Top 5 Người Chơi Xuất Sắc</h3>
              <div className="leaderboard-list">
                {top5.map((entry, index) => (
                  <div key={index} className="leaderboard-item">
                    <div className="rank-badge">{index + 1}</div>
                    <div className="leaderboard-info">
                      <div className="leaderboard-name">{entry.name}</div>
                      <div className="leaderboard-details">
                        {entry.score}/{entry.total} ({entry.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="leaderboard-section">
              <h3>🏆 Top 5 Người Chơi Xuất Sắc</h3>
              <p style={{textAlign: 'center', color: '#666', padding: '1rem'}}>Chưa có dữ liệu</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Hiển thị câu hỏi (khi đã có playerName và không ở màn hình nhập tên hay kết quả)
  return (
    <div className="quiz-game">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="question-count">
            Câu hỏi {currentQuestion + 1}/{questions.length}
          </div>
          <div className="score-tracker">
            Điểm: {score}
          </div>
        </div>

        <div className="question-section">
          <h3>{questions[currentQuestion].question}</h3>
        </div>

        <div className="answer-section">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`answer-button ${
                isAnswered
                  ? index === questions[currentQuestion].correct
                    ? 'correct'
                    : index === selectedAnswer
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="next-section">
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestion + 1 < questions.length ? 'Câu Tiếp Theo →' : 'Xem Kết Quả'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizGame;
