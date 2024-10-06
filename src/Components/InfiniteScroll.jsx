import img1 from '../assets/Personal/1.png';
import img2 from '../assets/Personal/2.png';
import img3 from '../assets/Personal/3.png';
import img4 from '../assets/Personal/4.png';


const InfiniteScroll = () => {

    const imgList = [
        {
            img: img1,
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img:img4
        }
    ]
    
    return (
        <div className="relative my-20">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-700/10 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-700/10 to-transparent pointer-events-none z-10"></div>

            <div className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-16 animate-loop-scroll">
                {imgList.map((d,i) => <img key={i} loading="lazy" src={d.img} className="max-w-none" alt={`Image-${i}`} />)}
            </div>
            <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                {imgList.map((d,i) => <img key={i} loading="lazy" src={d.img} className="max-w-none" aria-hidden='true' alt={`Image-${i}`} />)}
            </div>
            </div>

        </div>
    );
  };
  
  export default InfiniteScroll;
  