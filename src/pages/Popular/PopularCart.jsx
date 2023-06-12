/* eslint-disable react/prop-types */

const PopularCart = ({ pro }) => {
    const { sport, photo,  seats_available} = pro;
    // console.log(pro)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
             <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-yellow-600">{sport}</h2>
                <p className="text-yellow-600">Tottal enroll: {seats_available}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCart;