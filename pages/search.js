import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const placeHolder = `${location} | ${range} | ${numOfGuests} guests`;
  return (
    <>
      <Header placeholder={placeHolder} />
      <main className='flex'>
        <section className=' pt-14 px-6 flex-grow '>
          <p className='text-xs'>
            +300 Stays <span className='font-bold'>- {range} -</span> for
            <span className='font-bold'> {numOfGuests}</span> number of guests.
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className=' hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  total={total}
                  star={star}
                />
              )
            )}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:w-full'>
          <Map searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('http://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
