import CardInfo from '@/components/card-info/CardInfo';
import DiscordBanner from '@/components/discord-banner/DiscordBanner';
import Feedback from '@/components/feedback/Feedback';
import Hero from '@/components/hero/Hero';

const HomePage = () => {
  return (
    <>
      <Hero
        title='Aprende Frontend Paso a Paso'
        text='Aprender a programar es más efectivo cuando sigues un camino claro y estructurado. Aquí encontrarás retos diseñados para guiarte paso a paso, desde los conceptos básicos hasta proyectos avanzados que pondrán a prueba tus habilidades.'
        className='hero-main'
        button
      />
      <Feedback />
      <CardInfo
        title='Construye Proyectos Reales'
        text='Aprender es importante, pero construir es lo que marca la diferencia. Aquí encontrarás proyectos diseñados para simular situaciones reales'
        linkText='Ver desafíos de CSS'
        linkHref='/challenges/html-css'
        animation='CSS'
      />
      <CardInfo
        title='Desarrolla habilidades técnicas'
        text='Aquí no se trata de hacer ejercicios sin sentido. Cada reto tiene un propósito claro, preparándote para resolver problemas reales y construir proyectos que realmente importen.'
        linkText='Ver desafíos de JavaScript'
        linkHref='/challenges/javascript'
        animation='JS'
        reverse
      />
      <DiscordBanner />
    </>
  );
};

export default HomePage;
