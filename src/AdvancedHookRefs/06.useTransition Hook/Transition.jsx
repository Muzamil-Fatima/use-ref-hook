import { useTransition} from 'react';

function Transition() {

    const [pending, startTransition]= useTransition();

    const handleButton=()=>{

        startTransition(async ()=>{
        await new Promise(res => setTimeout(res, 5000));
        })

    }
    
  return (
    <div className='m-5'>
      <h1 className="text-2xl font-bold">useTransition Hook in React JS</h1>
      {
        pending?
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="" className='w-2xs' />
        :null
      }
      <button
      className='bg-blue-500 text-white px-4 py-2 rounded-md m-1.5'
      disabled={pending} onClick={handleButton}>Click</button>
    </div>
  );
}
export default Transition;
