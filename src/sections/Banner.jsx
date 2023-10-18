

const Banner = () => {
    return (
        <div className="mt-6">
            <div className="hero h-[550px]" style={{backgroundImage: 'url(https://i.ibb.co/k3Jxnp9/pexels-edgars-kisuro-1488463.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <a className="mb-5 text-6xl font-bold italic text-amber-600">FASHION <br></br> <span className="text-yellow-500 text-6xl italic">4</span><br></br> <span className="text-red-600 text-7xl">TOMMOROW</span></a>
      <p className="mb-5"> we are committed to pushing the boundaries of style and innovation. We seek to empower individuals through high-quality, sustainable fashion that respects our planet and those who inhabit it.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;