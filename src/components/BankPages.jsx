import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';
import { imgUrl } from '../deploy.js';
import { FlagAE, FlagLA } from './Flags.jsx';

/* ── 海外銀行口座開設 — country buttons and their pages (10.06 request) ──────
   Under the section heading: two country buttons, each opening its own set
   of page buttons. Every page is a hash route (#/banks/<slug>) so it works on
   the static host with no server rewrites.

   The pages carry no body text yet — the client will paste in his own
   diagrams one by one. Those are listed in public/bank-pages.js, which lives
   on the server beside index.html: drop the image into img/banks/ and add its
   file name to that page's list. No rebuild needed. */

export const BANK_COUNTRIES = [
  { id: 'uae', en: 'United Arab Emirates', ja: 'アラブ首長国連邦', Flag: FlagAE },
  { id: 'laos', en: 'Laos', ja: 'ラオス', Flag: FlagLA },
];

// [slug, country, en, ja, parent slug]
export const BANK_PAGES = [
  ['uae-nonresident', 'uae', 'Non-resident accounts in the UAE: the current situation and our services', 'UAE非居住者口座の現状と弊社ご案内', null],
  ['uae-accounts', 'uae', 'Opening bank accounts', '各種銀行口座開設', null],
  ['jdb', 'laos', 'JDB Bank (SAKURA PAY)', 'JDB銀行（SAKURA PAY）', null],
  ['jdb-merits', 'laos', 'Advantages of a JDB Bank account', 'JDB銀行口座開設のメリット', 'jdb'],
  ['sakura-pay', 'laos', 'About SAKURA PAY', 'SAKURA PAYについて', 'jdb'],
  ['jdb-open', 'laos', 'How to open an account', '口座開設方法', 'jdb'],  // 10.07
].map(([slug, country, en, ja, parent]) => ({ slug, country, en, ja, parent }));

export const BANK_ROUTE = '#/banks/';
const pageHref = (slug) => `${BANK_ROUTE}${slug}`;
const pageBySlug = (slug) => BANK_PAGES.find((p) => p.slug === slug);
const childrenOf = (slug) => BANK_PAGES.filter((p) => p.parent === slug);

const Arrow = () => <span className="bkbtn-arrow" aria-hidden="true">→</span>;

/** The country buttons + page buttons that sit under the section heading. */
export function BankButtons() {
  const { t } = useLang();
  const [country, setCountry] = useState('uae');
  const tops = BANK_PAGES.filter((p) => p.country === country && !p.parent);

  return (
    <div className="bknav">
      <div className="bknav-countries" role="tablist" aria-label={t('Country', '国名')}>
        {BANK_COUNTRIES.map(({ id, en, ja, Flag }) => (
          <button key={id} type="button" role="tab" aria-selected={country === id}
                  className={'bknav-country' + (country === id ? ' on' : '')}
                  onClick={() => setCountry(id)}>
            <Flag size={20} />{t(en, ja)}
          </button>
        ))}
      </div>
      <div className="bknav-pages" role="tabpanel">
        {tops.map((p) => (
          <div key={p.slug} className="bknav-item">
            <a className="bkbtn" href={pageHref(p.slug)}>{t(p.en, p.ja)}<Arrow /></a>
            {childrenOf(p.slug).map((c) => (
              <a key={c.slug} className="bkbtn bkbtn-sub" href={pageHref(c.slug)}>
                <span className="bkbtn-branch" aria-hidden="true">└</span>{t(c.en, c.ja)}<Arrow />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* public/bank-pages.js is loaded fresh on each visit (time-stamped URL):
   the host caches .js for a year, so a plain <script> would keep serving
   the old list after the file is edited. */
function useBankDiagrams() {
  const [cfg, setCfg] = useState(() => window.__BANK_PAGES__ || null);
  useEffect(() => {
    const s = document.createElement('script');
    s.src = `${imgUrl('/bank-pages.js')}?v=${Date.now()}`;
    s.onload = () => setCfg(window.__BANK_PAGES__ || {});
    s.onerror = () => setCfg({});
    document.head.appendChild(s);
    return () => s.remove();
  }, []);
  return cfg;
}

/** One 海外銀行口座開設 page, chosen by the #/banks/<slug> route. */
export function BankPage({ slug }) {
  const { t } = useLang();
  const cfg = useBankDiagrams();
  const page = pageBySlug(slug);

  if (!page) {
    return (
      <section className="blk bkpage">
        <div className="wrap">
          <p className="lead">{t('This page could not be found.', 'ページが見つかりませんでした。')}</p>
          <a className="btn btn-ghost" href="#banks">{t('Back to overseas bank accounts', '海外銀行口座開設に戻る')}</a>
        </div>
      </section>
    );
  }

  const country = BANK_COUNTRIES.find((c) => c.id === page.country);
  const parent = page.parent ? pageBySlug(page.parent) : null;
  const kids = childrenOf(page.slug);
  // the rest of this country's pages — less this one, and less its own
  // sub-pages, which already have buttons above
  const siblings = BANK_PAGES.filter((p) => p.country === page.country && p.slug !== page.slug && p.parent !== page.slug);
  const diagrams = (cfg && cfg[page.slug]) || [];

  return (
    <section className="blk bkpage">
      <div className="wrap">
        <nav className="bkpage-crumbs" aria-label={t('Breadcrumb', 'パンくずリスト')}>
          <a href="#top">{t('Home', 'トップ')}</a>
          <span aria-hidden="true">›</span>
          <a href="#banks">{t('Overseas bank accounts', '海外銀行口座開設')}</a>
          <span aria-hidden="true">›</span>
          <span>{t(country.en, country.ja)}</span>
          {parent && (<>
            <span aria-hidden="true">›</span>
            <a href={pageHref(parent.slug)}>{t(parent.en, parent.ja)}</a>
          </>)}
        </nav>

        <div className="bkpage-country"><country.Flag size={20} />{t(country.en, country.ja)}</div>
        <h1 className="bkpage-title">{t(page.en, page.ja)}</h1>

        {kids.length > 0 && (
          <div className="bkpage-kids">
            {kids.map((c) => (
              <a key={c.slug} className="bkbtn" href={pageHref(c.slug)}>{t(c.en, c.ja)}<Arrow /></a>
            ))}
          </div>
        )}

        <div className="bkpage-body">
          {cfg === null ? null : diagrams.length === 0 ? (
            <p className="bkpage-soon">{t('Diagrams for this page are being prepared.', 'このページの図解は現在準備中です。')}</p>
          ) : (
            diagrams.map((d, i) => {
              const item = typeof d === 'string' ? { src: d } : d;
              const img = <img src={imgUrl(`/img/banks/${item.src}`)} alt={item.alt || t(page.en, page.ja)} loading="lazy" />;
              // an entry with href makes the whole diagram a link (opens in a new tab)
              return (
                <figure key={item.src + i} className="bkpage-fig">
                  {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer">{img}</a> : img}
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              );
            })
          )}
        </div>

        {siblings.length > 0 && (
          <div className="bkpage-more">
            <h2 className="bkpage-more-h">{t(`More on ${country.en}`, `${country.ja}のその他のページ`)}</h2>
            <div className="bkpage-more-list">
              {siblings.map((p) => (
                <a key={p.slug} className={'bkbtn' + (p.parent ? ' bkbtn-sub' : '')} href={pageHref(p.slug)}>
                  {p.parent && <span className="bkbtn-branch" aria-hidden="true">└</span>}
                  {t(p.en, p.ja)}<Arrow />
                </a>
              ))}
            </div>
          </div>
        )}

        <a className="btn btn-ghost bkpage-back" href="#banks">← {t('Back to overseas bank accounts', '海外銀行口座開設に戻る')}</a>
      </div>
    </section>
  );
}
