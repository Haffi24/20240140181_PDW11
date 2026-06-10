import React from 'react';

function NewsSection() {
  const newsData = [
    {
      title: 'HIRARA COLLABORATION EVENT',
      image: '/sora.png',
      desc: 'Event eksklusif dengan hadiah skin dan diamond gratis.'
    },
    {
      title: 'PATCH 1.9 UPDATE',
      image: '/patch.jpg',
      desc: 'Buff dan nerf terbaru untuk hero meta season ini.'
    },
    {
      title: 'M6 WORLD CHAMPIONSHIP',
      image: '/m6.jpg',
      desc: 'Ikuti perkembangan turnamen MLBB terbesar dunia.'
    }
  ];

  return (
    <section className="news-section" id="news">
      <h2>
        LATEST <span className="highlight">NEWS</span>
      </h2>

      <p className="news-subtitle">
        Update patch terbaru, event in-game, dan berita esports MLBB.
      </p>

      <div className="news-grid">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">

            <img
              src={news.image}
              alt={news.title}
              className="news-image"
            />

            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.desc}</p>

              <a
  href="https://www.mobilelegends.com/news"
  target="_blank"
  rel="noopener noreferrer"
  className="news-btn"
>
  READ MORE →
</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;