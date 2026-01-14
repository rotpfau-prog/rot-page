import { useState, useEffect } from 'react';
import './OmadaPortal.css';

export default function OmadaPortal() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  const handleConnect = () => {
    // Burada authentication olmadan sadece redirect yapılacak
    window.location.href = 'https://aps1-omada-essential-controller.tplinkcloud.com';
  };

  return (
    <div className="omada-container">
      {/* Background Image */}
      <div className="background-layer" />

      {/* Main Content */}
      <div className="main-content">
        {/* Logo Section */}
        <div className={`logo-section ${isAnimated ? 'slide-in' : ''}`}>
          <img
            src="/logo.png"
            alt="rotpfau"
            className="logo-image"
          />
        </div>

        {/* Content Grid */}
        <div className={`content-grid ${mounted ? 'fade-in' : ''}`}>
          {/* Welcome Card - Sol Taraf */}
          <div className="welcome-card">
            <h1 className="welcome-title">Hoş Geldiniz!</h1>
            <p className="welcome-text">
              Rotpfau'ya hoş geldiniz. Kahvenizi yudumlayın, rahatça çalışın 
              ve keyifli vakit geçirin. Sıcak bir atmosferde hizmetinizdeyiz.
            </p>
            <p className="welcome-text">
              Ücretsiz Wi-Fi'ımızdan faydalanabilir, toplantılarınızı 
              yapabilir veya arkadaşlarınızla buluşabilirsiniz.
            </p>
            <button onClick={handleConnect} className="connect-button">
              İnternete Bağlan
            </button>
          </div>

          {/* Rules Card - Sağ Taraf */}
          <div className="rules-card">
            <div className="rule-item">
              <h2 className="rule-title">Masa Kullanımı</h2>
              <p className="rule-text">
                Masalarımız tüm misafirlerimizin kullanımına açıktır.
              </p>
              <p className="rule-text">
                Kişisel eşyalarla uzun süreli yer tutmak ve masa kullanımını 
                engellemekten kaçınmanızı rica ederiz.
              </p>
              <p className="rule-text">
                Anlayışınız için teşekkür ederiz.
              </p>
            </div>

            <div className="rule-divider"></div>

            <div className="rule-item">
              <h2 className="rule-title">Dışarıdan Yiyecek & İçecek</h2>
              <p className="rule-text">
                Mekanımıza dışarıdan yiyecek ve içecek getirilmemektedir.
              </p>
              <p className="rule-text">
                Size en iyi deneyimi sunabilmek için bu konuda anlayışınızı 
                rica ederiz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="copyright-section">
        <p className="copyright-text">© 2025 rotpfau - all rights reserved.</p>
      </div>
    </div>
  );
}
