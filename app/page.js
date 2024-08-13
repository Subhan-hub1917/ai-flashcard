import Hero from "./components/Hero";
import Information from "./components/Information";
import Subscriptions from "./components/Subscriptions";

export default function Home() {
  return (
    <main className="text-white max-w-full relative">
        <Hero/>
          <svg class="wave-svg border border-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path  fill="#fff" fill-opacity="1" d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
        <Subscriptions/>
        <Information/>
    </main>
  );
}
