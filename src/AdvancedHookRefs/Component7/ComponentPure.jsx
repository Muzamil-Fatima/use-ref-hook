import KeepingPure from "./KeepingPure";
// let count = 0;
function ComponentPure() {
  return (
    <div className="m-8">
      <h1>Keeping Component Pure</h1>
     <Counter  count={1}/>
     <Counter count={2}/>
     <Counter count={3}/>
     <Counter count={4}/>
      <KeepingPure />
    </div>
  );
}
// impure 
const Counter = ({count}) => {
//   count = count + 1;
  return <h1> Counter {count}</h1>;
};
export default ComponentPure;
