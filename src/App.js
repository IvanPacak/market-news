import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const api = 'https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=thyeHNljNGOEmEMMMnh3KjX16N4V5PtpHoFRhRWE';
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(true);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      })

  }, [])

  const cards = isLoading ? data.data.map(info => <Card key={Math.random()} data={info}/>) : '';

  return (
    <div className="App">
      {isLoading && cards}
    </div>
  );
}

export default App;
