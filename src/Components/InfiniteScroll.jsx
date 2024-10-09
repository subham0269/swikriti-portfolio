import img1 from '../assets/Personal/n10.JPG';
import img2 from '../assets/Personal/n6.JPG';
import img3 from '../assets/Personal/n5.JPG';
import img4 from '../assets/Personal/n8.JPG';
import img5 from '../assets/Personal/n9.JPG';
import img6 from '../assets/Personal/3.png';
import img7 from '../assets/Personal/n7.JPG';
import img9 from '../assets/Personal/n1.JPG';
import img8 from '../assets/Personal/n2.PNG';
import img10 from '../assets/Personal/n4.JPG';
import img11 from '../assets/Personal/n3.JPG';
import img12 from '../assets/Personal/4.png';


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
        },
        {
            img:img5
        },
        {
            img:img6
        },
        {
            img:img7
        },
        {
            img:img8
        },
        {
            img:img9
        },
        {
            img:img10
        },
        {
            img:img11
        },
        {
            img:img12
        }
    ]
    
    return (
        <div className="relative my-20">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-700/10 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-700/10 to-transparent pointer-events-none z-10"></div>

            <div className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-16 animate-loop-scroll">
                {imgList.map((d,i) => <img key={i} loading="lazy" src={d.img} className="max-w-none aspect-[3/4] object-center object-cover h-[500px] w-auto" alt={`Image-${i}`} />)}
            </div>
            <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                {imgList.map((d,i) => <img key={i} loading="lazy" src={d.img} className="max-w-none aspect-[3/4] object-center object-cover h-[500px] w-auto" aria-hidden='true' alt={`Image-${i}`} />)}
            </div>
            </div>

        </div>
    );
  };
  
  export default InfiniteScroll;
  