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
            <h2 className="text-center font-semibold text-4xl text-[#000000D6]">My Work</h2>
            <div className='flex flex-wrap justify-between'>
                {workList.map((e,i) => (
                    <div key={i}>
                        <img src={e.img} />
                        <h3 className='text-center mt-2'>{e.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyWork;