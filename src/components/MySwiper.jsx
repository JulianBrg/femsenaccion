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
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F3.png?alt=media&token=72288dc5-1b50-4b85-bb81-5c97364989f5" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F4.png?alt=media&token=e4f319b9-53d8-470c-935e-a44df9e695a7" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F5.png?alt=media&token=20d07b8c-1a55-4d8a-8d8d-0eea430f82dc" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F6.png?alt=media&token=9769cf76-d0c6-448b-90f2-3d0d403cca4a" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F7.png?alt=media&token=ed9ef3dc-c20a-4390-a53e-945e418a6638" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F8.png?alt=media&token=c5286de8-b26c-407a-9461-aa0365ccd6d4" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F9.png?alt=media&token=e394a5e2-1422-4e17-901d-69d0239e1b53" alt="img slide" /></SwiperSlide>
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F10.png?alt=media&token=678a2323-e025-471b-ad76-b51b78cfeb96" alt="img slide" /></SwiperSlide>
            </Swiper>
        </>
    );
}