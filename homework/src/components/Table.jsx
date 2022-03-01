import React from 'react';
const data = [
    {country: "USA", capital: "D.C."},
    {country: "Germany", capital: "Berlin"},
    {country: "France", capital: "Paris"},
  ]
    
  function Table() {
    return (
      <div className="table">
        <table>
          <tr>
            <th>COUNTRY</th>
            <th>CAPITAL</th>
          </tr>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.country}</td>
                <td>{value.capital}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
  export default Table;