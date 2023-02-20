import './DateSelect.css';
import { format } from 'date-fns';

const DateSelect = () => {
  return (
    <div>
      <h2 className="date text-lg sm:text-xl">
        {format(new Date(), 'EE dd MMMM')}
      </h2>
    </div>
  );
};

export default DateSelect;
