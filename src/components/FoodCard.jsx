
const FoodCard = ({item}) => {

    const {image, price, name, recipe} = item;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        className="bg-cover bg-center w-full h-60"
                        alt="" />
                </figure>
                <p className="bg-[#111827] text-white absolute rounded-lg px-2 py-1 right-3 top-3">${price}</p>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;