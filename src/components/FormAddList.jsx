import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

// eslint-disable-next-line react/prop-types
function FormAddList({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const idGenerator = uuidv4();

  const quantityNum = [...Array(20)].map((_, index) => (
    <option value={index + 1} key={index + 1}>
      {index + 1}
    </option>
  ));

  function handleSubmit(e) {
    // menghapus fungsi default browser untuk refresh
    e.preventDefault();

    if (!name) return;

    const nextItem = { name, quantity, checked: false, id: idGenerator };
    onAddItem(nextItem);

    // set menjadi default
    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}

export default FormAddList;
