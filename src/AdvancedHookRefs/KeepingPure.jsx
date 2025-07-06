// let guest = 0;
function KeepingPure() {
  return (
    <div>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
    </div>
  );
}
const Cup = ({ guest }) => {
  // let count =guest;
  return (
    <h1>
      {/* guest= guest+1; */}
      We have {guest} guest and we have to make {guest} cup of tea
    </h1>
  );
};
export default KeepingPure;
