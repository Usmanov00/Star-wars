import React, {useEffect, useState} from 'react';
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(`https://swapi.dev/api/planets/?page=${page}`)
      .then((res) => setPlanets(res.data))

  }, [page])

  if (!planets.results) {
    return 'Loading'
  }

  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(planets.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          planets.results.map((planet, index) => (
            <div key={index} className="col-4">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${10 * page + index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h2>
                  <span>Name: </span>{planet.name}
                </h2>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Planets;