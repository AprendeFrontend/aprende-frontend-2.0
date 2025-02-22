import { LEVELS } from '../levels';

const QR_CODE_COMPONENT = {
  id: 'cc0721b5-4130-4324-851c-b3af98a37963',
  name: 'QR code component',
  description: 'En este desafío tendrás que maquetar una pequeña tarjeta con un código QR',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/qr-code.jpg',
  link: 'https://github.com/AprendeFrontend/qr-code-component/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  color: '--trainee'
};

const CREDIT_CARDS = {
  id: '9c7e8f34-2bdf-49e9-b2d6-6e48fc72db73',
  name: 'Credit Cards Display',
  description: 'En este desafío tendrás que maquetar tres tarjetas de crédito.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/cards.jpg',
  link: 'https://github.com/AprendeFrontend/credit-cards-display/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  color: '--trainee'
};

const PROFILE_CARD = {
  id: '29091f8a-012d-4a69-a4b7-fc4762bce0f5',
  name: 'Profile Card',
  description: 'En este desafío tendrás que maquetar una tarjeta de usuario.',
  skills: ['Margin', 'Padding', 'Border radius', 'Imágenes', 'Fuentes', 'Degradados'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso position.'],
  image: '/assets/images/challenges/profile-card.jpg',
  link: 'https://github.com/AprendeFrontend/profile-card/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  color: '--trainee'
};

const PRODUCT_CARD = {
  id: '321b2fbb-aec8-43d5-9526-5ae14072a312',
  name: 'Product card',
  description: 'En este desafío tendrás que maquetar una tarjeta de producto.',
  skills: ['Picture', 'Border radius', 'Imágenes', 'Fuentes'],
  suggestions: [
    'Usar picture en lugar de background-image para la imagen del producto',
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso position.'],
  image: '/assets/images/challenges/product-card.jpg',
  link: 'https://github.com/AprendeFrontend/product-card/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  color: '--junior'
};

const PRICE_TABLES = {
  id: '4b7a9699-1d7f-484e-9eb7-7bddd6018496',
  name: 'Price Tables',
  description: 'En este desafío tendrás que maquetar unas tablas de precios.',
  suggestions: ['Variables CSS para guardar datos que repitas.', 'Importar las fuentes en el HTML y no en el CSS'],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/price-tables.jpg',
  link: 'https://github.com/AprendeFrontend/price-tables/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  color: '--junior'
};

const RESPONSIVE_HERO = {
  id: '034fe4ee-8f51-4e3b-a0fa-03408bc8046f',
  name: 'Responsive hero',
  description: 'En este desafío tendrás que maquetar un hero responsive.',
  skills: ['Position', 'Flex', 'Background-image', 'Pseudoelementos', 'Diseño responsive'],
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/responsive-hero.jpg',
  link: 'https://github.com/AprendeFrontend/responsive-hero/archive/refs/heads/main.zip',
  level: LEVELS.MIDDLE,
  color: '--junior'
};

export { CREDIT_CARDS, PRICE_TABLES, PRODUCT_CARD, PROFILE_CARD, QR_CODE_COMPONENT, RESPONSIVE_HERO };
