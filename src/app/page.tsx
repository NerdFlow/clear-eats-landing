import Action from './components/Action';
import Choose from './components/Choose';
import Client from './components/Client';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import LiveDemo from './components/LiveDemo';
import Solutions from './components/Solutions';
import Subscription from './components/Subscription';

export default function Home() {
  return (
    <>
      <HeroSection />
     <Solutions/>
      <Choose />
      <Action />
      <Subscription />
      <Client />
      <LiveDemo />
      <Footer />
    </>
  );
}
