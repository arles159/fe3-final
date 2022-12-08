import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";
import BoltIcon from '@mui/icons-material/Bolt';
import { deepPurple } from "@mui/material/colors";

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();
  const reload = () => {
    window.location.replace('');
  }
  return (
    <>
      <h1><BoltIcon sx={{ color: deepPurple[700] }}/>Dentistas Favoritos<BoltIcon sx={{ color: deepPurple[700] }}/></h1>
      <div className="card-grid container">
        {DentistasFavoritos.length
          ? DentistasFavoritos.map((favs) => (
              <Card {...favs} key={favs.id} />
            ))
          : null}
          
      </div>
    </>
  );
};

export default Favs;
