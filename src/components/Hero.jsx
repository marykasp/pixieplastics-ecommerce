import HeroImg from '../assets/vinyl-toystore.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-primary h-[700px] py-24 mt-6">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-secondary mr-2"></div> New Toys
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            RARE COLLECTIONS <br />
            <span className="font-semibold">VINYL TOYS</span>
          </h1>
          <Link
            to={'/'}
            className="self-start text-white uppercase font-semibold flex justify-center items-center py-[11px] px-[21px]
             bg-secondary rounded-sm hover:bg-tertiary transition-all duration-300"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={HeroImg} alt="hero vinyl toy store" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
