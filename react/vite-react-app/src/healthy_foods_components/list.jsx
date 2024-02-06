function Item_list(){

    let item_arr = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

    return <ul className="item-list">
        {item_arr.map((item)=>(<li>{item}</li>))}
    </ul>
}

export default Item_list;