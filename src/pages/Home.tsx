
import { MainTemplate } from '@/templates/MainTemplate';
import { Hero } from '../components/Home/Hero';
import { About } from '../components/Home/About';
import { WhyTCC } from '../components/Home/WhyTCC';
import { Treatments } from '../components/Home/Treatments';
import { Testimonials } from '../components/Home/Testimonials';

export const Home = (): React.JSX.Element => {
  return (
    <MainTemplate>
      <Hero />
      <About />
      <WhyTCC />
      <Treatments />
      <Testimonials />
    </MainTemplate>
  );
};
