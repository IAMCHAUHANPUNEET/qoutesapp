import React, { useState, useEffect } from "react";
import QuoteCard from "./components/Qoutes";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const saveQuote = (quote) => {
    setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  return (
    <div className="App">
      <h1>Random Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button className="new-quote-button" onClick={fetchQuote}>
        New Quote
      </button>
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default App;
