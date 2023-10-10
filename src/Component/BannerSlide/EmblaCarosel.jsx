import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import './embla.scss'
import Autoplay from "embla-carousel-autoplay";
import image1 from '../../Assets/img-1.jpg'
import image2 from "../../Assets/img-2.jpg";
import image3 from "../../Assets/img-3.jpg";
import image4 from "../../Assets/img-4.jpg";
import image5 from "../../Assets/img-5.jpg";
import Product from "../Product/Product";


export const EmblaCarousel = () => {
   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img className="banner_img" src={image1} alt="" />
          </div>
          <div className="embla__slide">
            <img className="banner_img" src={image2} alt="" />
          </div>
          <div className="embla__slide">
            <img className="banner_img" src={image3} alt="" />
          </div>
          <div className="embla__slide">
            <img className="banner_img" src={image4} alt="" />
          </div>
          <div className="embla__slide">
            <img className="banner_img" src={image5} alt="" />
          </div>
        </div>

        <div className="productDiv product_row sim_product">
          <Product
            title="Roblox Digital Gift Code..."
            id=""
            image="https://m.media-amazon.com/images/I/71YbMhc-JLL._AC_SX296_SY426_FMwebp_QL65_.jpg"
            price={25.0}
            rating={5}
          />
          <Product
            title="HANDA Smart Watch for Women..."
            id=""
            image="	https://m.media-amazon.com/images/I/71vzgRIQO4L._AC_SX296_SY426_FMwebp_QL65_.jpg"
            price={39.0}
            rating={3}
          />
        </div>

        <div className="product_row sim_product">
          <Product
            title="Midwest Medicinal Plants..."
            id=""
            image="		https://m.media-amazon.com/images/I/A1q8XQROETL._SY522_.jpg"
            price={20.69}
            rating={5}
          />
          <Product
            title="SennheiserHD 350BT Black Bluetooth..."
            id=""
            image="		https://m.media-amazon.com/images/I/71jsrUhfSlS._AC_UY327_FMwebp_QL65_.jpg"
            price={69.95}
            rating={4}
          />
          <Product
            title="TerrorVision / The Video Dead...
"
            id=""
            image="https://m.media-amazon.com/images/I/418rPkuHvfL.jpg"
            price={13.99}
            rating={5}
          />
        </div>

        <div className="product_row uniq_row">
          <Product
            title="Sharp 55INCH Class AQUOS 4K Ultra-HD..."
            id=""
            image="https://m.media-amazon.com/images/I/41UCkfpIdHL._AC_UY327_FMwebp_QL65_.jpg"
            price={598.84}
            rating={4}
          />
        </div>

        <div className="product_row sim_product">
          <Product
            title="150 LB Dumbbell Set with Rack..."
            id=""
            image="https://m.media-amazon.com/images/I/71F32g+1sjL._AC_UL480_FMwebp_QL65_.jpg"
            price={242.97}
            rating={5}
          />
          <Product
            title="Malus Mens and Women Fat Tire Mountain Bike..."
            id=""
            image="	https://m.media-amazon.com/images/I/91MqcxxSzFL._AC_UY327_FMwebp_QL65_.jpg"
            price={421.28}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};
