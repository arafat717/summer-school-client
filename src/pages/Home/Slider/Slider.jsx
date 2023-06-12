import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className=" -mt-96 text-2xl  md:text-white p-20">
                    <p>You will learn all the basic skills required to play cricket. You will become familiar with the equipment, such as the cricket bat, ball, and stumps. The cricket bat is used to hit the ball, while the stumps are the three wooden posts that the batsman defends to avoid getting out</p>
                    <button className="btn btn-active btn-primary n mt-3">Enroll</button>
                </div>

            </div>
            <div>
                <img src="https://images.pexels.com/photos/16670911/pexels-photo-16670911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Soccer course can provide them with a well-rounded experience, combining physical activity, teamwork, skill development, and personal growth</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/346776/pexels-photo-346776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Swimming offers numerous physical, mental, and social benefits for children. Whether it is for safety, fitness, skill development, or recreation, swimming is a valuable activity that can bring joy and contribute to a healthy and active lifestyle.</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/8224687/pexels-photo-8224687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Tennis offers a combination of physical, mental, and social benefits for children. It promotes athleticism, coordination, strategic thinking, and character development. Whether played recreationally or competitively, tennis can be a rewarding and enjoyable sport for kids of all ages</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/10643696/pexels-photo-10643696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Basketball offers a range of physical, cognitive, and social benefits for children. It promotes athleticism, coordination, teamwork, and character development. Whether played casually or competitively, basketball can provide a thrilling and rewarding experience for kids of all skill levels</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/6180458/pexels-photo-6180458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Volleyball offers a range of physical, cognitive, and social benefits for children. It promotes athleticism, coordination, teamwork, and character development. Whether played casually or competitively, volleyball can provide an enjoyable and rewarding experience for kids of all skill levels</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>

            </div>
            <div>
                <img src="https://images.pexels.com/photos/209832/pexels-photo-209832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>You will learn all the basic skills required to play cricket. You will become familiar with the equipment, such as the cricket bat, ball, and stumps. The cricket bat is used to hit the ball, while the stumps are the three wooden posts that the batsman defends to avoid getting out</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>

            </div>
            <div>
                <img src="https://images.pexels.com/photos/1620932/pexels-photo-1620932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="-mt-96 text-2xl text-white p-20">
                    <p>Ice skating offers a combination of physical, mental, and social benefits for children. It promotes fitness, balance, creativity, and personal growth. Whether kids are skating for leisure or aspiring to compete, ice skating can provide a memorable and fulfilling experience</p>
                    <button className="btn btn-active btn-primary mt-3">Enroll</button>
                </div>

            </div>
        </Carousel>
    );
};

export default Slider;