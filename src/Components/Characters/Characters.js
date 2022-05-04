import React, {useEffect, useState} from 'react';
import axios from "axios";


const Characters = () => {
  const [characters, setCharacters] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => setCharacters(res.data))

  }, [page])

  if (!characters.results) {
    return 'Loading'
  }

  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(characters.count / 10)).fill(0)
            .map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          characters.results.map((people, index) => (
            <div key={index} className="col-4">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${10 * page + index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h2>
                  <span>Name: </span>{people.name}
                </h2>
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

export default Characters;