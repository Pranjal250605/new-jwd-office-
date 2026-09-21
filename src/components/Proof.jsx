import { useEffect, useRef } from 'react';
import { useLang } from '../i18n.jsx';
import { useVideo } from '../videos.jsx';
import { FlagJP, FlagAE, FlagLA } from './Flags.jsx';
import { GROUP } from '../groupSites.js';
import { imgUrl } from '../deploy.js';

const STRATEGIES = [
  ['01', 'Art. 22 · Inheritance Tax Act', '相続税法 第22条', 'Asset Valuation Optimization', '資産評価の最適化',
   'A Dubai holding structure maximises the valuation differential. Unlisted shares can in some cases be assessed below market value, compressing the taxable valuation by up to 60%.',
   'ドバイの持株ストラクチャーを活用し、評価差額を最大化。非上場株式の評価額を市場価格より低く算定できるケースがあり、課税対象評価額を最大60%圧縮することが可能です。',
   'Up to 60% reduction in taxable estate valuation', '課税対象評価額を最大60%圧縮'],
  ['02', 'Special Taxation Measures Act · Art. 40-4', '租税特別措置法 第40条の4', 'CFC Optimization via Genuine Substance', '実体を伴うCFC最適化',
   'Real business operations in Dubai — genuine activity, physical office, local management — to satisfy substance requirements.',
   'ドバイに実体ある事業を設立。実際の事業活動・物理的オフィス・現地管理により実体基準を充足します。',
   'Legally defer Japanese tax on overseas business profits', '海外事業利益への日本課税を合法的に繰り延べ'],
  ['03', 'Art. 1-3 · Inheritance Tax Act', '相続税法 第1条の3', 'Next-Generation 10-Year Rule', '次世代・10年ルール',
   'Where both the heirs and the assets have genuinely resided outside Japan for more than ten years, inheritance tax on overseas assets can be brought close to zero.',
   '相続人および資産の双方が10年超の海外居住実態を有する場合、海外資産に係る相続税を実質的にゼロへと近づけることが可能です。',
   'Overseas inheritance tax effectively → 0 after 10 years', '10年経過後、海外資産の相続税は実質ゼロに'],
];

export function Strategies() {
  const { t } = useLang();
  return (
    <section className="blk" id="strategies">
      <div className="wrap">
        <div className="head">
          <div className="ey">{t('Three Strategic Inheritance Solutions', '3つの相続プランニング戦略')}</div>
          <h2 className="sec">{t('Legally compliant tax optimization, built on UAE regulations', 'UAE規制に基づく、合法的な税務最適化')}</h2>
          <p className="lead">{t(
            'Designed and executed as one integrated Family Office solution through the JWD ecosystem.',
            'JWDのエコシステムを通じ、ひとつの統合されたファミリーオフィス・ソリューションとして設計・実行します。',
          )}</p>
        </div>
        <div className="grid g3">
          {STRATEGIES.map(([no, lawEn, lawJa, en, ja, dEn, dJa, rEn, rJa]) => (
            <div className="strat" key={no}>
              <div className="no">{no}</div>
              <div className="law">{t(lawEn, lawJa)}</div>
              <h3>{t(en, ja)}</h3>
              <p>{t(dEn, dJa)}</p>
              <div className="res"><span className="d" />{t(rEn, rJa)}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 22, fontSize: 13, color: 'var(--muted)', maxWidth: 820 }}>{t(
          '※ Strategies are illustrative and depend on individual circumstances, residency substance and prevailing law. Not tax advice — always consult a licensed international tax professional.',
          '※ 戦略は一例であり、個別の状況・居住実態・現行法により結果は異なります。税務助言ではありません。国際税務に精通した専門家に必ずご相談ください。',
        )}</p>
      </div>
    </section>
  );
}

const TAX_ROWS = [
  ['Personal income tax (top)', '個人所得税（最高）', '55%', '0%'],
  ['Capital gains & dividends', '株式譲渡益・配当', '20.315%', '0%'],
  ['Inheritance tax (top)', '相続税（最高）', '55%', '0%'],
  ['Corporate tax (effective)', '法人税（実効）', '~30%', '9%'],
  ['Consumption tax / VAT', '消費税 / VAT', '10%', '5%'],
  ['Wealth tax', '富裕税', ['None', 'なし'], ['None', 'なし']],
];

export function Compare() {
  const { t } = useLang();
  const v = (x) => (Array.isArray(x) ? t(x[0], x[1]) : x);
  return (
    <section className="blk tint" id="compare">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('Japan vs Dubai', '日本 vs ドバイ')}</div>
          <h2 className="sec brk">{t('Why structure through the UAE', 'なぜUAEでストラクチャーを\n組むのか？')}</h2>
          <p className="lead center">{t(
            'The same wealth, under two tax regimes. This gap is the reason families build their structure in Dubai.',
            '同じ資産でも、税制が違えば残る額が変わります。この差こそ、一族がドバイでストラクチャーを組む理由です。',
          )}</p>
        </div>
        <div className="compare">
          <div className="rw hd2">
            <div>{t('Tax (individual)', '税目（個人）')}</div>
            {/* flags beside each country, per the 08.19 sheet */}
            <div className="c jp"><FlagJP /><span>{t('Japan', '日本')}</span></div>
            <div className="c ae"><FlagAE /><span>{t('Dubai · UAE', 'ドバイ · UAE')}</span></div>
          </div>
          {TAX_ROWS.map(([en, ja, jp, ae]) => (
            <div className="rw" key={en}>
              <div className="k">{t(en, ja)}</div>
              <div className="vj">{v(jp)}</div>
              <div className="va">{v(ae)}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'var(--muted)' }}>{t(
          "※ Indicative rates for illustration only; Dubai's 0% treatment depends on genuine UAE tax residency. Not tax advice — consult a licensed professional.",
          '※ 税率は説明用の概要です。ドバイの0%はUAEの税務上の居住実態が前提となります。税務助言ではありません。専門家にご相談ください。',
        )}</p>
      </div>
    </section>
  );
}

const CASES = [
  ['Real-estate succession', '不動産の承継', '¥1 billion real-estate owner', '資産10億円の不動産オーナー',
   'Primarily domestic real estate · three children.', '資産の大半が国内不動産 · 子ども3人。',
   [['Reallocate domestic holdings into Dubai real estate', '国内不動産をドバイ不動産へ再配分'],
    ["Support the eldest son's relocation to Dubai", '長男のドバイ移住をサポート'],
    ['Establish a DIFC family office for succession', 'DIFCにファミリーオフィスを設立し承継へ']],
   'Inheritance tax reduced from 55% to effectively zero after ten years', '相続税を55%から、10年後に実質ゼロへ'],
  ['Business-owner exit', '経営者のExit', '¥3 billion after an M&A exit', 'M&A後 資産30億円',
   'IT founder · assets heavily concentrated in yen.', 'IT企業創業者 · 資産が円に極端に集中。',
   [['Establish a Dubai family office with genuine CFC substance', '実体を伴うドバイ・ファミリーオフィスを設立'],
    ['Diversify into global equities, PE, FX and USD assets', 'グローバル株式・PE・為替・USD資産へ分散'],
    ['Acquire Dubai real estate + apply the 10-year rule', 'ドバイ不動産取得と10年ルールの適用']],
   'Full hedge against yen depreciation · 8–12% target annual return', '円安への完全ヘッジ · 年率8〜12%を目標'],
  ['Multi-generational', '多世代', '¥2 billion, three generations', '資産20億円・三世代',
   'Family-business owner · three children and three grandchildren.', '同族企業オーナー · 子ども3人と孫3人。',
   [['Relocate children and grandchildren to Dubai (IB education)', '子・孫のドバイ移住（国際バカロレア教育）'],
    ['Acquire Dubai real estate via Golden Visa (7–10% yield)', 'ゴールデンビザでドバイ不動産取得（利回り7〜10%）'],
    ['Establish a multi-generational family office', '多世代型ファミリーオフィスを設立']],
   'Overseas inheritance tax eliminated · wealth diversified from regional risk', '海外資産の相続税を撤廃 · 地政学リスクから分散'],
];

export function Cases() {
  const { t } = useLang();
  return (
    <section className="blk" id="cases">
      <div className="wrap">
        <div className="head">
          <div className="ey">{t('Case Studies', 'ケーススタディ')}</div>
          <h2 className="sec">{t("How families keep what they've built", '築いた資産を、どう守り抜くか')}</h2>
        </div>
        <div className="grid g3">
          {CASES.map(([tagEn, tagJa, hEn, hJa, pEn, pJa, steps, oEn, oJa]) => (
            <div className="case" key={hEn}>
              <span className="tag">{t(tagEn, tagJa)}</span>
              <h3>{t(hEn, hJa)}</h3>
              <div className="pf">{t(pEn, pJa)}</div>
              <ol>
                {steps.map(([sEn, sJa], i) => <li key={i}><i>{i + 1}</i>{t(sEn, sJa)}</li>)}
              </ol>
              <div className="out">
                <svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" /></svg>
                {t(oEn, oJa)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  const { t } = useLang();
  return (
    <section className="blk eco-navy" id="ecosystem">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('The JWD Group Bridge', 'JWDグループの架け橋')}</div>
          <h2 className="sec">{t('One licensed hub, three specialized companies', 'ひとつのハブと、3つの専門会社')}</h2>
          <p className="lead center">{t(
            'Every relationship begins here at the Family Office (Japan Worldlink DWC-LLC). From this central hub we bridge you to each specialist company your strategy calls for. Every group company is a licensed specialist entity in its own right. We are not merely an introduction desk: we build the right structure on a firm, regulator-compliant foundation.',
            'すべてのご縁は、このファミリーオフィス（Japan Worldlink DWC-LLC）から始まります。ここを中核拠点（ハブ）として、お客様の戦略に必要な各専門会社への橋渡しを行います。各グループ会社はそれぞれ独立したライセンスを保有する専門法人です。私たちは単なる紹介窓口ではありません。当局の規制に準拠した強固な基盤の上に、最適なストラクチャーを構築いたします。',
          )}</p>
        </div>
        {/* 09.10 sheet ⑧ listed these three URLs "respectively" in an order that
            would have sent each card to the wrong company; we read it as a slip
            and pointed each card at its own site. The 09.16 sheet ③ confirms
            that reading and moves ANAWAK to anawak.com — see groupSites.js. */}
        <div className="eco-grid">
          <div className="pill hubme">
            <span className="badge" style={{ background: 'var(--fo-solid)' }}>{t('TOP · You are here', 'TOP · 現在地')}</span>
            <h3>Japan Worldlink DWC-LLC</h3>
            <p>{t('Japan Worldlink DWC-LLC — inheritance, succession, tax strategy, asset protection, wealth consulting.',
                  'Japan Worldlink DWC-LLC — 相続、承継、税務戦略、資産保護、ウェルスコンサルティング。')}</p>
            <span className="go">{t('The central hub', '中核ハブ')}</span>
          </div>
          <a className="pill" href={GROUP.investment} target="_blank" rel="noreferrer">
            <span className="badge" style={{ background: 'var(--inv-solid)' }}>Investment</span>
            <h3>{t('JWD Investment', 'JWDインベストメント')}</h3>
            <p>{t('Wealth management & advisory — Equiti and AIX investment platforms.',
                  '資産運用・アドバイザリー — Equiti・AIX投資プラットフォーム。')}</p>
            <span className="go">{t('Visit site →', 'サイトへ →')}</span>
          </a>
          <a className="pill" href={GROUP.anawak} target="_blank" rel="noreferrer">
            <span className="badge" style={{ background: 'var(--ana-solid)' }}>Real Estate</span>
            <h3>ANAWAK Real Estate L.L.C</h3>
            <p>{t('Dubai property investment, acquisition and management.', 'ドバイ不動産の投資・取得・管理。')}</p>
            <span className="go">{t('Visit site →', 'サイトへ →')}</span>
          </a>
          <a className="pill" href={GROUP.luna} target="_blank" rel="noreferrer">
            <span className="badge" style={{ background: 'var(--luna-solid)' }}>Travel</span>
            <h3>JWD Luna Travel &amp; Tourism LLC</h3>
            <p>{t("Licensed by Dubai's Department of Economy & Tourism — property tours, investment tours, luxury travel.",
                  'ドバイ政府観光局認可 — 物件ツアー、投資ツアー、ラグジュアリートラベル。')}</p>
            <span className="go">{t('Visit site →', 'サイトへ →')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Core educational library — the five priority videos from the 13-July meeting.
// [ videoId, image, kickerEn, kickerJa, dur, titleEn, titleJa ]
/* ── Overseas bank accounts (09.21 DWC sheet, P1) ────────────────────────────
   Sits between the case studies and Heart of Europe, as the sheet marks it.
   Japanese copy is the client's, verbatim from the supplied .pptx; the English
   is ours and is a draft pending approval.

   NOTE: the source gives the sixth merit heading — 《富裕層向けプライベート
   バンキングの充実》 — with no body paragraph. Reproduced as supplied and
   flagged back to the client rather than written for them, since these are
   financial claims. */
const BANKS = [
  ['Emirates NBD Bank', 'エミレーツNBD銀行'],
  ['NBF Bank', 'NBF銀行'],
  ['JDB Bank (SAKURA PAY)', 'JDB銀行（SAKURA PAY）'],
];

const BANK_MERITS = [
  ['Attractive tax advantages', '魅力的な税制メリット',
   'Personal income in the UAE is in principle untaxed, and corporate tax is subject to certain reliefs where a free zone or similar structure is used. Profits from investment and from business can be protected efficiently and carried to their maximum.',
   'UAEでは個人の所得税が基本非課税となっており、法人税についてもフリーゾーン等を活用することで一定の優遇措置を受けられます。資産運用やビジネスで得た利益を効率的に守り、最大化することが可能です。'],
  ['Multi-currency handling, major currencies included', '主要通貨をはじめとするマルチカレンシー対応',
   'Not only the UAE dirham (AED) but the US dollar (USD), the euro (EUR), the British pound (GBP) and other major international currencies can be held and managed easily within a single account. The convenience of moving funds globally and of international transfers rises dramatically.',
   'UAEディルハム（AED）だけでなく、米ドル（USD）、ユーロ（EUR）、イギリスポンド（GBP）など、主要な国際通貨を一つの口座内で簡単に保有・管理できます。グローバルな資金移動や国際送金の利便性が飛躍的に高まります。'],
  ['High-grade security and asset protection', '高水準のセキュリティと資産保全',
   "Dubai's financial sector operates under strict central bank regulation and is notable for world-standard security and stability. Seen from the standpoint of political and economic risk diversification — hedging country risk — it is an excellent safe harbour for assets.",
   'ドバイの金融セクターは厳格な中央銀行の規制のもとで運営されており、世界水準の高度なセキュリティと安定性を誇ります。政治的・経済的なリスク分散（カントリーリスクのヘッジ）の観点からも、安全な資産の逃避先として優れています。'],
  ['Excellent international access and remote management', '優れた国際アクセスとリモート管理',
   'Many UAE banks offer English and Arabic as a matter of course, along with highly digitalised online and mobile banking. Balances can be checked and international transfers arranged around the clock, from anywhere in the world.',
   '多くのUAEの銀行では、英語・アラビア語はもちろん、高度にデジタル化されたオンライン・モバイルバンキングを提供しています。世界中どこからでも24時間体制で口座残高の確認や国際送金の手続きが行えます。'],
  ['A stronger base for international business', '国際的なビジネス展開の基盤強化',
   'When incorporating or trading from a Dubai base, holding a local business account raises your standing with counterparties. Smooth settlement within the UAE, and the lending and financial services particular to a local entity, also become available.',
   'ドバイを拠点とした法人設立や貿易を行う際、現地のビジネス口座があることで取引先からの信用力が向上します。UAE国内でのスムーズな決済や、現地法人特有の融資・金融サービスの利用も可能になります。'],
  ['A full private-banking offering for high-net-worth clients', '富裕層向けプライベートバンキングの充実', null, null],
];

/** Overseas bank account opening — UAE and Laos. The CTA hands off to the
 *  JWD Investment site's consent gate, per the sheet's "Link to" note. */
export function Banks() {
  const { t } = useLang();
  return (
    <section className="blk banks-sec" id="banks">
      <div className="wrap">
        <div className="head banks-head">
          <h2 className="sec">{t('Opening an overseas bank account', '海外銀行口座開設')}</h2>
          <ul className="banks-countries">
            <li><FlagAE size={17} />{t('United Arab Emirates', 'アラブ首長国連邦')}</li>
            <li><FlagLA size={17} />{t("Lao People's Democratic Republic", 'ラオス人民民主共和国')}</li>
          </ul>
        </div>

        <div className="banks-top">
          <ul className="banks-list">
            {BANKS.map(([en, ja]) => <li key={en}>{t(en, ja)}</li>)}
          </ul>
          <div className="banks-note">
            <p>{t(
              'World-leading international financial institutions and major local banks provide sophisticated asset management for high-net-worth clients, specialist advisory, and dedicated lifestyle benefits.',
              '世界トップクラスの国際金融機関や現地大手銀行が、富裕層向けの高度な資産運用サービスや専門的なアドバイザリー、専用のライフスタイル特典などを提供しています。',
            )}</p>
            <p>{t(
              'The documents required and the review criteria applied differ from bank to bank. Please feel free to consult us about choosing the bank best suited to your purpose, and about a smooth opening procedure.',
              '口座開設にあたっては、求められる必要書類や審査基準が銀行によって異なります。ご自身の目的に合わせた最適な銀行選びや、スムーズな開設手続きについてはお気軽にご相談ください。',
            )}</p>
          </div>
        </div>

        <h3 className="banks-mh">{t(
          '[The advantages of opening a bank account in Dubai (UAE)]',
          '【ドバイ（UAE）に銀行口座を開設するメリット】',
        )}</h3>
        <p className="lead banks-intro">{t(
          'One of the world’s foremost financial hubs, Dubai draws the attention of high-net-worth individuals and companies worldwide for its tax advantages and its ease of doing business. Holding a local bank account brings a great many benefits, including the following.',
          '世界有数の金融ハブであり、税制優遇やビジネスのしやすさから世界中の富裕層や企業に注目されているドバイ。現地の銀行口座を保有することで、以下のような多くのメリットが得られます。',
        )}</p>

        <ul className="banks-merits">
          {BANK_MERITS.map(([hEn, hJa, bEn, bJa]) => (
            <li key={hJa}>
              <h4>{t(`《${hEn}》`, `《${hJa}》`)}</h4>
              {bJa && <p>{t(bEn, bJa)}</p>}
            </li>
          ))}
        </ul>

        <div className="banks-cta">
          <a className="btn btn-gold" href="https://jwd-insurance.vercel.app/#/consent"
            target="_blank" rel="noopener noreferrer">
            {t('Open an account here', '口座開設はこちらから')}
          </a>
        </div>
      </div>
    </section>
  );
}

export function HeartOfEurope() {
  const { t } = useLang();
  const stats = [
    ['4,004', t('sq ft', '平方フィート')],
    ['3', t('levels', 'フロア')],
    ['1', t('underwater bedroom', '水中ベッドルーム')],
    ['360°', t('coral reef gardens', '珊瑚礁ガーデン')],
  ];
  return (
    <section className="blk hoe" id="heart-of-europe">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('Signature Portfolio · Heart of Europe', 'シグネチャー・ポートフォリオ · ハート・オブ・ヨーロッパ')}</div>
          <h2 className="sec">{t('Villas that live on the water', '海に浮かぶ、唯一無二の邸宅')}</h2>
          <p className="lead center balance">{t(
            'On The World islands off Dubai — the Floating Seahorse: a three-level villa above and beneath the sea, with an underwater master bedroom wrapped in living coral gardens. A landmark asset for a family portfolio.',
            'ドバイ沖の人工群島「ザ・ワールド」に浮かぶ、フローティング・シーホース。海上と海中にまたがる3層構造の邸宅で、珊瑚礁に包まれた水中マスターベッドルームを備えます。一族のポートフォリオを象徴する資産です。',
          )}</p>
        </div>

        {/* IHG hospitality brands — credibility band (links to IHG) */}
        <a className="hoe-ihg" href="https://www.ihg.com/" target="_blank" rel="noreferrer" aria-label="IHG Hotels & Resorts">
          <span className="hoe-ihg-cap">{t('Hospitality operated in partnership with', 'ホスピタリティ運営パートナー')}</span>
          <img src={imgUrl('/img/ihg-brands.png')} alt="IHG Hotels & Resorts — Six Senses, Regent, InterContinental, Kimpton, and more" loading="lazy" />
          <span className="hoe-ihg-note">{t('IHG Hotels & Resorts — one of the world’s leading hotel groups, 6,000+ hotels across 100+ countries. ↗', '世界有数のホテルグループ IHG Hotels & Resorts — 100か国以上・6,000軒超のホテルネットワーク。↗')}</span>
        </a>

        {/* IHG, explained — 08.25 sheet item 4-②: "For DWC Website: add section
            between IHG and Sea Horse". Japanese is the client's, verbatim from
            the sheet; the English is ours and still needs their approval. */}
        <div className="hoe-ihg-say">
          <div className="ey">{t('For those who know the very best', '一流を知る人のために')}</div>
          <h3>{t(
            'The assured calm, and the wonder, that only IHG builds',
            'IHGグループが作り上げた揺るぎない安心と感動の空間',
          )}</h3>
          <p className="hoe-ihg-say-body balance">{t(
            'IHG commands one of the largest hotel networks on earth and the lasting affection of travellers worldwide. Quality worthy of that name, interiors considered down to the last detail, and the reassurance of a guaranteed return: together they deliver a repose and a confidence without precedent. The exceptional hotel that makes a stay exceptional is now yours to own.',
            '世界最大級のホテルネットワークを誇り、世界の旅人に愛され続けるIHGグループ。その名にふさわしい品質と細部までこだわり抜いた空間、そして安心の保証制度が、かつてない極上のくつろぎと確かな安心感をお届けします。特別な滞在を叶える特別なホテルが、今、あなたのものになります。',
          )}</p>
        </div>

        <div className="hoe-hero">
          <img src={imgUrl('/img/hoe-underwater.jpg')} alt={t('Floating villa above and beneath the sea', '海上と海中にまたがる浮遊邸宅')} loading="lazy" />
          <span className="hoe-cap">{t('The Floating Seahorse · The World, Dubai', 'フローティング・シーホース · ザ・ワールド、ドバイ')}</span>
        </div>

        {/* stats + ANAWAK sourcing */}
        <div className="hoe-info">
          <div className="hoe-stats">
            {stats.map(([n, l]) => (
              <div className="hoe-stat" key={l}><span className="n">{n}</span><span className="l">{l}</span></div>
            ))}
          </div>
          <div className="hoe-info-r">
            <p className="hoe-note">{t('Acquired & managed via ANAWAK Real Estate.', 'ANAWAK不動産を通じて取得・管理いたします。')}</p>
            <a href="https://thoe.com/properties/the-floating-villas/" target="_blank" rel="noreferrer" className="btn btn-gold hoe-cta">
              {t('Discover Heart of Europe →', 'ハート・オブ・ヨーロッパを見る →')}
            </a>
          </div>
        </div>
      </div>

      {/* full-bleed gallery — slides right to left */}
      <div className="hoe-marquee" aria-hidden="true">
        <div className="hoe-track">
          {[...SLIDES, ...SLIDES].map((s, i) => (
            <div className="hoe-slide" key={i} style={{ backgroundImage: `url('${s}')` }} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SLIDES = Array.from({ length: 26 }, (_, i) => `/img/hoe-slide-${i + 1}.jpg`);

// Short "What is…?" explainer series — reusable across the group.
const EXPLAINERS = [
  ['exp-dubai', 'What is Dubai?', 'ドバイとは？'],
  ['exp-fo', 'What is a Family Office?', 'ファミリーオフィスとは？'],
  ['exp-10yr', 'What is the 10-year rule?', '10年ルールとは？'],
  ['exp-visa', 'What is the Golden Visa?', 'ゴールデンビザとは？'],
  ['exp-difc', 'What is DIFC / ADGM?', 'DIFC・ADGMとは？'],
  ['exp-cfc', 'What is CFC substance?', 'CFC実体基準とは？'],
];

export function Insights() {
  const { t } = useLang();
  const { open } = useVideo();
  return (
    <section className="blk tint" id="insights">
      <div className="wrap">
        <div className="head">
          <div className="ey">{t('Insights & Education', 'インサイト＆教育')}</div>
          <h2 className="sec">{t('The wealth-preservation library', '資産保全ライブラリー')}</h2>
          <p className="lead">{t(
            'Short, plain-language videos — the essentials, in five to ten minutes each. New topics added continuously.',
            '5〜10分の短い動画で、要点をわかりやすく。トピックは随時追加します。',
          )}</p>
        </div>

        {/* Featured — the two films shown on the landing page */}
        <div className="ins-featured">
          <button className="vid vid-feat" onClick={() => open('hero-2', t('JWD Investment — Creating the future through the power of capital', 'JWDインベストメント — 資本の力で、未来を創る'))}>
            <div className="thumb" style={{ backgroundImage: `url(${imgUrl('/img/avatar-face.jpg')})` }}>
              <div className="play" />
            </div>
            <div className="b">
              <div className="t">{t('Featured · Investment', '注目 · インベストメント')}</div>
              <h4>{t('Creating the future through the power of capital', '資本の力で、未来を創る')}</h4>
            </div>
          </button>
          <button className="vid vid-feat" onClick={() => open('hero-1', t('Protecting family wealth through Dubai real estate', 'ファミリー資産継承：ドバイ不動産による価値の守護'))}>
            <div className="thumb" style={{ backgroundImage: `url(${imgUrl('/img/video-inheritance-thumb.jpg')})`, backgroundPosition: 'center 22%' }}>
              <div className="play" />
            </div>
            <div className="b">
              <div className="t">{t('Featured · Family Office', '注目 · ファミリーオフィス')}</div>
              <h4>{t('Protecting family wealth through Dubai real estate', 'ドバイ不動産による、家族の資産継承')}</h4>
            </div>
          </button>
        </div>

        {/* "What is…?" explainer series */}
        <div className="explain">
          <div className="explain-h">{t('Two-minute explainers', '2分でわかる用語解説')}</div>
          <div className="explain-grid">
            {EXPLAINERS.map(([id, en, ja]) => (
              <button className="explain-chip" key={id} onClick={() => open(id, t(en, ja))}>
                <span className="ec-play">▶</span>
                <span>{t(en, ja)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** The JWD group as a hub-and-petals flower — Family Office at the centre. */
/* ── Group banner (09.21 DWC sheet, P2) ──────────────────────────────────────
   Sits directly under the group flower. The sheet asks for a banner "with
   responsive motion", warning twice not to ruin the site's tonality — so the
   movement is a slow scale on the artwork plus a one-shot rise on the line,
   not a carousel or an autoplay video. Both are held behind an
   IntersectionObserver so nothing animates off-screen, and behind
   prefers-reduced-motion. */
export function GroupBanner() {
  const { t } = useLang();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add('is-in'), io.disconnect()),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="gbanner" ref={ref} aria-label={t('Japan Worldlink DWC Group', 'Japan Worldlink DWC グループ')}>
      <div className="wrap">
        <div className="gbanner-in">
          <img className="gbanner-img" src={imgUrl('/img/group-banner.jpg')} loading="lazy" decoding="async"
            alt={t('Japan Worldlink DWC Group — JWD Investment, ANAWAK ONE, ANAWAK Real Estate, Japan Worldlink DWC, JWD Travel & Tourism, EDIFY Japan and JWD Jewelry, over the flags of Japan and the UAE.',
                   'Japan Worldlink DWC グループ — JWD Investment、ANAWAK ONE、ANAWAK Real Estate、Japan Worldlink DWC、JWD Travel & Tourism、EDIFY Japan、JWD Jewelry。日本とUAEの国旗を背景に。')} />
          <p className="gbanner-tx">{t(
            "The promise of the UAE, for Japan's future",
            'UAEの可能性を、日本人の未来へ',
          )}</p>
        </div>
      </div>
    </section>
  );
}

export function EcosystemFlower() {
  const { t } = useLang();
  return (
    <section className="blk flower-sec" id="group">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('The JWD Group', 'JWDグループ')}</div>
          <h2 className="sec">{t('One group, moving as one', 'ひとつのグループとして')}</h2>
          <p className="lead center brk">{t(
            'The Family Office sits at the hub — investment, real estate, AI technology and travel companies working together around it.',
            'ファミリーオフィスを中核に、投資・不動産・旅行の各社が\nひとつのグループとして連携します。',
          )}</p>
        </div>

        {/* Petals carry each company's formal name, per the revision points. */}
        <div className="flower" role="img"
          aria-label={t('JWD Group: Japan Worldlink DWC-LLC at the centre, with JWD INVESTMENT, EDIFY Japan, ANAWAK Real Estate L.L.C and JWD Luna Travel & Tourism LLC.',
                        'JWDグループ：Japan Worldlink DWC-LLC を中心に、JWD INVESTMENT、EDIFY Japan、ANAWAK Real Estate L.L.C、JWD Luna Travel & Tourism LLC。')}>
          <div className="petal petal-fo">
            <span className="petal-l">Japan Worldlink<br/>DWC-LLC</span>
            <span className="petal-s">{t('Family Office', 'ファミリーオフィス')}</span>
          </div>
          <div className="petal petal-inv">
            <span className="petal-l">JWD INVESTMENT</span>
            <span className="petal-s">{t('Investment', 'インベストメント')}</span>
          </div>
          <div className="petal petal-edify">
            <span className="petal-l">EDIFY Japan</span>
            <span className="petal-s">{t('AI Technology', 'AI テクノロジー')}</span>
          </div>
          <div className="petal petal-luna">
            <span className="petal-l">JWD Luna Travel<br/>&amp; Tourism LLC</span>
            <span className="petal-s">{t('Travel', 'トラベル')}</span>
          </div>
          <div className="petal petal-ana">
            <span className="petal-l">ANAWAK Real<br/>Estate L.L.C</span>
            <span className="petal-s">{t('Real Estate', '不動産')}</span>
          </div>
          <div className="flower-core">
            <img src={imgUrl('/img/jwd-star.png')} alt="JWD" />
            <span className="flower-core-tx"><b>JWD</b><small>JAPAN WORLDLINK DWC GROUP</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** JWD Jewelry — the Dubai showroom, shown as a gallery. Sits last in main,
 *  immediately before the contact CTA (2026.08.14). */
export function Jewelry() {
  const { t } = useLang();
  const shots = [
    ['/img/jewelry-entrance.jpg', t('The showroom entrance', 'ショールームのエントランス'), 'tall'],
    ['/img/jewelry-hall-1.jpg', t('Display halls', '展示ホール'), 'wide'],
    ['/img/jewelry-hall-2.jpg', t('Display halls', '展示ホール'), 'wide'],
    ['/img/jewelry-building.jpg', t('The building, Dubai', 'ドバイの店舗ビル'), 'tall'],
    ['/img/jewelry-hall-3.jpg', t('Display halls', '展示ホール'), 'wide'],
    // 09.17-3 sheet: three more, in the order the sheet lays them out.
    ['/img/jewelry-lobby.jpg', t('The showroom lobby', 'ショールームのロビー'), 'tall'],
    ['/img/jewelry-storefront.jpg', t('The showroom storefront', 'ショールームの店構え'), 'tall'],
    ['/img/jewelry-logo.jpg', t('JWD Jewelry', 'JWDジュエリー'), 'wide'],
  ];
  return (
    <section className="blk jewelry" id="jewelry">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('JWD Jewelry', 'JWDジュエリー')}</div>
          <h2 className="sec">{t('A Dubai showroom of our own', 'ドバイのジュエリーショールーム')}</h2>
          <p className="lead center">{t(
            'Diamonds sourced at cost through our own route — see them in person at the showroom in Dubai.',
            '独自のルートで原価水準にて仕入れるダイヤモンド。ドバイのショールームで、実物をご覧いただけます。',
          )}</p>
        </div>
        <div className="jewel-grid">
          {shots.map(([src, alt, shape]) => (
            <figure className={`jewel-shot jewel-${shape}`} key={src}>
              <img src={imgUrl(src)} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
