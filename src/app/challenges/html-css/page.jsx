'use client';
import Challenges from '@/components/challenges/Challenges';
import Filters from '@/components/filters/Filters';
import Hero from '@/components/hero/Hero';
import { HTML_CSS_CHALLENGES } from '@/constants/challenges';
import { LEVELS } from '@/constants/levels';
import { useState } from 'react';

const ChallengesHTMLCSS = () => {
  const [level, setLevel] = useState(LEVELS.ALL);
  const filteredChallenges = filterChallenges(HTML_CSS_CHALLENGES, level);
  return (
    <>
      <Hero
        title='Aprende HTML y CSS con desafíos prácticos'
        text='Pon a prueba tus habilidades construyendo interfaces reales y mejorando tu código con retos que te enseñarán a escribir HTML y CSS de manera profesional.'
        className='hero-small'
      />
      <Filters level={level} setLevel={setLevel} />
      <Challenges filteredChallenges={filteredChallenges} />
    </>
  );
};

const filterChallenges = (challenges, filter) => {
  if (filter === LEVELS.ALL) return [...challenges];
  return challenges.filter(challenge => challenge.level === filter);
};

export default ChallengesHTMLCSS;
