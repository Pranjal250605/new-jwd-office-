import { useLang } from '../i18n.jsx';

/**
 * ニュース — added by the 09.10 sheet ⑦, which places it between the video
 * band and 貴方のお悩みは何ですか？.
 *
 * The Japanese is the client's, reproduced verbatim from the sheet. Two things
 * in it are theirs and look like slips rather than ours to fix silently:
 * 「Heart of Island」 (the development is the Heart of Europe elsewhere on this
 * site) and the space before 「をはじめ」. Both are left as written — see the
 * commit message.
 *
 * The English is ours and is a draft pending approval, as always.
 *
 * Entries are data, not markup, so the client can be given a one-line shape to
 * add the next one: the sheet says 2026 Sept. for both, and more will come.
 */
const ITEMS = [
  {
    date: { en: 'Sept. 2026', ja: '2026 Sept.' },
    // 第22回 IPS — the sheet sets IPS bold inside the sentence.
    body: {
      ja: ['第22回を迎える', 'IPS', 'には、不動産デベロッパー、投資家、各種機関・団体、イノベーターなどが一堂に集まり、新たな投資機会の発掘、プロジェクトの紹介・展示、そして戦略的パートナーシップの構築を促進する、活気あるビジネス交流の場となった。'],
      en: ['The 22nd ', 'IPS', ' brought property developers, investors, institutions and innovators together in one place — a lively business exchange for uncovering new investment opportunities, presenting and exhibiting projects, and forging strategic partnerships.'],
    },
    cta: { en: 'Instagram', ja: 'Instagram' },
    href: 'https://www.instagram.com/reel/DdCUkxPmZSF/',
  },
  {
    date: { en: 'Sept. 2026', ja: '2026 Sept.' },
    body: {
      ja: ['JWD ANAWAKは、家賃保証付き（年間4%×12年間）で、Dubai, Heart of IslandのSeahorseをはじめ, Portofino, Germany Island, Cote d’Azur内の12物件の販売を開始。'],
      en: ['JWD ANAWAK has opened sales on twelve properties — the Seahorse at Dubai, Heart of Island, along with Portofino, Germany Island and Cote d’Azur — each with a rental guarantee of 4% a year for twelve years.'],
    },
    cta: { en: 'Properties', ja: '物件情報' },
    // The sheet asks for "the Seahorse cover page in jwd-anawak.com". That page
    // is /heart-of-europe/seahorse, but every deep path on that host currently
    // returns a server 404 — the SPA has no rewrite rule — so linking it would
    // ship a dead link. This is the anchor ANAWAK's own navigation uses, and it
    // lands on the Heart of Europe section where the Seahorse sits.
    href: 'https://www.jwd-anawak.com/#heart-of-europe',
  },
];

export default function News() {
  const { t, lang } = useLang();
  const L = lang === 'ja' ? 'ja' : 'en';

  return (
    <section className="blk tint news" id="news">
      <div className="wrap">
        <div className="ey">{t('News', 'ニュース')}</div>
        <h2 className="sec">{t('The latest from the group', 'グループの最新情報')}</h2>

        <ul className="news-list">
          {ITEMS.map((it, i) => (
            <li className="news-row" key={i}>
              <div className="news-meta">
                <span className="news-tag">{t('News', 'ニュース')}</span>
                <span className="news-date">{it.date[L]}</span>
              </div>
              <p className="news-body">
                {/* odd indexes are the emphasised run (IPS) */}
                {it.body[L].map((part, j) => (j % 2 ? <b key={j}>{part}</b> : part))}
              </p>
              <a className="news-cta" href={it.href} target="_blank" rel="noreferrer">
                <span aria-hidden="true">▶</span> {it.cta[L]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
