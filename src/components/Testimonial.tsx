import TestimonialImg from '../images/test-img.png';

function Testimonial(){
    return(
        <div className="testimonial-wrapper mx-5 pb-8">
           <div className="testimonial-img">
                <img className="my-2.5 m-auto py-10" src={TestimonialImg} alt="Logo"/>
           </div>
           <div className="test-slide-content">
            <div className="test-slide-review font-normal text-xl pb-6 text-left">
            “Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.” 
            </div>
            <div className="test-slide-name text-base ont-normal text-left">
            Mattis Nullam Magna Pharetra, 2022
            </div>

           </div>
        </div>
    );
}
export default Testimonial;