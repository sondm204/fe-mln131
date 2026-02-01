import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';
import { API_CONFIG } from '../config/api';

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Xin chào! Tôi là chatbot chuyên về triết học Mác-Lênin. Tôi có thể giúp bạn hiểu về các khái niệm cơ bản, nguyên lý và ứng dụng của triết học Mác-Lênin. Hãy đặt câu hỏi cho tôi!",
      isBot: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const sendMessage = async (message) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(API_CONFIG.CHAT_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        return {
          text: data.answer_markdown || data.answer || 'Xin lỗi, tôi không thể trả lời câu hỏi này.',
          isBot: true,
          sources: data.sources || [],
          confidence: data.confidence,
          domain: data.domain
        };
      } else {
        throw new Error(data.error || 'Có lỗi xảy ra khi xử lý câu hỏi');
      }
    } catch (error) {
      console.error('Error calling API:', error);
      return {
        text: 'Xin lỗi, có lỗi xảy ra khi kết nối với server. Vui lòng thử lại sau.',
        isBot: true,
        error: true
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;

    const userMessage = { text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Thêm message loading
    const loadingMessage = { text: 'Đang suy nghĩ...', isBot: true, isLoading: true };
    setMessages(prev => [...prev, loadingMessage]);

    const botResponse = await sendMessage(inputText);
    
    // Xóa loading message và thêm response
    setMessages(prev => {
      const filtered = prev.filter(msg => !msg.isLoading);
      return [...filtered, botResponse];
    });

    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "6 Đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là gì?",
    "Dân chủ xã hội chủ nghĩa là gì?",
    "Vai trò của Nhà nước trong xã hội số?",
    "Yêu cầu đối với sinh viên FPT trong xây dựng Nhà nước pháp quyền?"
  ];

  const handleQuickQuestion = (question) => {
    setInputText(question);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="bot-avatar">🤖</div>
          <div>
            <h3>Chatbot Triết Học Mác-Lênin</h3>
            <span className="bot-status">🟢 Đang hoạt động</span>
          </div>
        </div>

        <div className="quick-questions">
          <p>Câu hỏi gợi ý:</p>
          <div className="quick-buttons">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="quick-button"
                disabled={isLoading}
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
            >
              {message.isBot && <div className="message-avatar">🤖</div>}
              <div className="message-content">
                {message.isLoading ? (
                  <div className="loading-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <>
                    <div className="markdown-content">
                      <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                    {message.sources && message.sources.length > 0 && (
                      <div className="message-sources">
                        <strong>Nguồn tham khảo:</strong>
                        <ul>
                          {message.sources.map((source, idx) => (
                            <li key={idx}>{source}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {message.confidence !== undefined && (
                      <div className="message-confidence">
                        <span className="confidence-label">Độ tin cậy:</span>
                        <div className="confidence-bar">
                          <div 
                            className="confidence-fill" 
                            style={{ width: `${message.confidence * 100}%` }}
                          ></div>
                        </div>
                        <span className="confidence-value">{Math.round(message.confidence * 100)}%</span>
                      </div>
                    )}
                  </>
                )}
              </div>
              {!message.isBot && <div className="message-avatar">👤</div>}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isLoading ? "Đang xử lý..." : "Nhập câu hỏi của bạn..."}
            rows="2"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend} 
            className="send-button"
            disabled={isLoading || inputText.trim() === ''}
          >
            {isLoading ? '⏳' : '✈️'} {isLoading ? 'Đang xử lý...' : 'Gửi'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
