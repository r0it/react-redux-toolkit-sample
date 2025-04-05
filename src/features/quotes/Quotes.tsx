import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import React from 'react';
import { useGetQuotesQuery } from '@/services/apiSlice';


const Quotes = () => {
    const [numberOfQuotes, setNumberOfQuotes] = useState(2);
    const { data, isLoading, isError, isSuccess } = useGetQuotesQuery(numberOfQuotes);

    const debouncedSetNumber = React.useMemo(() => 
        debounce((value: number) => {
            setNumberOfQuotes(value);
        }, 300), // 300ms delay
        []
    );
  if (isLoading) {
    return <div>Loading quotes...</div>;
  }

  if (isError) {
    return (
        <div>
          <h1>There was an error!!!</h1>
        </div>
      )
  }

  if(isSuccess) {
    
  return (
    <div>
      <h2>Quotes</h2>
      <label>
        Number of Quotes:
        <input
          type="number"
          value={numberOfQuotes}
          onChange={(e) => debouncedSetNumber(Number(e.target.value))}
        />
      </label>
      <div className="quotes-container">
        {data.quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <blockquote>
              <p>{quote.quote}</p>
              <footer>— {quote.author}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
  }
};

export default Quotes;