// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../util/features/count";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

function swiper({}) {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [navigator, setNavigator] = useState(
    window.innerWidth < 900 ? true : false
  );
 
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 900 ? setNavigator(false) : setNavigator(true);
    });
  }, []);

  function addCart(): void {
    setCount(count++);
  }
  function subCart(): void {
    count === 0 ? setCount(0) : setCount(count--);
  }

  return (
    <>
      <div className="product">
        <div className="imagesCon">
          <Swiper
            spaceBetween={5}
            navigation={navigator}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/src/images/image-product-1.jpg" alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-2.jpg" alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-3.jpg" alt="product image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-4.jpg" alt="product image" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            // onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src="/src/images/image-product-1-thumbnail.jpg"
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/images/image-product-2-thumbnail.jpg"
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/images/image-product-3-thumbnail.jpg"
                alt="product image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/images/image-product-4-thumbnail.jpg"
                alt="product image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="product_content">
          <div>
            <span>SNEAKERS COMPANY</span>
          </div>
          <div>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>
          <div className="product_content_para">
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="prices">
            <div className="price">
              <strong>$125.00</strong>
              <div>
                <span>50%</span>
              </div>
            </div>
            <div className="old-price">
              <p>$250.00</p>
            </div>
          </div>
          <div className="add-cart">
            <div className="cart-cal">
              <div onClick={()=> {
                if (count > 0) dispatch(decrement())  
              }}>
                <img src="/src/images/icon-minus.svg" alt="minus icon" />
              </div>
              <p>{count}</p>
              <div onClick={()=> {
                dispatch(increment())
              }}>
                <img src="/src/images/icon-plus.svg" alt="plus icon" />
              </div>
            </div>
            <div className="cart-btn">
              <div>
                <a href="">
                  <img src="/src/images/icon-cart.svg" alt="" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default swiper;
