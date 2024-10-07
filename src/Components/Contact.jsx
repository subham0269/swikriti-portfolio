import call from '../assets/Contact/call.svg';
import whatsapp from '../assets/Contact/whatsapp.svg';
import sms from '../assets/Contact/sms.svg';

const Contact = () => {
    
    const details=[
        {
            img: whatsapp,
            details: '+91 93305 39932'
        },
        {
            img: sms,
            details: 'kastu73@gmail.com'
        },
        {
            img: call,
            details: '+91 70037 79921'
        }
    ]
    
    return (
        <div className="mb-20 w-full mx-auto max-w-[1000px] font-epilogue space-y-6">
            <h2 className="text-center font-semibold text-3xl sm:text-4xl text-[#000000D6]">Contact</h2>
            <div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-around items-center'>
                {details.map((d,i) => 
                    <div className='flex justify-start items-center space-x-3' key={i}>
                        <img loading='lazy' src={d.img} aria-hidden="true" alt='icon-'/>
                        <span className='text-[#000000AD] text-md sm:text-lg'>{d.details}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact;