import MenItem from "./MenItem/MenItem";
function MenProductList({mens}) {
  const men = {};
  return ( 
    <div className="MenProductList">
      <MenItem men={men}/>
    </div>
   );
}

export default MenProductList;