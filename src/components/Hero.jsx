import { useState, useEffect } from 'react';
import { useLang } from '../i18n.jsx';
import { useVideo } from '../videos.jsx';
import { CONCERN_ANSWERS } from '../concernAnswers.js';

/** Section titles are marked **like this** in the answer text and set bold,
 *  per the 08.16 sheet. Everything else renders as written. */
function renderAnswer(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part);
}

/** The answer panel — a single question and its answer in its own rectangle,
 *  always opening at the top (2026.08.14 revision points). */
function ConcernModal({ title, answer, onClose }) {
  const { t } = useLang();
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return (
    <div className="cmodal" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="cmodal-box" onClick={(e) => e.stopPropagation()}>
        <div className="cmodal-head">
          <h3>{title}</h3>
          <button className="cmodal-x" onClick={onClose} aria-label={t('Close', '閉じる')}>✕</button>
        </div>
        {/* key on the title remounts the scroller, so a new pick starts at the top */}
        <div className="cmodal-body" key={title}>{renderAnswer(answer)}</div>
      </div>
    </div>
  );
}

/** "What are your concerns?" — the seven entry points a visitor can pick from,
 *  each routed to the section that answers it. Hero links straight here. */
export function Concerns() {
  const { t } = useLang();
  const items = [
    ['Japan vs UAE — inheritance tax rates compared', '日本とUAEの相続税税率比較'],
    ['Japan vs UAE — rates on the various forms of profit', '日本とUAEの各種利益に対する利率'],
    ['Japan vs UAE — ordinary and fixed deposit interest rates', '日本とUAEの普通預金金利と定期金利の比較'],
    ['UAE safety rankings, and cost of living against Japan', 'UAEの治安の良さのランキング表や、日本との物価の比較'],
    ['Japan vs UAE — tax on selling property', '日本とUAEの不動産売却した時の税率比較'],
    ['Japanese international school fees vs ordinary UAE primary school fees',
     '日本のインターナショナルスクールの学費とUAEの一般的な小学校の学費の比較'],
    ['How to set up a company in the UAE', 'UAEに法人を作成するシステム'],
    ['I want to grow my assets', '資産を増やしたい'],
  ];
  const [open, setOpen] = useState(null);
  /* Each tile opens its authored answer in its own panel. Anything without an
     authored answer still falls back to asking the advisor. */
  const ask = (n, q) => {
    const answer = CONCERN_ANSWERS[n];
    if (answer) { setOpen({ title: q, answer }); return; }
    window.dispatchEvent(new CustomEvent('open-advisor-chat'));
    window.dispatchEvent(new CustomEvent('advisor-ask', { detail: { question: q } }));
  };
  return (
    <section className="blk concerns" id="concerns">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('Start here', 'ここから')}</div>
          <h2 className="sec">{t('What are your concerns?', '貴方のお悩みは何ですか？')}</h2>
        </div>
        <div className="concern-grid">
          {items.map(([en, ja], i) => (
            <button type="button" className="concern" key={i} onClick={() => ask(String(i + 1).padStart(2, '0'), t(en, ja))}>
              <span className="concern-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="concern-t">{t(en, ja)}</span>
              <span className="concern-ar">→</span>
            </button>
          ))}
        </div>
      </div>
      {open && <ConcernModal title={open.title} answer={open.answer} onClose={() => setOpen(null)} />}
    </section>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <h1>
            {t('Protect, grow, and ', '一族の資産を、守り、育て、')}
            <em>{t('pass on', '次世代へ。')}</em>
            {t(" your family's wealth.", '')}
          </h1>
          <p className="sub">{t(
            "For Japan's affluent families and business owners — a Dubai-based family office that answers one question first: how do you keep what you've built, across generations?",
            '日本の富裕層とオーナー経営者のために。「築いた資産を、いかに世代を超えて守り抜くか」——その問いにまず答える、ドバイ拠点のファミリーオフィスです。',
          )}</p>
          {/* Japanese-language support reassurance (2026.08.11). */}
          <p className="hero-jp">{t(
            '※ Our Japanese staff provide support in Japanese, so you can proceed with complete confidence.',
            '※弊社は日本人スタッフによる日本語サポートにも対応しておりますので、ご安心ください。',
          )}</p>
          {/* The journey starts from the visitor's own concern, not from the
              company introduction — per the 2026.08.03 revision points. */}
          <button
            type="button"
            className="hero-ai"
            onClick={() => window.dispatchEvent(new CustomEvent('open-advisor-chat'))}
          >
            <b>AI</b><span>{t('Consulting', 'コンサルティング')}</span>
          </button>
          <p className="hero-ai-note">{t(
            'For a sound succession — and for the family who matters most.',
            '健全な資産継承のために、大切なご家族のために',
          )}</p>
          <a href="#concerns" className="hero-ask">
            <span className="hero-ask-q">
              {t('What are ', '貴方の')}<em>{t('your concerns', 'お悩みは')}</em>{t('?', '何ですか？')}
            </span>
            <span className="hero-ask-btn">{t('Click here', 'ココをクリック')}</span>
          </a>
          <div className="portals">
            <span className="plab">{t('Group sites', 'グループサイト')}</span>
            <a className="portal" href="#ecosystem"><span className="swatch" style={{ background: 'var(--inv-solid)' }} />JWD Investment ↗</a>
            <a className="portal" href="#ecosystem"><span className="swatch" style={{ background: 'var(--ana-solid)' }} />{t('ANAWAK Real Estate', 'ANAWAK不動産')} ↗</a>
            <a className="portal" href="#ecosystem"><span className="swatch" style={{ background: 'var(--luna-solid)' }} />{t('Luna Travel', 'ルナトラベル')} ↗</a>
          </div>
        </div>
        <div className="hcard">
          <div className="img" style={{ backgroundImage: "url('/img/new-couple.jpg')", backgroundPosition: 'center 22%' }} />
          <div className="float">
            <div className="t">{t('Consolidated Net Worth', '統合純資産')}</div>
            <div className="v"><small>¥</small>2,847,500,000</div>
            <div className="row"><span>{t('YTD return', '年初来リターン')}</span><b>+9.7%</b></div>
            <div className="row"><span>{t('Overseas inheritance tax', '海外資産の相続税')}</span><b>→ 0%</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** AI-avatar video strip — the HeyGen videos from the production plan. */
export function VideoPromo() {
  const { t } = useLang();
  const { open } = useVideo();
  const title = t('Protect your family’s wealth through Dubai real-estate investment',
                  'ドバイの不動産投資で家族の財産を守る');
  return (
    <div className="vpromo">
      <div className="wrap">
        <div className="vthumbs">
          {/* Left: guy video. Right: girl video (Dubai inheritance film). */}
          <button className="vthumb" style={{ backgroundImage: "url('/img/avatar-face.jpg')" }}
             onClick={() => open('hero-2', title)} aria-label="Watch video 2">
            <span className="vplay" />
          </button>
          <button className="vthumb" style={{ backgroundImage: "url('/img/video-inheritance-thumb.jpg')", backgroundPosition: 'center 22%' }}
             onClick={() => open('hero-1', title)} aria-label="Watch video 1">
            <span className="vplay" />
          </button>
        </div>
        <div className="vlead">
          <span className="varrow">◀</span>
          <div>
            <h3>{t('Protect your family’s wealth through Dubai real-estate investment',
                   'ドバイの不動産投資で家族の財産を守る')}</h3>
            <p>{t('(Click an image to watch the video)', '（画像をクリックして映像を視聴できます）')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TILES = [
  ['#strategies', 'M12 3l7 4v5c0 5-3 7-7 9-4-2-7-4-7-9V7z', 'Asset Protection', '資産保護', 'Shield & preserve', '守る・保全する'],
  ['#services', 'M12 3v18M6 8h12M9 21h6', 'Succession Planning', '承継プランニング', 'Across generations', '世代を超えて'],
  ['#strategies', 'M9 7h6M9 11h6M9 15h4M6 3h12v18l-3-2-3 2-3-2-3 2z', 'Tax Planning', 'タックスプランニング', 'International', '国際税務'],
  ['#services', 'M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6', 'Family Office Setup', 'ファミリーオフィス設立', 'DIFC / ADGM', 'DIFC / ADGM'],
  ['#ecosystem', 'M3 12h18M12 3a15 15 0 010 18', 'Multi-Country Structures', '多国間ストラクチャー', 'Japan · Dubai', '日本 · ドバイ'],
];

export function QuickTiles() {
  const { t } = useLang();
  return (
    <div className="quick">
      <div className="wrap">
        {TILES.map(([href, d, en, ja, sEn, sJa]) => (
          <a key={en} href={href}>
            <span className="qi"><svg viewBox="0 0 24 24"><path d={d} /></svg></span>
            <span className="ql">{t(en, ja)}<small>{t(sEn, sJa)}</small></span>
            <span className="qar">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function StatBand() {
  const { t } = useLang();
  const stats = [
    ['¥1,400T', 'Japanese household wealth in transfer', '移転期にある日本の家計金融資産'],
    ['55%', 'Maximum Japanese inheritance tax', '日本の相続税 最高税率'],
    ['0%', 'UAE income · inheritance · capital gains', 'UAEの所得税・相続税・譲渡益税'],
    ['6,700', 'HNW individuals moved to the UAE in 2024', '2024年にUAEへ移住した富裕層'],
  ];
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map(([n, en, ja]) => (
          <div className="s" key={en}><div className="n"><span>{n}</span></div><div className="l">{t(en, ja)}</div></div>
        ))}
      </div>
    </div>
  );
}

export function Question() {
  const { t } = useLang();
  return (
    <section className="q">
      <div className="wrap">
        <div className="ey">{t('The starting point', 'すべての出発点')}</div>
        <h2>
          {t('"How can wealthy Japanese families ', '「日本の富裕層は、いかに資産を')}
          <em>{t('protect and transfer', '守り、引き継ぐ')}</em>
          {t(' their assets?"', 'のか。」')}
        </h2>
        <p>{t(
          'Everything else — real estate, investment, relocation, travel — becomes a solution that branches from this single question. The Family Office is where the journey begins.',
          '不動産、投資、移住、旅行——そのすべてが、この一つの問いから枝分かれするソリューションです。ファミリーオフィスが、その旅の始まりです。',
        )}</p>
      </div>
    </section>
  );
}
