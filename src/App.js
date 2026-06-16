function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Identitas */}
      <h1>Penerapan Deployment & CI/CD pada React.js</h1>

      <hr />

      <h2>Identitas Mahasiswa</h2>
      <p>
        <strong>Nama:</strong> Singgih Finaldi
      </p>
      <p>
        <strong>NIM:</strong> 2403040150
      </p>
      <p>
        <strong>Kelas:</strong> Pemrograman Web Lanjut B2
      </p>
      <p>
        <strong>Mata Kuliah:</strong> Pemrograman Web Lanjut
      </p>

      <hr />

      {/* Teknologi */}
      <h2>Teknologi yang Digunakan</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>⚛️ React.js</li>
        <li>🐙 GitHub</li>
        <li>▲ Vercel</li>
      </ul>

      <hr />

      {/* Alur Deployment */}
      <h2>Alur Deployment</h2>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Code → GitHub → Vercel → Website Online
      </p>

      <hr />

      {/* Status */}
      <h2>Status Deployment</h2>
      <p>✅ Project React Berjalan</p>
      <p>✅ Source Code Tersimpan di GitHub</p>
      <p>✅ Deployment Berhasil</p>

      <hr />

      {/* Tombol GitHub */}
      <h2>Repository GitHub</h2>

      <a
        href="https://github.com/USERNAME/REPOSITORY"
        target="_blank"
        rel="noreferrer"
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Lihat GitHub
        </button>
      </a>
    </div>
  );
}

export default App;
