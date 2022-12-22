import "./DateSelect.css";

const DateSelect = () => {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  return (
    <div className="date-section">
      <h2 className="date">{date}</h2>
    </div>
  );
};

export default DateSelect;
