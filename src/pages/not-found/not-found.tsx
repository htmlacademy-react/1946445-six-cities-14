import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div style={{marginLeft: '40em', marginTop: '10em'}}>
      <h1 style={{fontSize: '100px'}}>
        404
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/" style={{color: 'red', fontSize: '40px'}}>Go to main page</Link>
    </div>
  );
}

export default NotFound;
