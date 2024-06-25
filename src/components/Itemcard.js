




const Itemcard = (props) => {
  console.log(props);

  const {_id,title, description, price, category,image}=props.data;
  const {removeProduct}=props;
   
 
   
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] bg-indigo-100 rounded-2xl  hover:bg-blue-200">
        
        <img className="w-[220px] h-[130px] rounded-2xl mb-3"  src={image} alt="product pic" />
        <h1 className="font-bold">{title}</h1>
        <h2>{"Rs. "+price}</h2>
        <p>description</p>
        <h2 className="font-bold">{"category: "+category}</h2>
        <button className="text-4xl m-5 hover:marker:" onClick={()=> removeProduct(_id)}>🗑</button>

    </div>
  )
}

export default Itemcard