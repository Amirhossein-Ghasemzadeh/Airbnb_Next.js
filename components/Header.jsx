import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOfGuests,
      },
    });
  };

  return (
    <header className='sticky top-0 z-10 grid grid-cols-3 shadow-md p-4 md:px-10 bg-white '>
      {/* Left */}
      <div
        className='relative items-center h-14'
        onClick={() => router.push('/')}
      >
        <Image
          className='cursor-pointer pr-0'
          src='/images/Airbnb_logo.png'
          objectFit='contain'
          objectPosition='left'
          layout='fill'
          alt=''
        />
      </div>
      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full py-2 px-5 md:shadow-sm '>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder={placeholder || 'start your search'}
          className='flex-grow  bg-transparent outline-none text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2  cursor-pointer ml-2' />
      </div>
      {/* Right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 hidden md:inline-flex' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {/* DatePicker and condition */}
      {searchInput && (
        <div className='flex flex-col mx-auto col-span-3 pt-2 max-w-[100%]'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b pb-2 mb-4'>
            <h2 className='text-2xl flex-1 font-semibold'>Number of Guests</h2>
            <UsersIcon className='h-5' />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              min={1}
              type='number'
              className='w-12 pl-2 outline-none text-lg ml-1 border text-red-400  border-gray-300 rounded-md '
            />
          </div>
          <div className='flex'>
            <button
              className='flex-grow text-gray-500 hover:bg-gray-200 rounded-md p-2'
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className='flex-grow text-red-400 hover:bg-red-200 rounded-md'
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
