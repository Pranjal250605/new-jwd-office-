import { LangProvider } from './i18n.jsx';
import { VideoProvider } from './videos.jsx';
import { useSmoothScroll } from './smoothScroll.jsx';
import { UtilBar, Header, ContactForm, Footer } from './components/Chrome.jsx';
import { Hero, Concerns, VideoPromo, QuickTiles, StatBand, Question } from './components/Hero.jsx';
import { Simulator } from './components/Simulator.jsx';
import { President, License, GenerationalWealth, WhoWeServe, Services, Journey } from './components/Sections.jsx';
import { Strategies, Compare, Cases, Ecosystem, HeartOfEurope, Insights, EcosystemFlower } from './components/Proof.jsx';
import { ChatWidget } from './components/advisor/ChatWidget.jsx';

export default function App() {
  useSmoothScroll();
  return (
    <LangProvider>
      <VideoProvider>
      <UtilBar />
      <Header />
      <main>
        <Hero />
        <Concerns /> {/* the seven entry points the hero question leads to */}
        <VideoPromo />
        <QuickTiles />
        <Simulator />
        <StatBand />
        <Question />
        <President />
        <License />
        {/* 会社概要 — the hub-and-three-companies card set, then the group
            flower directly after it, per the 2026.08.03 revision points. */}
        <Ecosystem />
        <EcosystemFlower />
        <GenerationalWealth />
        <WhoWeServe />
        <Services />
        <Journey />
        <Strategies />
        <Compare />
        <Cases />
        <HeartOfEurope />
        <Insights />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
      </VideoProvider>
    </LangProvider>
  );
}
