// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';


function swiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
   <div className="product">

        <div className='imagesCon'>

          <Swiper
            spaceBetween={5}
            // navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
          
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/src/images/image-product-1.jpg" alt='product image'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-2.jpg" alt='product image' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-3.jpg" alt='product image'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-4.jpg" alt='product image' />
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
              <img src="/src/images/image-product-1-thumbnail.jpg" alt='product image' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-2-thumbnail.jpg" alt='product image' />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-3-thumbnail.jpg" alt='product image'  />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/images/image-product-4-thumbnail.jpg" alt='product image'  />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='product_content'>
        <div>
            <span>SNEAKERS COMPANY</span>
        </div>
        <div>
            <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div>
            <strong>$125.00</strong>
            <div>
                <span>50%</span>
            </div>
        </div>
        <div>
            <p>$250.00</p>
        </div>
        <div className="add-cart">
            <div className="cart-cal">
                <p>-</p>
                <p>0</p>
                <p>+</p>

            </div>
            <div className="cart-btn">
                <a href="">
                <img src="" alt="" />
                Add to cart
                </a>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}

export default swiper