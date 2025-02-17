import CardInfo from '@/components/card-info/CardInfo';
import Feedback from '@/components/feedback/Feedback';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero
        title='Aprende Frontend Paso a Paso'
        text='Aprender a programar es más efectivo cuando sigues un camino claro y estructurado. Aquí encontrarás retos diseñados para guiarte paso a paso, desde los conceptos básicos hasta proyectos avanzados que pondrán a prueba tus habilidades.'
      />
      <Feedback />
      <CardInfo
        title='Construye Proyectos Reales'
        text='Aprender es importante, pero construir es lo que marca la diferencia. Aquí encontrarás proyectos diseñados para simular situaciones reales'
        linkText='Ver desafíos de CSS'
        linkHref='/challenges/css'
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
    </>
  );
};

export default HomePage;
