import React from 'react';

function MainBanner() {
  const gameLink =
    'https://play.google.com/store/apps/details?id=com.mobile.legends&hl=en&gl=UK';

  return (
    <header className="main-banner" id="home">
      
      {/* Video Background */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mlbb-bg.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      {/* Overlay */}
      <div className="banner-overlay"></div>

      <div className="banner-content">

        <h2 className="banner-subtitle">
          WELCOME TO MOBILE LEGENDS
        </h2>

        <h1 className="banner-title">
          BEYOND <span className="highlight">LEGENDS</span>
        </h1>

        <p className="banner-desc">
          Bergabunglah dengan jutaan pemain dalam pertempuran MOBA 5v5 yang epik.
          Pilih hero favoritmu, kuasai Land of Dawn, dan raih kemenangan bersama timmu.
        </p>

        <div className="download-buttons">

          <a
            href={gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-play"
          >
            PLAY FOR FREE
          </a>

          <a
            href={gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-store"
          >
            APP STORE
          </a>

          <a
            href={gameLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-store"
          >
            GOOGLE PLAY
          </a>

        </div>

      </div>

    </header>
  );
}

export default MainBanner;