import PropTypes from 'prop-types'; 
const Banner = (props) => {
  let handleSearch = props.handleSearch;
  let handleChange = props.handleChange;
  console.log(props)
  return (
    <div className="h-[60vh] flex justify-center items-center ">
      
      <div className="content flex flex-col justify-center items-center gap-14">
      <h1 className="text-5xl text-center">I Grow By Helping People In Need</h1>
      <div className="search">
        <form onSubmit={handleSearch}>
        <div className="join">
          <div>
            <input onChange={handleChange}
              className="input input-bordered join-item focus:outline-none"
              placeholder="Search Here.."
            />
          </div>

          <div className="indicator">
            <button type='submit'   className="btn join-item bg-[#FF444A] text-white font-Inter font-bold capitalize">
              Search
            </button>
          </div>
        </div>
        </form>
       
      </div>
      </div>
      
     
    </div>
  );
};
Banner.propTypes = {
  handleSearch: PropTypes.func,
  handleChange: PropTypes.func
}

export default Banner;
