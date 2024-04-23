// MainContent.js
import React, { useState } from 'react';
import './mainContent.css';
function MainContent() {
  const [qrText, setQrText] = useState('');
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [error, setError] = useState(false);

  const generateQR = () => {
    if (qrText.length > 0) {
      setQrImageUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="container">
      <p>Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
      />
      <div id="imgBox" className={qrImageUrl ? "show-img" : ""}>
        <img src={qrImageUrl} id="qrImage" alt="QR Code" />
      </div>
      <button onClick={generateQR}>Generate QR Code</button>
      {error && <p className="error-message">Please enter text or URL</p>}
      <footer>
            <div class="author-text">
                <p style={{color:'deeppink'}}>Made with ❤️ by <a href="https://github.com/HackHeroic" target="_blank"><b>Murali Madhav C</b></a></p>
            </div>
        </footer>
    </div>
  );
}

export default MainContent;
