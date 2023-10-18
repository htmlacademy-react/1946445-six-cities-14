import MainPage from '../../pages/main/main';

type AppProps = {
  countOffers: number;
}

function App({countOffers}: AppProps): JSX.Element {
  return (
    <MainPage countOffers={countOffers} />
  );
}

export default App;
