import Challenge from '../challenge/Challenge';
import styles from './challenges.module.css';
const Challenges = ({ filteredChallenges }) => {
  return (
    <div className={styles['challenges']}>
      {filteredChallenges?.map(challenge => (
        <Challenge key={challenge.id} {...challenge} />
      ))}
    </div>
  );
};

export default Challenges;
