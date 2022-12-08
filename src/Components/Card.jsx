import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  setFavInStorage,
  isFavorited,
  removeFavInStorage,
} from "./utils/localStorage.service";
import PersonRemoveIcon from '@mui/icons-material/PersonRemoveAlt1';
import BoltIcon from '@mui/icons-material/Bolt';
import { ContextGlobal } from "./utils/global.context";
import styles from "./Card.module.css";
import { red, deepPurple } from "@mui/material/colors";

const Card = ({ id, name, username }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ id, name, username });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFavorite(favorite);
  };

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/users/${id}`}>
          <h5 className={`card-title ${styles.title}`}>{name}</h5>
        </Link>
        <p className="card-text">{username}</p>
        <p className="card-text">{id}</p>
        <button
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${
            styles.favButton
          }`}
        >
          {favorite ? <PersonRemoveIcon sx={{ color: red[900] }}/> :<BoltIcon sx={{ color: deepPurple[700] }}/>}
        </button>
      </div>
    </div>
  );
};

export default Card;