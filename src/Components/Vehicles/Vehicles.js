import React, {useEffect, useState} from 'react';
import axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles/?page=${page}`)
      .then((res) => setVehicles(res.data))

  }, [page])

  if (!vehicles.results) {
    return 'Loading'
  }

  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(vehicles.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          vehicles.results.map((people, index) => (
            <div key={index} className="col-4">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * page + index + 1}.jpg`} alt=""
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

export default Vehicles;