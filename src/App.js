import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Penerapan Deployment & CI/CD pada React.js</h1>
        <p>
          Implementasi deployment aplikasi React menggunakan GitHub dan Vercel
        </p>
      </div>

      <div className="identity">
        <h2>Identitas Mahasiswa</h2>
        <p>
          <b>Nama:</b> Singgih Finaldi
        </p>
        <p>
          <b>NIM:</b> 2403040150
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <h3>⚛️ React.js</h3>
          <p>Frontend Framework</p>
        </div>

        <div className="card">
          <h3>🐙 GitHub</h3>
          <p>Version Control</p>
        </div>

        <div className="card">
          <h3>▲ Vercel</h3>
          <p>Deployment Platform</p>
        </div>
      </div>

      <div className="flow">
        <h2>Alur Deployment</h2>
        <p>Code → GitHub → Vercel → Website Online</p>
      </div>

      <div className="status">
        <h2>Status</h2>
        <p>✅ Project React Berjalan</p>
        <p>✅ Source Code Tersimpan di GitHub</p>
        <p>✅ Deployment Berhasil</p>
      </div>

      <a
        href="https://github.com/sifinaldi-ux/react-deploy-demo"
        target="_blank"
        rel="noreferrer"
      >
        <button>Lihat GitHub</button>
      </a>
    </div>
  );
}

export default App;
