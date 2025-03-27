import CustomContainer from "./ShredComponents/CustomContainer";
import './hero.css';

export default function TestimonialHero() {
    return (
      <div className=" ">
        <CustomContainer py="py-4" className="relative lg:min-h-[500px] min-h-[200px]">
           <div className="mx-auto w-full"> <img
            src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742429778/Frame_69_rmvczb.png" alt="Students studying"
            // width={1016}
            // height={534}
            className="object-contain "
            objectFit="contain"
            objectPosition="bottom"
              /></div>
        </CustomContainer>
     </div>
    )
  }
  
  