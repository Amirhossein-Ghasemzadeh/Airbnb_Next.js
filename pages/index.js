import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ smallCartData, mediumCardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name='Airbnb' content='Airbnb clone with Next.js and tailwind.' />
        <link rel='icon' href='/icon.png' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* small card */}
        <section className='pt-6 '>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {smallCartData?.map(({ img, distance, location }) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        {/* medium card */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {mediumCardData?.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>
        {/* large card */}
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const mediumCardData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );

  return {
    props: {
      smallCartData: exploreData,
      mediumCardData: mediumCardData,
    },
  };
}
