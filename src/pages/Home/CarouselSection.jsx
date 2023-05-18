import { Button, Carousel } from "flowbite-react";

const CarouselSection = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-20">
      <Carousel slideInterval={2000}>
        <div className="relative">
          <img
            src="https://i.ibb.co/Rby0JwM/emmanuel-denier-Yi-Xsjw-JKXmo-unsplash.jpg"
            alt="..."
          />
          <div className="absolute flex h-full w-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white w-1/2 lg:space-y-3 lg:pl-[100px]">
              <h2 className="lg:text-6xl font-bold">
                Where Dreams Come to Life
              </h2>
              <p>
                At Fairy Tale Treasures, we believe in the power of dreams. Our
                online store is a magical destination where cherished fairy
                tales come to life. 
              </p>
              <Button gradientDuoTone="purpleToPink">Discover More</Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/fDzVHwz/park-troopers-ACv87k-Yoo-QQ-unsplash.jpg"
            alt="..."
          />
          <div className="absolute flex h-full w-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white w-1/2 space-y-7 pl-[100px]">
              <h2 className=" text-6xl font-bold">Experience the Wonder</h2>
              <p>
                At Fairy Tale Treasures, we believe in the power of dreams. Our
                online store is a magical destination where cherished fairy
                tales come to life. 
              </p>
              <Button gradientDuoTone="purpleToPink">Discover More</Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/68C4Yns/brian-mcgowan-z-Q7-Z-lt-QOw-unsplash.jpg"
            alt="..."
          />
          <div className="absolute flex h-full w-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white w-1/2 space-y-7 pl-[100px]">
              <h2 className=" text-6xl font-bold">Unveiling the Enchantment</h2>
              <p>
                At Fairy Tale Treasures, we believe in the power of dreams. Our
                online store is a magical destination where cherished fairy
                tales come to life. 
              </p>
              <Button gradientDuoTone="purpleToPink">Discover More</Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
