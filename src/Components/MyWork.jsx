import RajaRaniRomeo from '../assets/Work/raja-rani-romeo.png';
import Meyebela from '../assets/Work/meyebela.png';


const MyWork = () => {

    const workList = [
        {
            img: RajaRaniRomeo,
            title: 'Raja Rani Romeo'
        },
        {
            img: Meyebela,
            title: 'Meyebela'
        },
        {
            img: RajaRaniRomeo,
            title: 'Khelaghar'
        },
        {
            img: Meyebela,
            title: 'Alor Kole'
        }
    ]
    
    return (
        <div className="my-20 w-full mx-auto max-w-[1380px] font-epilogue space-y-6 ">
            <h2 className="text-center font-semibold text-3xl sm:text-4xl text-[#000000D6]">My Work</h2>
            <div className='flex flex-col md:flex-row space-y-7 md:space-y-0 md:flex-wrap sm:justify-center xl:justify-between items-center md:gap-12 xl:gap-0'>
                {workList.map((e,i) => (
                    <div key={i}>
                        <img className='w-[90%] lg:w-auto h-auto mx-auto' src={e.img} alt={`poster-${e.title}`}/>
                        <h3 className='text-center mt-2'>{e.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyWork;