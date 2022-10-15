import React from "react";

// deconstructed props
function CoinTable({ coin: { id, name } }) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>

      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}
export default CoinTable;
