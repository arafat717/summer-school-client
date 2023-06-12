import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTittle from "../../../SectionTittle/SectionTittle";

const Swipers = () => {
    return (
        <>
            <SectionTittle sunheading={'more sports for students'}></SectionTittle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://images.pexels.com/photos/6539008/pexels-photo-6539008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/2682543/pexels-photo-2682543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/13509630/pexels-photo-13509630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/7045673/pexels-photo-7045673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/5069180/pexels-photo-5069180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/2568580/pexels-photo-2568580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/7045673/pexels-photo-7045673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/13509630/pexels-photo-13509630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Swipers;