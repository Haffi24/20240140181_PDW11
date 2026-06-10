import React from 'react';

function HarperAssistant() {
  const newsLink = "https://www.mobilelegends.com/news";

  return (
    <a
      href={newsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="harper-assistant"
    >
      <div className="harper-bubble">
        Hi Adventurer! 👋
      </div>

      <img
        src="/harper.png"
        alt="Harper"
        className="harper-image"
      />
    </a>
  );
}

export default HarperAssistant;