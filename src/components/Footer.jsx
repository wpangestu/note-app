export default function Footer({items}){

    if(items.length===0) return <footer className="stats">Daftar belanjaan masih kosong</footer>

    const totalItems = items.length;
    const checkedItem = items.filter((item)=>item.checked).length;
    const percentage = Math.round((checkedItem/totalItems)*100);
    return <footer className="stats">Ada barang {totalItems} di daftar belanjaan, {checkedItem} barang sudah dibeli ({percentage}%)</footer>
}