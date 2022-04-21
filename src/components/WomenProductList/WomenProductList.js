import WomenItem from "./WomenItem/WomenItem";
function WomenProductList({women}) {
  const men = {};
  return ( 
    <div className="WomenProductList">
      <WomenItem women={women}/>
    </div>
   );
}

export default WomenProductList;