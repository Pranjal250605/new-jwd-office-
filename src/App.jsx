import { useEffect, useRef, useState } from 'react';
import { LangProvider } from './i18n.jsx';
import { VideoProvider } from './videos.jsx';
import { useSmoothScroll } from './smoothScroll.jsx';
import { UtilBar, Header, ContactForm, Footer } from './components/Chrome.jsx';
import { Hero, Concerns, VideoPromo, QuickTiles, StatBand, Question } from './components/Hero.jsx';
import { Simulator } from './components/Simulator.jsx';
import { President, Chairman, License, NextGeneration, GenerationalWealth, WhoWeServe, Services, Journey } from './components/Sections.jsx';
import { Strategies, Compare, Cases, Banks, Ecosystem, HeartOfEurope, Insights, EcosystemFlower, GroupBanner, Jewelry } from './components/Proof.jsx';
import { ChatWidget } from './components/advisor/ChatWidget.jsx';
import News from './components/News.jsx';
import { BankPage, BANK_ROUTE } from './components/BankPages.jsx';

/* Hash routing for the 海外銀行口座開設 pages (#/banks/<slug>). Only hashes
   starting "#/" are routes; plain anchors (#banks, #contact …) stay in-page
   anchors. Clicking one of those from a bank page lands on the home page and
   then scrolls to the section — the smooth-scroll handler can't, because the
   section isn't rendered yet when the click happens. */
const readRoute = () => (location.hash.startsWith('#/') ? location.hash : '');

function useRoute() {
  const [route, setRoute] = useState(readRoute);
  const prev = useRef(route);
  useEffect(() => {
    const on = () => setRoute(readRoute());
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    if (route) {
      window.scrollTo(0, 0);
    } else if (prev.current && location.hash.length > 1) {
      // the home page is already committed by the time this effect runs
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 88);
    }
    prev.current = route;
  }, [route]);
  return route;
}

export default function App() {
  useSmoothScroll();
  const route = useRoute();
  const bankSlug = route.startsWith(BANK_ROUTE) ? route.slice(BANK_ROUTE.length) : null;
  return (
    <LangProvider>
      <VideoProvider>
      <UtilBar />
      <Header />
      <main>
        {bankSlug !== null ? <BankPage slug={bankSlug} /> : <>
        <Hero />
        <VideoPromo />
        <News /> {/* 09.10 sheet ⑦: sits between the videos and the concern tiles */}
        <Concerns /> {/* the seven entry points the hero question leads to */}
        <QuickTiles />
        <Simulator />
        <StatBand />
        <Question />
        <President />
        <Chairman /> {/* 09.16 additional sheet: ＜会長挨拶＞ sits directly below the CEO message */}
        <License />
        <NextGeneration /> {/* sits between 会社概要 and the group explanation */}
        {/* 会社概要 — the hub-and-three-companies card set, then the group
            flower directly after it, per the 2026.08.03 revision points. */}
        <Ecosystem />
        <EcosystemFlower />
        <GroupBanner /> {/* 09.21 sheet P2: banner directly below the group flower */}
        <GenerationalWealth />
        <WhoWeServe />
        <Services />
        <Journey />
        <Strategies />
        <Compare />
        <Cases />
        <Banks /> {/* 09.21 sheet P1: overseas bank accounts, between the cases and HoE */}
        <HeartOfEurope />
        <Insights />
        <Jewelry /> {/* last section before the CTA */}
        <ContactForm />
        </>}
      </main>
      <Footer />
      <ChatWidget />
      </VideoProvider>
    </LangProvider>
  );
}
