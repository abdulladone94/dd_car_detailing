import Head from 'next/head';
import HeroSlider from '../components/index/heroSlider';
import Statistics from '../components/index/statistics';
import Categories from '../components/index/categories';
import Products from '../components/index/products';
import Crew from '../components/index/crew';
import News from '../components/index/news';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>DD Car </title>
        <link rel="More Crunch icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <main className="">
        <HeroSlider
          images={[
            'https://images.pexels.com/photos/6873123/pexels-photo-6873123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/14615269/pexels-photo-14615269.jpeg',
            'https://images.pexels.com/photos/4218867/pexels-photo-4218867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

            // 'https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',
            // 'https://images.unsplash.com/photo-1617228726430-ecd6faf2f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            // 'https://images.unsplash.com/photo-1620891239438-eb4b8b467fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
          ]}
        />
        {/* <Statistics /> */}

        <div className="pt-20 mx-auto bg-center bg-cover bg-hero-pattern">
          <Categories />
          <Products />
          {/* <Crew /> */}
          <News />
        </div>
      </main>
    </div>
  );
}
