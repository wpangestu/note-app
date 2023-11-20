import {useState} from "react";

export default function Form({onAddItem}){

    const [name,setName] = useState('');
    const [qty, setQty] = useState(1);
    function handeSubmit(e){
        e.preventDefault();
        if(name==="")return;
        const newItem = {name,qty,checked:false,id:Date.now()}
        onAddItem(newItem);
        setName('');
        setQty(1);
    }

    return (
        <form className="add-form" onSubmit={handeSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                </select>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <button>Tambah</button>
        </form>
    )
}