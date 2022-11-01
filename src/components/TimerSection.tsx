import TimeImg from '../images/Frame.png';


function TimerSection(){
    return(
        <div className="timeWrap mx-5">
            <div className="Timetitle text-left text-2xl font-semibold pt-8">
                Morbi leo risus, porta ac consectetur ac, vestibuluyytu123
            </div>
            <div className="time-sub-title text-left font-normal text-base py-4">
            Cras mattis consectetur purus sit amet fermentum.
            </div>
            <div className="time-list text-left">
                <div className="li1 pb-6">
                    <span><img className="inline-block pr-4" src={TimeImg} alt="Logo"/></span>
                    <span className='font-normal text-base'>Vestibulum id ligula porta felis euismod.</span>
                </div>
                <div className="li2 pb-6">
                    <span><img className="inline-block pr-4" src={TimeImg} alt="Logo"/></span>
                    <span className='font-normal text-base'>Malesuada Justo Mattis Condimentum.</span>
                </div>
                <div className="li3 pb-6">
                    <span><img className="inline-block pr-4" src={TimeImg} alt="Logo"/></span>
                    <span className='font-normal text-base'>Purus234 Tristique Sollicitudin Quam.</span>
                </div>

            </div>
            <div className="d-t-m-s grid grid-cols-4 gap-6 py-6">
                <div className='date '>
                    <p className='text-xs font-medium'>Days</p>
                    <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>0</p>
                </div>
                <div className='time '>
                <p  className='text-xs font-medium'>Hours</p>
                    <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>4</p>
                </div>
                <div className='minutes '>
                <p  className='text-xs font-medium'>Minutes</p>
                    <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>33</p>
                </div>
                <div className='sec '>
                <p  className='text-xs font-medium'>Seconds</p>
                    <p className='bg-gray-200 rounded-md text-2xl font-bold py-3'>33</p>
                </div>

            </div>
            <div className="guide-btn my-12">
             <span className='rounded-3xl bg-black  text-white text-sm font-semibold uppercase px-5 py-4'>DOWNLOAD FOR FREE </span>
            </div>
        </div>
        
    );
}
export default  TimerSection;