import React, { useEffect, useState } from "react";
import SMinput from "./SMInput";
import SMTable from "./SMTable";
function SMGrid({
  aboutTable,
  list,
  tilte,
  setList,
  searchfilter,
  setSearchfilter,
}) {
  const [search, setSearch] = useState("");
  const [selectorlist, setSelectorlist] = useState("name");

  useEffect(() => {
    let dataacc = list.filter((x) =>
      x[selectorlist].includes(search.toLocaleLowerCase())
    );

    setSearchfilter(dataacc);
  }, [search]);

  let inputSearchValue = (e) => {
    setSearch(e.target.value);
  };

  const selecterValue = (e) => {
    setSelectorlist(e.target.value);
  };
  console.log(selectorlist);

  const sorting = () => {
    const result = searchfilter.sort((a, b) => {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0
    } );

    console.log(result)
    setSearchfilter([...result]);

  };



  // let data = [10, 0, 4, 2, 40, 20, 30]
  // console.log(data)
  // data.sort((a,b) =>{
  //     if(a < b) return -1
  // })

  // console.log(data)




  

  const sortingReverse = () => {
    const result = searchfilter.sort((a, b) => b.name.localeCompare(a.name));
    setSearchfilter([...result]);
  };

  return (
    <div>
      <h1>{tilte}</h1>

      <button onClick={sorting}>Sorting</button>
      <button onClick={sortingReverse}>sortingReverse</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <input type="text" onChange={(e) => inputSearchValue(e)} />
        </div>

        <div>
          <select onChange={(e) => selecterValue(e)}>
            <option value="name"> Select </option>
            {aboutTable.map((x) => (
              <option>{x.key}</option>
            ))}
          </select>
        </div>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {aboutTable &&
              Array.isArray(aboutTable) &&
              aboutTable.length > 1 &&
              aboutTable.map((x) => <th>{x.key} </th>)}
          </tr>
        </thead>

        <tbody>
          {searchfilter &&
            Array.isArray(searchfilter) &&
            searchfilter.length > 1 &&
            searchfilter.map((x) => (
              <tr>
                {aboutTable &&
                  Array.isArray(aboutTable) &&
                  aboutTable.length > 1 &&
                  aboutTable.map((e, i) => (
                    <td> {e.displayField ? e.displayField(x) : x[e.key]} </td>
                  ))}{" "}
              </tr>
            ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default SMGrid;
