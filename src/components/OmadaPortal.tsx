import { useState, useEffect } from 'react';
import './OmadaPortal.css';

export default function OmadaPortal() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  const handleConnect = () => {
    // Parse Omada URL parameters
    const params = new URLSearchParams(window.location.search);
    const clientMac = params.get('clientMac');
    const clientIp = params.get('clientIp');
    const apMac = params.get('apMac');
    const ssidName = params.get('ssidName');
    const radioId = params.get('radioId');
    const site = params.get('site');
    const t = params.get('t');
    const redirectUrl = params.get('redirectUrl');

    // If Omada parameters exist, authorize
    if (clientMac && site) {
      // Construct authorization URL
    //  const authUrl = `https://aps1-omada-essential-controller.tplinkcloud.com`;
      const authUrl = `omada://aps1-omada-essential-device.tplinkcloud.com?dPort=29810&mPort=443&omadacId=69344d80cb4d110814c5e602`
      // Create authorization form data
      const formData = new URLSearchParams({
        clientMac: clientMac,
        clientIp: clientIp || '',
        apMac: apMac || '',
        ssidName: ssidName || '',
        radioId: radioId || '',
        site: site,
        t: t || '',
        action: 'authorize'
      });

      // Send authorization request
      fetch(authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors'
      }).then(() => {
        console.log('Authorization sent');
        // Redirect to original URL or default
        setTimeout(() => {
          if (redirectUrl) {
            window.location.href = decodeURIComponent(redirectUrl);
          } else {
            window.location.href = 'http://www.google.com';
          }
        }, 1000);
      }).catch(() => {
        console.log('Authorization completed');
        // Still redirect even if there's an error
        setTimeout(() => {
          if (redirectUrl) {
            window.location.href = decodeURIComponent(redirectUrl);
          } else {
            window.location.href = 'http://www.google.com';
          }
        }, 1000);
      });
    } else {
      // No Omada parameters, just redirect
      window.location.href = 'https://aps1-omada-essential-controller.tplinkcloud.com';
    }
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
            src="/rotpfau_yılbası.png"
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
              Mekanımıza dışarıdan yiyecek ve içecek getirilmemektedir. 
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
