import hoichoi from '../assets/collab/hoichoi.png';
import rummy from '../assets/collab/rummy.jpg';
import oppo from '../assets/collab/oppo.png';
import xiomi from '../assets/collab/xiomi.png';
import khadims from '../assets/collab/khadims.png'
import unilever from '../assets/collab/unilever.png';
import raja from '../assets/collab/raja.png';

const Collaboration = () => {

    const logos = [
        { id: 1, name: 'Hoichoi', img: hoichoi },
        { id: 2, name: 'Rummy Circle', img:  rummy},
        { id: 3, name: 'Oppo', img: oppo },
        { id: 4, name: 'Xiomi', img: xiomi },
        { id: 5, name: 'Khadims', img: khadims },
        { id: 6, name: 'hindustan Unilever', img: unilever },
        { id: 7, name: 'Raja Biscuits', img: raja },
      ];
    
    return (
        <div className="mb-10 w-full mx-auto max-w-[1380px] font-epilogue space-y-6 ">
            <h2 className="text-center font-semibold text-3xl sm:text-4xl text-[#000000D6]">My Collaboration</h2>
            <div className='flex flex-col items-center justify-center p-4'>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-10 w-[80%]">
                    {logos.slice(0, 4).map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center">
                        <img
                        src={logo.img}
                        alt={logo.name}
                        className="w-28 h-w-28 object-contain rounded-md"
                        />
                    </div>
                    ))}
                </div>


                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-10 w-[60%] mt-10">
                    {logos.slice(4).map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center">
                        <img
                        src={logo.img}
                        alt={logo.name}
                        className="w-28 h-w-28 object-contain"
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collaboration;