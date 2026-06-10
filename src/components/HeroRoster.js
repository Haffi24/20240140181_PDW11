import React, { useState } from 'react';

function HeroRoster() {
  const [filter, setFilter] = useState('All');

  const heroes = [
    {
      name: 'Ling',
      role: 'Assassin',
      image: '/heroes/ling.jpg'
    },
    {
      name: 'Fanny',
      role: 'Assassin',
      image: '/heroes/fanny.jpg'
    },
    {
      name: 'Kagura',
      role: 'Mage',
      image: '/heroes/kagura.jpg'
    },
    {
      name: 'Pharsa',
      role: 'Mage',
      image: '/heroes/pharsa.jpg'
    },
    {
      name: 'Tigreal',
      role: 'Tank',
      image: '/heroes/tigreal.jpg'
    },
    {
      name: 'Khufra',
      role: 'Tank',
      image: '/heroes/khufra.jpg'
    },
    {
      name: 'Chou',
      role: 'Fighter',
      image: '/heroes/chou.jpg'
    },
    {
      name: 'Claude',
      role: 'Marksman',
      image: '/heroes/claude.jpg'
    }
  ];

  const roles = [
    'All',
    'Tank',
    'Fighter',
    'Assassin',
    'Mage',
    'Marksman',
    'Support'
  ];

  const filteredHeroes =
    filter === 'All'
      ? heroes
      : heroes.filter(hero => hero.role === filter);

  return (
    <section className="roster-section" id="heroes">

      <div className="roster-header">
        <h2>
          HERO <span className="highlight">ROSTER</span>
        </h2>

        <div className="role-filters">
          {roles.map(role => (
            <button
              key={role}
              className={
                filter === role
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
              onClick={() => setFilter(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="roster-grid">
        {filteredHeroes.map((hero, index) => (
          <div key={index} className="roster-card">

            <div className="roster-img">
              <img
                src={hero.image}
                alt={hero.name}
                className="hero-card-image"
              />
            </div>

            <div className="roster-info">
              <h3>{hero.name}</h3>
              <span>{hero.role}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default HeroRoster;