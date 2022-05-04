import React, {useEffect, useState} from 'react';
import axios from "axios";

const Starships = () => {
  const [starships, setStarships] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => setStarships(res.data))

  }, [page])

  if (!starships.results) {
    return 'Loading'
  }

  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(starships.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          starships.results.map((people, index) => (
            <div key={index} className="col-4">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${10 * page + index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h5>
                  <span>Name: </span>{people.name}
                </h5>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Starships;