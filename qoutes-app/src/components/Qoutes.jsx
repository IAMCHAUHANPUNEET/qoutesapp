const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">{quote}</p>
      {onSave && (
        <button className="save-button" onClick={() => onSave(quote)}>
          Save to List
        </button>
      )}
    </div>
  );
};

export default QuoteCard;
