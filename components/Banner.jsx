import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl-[700px]'>
      <Image
        src='/images/banner.jpg'
        layout='fill'
        objectFit='cover'
        objectPosition='top'
        alt=''
      />
      <div className='flex items-center flex-col absolute top-1/3 w-full text-center '>
        <span className='text-xl sm:text-2xl text-red-400 font-bold rounded-sm p-1'>
          Not sure where to go? Perfect .
        </span>
        <button
          type='button'
          className='text-red-400 bg-white rounded-full px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
        >
          I'm felexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
