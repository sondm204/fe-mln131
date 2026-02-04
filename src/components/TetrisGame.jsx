import React, { useState, useEffect } from 'react';
import './TetrisGame.css';

// --- CẤU HÌNH KHỐI GẠCH ---
// (Giữ nguyên phần TETROMINOS và STAGE_WIDTH, STAGE_HEIGHT, Icons...)
const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0', label: '' },
  I: { shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]], color: '80, 227, 194', label: 'Dân Biết', desc: 'Minh bạch, công khai' },
  J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '36, 95, 223', label: 'Dân Bàn', desc: 'Thảo luận, đóng góp' },
  L: { shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']], color: '255, 149, 0', label: 'Dân Làm', desc: 'Tham gia thực hiện' },
  O: { shape: [['O', 'O'], ['O', 'O']], color: '255, 214, 10', label: 'Dân Thụ Hưởng', desc: 'Vì lợi ích nhân dân' },
  S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '48, 209, 88', label: 'Dân Kiểm Tra', desc: 'Giám sát quy trình' },
  T: { shape: [[0, 'T', 0], ['T', 'T', 'T'], [0, 0, 0]], color: '175, 82, 222', label: 'Dân Giám Sát', desc: 'Theo dõi hoạt động' },
  Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '255, 59, 48', label: 'Dân làm chủ, Dân là chủ', desc: 'Tư tưởng HCM về dân chủ XHCN' },
};

const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;

const Icons = {
  Left: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>),
  Right: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>),
  Down: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>),
  Rotate: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>)
};

// --- LOGIC GAME UTILS ---
const createStage = () => Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']));
const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

// --- HÀM SINH THÔNG ĐIỆP KẾT THÚC ---
const getEndGameMessage = (score) => {
  if (score < 500) {
    return {
      title: "Cần Nỗ Lực Hơn!",
      desc: "Công cuộc xây dựng xã hội đòi hỏi sự kiên trì. Hãy tiếp tục củng cố sự đoàn kết và thực hiện tốt phương châm 'Dân biết, dân bàn' để nền móng vững chắc hơn."
    };
  } else if (score < 1500) {
    return {
      title: "Kết Quả Khả Quan!",
      desc: "Bạn đã bước đầu xây dựng được một nền tảng xã hội ổn định. Sự giám sát và kiểm tra của nhân dân đang phát huy tác dụng tích cực."
    };
  } else {
    return {
      title: "Thành Tựu Xuất Sắc!",
      desc: "Tuyệt vời! Bạn đã xây dựng một xã hội vững mạnh, nơi quyền làm chủ của nhân dân được phát huy tối đa. Đây là minh chứng cho sức mạnh của đại đoàn kết dân tộc!"
    };
  }
};

function TetrisGame() {
  const [stage, setStage] = useState(createStage());
  const [dropTime, setDropTime] = useState(null);
  const [score, setScore] = useState(0);
  const [rowsCleared, setRowsCleared] = useState(0);
  
  // Trạng thái game: 'menu' | 'playing' | 'gameover'
  const [gameState, setGameState] = useState('menu'); 

  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      setPlayer(prev => ({ ...prev, pos: { x: prev.pos.x + dir, y: prev.pos.y } }));
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    setGameState('playing'); // Chuyển sang trạng thái chơi
    setScore(0);
    setRowsCleared(0);
    const newTetro = randomTetromino();
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: newTetro.shape,
      collided: false,
    });
  };

  const drop = () => {
    // Tăng tốc độ
    if (rowsCleared > (score + 1) * 5) {
      setDropTime(1000 / (rowsCleared / 5 + 1) + 200);
    }
    
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      setPlayer(prev => ({ ...prev, pos: { x: prev.pos.x, y: prev.pos.y + 1 } }));
    } else {
      if (player.pos.y < 1) {
        setGameState('gameover'); // Chuyển sang trạng thái kết thúc
        setDropTime(null);
      }
      setPlayer(prev => ({ ...prev, collided: true }));
    }
  };

  const dropPlayer = () => {
    // Khi đang chơi thì mới drop được
    if (gameState === 'playing') {
        drop();
    }
  };

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) => matrix.map(col => col[index]));
    if (dir > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
      for (let x = 0; x < player.tetromino[y].length; x += 1) {
        if (player.tetromino[y][x] !== 0) {
          if (
            !stage[y + player.pos.y + moveY] ||
            !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
            stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const sweepRows = (newStage) => {
      return newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          setScore(prev => prev + 100);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);
    };

    const updateStage = prevStage => {
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      if (player.collided) {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
          });
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player.collided, player.pos.x, player.pos.y, player.tetromino]);

  useEffect(() => {
    if (gameState === 'playing' && dropTime) {
      const interval = setInterval(() => {
        drop();
      }, dropTime);
      return () => clearInterval(interval);
    }
  }, [gameState, dropTime, drop]);

  const move = ({ keyCode }) => {
    if (gameState === 'playing') {
      if (keyCode === 37) movePlayer(-1);
      else if (keyCode === 39) movePlayer(1);
      else if (keyCode === 40) dropPlayer();
      else if (keyCode === 38) playerRotate(stage, 1);
    }
  };

  const handleControl = (e, action) => {
    if (e.cancelable) e.preventDefault();
    e.stopPropagation();
    if (gameState === 'playing') action();
  };

  return (
    <div className="tetris-wrapper" role="button" tabIndex="0" onKeyDown={move} autoFocus>
      <div className="tetris-container">
        
        {/* SIDEBAR TRÁI */}
        <div className="tetris-sidebar left">
          <div className="legend-box glass-panel">
            <h3>🧩 Phương Châm</h3>
            <p className="legend-subtitle">Chiến lược của Đảng Cộng sản Việt Nam nhằm phát huy dân chủ xã hội chủ nghĩa</p>
            <div className="legend-grid">
              {Object.entries(TETROMINOS).map(([key, value]) => {
                if (key === '0') return null;
                return (
                  <div key={key} className="legend-item">
                    <div className="mini-block" style={{background: `rgba(${value.color}, 1)`}}></div>
                    <div>
                      <strong>{value.label}</strong>
                      <span>{value.desc}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CỘT GIỮA: GAME BOARD & OVERLAYS */}
        <div className="game-center-column">
          <div className="game-board glass-panel">
            {stage.map((row, y) =>
              row.map((cell, x) => (
                <div
                  key={`${x}-${y}`}
                  className="game-cell"
                  style={{
                    background: cell[0] === 0 ? 'rgba(0,0,0,0.03)' : `rgba(${TETROMINOS[cell[0]].color}, 0.9)`,
                    border: cell[0] === 0 ? '1px solid rgba(0,0,0,0.02)' : '1px solid rgba(255,255,255,0.5)',
                  }}
                />
              ))
            )}
            
            {/* OVERLAY: MÀN HÌNH CHÀO MỪNG (START) */}
            {gameState === 'menu' && (
              <div className="game-overlay start-overlay">
                <div className="overlay-icon">🇻🇳</div>
                <h2>Xây Dựng Dân chủ</h2>
                <p>Hãy ghép nối các phương châm <b>"Dân biết, Dân bàn, Dân làm..."</b> để tạo nên nền móng vững chắc cho dân chủ xã hội chủ nghĩa.</p>
                <button className="overlay-btn" onClick={startGame}>Bắt Đầu Xây Dựng</button>
              </div>
            )}

            {/* OVERLAY: MÀN HÌNH KẾT THÚC (GAME OVER) */}
            {gameState === 'gameover' && (
              <div className="game-overlay end-overlay">
                <div className="overlay-icon">🏆</div>
                <h2>{getEndGameMessage(score).title}</h2>
                <p className="end-msg">{getEndGameMessage(score).desc}</p>
                <div className="final-score">Điểm Tích Lũy: {score}</div>
                <button className="overlay-btn" onClick={startGame}>Tiếp Tục Xây Dựng</button>
              </div>
            )}
          </div>

          {/* GAME CONTROLS */}
          <div className={`game-controls glass-panel ${gameState !== 'playing' ? 'disabled' : ''}`}>
            <div className="d-pad-row">
              <button className="control-btn rotate-btn" onTouchStart={(e) => handleControl(e, () => playerRotate(stage, 1))} onClick={(e) => handleControl(e, () => playerRotate(stage, 1))} title="Xoay">
                <Icons.Rotate />
              </button>
            </div>
            <div className="d-pad-row">
              <button className="control-btn" onTouchStart={(e) => handleControl(e, () => movePlayer(-1))} onClick={(e) => handleControl(e, () => movePlayer(-1))} title="Trái">
                <Icons.Left />
              </button>
              <button className="control-btn" onTouchStart={(e) => handleControl(e, () => dropPlayer())} onClick={(e) => handleControl(e, () => dropPlayer())} title="Xuống">
                <Icons.Down />
              </button>
              <button className="control-btn" onTouchStart={(e) => handleControl(e, () => movePlayer(1))} onClick={(e) => handleControl(e, () => movePlayer(1))} title="Phải">
                <Icons.Right />
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR PHẢI */}
        <div className="tetris-sidebar right">
          <div className="score-box glass-panel">
            <h3>Thành Tựu</h3>
            <div className="score-display">
              <span>Điểm Tích Lũy:</span>
              <strong>{score}</strong>
            </div>
            <div className="score-display">
              <span>Hàng Vững Chắc:</span>
              <strong>{rowsCleared}</strong>
            </div>
            
            {gameState === 'playing' && (
               <div className="playing-badge">Đang Xây Dựng...</div>
            )}

            <div className="instructions">
              <p>Sử dụng nút trên màn hình hoặc bàn phím (⬅️ ⬇️ ➡️ ⬆️) để sắp xếp các khối.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TetrisGame;