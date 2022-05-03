import React, {useEffect, useState} from 'react';
import axios from "axios";

const Films = () => {
  const [films, setFilms] = useState({})


  useEffect(() => {
    axios(`https://swapi.dev/api/films/1`)
      .then((res) => setFilms(res.data))
  }, [])

  if (!films.title) {
    return 'Loading...'
  }

  return (
    <div>
    <div>
      <div className="row">
        {/*{*/}
        {/*  films.params.map((film, index) => (*/}
        {/*    <div key={index}>{film.title}</div>*/}

        {/*  ))*/}

        {/*}*/}

      </div>
    </div>
    </div>
  );
};

export default Films;