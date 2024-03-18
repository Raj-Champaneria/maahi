import './App.css';
import { Card } from './Components/Card';
import  {data}  from './data';

function App() {
  
  return (
    <>
    <div className='p-5 '>
    <h1 className='text-center'>Users</h1>
     <div className=" mt-5 d-flex align-items-center justify-content-evenly">
      {data.map((item)=>(
        <Card img={item.img} name={item.name} details={item.details}/>
      ))}
    </div>
    </div>
    </>
   
  );
}

export default App;
