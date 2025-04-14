import { Link} from 'react-router-dom';
import './ThemeCard.scss';

export default function ThemeCard({name, img, color, id}) {


  return (
    <Link to={`/results/${id}`} className="theme-card" style={{backgroundColor: color}} id={id}>
      <p>{name}</p>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
    </Link>
  );
}