import { LEVELS } from '../levels';

const GUESS_THE_NUMBER = {
  id: '6a7bcf01-d912-482f-8d35-b2e915c78902',
  name: 'Guess the Number',
  headerDescription:
    'Interfaz de juego interactivo: fondo geométrico claro, tarjeta central oscura, título "GUESS THE NUMBER" y números interactivos destacados.',
  description: 'En este desafío tendrás que realizar un juego interactivo donde adivinarás un número que se genera de forma aleatoria.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/guess-the-number.jpg',
  requirements: 'Interfaz responsiva y lógica básica de interacción',
  link: 'https://github.com/AprendeFrontend/guess-the-number/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  color: '--trainee'
};

const SIMPLE_PASSWORD_GENERATOR = {
  id: '123abc45-def6-7890-gh12-ijklmnop3456',
  name: 'Simple Password Generator',
  headerDescription:
    'Interfaz moderna para generar contraseñas: tonos oscuros con degradados morados, diseño funcional, profesional y visualmente atractivo.',
  description: 'En este desafío tendrás que desarrollar un generador de contraseñas en base a la longitud seleccionada.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/simple-password-generator.jpg',
  requirements: 'Interfaz responsiva y generación de contraseñas seguras',
  link: 'https://github.com/AprendeFrontend/simple-password-generator/archive/refs/heads/main.zip',
  level: LEVELS.TRAINEE,
  color: '--trainee'
};

const MEMORY_GAME = {
  id: '91e4f748-319c-4999-8798-fddfe551bce1',
  name: 'Memory Game',
  headerDescription: 'Memory game donde el jugador tendrá que revelar las tarjetas y encontrar las imágenes que coinciden.',
  description: 'En este desafío tendrás que maquetar un juego de encontrar parejas.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/memory-game.jpg',
  link: 'https://github.com/AprendeFrontend/memory-game/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  color: '--junior'
};

const FORM_VALIDATE = {
  id: '106c7528-77a9-4e65-ad36-d1b5e8bd9250',
  name: 'Form Validate',
  headerDescription:
    'Formulario de validación de contraseñas que verifica requisitos mínimos como caracteres especiales, números y letras mayúsculas.',
  description: 'En este primer desafío tendrás que maquetar un formulario de validación de contraseñas.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/form-validate.jpg',
  link: 'https://github.com/AprendeFrontend/form-validate/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  color: '--junior'
};

const ADVANCED_PASSWORD_GENERATOR = {
  id: 'c8b9e234-77b4-4981-a63f-5b9f6d237fe8',
  name: 'Advanced Password Generator',
  headerDescription:
    'Generador de contraseñas avanzado con un control deslizante y opciones para incluir mayúsculas, minúsculas, números y símbolos.',
  description: 'En este desafío tendrás que mejorar el generador de password simple añadiendo opciones a la contraseña generada.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.'],
  image: '/assets/images/challenges/advanced-password-generator.jpg',
  requirements: 'Interactividad avanzada y diseño adaptable',
  link: 'https://github.com/AprendeFrontend/advanced-password-generator/archive/refs/heads/main.zip',
  level: LEVELS.JUNIOR,
  color: '--junior'
};

const BLACK_PLATE = {
  id: '96882f60-4145-4f81-901a-e6ad8d108f44',
  name: 'Black Plate',
  headerDescription:
    'Diseño elegante: interfaz oscura con detalles dorados, ideal para restaurantes gourmet. Dos secciones principales para navegación intuitiva.',
  description: 'En este desafío tendrás que maquetar la tienda de un restaurante con su carrito de la compra.',
  suggestions: [
    'Variables CSS para guardar los colores, los tamaños y los pesos de las fuentes.',
    'Importar las fuentes en el HTML y no en el CSS'
  ],
  restrictions: ['No se puede usar ningún tipo de framework y/o librería.', 'No está permitido el uso de flexbox ni de grid.'],
  image: '/assets/images/challenges/black-plate.jpg',
  requirements: 'Hazlo Bien',
  level: LEVELS.MIDDLE,
  color: '--middle'
};

export { ADVANCED_PASSWORD_GENERATOR, BLACK_PLATE, FORM_VALIDATE, GUESS_THE_NUMBER, MEMORY_GAME, SIMPLE_PASSWORD_GENERATOR };
