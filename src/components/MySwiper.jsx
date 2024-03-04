import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MySwiper() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F1.png?alt=media&token=9319fd6f-08a8-41bc-8feb-1fb64ea2da96" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F2.png?alt=media&token=a6c9c8f2-438b-4045-bff5-90373219a6c2" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F4.png?alt=media&token=e4f319b9-53d8-470c-935e-a44df9e695a7" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F5.png?alt=media&token=20d07b8c-1a55-4d8a-8d8d-0eea430f82dc" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F6.png?alt=media&token=9769cf76-d0c6-448b-90f2-3d0d403cca4a" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F7.png?alt=media&token=ed9ef3dc-c20a-4390-a53e-945e418a6638" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F8.png?alt=media&token=c5286de8-b26c-407a-9461-aa0365ccd6d4" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F9.png?alt=media&token=e394a5e2-1422-4e17-901d-69d0239e1b53" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F10.png?alt=media&token=678a2323-e025-471b-ad76-b51b78cfeb96" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F11.png?alt=media&token=6a023f55-0f8a-413b-b2f4-ebcf7a86c7bd" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F12.png?alt=media&token=c127fd27-1907-4ba7-b173-7741c4cc2612" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F13.png?alt=media&token=fc1eff80-83b1-4295-bf40-980739cd1dbe" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F14.png?alt=media&token=4bdc4281-5488-471e-aec3-38f33ec3dabe" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F15.png?alt=media&token=3d1ec56d-cca6-4f2e-a904-440f272b5e25" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F16.png?alt=media&token=e31d04c9-9a92-4799-abd9-04cfbf838f78" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F17.png?alt=media&token=cbffd4c4-204f-4b38-a34a-e7f4c497adcb" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F18.png?alt=media&token=822206a6-fe30-437a-b81b-5e0186374013" alt="img slide" /></SwiperSlide>
            </Swiper>
        </>
    );
}