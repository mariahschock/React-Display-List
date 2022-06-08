
import SnackItem from './SnackItem';

export default function SnackList({ snacks }) {
  return (
    <div>
      {
        snacks.map((snack, i) => <SnackItem key={snack + i} snack={snack} />)
      }
    </div>
  );
}

