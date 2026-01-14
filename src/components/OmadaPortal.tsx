import { useState, useEffect } from 'react';
import './OmadaPortal.css';

export default function OmadaPortal() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  const handleConnect = () => {
    window.location.href = 'https://aps1-omada-essential-controller.tplinkcloud.com';
  };

  return (
    <div className="landing-container">
      {/* Background Image */}
      <div className="background-image" />
      <div className="background-overlay" />

      {/* Content */}
      <div className={`content-wrapper ${isAnimated ? 'fade-in' : ''}`}>
        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src="/logo.png"
            alt="rotpfau"
            className="brand-logo"
          />
        </div>

        {/* Main Heading */}
        <h1 className="main-heading">
          Hoş Geldiniz
        </h1>

        {/* Description */}
        <p className="main-description">
          Kahvenizi yudumlayın, rahatça çalışın ve keyifli vakit geçirin.
          <br />
          Ücretsiz Wi-Fi ile hizmetinizdeyiz.
        </p>

        {/* Connect Button */}
        <button onClick={handleConnect} className="primary-button">
          İnternete Bağlan
        </button>

        {/* Info Cards */}
        <div className="info-grid">
          <div className="info-card">
            <div className="card-icon">📋</div>
            <h3 className="card-title">Masa Kullanımı</h3>
            <p className="card-description">
              Masalarımız tüm misafirlerimizin kullanımına açıktır. 
              Kişisel eşyalarla uzun süreli yer tutmaktan kaçınınız.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">🍽️</div>
            <h3 className="card-title">Dışarıdan Yiyecek & İçecek</h3>
            <p className="card-description">
              Kafemize dışarıdan yiyecek ve içecek getirilmemektedir. 
              Anlayışınız için teşekkür ederiz.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2025 rotpfau - all rights reserved.</p>
      </footer>
    </div>
  );
}
