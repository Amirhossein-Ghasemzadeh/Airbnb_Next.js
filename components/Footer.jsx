const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:place-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className=' space-y-4 text-md text-gray-800'>
        <h5 className='font-4 font-bold'>Support</h5>
        <p>Help Centre</p>
        <p>Safety information</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighbourhood concern</p>
      </div>

      <div className='space-y-4 text-md  text-gray-800'>
        <h5 className='font-bold'>Community</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
        <p>Referals accepted</p>
        <p>Support Afghan refugees</p>
      </div>

      <div className='space-y-4 text-md  text-gray-800'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className='space-y-4 text-md  text-gray-800'>
        <h5 className='font-bold'>Newsroom</h5>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
};

export default Footer;
