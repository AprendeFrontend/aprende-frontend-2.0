import { v4 } from 'uuid';
import Button from '../button/Button';
const buttonsLevel = [
  {
    id: v4(),
    text: 'Todos'
  },
  {
    id: v4(),
    text: 'Nivel 1'
  },
  {
    id: v4(),
    text: 'Nivel 2'
  },
  {
    id: v4(),
    text: 'Nivel 3'
  }
];
const Filters = ({ level, setLevel }) => {
  return (
    <div className='flex-container'>
      {buttonsLevel.map((button, index) => {
        const isActive = level === index;
        return (
          <Button key={button.id} className={`button-ghost button-filter ${isActive && 'button-active'}`} onClick={() => setLevel(index)}>
            {button.text}
          </Button>
        );
      })}
    </div>
  );
};

export default Filters;
