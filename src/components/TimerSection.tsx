import TimeImg from '../images/Frame.png';

type TimerSectionProps = {
  timerCardImage?: string;
  timerCardImageAlt?: string;
  timerCardText: string;
}

function TimerSection(props:TimerSectionProps) {
  return (
    <div className='count-down'>
         <div className="d-t-m-s grid grid-cols-4 gap-6 py-6">
            <div className='date '>
              <p className='text-xs font-medium'>Days</p>
              <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>0</p>
            </div>
            <div className='time '>
              <p className='text-xs font-medium'>Hours</p>
              <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>4</p>
            </div>
            <div className='minutes '>
              <p className='text-xs font-medium'>Minutes</p>
              <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>33</p>
            </div>
            <div className='sec '>
              <p className='text-xs font-medium'>Seconds</p>
              <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>33</p>
            </div>
         </div>
         <div className="guide-btn my-12">
            <span className='rounded-3xl bg-black  text-white text-sm font-semibold uppercase px-5 py-4'>DOWNLOAD FOR FREE </span>
        </div>
    </div>
     
   
    
  );
}
export default TimerSection;