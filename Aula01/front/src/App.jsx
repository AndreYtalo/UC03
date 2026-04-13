import AlunosPage from "./pages/AlunoPages";
function App() {
  return (
    <>
      <div style={{
        textAlign: 'center',
        padding: '2rem 0',
        background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
        borderBottom: '2px solid #00ff88',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #00ff88, #ff0080, #0088ff)',
          animation: 'borderGlow 3s ease-in-out infinite'
        }}></div>
        <h1 style={{
          color: '#00ff88',
          textShadow: '0 0 20px #00ff88',
          fontFamily: "'Courier New', monospace",
          fontSize: '3rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          margin: '0',
          position: 'relative',
          zIndex: '1'
        }}>
          🎮 CYBER STUDENTS 🎮
        </h1>
        <p style={{
          color: '#cccccc',
          fontFamily: "'Courier New', monospace",
          fontSize: '1.1rem',
          margin: '0.5rem 0 0 0',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Sistema de Gerenciamento de Alunos
        </p>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#00ff88',
          fontSize: '0.8rem',
          fontFamily: "'Courier New', monospace",
          textShadow: '0 0 10px #00ff88'
        }}>
          v2.0 - CYBER EDITION
        </div>
      </div>
      <AlunosPage />
      <style>
        {`
          @keyframes borderGlow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </>
  )
}
export default App
