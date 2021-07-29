import troi from '../assets/images/troi.jpg';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <div>
        <h2>Page Not Found.</h2>
        <img src={troi} alt='Deanna Troi floating in the clouds' />
        <p>Where are you? </p>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    </>
  );
};

export default NotFound;
