/* eslint-disable react/prop-types */
function Footer({ items }) {
  if (items.length == 0)
    return <footer className="stats">Daftar belaja masih kosong!!!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percent = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percent}%)
    </footer>
  );
}

export default Footer;
