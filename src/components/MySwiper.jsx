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
                className="md:mySwiper "
            >
                <div className="lg:h-full">
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F1.png?alt=media&token=35d9f5ad-e51c-46ea-a5d9-437018c30d03" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F2.png?alt=media&token=d06ec02f-c4e5-475f-8f2e-6e019a6a7d3e" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F3.png?alt=media&token=c0f1a749-e5d9-43d7-97b2-dea43b471465" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F4.png?alt=media&token=1b57e29d-9a91-42a0-90c4-446e99f7eeca" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F5.png?alt=media&token=ef24f1f1-74ed-4f83-99c4-1c9153bbfdea" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F6.png?alt=media&token=a170249e-350a-4bc8-8f1c-f18fb3a607a0" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F7.png?alt=media&token=86e397c7-74e5-40e9-b9bc-ff693aa28ab1" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F8.png?alt=media&token=43772b67-f37f-4299-9d32-ef35f93c3f69" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F9.png?alt=media&token=648cd936-a385-44e3-b8a4-1dbfcf9260f0" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F10.png?alt=media&token=077d2d06-c469-4f19-ba58-4b84ca2ddeec" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F11.png?alt=media&token=d6b59de8-7666-4a90-b3ab-594a2613bbe8" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F12.png?alt=media&token=b1ad0a83-de8f-43e8-802e-fa386250325e" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F13.png?alt=media&token=a43e7222-b5e7-4c4b-97f7-dfa14faf7a13" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F14.png?alt=media&token=f4d3963e-49b1-4ab2-9d71-3b6696c4e1ca" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F15.png?alt=media&token=b20f4cef-dba6-4dcf-bec4-154c3ee27199" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F16.png?alt=media&token=1fbc9843-8fec-4d67-ba16-8bb47b96ddfa" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F17.png?alt=media&token=4ae14e28-68d2-4963-95ef-bd68b0376ab6" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F18.png?alt=media&token=2b40dffc-e96f-4caa-ad2f-58cdaba8b9b4" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F19.png?alt=media&token=f4192a32-7d6a-41ed-89d6-54963b44cfb0" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F20.png?alt=media&token=6ea31c13-7363-4d44-bc4c-c8291e6e0ad6" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F21.png?alt=media&token=697e7ba0-4b8c-492f-9a98-debee41943df" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F22.png?alt=media&token=2a35b55a-1e15-40dc-af07-86cbdbf2924f" alt="img slide" /></SwiperSlide>
                    <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/fems-bd30e.appspot.com/o/fems%20en%20accion%2F23.png?alt=media&token=78757bf4-ecd3-4f72-9668-facb0e36e466" alt="img slide" /></SwiperSlide>
                </div>
            </Swiper>
        </>
    );
}