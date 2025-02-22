'use client';
import Challenges from '@/components/challenges/Challenges';
import Filters from '@/components/filters/Filters';
import Hero from '@/components/hero/Hero';
import { JAVASCRIPT_CHALLENGES } from '@/constants/challenges';
import { LEVELS } from '@/constants/levels';
import { useState } from 'react';

const ChallengesHTMLCSS = () => {
  const [level, setLevel] = useState(LEVELS.ALL);
  const filteredChallenges = filterChallenges(JAVASCRIPT_CHALLENGES, level);
  return (
    <>
      <Hero
        title='Aprende JavaScript con desafíos prácticos'
        text='Resuelve ejercicios prácticos que pondrán a prueba tu capacidad para manipular el DOM, gestionar eventos y escribir código limpio y eficiente.'
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
