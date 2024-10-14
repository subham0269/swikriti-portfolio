import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';

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
import { useEffect, useState } from 'react';


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

export default function Swipe() {

    const [isDesktop, setIsDesktop] = useState(false);

  // Function to handle window resize
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  // Set up a listener for window resize on component mount
  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        breakpoints={{
            // when window width is >= 640px (tablet)
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            // when window width is >= 1024px (larger screens)
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
             '@1.00':{
                slidesPerView: 3,
                spaceBetween: 40,
            }
        }}
        centeredSlides={true}
        // grabCursor={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        loop={true}
        navigation={isDesktop ? true : false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper pb-8 md:pb-10 mb-24"
      >
        {imgList.map((e,i) => 
        <SwiperSlide key={i}>
            <img key={i} loading="lazy" src={e.img} className="md:ml-14 max-w-none aspect-[3/4] object-center object-cover h-[500px]" alt={`Image-${i}`} />
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}