import { Link} from 'react-router-dom';
import './ThemeCard.scss';

export default function ThemeCard({name, img, color, id}) {

  const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';


  return (
    <Link to={`/results/${id}`} className="theme-card" style={{backgroundColor: color}} id={id}>
      <p>{name}</p>
      <div className="img-container">
        {img && <img src={`${baseURL}${img}`} alt={name} />}
      </div>
    </Link>
  );
}