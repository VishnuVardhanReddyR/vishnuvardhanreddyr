import type { GetStaticProps } from 'next';
import Head from 'next/head';
import LandingPage from "../components/NavComponents/LandingPage";
import Header from "../components/Header";
import About from "../components/NavComponents/About";
import Resume from "../components/NavComponents/Resume";
import Portfolio from "../components/NavComponents/Portfolio";
import Contact from "../components/NavComponents/Contact";
import Footer from "../components/Footer";
import NavDots from "../components/subComponents/FixedComponents/NavDots";
import Coursework from '../components/NavComponents/Coursework';
import Skillset from '../components/NavComponents/Skillset';
import { AboutAuthor, Portfolios } from '../typings';
import { getPortfolio } from '../utils/fetchPortfolio';
import { getAbout } from '../utils/fetchAbout';

type Props = {
  portfolio: Portfolios[]; 
  about: AboutAuthor[];
};

const Home = ({portfolio, about }: Props) => {
  return (
    <div className="h-screen overflow-y-scroll bg-black caret-inherit max-w-screen scrollbar-hide scroll-smooth">
      <Head>
        <title>Vishnu Vardhan Reddy R</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>
      {/* @ts-expect-error async server component */}
      <Header />
      <section id="home">
      {/* @ts-expect-error async server component */}
        <LandingPage />
      </section>
      <section>
      {/* @ts-expect-error async server component */}
        <About about={about} />
      </section>
      {/* @ts-expect-error async server component */}
      <Coursework />
      {/* @ts-expect-error async server component */}
      <Skillset />  
      {/* @ts-expect-error async server component */}
      <Resume />
      {/* @ts-expect-error async server component */}
      <Portfolio portfolio={portfolio} />
      {/* @ts-expect-error async server component */}
      <Contact />
      {/* @ts-expect-error async server component */}
      <Footer />
      {/* @ts-expect-error async server component */}
      <NavDots />
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const portfolio: Portfolios[] = await getPortfolio();
  const about: AboutAuthor[] = await getAbout();

  return {
    props: {
      portfolio,
      about,
    },
    revalidate: 10,
  };
}