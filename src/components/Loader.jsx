import { loader } from '../assets'; 

const Loader = ({ title }) => (
  <div className='w-ful flex justify-center items-center flex-col'>
    <img className='w-32 h-32 object-contain' src={loader} alt='loader' />
    <h1 className='font-bold text-2x1 text-white mt-2'>{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
