import React, {useEffect, useState} from 'react';
import axios from "axios";

const Films = () => {

  const [films, setFilms] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(`https://swapi.dev/api/films/?page=${page}`)
      .then((res) => setFilms(res.data))

  }, [page])

  if (!films.results) {
    return 'Loading'
  }

  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(films.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>
              {idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          films.results.map((film, index) => (
            <div key={index} className="col-4">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h5>
                  <span>Name: </span>{film.title}
                </h5>
                {/*<ul>*/}
                {/*  <li>{<span>Birth year: </span>}{people.birth_year}</li>*/}
                {/*  <li><span>Height: </span>{people.height}</li>*/}
                {/*  <li><span>Mass: </span>{people.mass}</li>*/}
                {/*  <li><span>Gender: </span>{people.gender}</li>*/}
                {/*  <li><span>Hair color:  </span>{people.hair_color}</li>*/}
                {/*  <li><span>Skin color: </span>{people.skin_color}</li>*/}
                {/*</ul>*/}
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Films;