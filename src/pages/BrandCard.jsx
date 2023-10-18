

const BrandCard = ({brand}) => {
    const{brand_name,img} = brand;
    return (
        <div>

<div className="card w-full h-72 bg-sky-100 shadow-sm">
  <figure><img src={img} alt="clothes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand_name}</h2>
    

  </div>
</div>
            
        </div>
    );
};

export default BrandCard;