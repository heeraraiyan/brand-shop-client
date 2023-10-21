// import { BiSolidPhoneCall } from 'react-icons/fa';
import { BiEnvelopeOpen,BiSolidPhoneCall } from "react-icons/bi";


const Contact = () => {
    return (
        <div className="bg-slate-200">
            
            <h2 className="text-5xl text-center font-bold italic text-amber-600 pt-10">contact us</h2>
            <p className="text-3xl text-red-950 text-center pt-8">Get in Touch With Our <span className="text-4xl text-orange-400">Fashion Experts</span></p>
            <p className="pt-5 text text-zinc-800 text-center">Don't hesitate to contact our dedicated team of fashion aficionados. We're here to turn your unique fashion ideas into reality.</p>

            <div className="w-11/12 mx-auto py-10 ">
            <div className="md:flex">
                <img src="https://i.ibb.co/0fGj6Bq/istockphoto-1189091313-612x612.jpg" alt="" />

               <div className="flex justify-center items-center text-center ml-5 md:ml-10 lg:ml-24">
               <div className="md:flex gap-10 mt-5">
                    <div className="flex gap-2 mb-4 justify-center items-center">
                        <span className="text-5xl "><BiSolidPhoneCall></BiSolidPhoneCall> </span>
                       <div>
                       <h2 className="text-3xl text-amber-600" >Call Us</h2>
                        <p>+1 5589 55488 55<br></br>
                                  +1 5589 22548 64</p>
                       </div>
 
                    </div>
                    <div className="flex gap-2 mb-4 justify-center items-center">
                        <span className="text-center text-5xl"><BiEnvelopeOpen></BiEnvelopeOpen></span>
                        <div>
                        <h2 className="text-3xl text-amber-600">Email Us</h2>
                        <p>contact@CustomCouture.com<br></br>
                           info@CustomCouture.com</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;