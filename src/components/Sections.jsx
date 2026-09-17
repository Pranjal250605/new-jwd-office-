import { useLang } from '../i18n.jsx';
import { imgUrl } from '../deploy.js';

/** Representative's message — sits just before the Japan Worldlink DWC-LLC block. */
export function President() {
  const { t } = useLang();
  const points = [
    [t('Comprehensive Expertise', '総合的な専門性'),
     t('We work closely with a trusted network of tax professionals, attorneys, financial institutions, and other specialists to develop the most effective solutions tailored to your circumstances.',
       '税理士、弁護士、金融機関などの各分野のプロフェッショナルと強固に連携し、最適な方法を導き出します。')],
    [t('Tailor-Made Family Solutions', 'オーダーメイドの伴走体制'),
     t('Every family has its own history, priorities, and aspirations. We design customized wealth-preservation and succession strategies that reflect your unique background and future vision.',
       '一族の背景や将来のビジョンに合わせた、オーダーメイドの資産防衛・承継プランを構築します。')],
    [t('A Long-Term Partnership', '長期的な信頼関係'),
     t('Our commitment extends beyond one-time advice. We stand beside your family as a trusted long-term partner, with a vision that spans generations — even a century into the future.',
       '一時的なアドバイスに留まらず、百年先を見据えたファミリーの永続的なパートナーとしてサポートいたします。')],
  ];
  return (
    <section className="blk prez" id="message">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('Message from the Representative', '代表者ごあいさつ')}</div>
          <h2 className="sec">{t('Preserving Peace of Mind and Lasting Value for the Next Generation',
                                  '次世代へ繋ぐ「安心」と「価値」を、ご家族とともに')}</h2>
        </div>
        <div className="prez-grid">
          <figure className="prez-photo">
            <img src={imgUrl('/img/president.jpg')} alt={t('Hamit Gurbuz, President & CEO', '代表取締役社長（CEO）ハミット・ギュルビュズ')} />
            {/* Name and title per the 2026.08.13 revision points. */}
            <figcaption>
              <b>{t('Hamit Gurbuz', 'Hamit Gurbuz（ハミット・ギュルビュズ）')}</b>
              <span>{t('President & CEO · Japan Worldlink DWC-LLC', '代表取締役社長（CEO）・Japan Worldlink DWC-LLC')}</span>
            </figcaption>
          </figure>
          <div className="prez-body">
            <p>{t(
              'The landscape around wealth management and succession has entered its most difficult phase yet, as legal frameworks grow more intricate and social conditions shift sharply. The transfer of assets — inheritance tax above all — does not stop at a tax procedure. We see it as a profoundly important juncture: the passing on of the wealth a family has built over many years, and of the intent invested in it, to the next generation.',
              '現代の資産運用や相続を巡る環境は、法制度の複雑化や社会情勢の激変により、かつてないほど困難な局面を迎えています。特に「相続税」に代表される資産の移転は、単なる税務上の手続きに留まりません。それは、ご家族が長年築き上げてこられた大切な財産と、そこに込められた「想い」を次代へと継承する、極めて重要な節目であると私たちは考えます。',
            )}</p>
            <p>{t(
              'At Japan Worldlink, our role extends well beyond providing tax-efficient solutions. We strive to become a trusted strategic partner who understands each family’s unique goals, values, and long-term vision — a comprehensive compass for preserving, growing, and seamlessly transferring family wealth across generations.',
              '私たちは、単に税負担を軽減するスキームを提供するだけの存在ではありません。ご家族一人ひとりのライフプランや価値観に深く寄り添い、世代を超えて資産を守り、育み、円滑に承継していくための「総合的な羅針盤」でありたいと考えています。',
            )}</p>
            <div className="prez-points">
              {points.map(([h, b]) => (
                <div key={h}><h4>{h}</h4><p>{b}</p></div>
              ))}
            </div>
            <blockquote className="prez-q">{t(
              '“How should we pass on our assets — and the values behind them — to the next generation?”',
              '「次世代にどのような形で資産と想いを残すべきか」——。',
            )}</blockquote>
            <p>{t(
              'We meet that question head-on. Honoring your family’s history while designing lasting peace of mind for the future is the mission that defines our company — pursued with integrity, professionalism, and genuine care.',
              'その疑問やご不安に、私たちは正面から向き合います。ご家族の歴史に敬意を払い、未来への確かな安心をデザインすることこそが、私たちの使命です。',
            )}</p>
            <p>{t(
              'We invite you to choose Japan Worldlink DWC-LLC as your trusted partner in protecting your family’s wealth, preserving your legacy, and strengthening the bonds that connect generations.',
              '皆さまの大切な資産と絆を守るパートナーとして、ぜひ私たち Japan Worldlink DWC-LLC をお選びください。',
            )}</p>
            <div className="prez-sign">
              <span>Japan Worldlink DWC-LLC</span>
              <b>{t('Hamit Gurbuz — President & CEO', '代表取締役社長（CEO）　ハミット・ギュルビュズ')}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ＜会長挨拶＞ — the chairman's message, added by the "jwd_additional Work_09.16"
 * sheet, which places it directly below the CEO message section.
 *
 * The Japanese is the client's, reproduced from their msg.txt and checked
 * character-for-character against the sheet's text layer — the two are
 * identical apart from the slide chrome. One correction: the source has
 * 「挑は戦してまいります」 in the closing paragraph, an IME slip for 「挑戦して
 * まいります」, corrected here and called out in the commit message.
 *
 * The client's line breaks inside each paragraph are not reproduced: they are
 * breaks for a fixed-width slide, and forcing them would wreck the wrap on
 * narrow screens. Paragraph grouping is theirs.
 *
 * The English is ours and is a draft pending approval, as always.
 */
export function Chairman() {
  const { t } = useLang();
  const paras = [
    t('The thirty-five years and more that we have lived through were a time of vast change in world history. The Gulf War of 1990, the bombing of Iraq in 1998, the Iraq War of 2003. Then the collapse of Lehman Brothers in 2008, the Dubai shock of 2009, the Great East Japan Earthquake and the bombing of Libya in 2011, the strikes on Syria in 2017. In 2020 came the COVID-19 pandemic that turned the world upside down, and since then the war between Russia and Ukraine, the Israeli-Palestinian question, and the tensions surrounding the Middle East have continued.',
      '私たちが生きてきたこの35年余りは、世界の歴史が大きく変化した時代でした。1990年の湾岸戦争、1998年のイラク空爆、2003年のイラク戦争。そして2008年のリーマンショック、2009年のドバイショック、2011年の東日本大震災とリビア空爆、2017年のシリア空爆。さらに、2020年には世界を一変させた新型コロナウイルスのパンデミックが発生し、その後もロシア・ウクライナ戦争、イスラエル・パレスチナ問題、そして中東をめぐる緊張は続いています。'),

    t('Since 2006 I have been based in Dubai, in the Middle East — arguably the centre of that turbulence — and for twenty years I have watched the world change from the ground. Looking back, our path was never a level one. The coronavirus pandemic of 2020 in particular was fundamentally unlike any economic crisis we had faced before. When a setback comes from your own judgement or your own failure of management, you can analyse the cause, change the strategy, and rebuild through effort. But people the world over stopped moving at once, borders closed, no one could travel, and business activity itself came to a halt.',
      '私は、その激動の中心ともいえる中東・ドバイに2006年から拠点を置き、20年間、世界の変化を現地で見続けてきました。振り返れば、私たちの歩みは決して平坦なものではありませんでした。特に、2020年のコロナ・パンデミックは、それまで経験してきた経済危機とは本質的に異なるものでした。自らの判断や経営の失敗であれば、原因を分析し、戦略を変え、努力によって立て直すことができます。しかし、世界中の人々が同時に動きを止め、国境が閉ざされ、人が移動できず、企業活動そのものが停止する。'),

    t('This was a crisis of another order entirely, one that no amount of management effort could solve. Dubai went into lockdown, and in our hotel and lodging business the bookings we had built up were cancelled one after another. Restrictions on going out, on trading, on how many staff could come in. Money invested in a business that could not be recovered. Construction halted on property bought off-plan. Receivables that could not be collected because a client had gone under. Staff numbers falling, layoffs and repatriations forced on us. A struggle even to service the bank borrowing.',
      'これは、経営努力だけでは解決できない、まったく別次元の危機でした。ドバイではロックダウンが行われ、ホテル・民泊事業では、それまで積み上げてきた宿泊予約が次々とキャンセルとなりました。外出規制、営業規制、出社人数の制限。投資した事業から資金を回収できない。オフプランで投資した不動産の建設が止まる。取引先の倒産によって売掛金が回収できない。社員が減少し、解雇や帰国を余儀なくされる。銀行借入の返済にも苦しむ。'),

    t('Food and drink, tourism, hotels — the industries that stood on people moving were all struck hard at much the same moment. And at that time we believed in Dubai\u2019s future and were investing heavily towards EXPO 2020. Then EXPO 2020 itself was postponed by a year and economic activity worldwide stopped. “Get everyone together and let us push through this as one” — even that most ordinary act of management was beyond us. We could not gather people. There were no sales. The business stopped.',
      '飲食、観光、ホテル――人の移動によって成り立っていた産業は、ほぼ同時に大きな打撃を受けました。そして、私たちは当時、ドバイの未来を信じ、EXPO 2020に向けて大きな投資を行っていました。しかし、EXPO 2020そのものが1年間延期され、世界中の経済活動が停止。「社員を集めて、みんなで一気に頑張ろう」そんな当たり前の経営すらできない。人を集めることができない。売上が立たない。事業が止まる。'),

    t('In the end we had no choice but to abandon the plan we had been advancing towards a listing on NASDAQ Dubai. That experience was a great setback for me. Yet it was also the period in which I learned the most important thing there is to learn, as a manager and as an investor: that generating profit is not the whole of management. Building something that survives whatever crisis arrives — that is what management truly is.',
      '最終的には、NASDAQ Dubaiへの上場を目指して進めていた計画も断念せざるを得ませんでした。あの経験は、私にとって大きな挫折でした。しかし同時に、経営者として、そして投資家として、最も重要なことを学んだ時期でもありました。それは、「利益を生み出すこと」だけが経営ではない。「どのような危機が訪れても、生き残れる仕組みをつくること」こそが、本当の経営である。ということです。'),

    t('And so we move to the next stage. The world will keep changing. War, financial crisis, pandemic, inflation, currency swings, geopolitical risk — none of these can be avoided entirely. That is precisely why we believe we must not depend on a single country, a single business or a single asset, but take a global view and manage assets, businesses, people, information and networks as a whole. Our answer to that is what we are working towards: a family office that can compete anywhere in the world. Not merely an asset-preservation company. Real estate, finance, business investment, overseas investment, asset management, business succession, inheritance, next-generation education, a global network. We are bringing these together on one platform, to become an organisation to which company owners, high-net-worth families and their households can entrust their future with confidence over the long term. And we will take up again the NASDAQ listing we once had to abandon. The listing is not itself the goal. It is one waypoint — a way of proving to the world that this is a company that has accumulated this much history and experience, and that will deliver this much value to society.',
      'そして、私たちは次のステージへ進みます。世界はこれからも変わり続けます。戦争、金融危機、パンデミック、インフレーション、為替変動、地政学的リスク。これらを完全に避けることはできません。だからこそ、私たちは一つの国、一つの事業、一つの資産だけに依存するのではなく、世界を俯瞰しながら、資産・事業・人・情報・ネットワークを総合的にマネジメントする必要があると考えています。その答えとして、私たちが目指すのが、「世界で戦えるファミリーオフィス」です。単なる資産保全会社ではありません。不動産、金融、事業投資、海外投資、資産管理、事業承継、相続、次世代教育、グローバルネットワーク。これらを一つのプラットフォームに集約し、企業オーナーや富裕層、そしてそのご家族が、長期的に安心して未来を託すことのできる存在を目指します。そして私たちは、過去に一度断念したNASDAQ上場という目標にも、改めて挑戦します。ただし、上場そのものがゴールではありません。上場は、私たちが世界に対して、「この会社は、これだけの歴史と経験を積み重ね、これだけの価値を社会に提供していく会社である」と証明するための一つの通過点です。'),

    t('Thirty-five years of experience, carried into the next hundred. I have known a great many failures in my life. But there are things I understood only because I failed. Harder than building a large fortune is protecting it, growing it, and passing it correctly to the next generation. And a company of real worth, I believe, is not one in which a single manager succeeds, but one in which the philosophy and the values are handed on to the next generation after that manager is gone.',
      '35年間の経験を、次の100年へ。私は、これまでの人生で数多くの失敗を経験してきました。しかし、失敗したからこそ分かったことがあります。大きな資産を築くことよりも難しいのは、その資産を守り、育て、次の世代へ正しく引き継いでいくこと。そして、本当の意味で価値のある企業とは、一人の経営者が成功する会社ではなく、経営者がいなくなった後も、理念と価値が次の世代へ受け継がれていく会社なのだと思います。'),

    t('The experience, the failures, the successes, the relationships and the networks we have built across the world over these thirty-five years — we want to leave all of it for the next generation. From Dubai, the world\u2019s crossroads, we connect Asia, Japan and the world. Not only protecting assets, but turning assets into future value. Connecting company to company, person to person, country to country, and creating new business and new value. That is our mission from here. “Experience of past crises, turned into the power to create the future.” However much the world changes, we will not stand still. If anything, we believe it is within change that new opportunity lies. The challenge of Dubai, begun in 2006 from nothing but desert. A global financial crisis. The Dubai shock.',
      '私たちは、これまでの35年間で得た経験、失敗、成功、人脈、そして世界各国で築いてきたネットワークを、次の世代のために残していきたい。ドバイという世界の交差点から、アジア、日本、そして世界をつなぐ。資産を守るだけではなく、資産を未来の価値へ変えていく。企業と企業、人と人、国と国をつなぎ、新しいビジネスと新しい価値を創造する。それが、これからの私たちの使命です。「過去の危機を乗り越えた経験を、未来を創る力へ。」世界情勢がどれほど変化しても、私たちは立ち止まりません。むしろ、変化の中にこそ新しい機会があると考えています。2006年、何もない砂漠から始まったドバイの挑戦。世界的な金融危機。ドバイショック。'),

    t('And then the pandemic that nobody could have predicted. We have lived through every one of them. That is why, from here, we will use the experience of the past not for defence but as the power to create the future. Towards a family office recognised across the world. Towards a company the world trusts. And towards a group of companies we can hand to the next generation with pride.',
      'そして、誰も予測できなかったパンデミック。私たちは、その一つひとつを経験してきました。だからこそ、これからは過去の経験を「守り」に使うのではなく、「未来を創る力」に変えていきます。世界で認められるファミリーオフィスへ。世界から信頼されるカンパニーへ。そして、次世代へ誇りを持って引き継ぐことのできる企業グループへ。'),

    t('We begin our challenge to the world market once again. With the NASDAQ listing beyond it held up as one great objective, we will keep walking — through the next ten years, the next twenty, and the future beyond them — and we will keep taking on the challenge.',
      '私たちは、再び世界市場への挑戦を始めます。その先にあるNASDAQ上場を一つの大きな目標として掲げ、これからの10年、20年、そしてその先の未来へ向けて、歩みを止めることなく挑戦してまいります。'),

    t('Thirty-five years of experience, as the foundation of the next hundred. Together with all of you, we hope to create a new era.',
      '過去35年の経験を、次の100年の礎へ。皆様とともに、新しい時代を創っていきたいと考えております。'),
  ];

  return (
    <section className="blk chair" id="chairman">
      <div className="wrap">
        <div className="chair-card">
          <div className="chair-head">
            <h2 className="chair-title">{t('Living through an era of upheaval. And creating the era that follows.',
                                             '激動の時代を、生き抜く。そして、次の時代を創る。')}</h2>
            <div className="chair-ey">{t('＜Message from the Chairman＞', '＜会長挨拶＞')}</div>
          </div>
          <div className="chair-grid">
            <div className="chair-body">
              {paras.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <figure className="chair-photo">
              <img src={imgUrl('/img/chairman.jpg')} alt={t('Tomoyuki Kawana, Chairman', '代表取締役会長（Chairman）川名 智之')} loading="lazy" />
              <figcaption>
                <span>{t('Chairman', '代表取締役会長（Chairman）')}</span>
                <b>{t('Tomoyuki Kawana', '川名 智之')}</b>
              </figcaption>
              {/* Lifted off the sheet and keyed to transparency — the sheet asks
                  for the pale blue block behind it to go. */}
              <img className="chair-sign" src={imgUrl('/img/chairman-signature.png')} alt="" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export function License() {
  const { t } = useLang();
  const rows = [
    ['Business activity', '事業内容', t('Management Consultancies', '経営コンサルティング')],
    ['Registration no.', '登録番号', '937'],
    ['Legal form', '法的形態', 'DWC-LLC'],
    ['License valid until', 'ライセンス有効期限', t('25 March 2027', '2027年3月25日')],
    // 09.17 sheet: added between the licence expiry and the representative.
    ['Capital', '資本金', '800,000 USD'],
    ['Representative', '代表者', t('Hamit Gurbuz', 'ハミット・ギュルビュズ（Hamit Gurbuz）')],
  ];
  return (
    <section className="blk" id="license">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('A Licensed Dubai Entity', 'ライセンスを持つドバイ法人')}</div>
          <h2 className="sec">Japan Worldlink DWC-LLC</h2>
        </div>
        <div className="lic-intro">
          <p className="lead">{t(
            'The Family Office hub is a formally licensed company in Dubai — not an introduction desk. Your structure is built on a regulated foundation.',
            'ファミリーオフィスの中核は、ドバイで正式にライセンスを受けた本陣です。単なる紹介窓口ではなく、規制された基盤の上にストラクチャーを構築します。',
          )}</p>
          {/* Copy sits top-left with the two seminar shots beneath it, while the
              representative's photo runs full height down the right (2026.08.04).
              No explanatory captions — only he is named, on his own photo. */}
          <img className="lic-shot" src={imgUrl('/img/seminar-hall.jpg')} alt="" loading="lazy" />
          <img className="lic-shot" src={imgUrl('/img/seminar-speaker.jpg')} alt="" loading="lazy" />
          <figure className="lic-shot-lead">
            <img src={imgUrl('/img/symposium.jpg')} alt={t('Hamit Gurbuz, President & CEO', '代表取締役社長（CEO）　ハミット・ギュルビュズ')} loading="lazy" />
            <figcaption>{t('Hamit Gurbuz, President & CEO', '代表取締役社長（CEO）　ハミット・ギュルビュズ')}</figcaption>
          </figure>
        </div>
        <div className="lic">
          <div className="main2">
            <div className="co">Japan Worldlink DWC-LLC</div>
            <div className="sub2">Dubai Aviation City Corporation — {t('Licensed Entity', '公認ライセンス法人')}</div>
            {rows.map(([en, ja, v]) => (
              <div className="rowli" key={en}>
                <span className="k2">{t(en, ja)} <small>{t(ja, en)}</small></span>
                <span className="v2">{v}</span>
              </div>
            ))}
            {/* Registered address, as supplied by the client 2026.08.07. */}
            <div className="lic-addr">
              <span className="k2">{t('Registered address', '所在地')} <small>{t('所在地', 'Registered address')}</small></span>
              <address>
                DWC Business Center, Level -3, Building - A3,<br />
                Dubai South Business Park, P.O. Box 390667 Dubai, U.A.E.
              </address>
            </div>
          </div>
          <aside>
            <div className="seal">DACC<br />LICENSE</div>
            <h4>{t('Official license — Dubai Aviation City Corporation', 'ドバイ航空都市公社 発行の公式ライセンス')}</h4>
            <p>{t('Dubai Aviation City — Business Center, Building A3, Floor 3 · P.O. Box 282807',
                  'ドバイ航空都市 ビジネスセンター Building A3, Floor 3 · P.O. Box 282807')}</p>
            <span className="ok"><i />{t('License active — issued March 2013, valid to March 2027',
                                          'ライセンス有効中 — 2013年3月発行 → 2027年3月まで有効')}</span>
          </aside>
        </div>
      </div>
    </section>
  );
}

/** 豊かな次世代を創造するために — sits between the company information plate
 *  and the group-company explanation (2026.08.11). */
export function NextGeneration() {
  const { t } = useLang();
  const paras = [
    [
      'The global economy is transforming at a speed and scale it has never seen before. Much of the innovation rewriting the world from its foundations — AI, biotechnology, sustainable energy — comes from bold companies that work across borders.',
      '現代のグローバル経済は、これまでにないスピードと規模で変革を続けています。AI、バイオテクノロジー、持続可能なエネルギーなど、世界を根本から書き換えるイノベーションの多くは、国境を越えた挑戦的な企業から生まれています。',
    ],
    [
      'Our family office is not merely an organization that preserves and manages assets. We seek out the founders who hold a next-generation vision for humanity’s future, support that ambition with the force of long-term capital, and take pride in being true comrades who open the future alongside them.',
      '私たちファミリーオフィスは、単なる資産の保全・運用を行う組織ではありません。人類の未来を形作る次世代のビジョンを持った経営者たちを見出し、その志を長期的な資本の力で支え、共に未来を切り拓く「真の同志」であると自負しています。',
    ],
    [
      'Today, many of the portfolio companies we are deeply involved with are advancing toward a monumental milestone: listing on NASDAQ, the world’s foremost innovation market.',
      'いま、私たちが深く関与し、伴走しているポートフォリオ企業の多くが、世界最高峰のイノベーション市場である「米国ナスダック（NASDAQ）」への上場という壮大なマイルストーンに向かって歩みを進めています。',
    ],
    [
      'A NASDAQ listing is the winning of global trust, and a powerful engine for connecting the world’s wisdom with its capital. We support that steep but glorious road with deep experience, a global network, and above all an unshakeable long-term perspective.',
      'ナスダックへの上場は、グローバルな信頼の獲得であり、世界中の英知と資本を結びつけるための強力なエンジンです。その険しくも栄光に満ちた道のりを、私たちは豊富な経験とグローバルネットワーク、そして何より揺るぎない長期的な視点をもって支え抜きます。',
    ],
    [
      'What we aim for does not stop at economic return. On the greatest stage of all — the world market — we support the birth of companies that leave a lasting impact on society, and carry abundant value through to future generations. That is our mission.',
      '私たちが目指すのは、単なる経済的なリターンにとどまりません。世界市場という最大の舞台で、社会に永続的なインパクトを残す企業の誕生を支援し、未来の世代へ豊かな価値をつなぐこと――それが私たちの使命です。',
    ],
    [
      'Together with entrepreneurs who carry an overwhelming will to change the world, and with every stakeholder who shares that resolve, we are genuinely proud to be able to open the door on a new chapter of history.',
      '世界を変える圧倒的な熱量を持つ起業家、そして志を共にするすべてのステークホルダーの皆様と共に、新たな歴史の扉を開くことができることを、心より誇りに思います。',
    ],
  ];
  return (
    <section className="blk nextgen" id="next-generation">
      <div className="wrap">
        <div className="nextgen-card">
          <h2 className="sec">{t('Creating an abundant next generation', '豊かな次世代を創造するために')}</h2>
          <p className="nextgen-lead">{t(
            'Creating the abundance of the next generation, together with partners who take on the world market',
            '次世代の豊かさを創造し、世界市場へと挑むパートナーと共に',
          )}</p>
          <div className="nextgen-body">
            {paras.map(([en, ja], i) => <p key={i}>{t(en, ja)}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GenerationalWealth() {
  const { t } = useLang();
  const pts = [
    ['Preserve', '守る', 'Shield assets from erosion across the transfer.', '移転の過程で資産が目減りしないよう保全します。'],
    ['Prepare', '備える', 'Ready the next generation through education and residency.', '教育と居住設計を通じて、次世代を育てます。'],
    ['Pass on', '引き継ぐ', 'Legally reduce overseas inheritance tax toward zero over ten years.', '10年をかけて、海外資産の相続税を合法的にゼロへ近づけます。'],
  ];
  return (
    <section className="feature">
      <div className="wrap">
        <div className="ph" style={{ backgroundImage: `url(${imgUrl('/img/generations.jpg')})` }}>
          <div className="tag2">{t('Three generations · one plan', '三世代 · ひとつの設計')}</div>
        </div>
        <div>
          <div className="ey">{t('Generational Wealth', '世代を超える資産')}</div>
          <h2 className="sec brk">{t('Wealth that outlives the people who built it', '築いた人より\n長く生きる資産を')}</h2>
          <p className="lead">{t(
            "In Japan, up to 55% of a family's wealth can be lost to inheritance tax in a single generation. We build the structures that let you pass it on — intact — to the children and grandchildren who come after.",
            '日本では、相続税により一世代で一族の資産の最大55%が失われることがあります。私たちは、その資産を目減りさせることなく、子へ、孫へと引き継ぐためのストラクチャーを構築します。',
          )}</p>
          <ul className="pts">
            {pts.map(([en, ja, dEn, dJa]) => (
              <li key={en}>
                <svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" /></svg>
                <div><b>{t(en, ja)}</b><span>{t(dEn, dJa)}</span></div>
              </li>
            ))}
          </ul>
          <a href="#approach" className="btn btn-primary">{t('See how it works →', '仕組みを見る →')}</a>
        </div>
      </div>
    </section>
  );
}

export function WhoWeServe() {
  const { t } = useLang();
  return (
    <section className="blk" id="clients" style={{ background: 'linear-gradient(180deg, #efedE8, #f9f8f5)' }}>
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('Who We Serve', '顧客層')}</div>
          <h2 className="sec">{t('Family wealth, beyond generations', '一族の資産を、世代を超えて')}</h2>
          <p className="lead center brk">{t(
            'Cross-border wealth preservation anchored in both Japan and Dubai — comprehensive structuring only JWD can deliver.',
            '日本とドバイ、二つの拠点を活かしたクロスボーダーの資産保全\nJWDだけが提供できる一族のための包括設計です。',
          )}</p>
        </div>
        <div className="serve">
          <div className="who">
            <div className="ph" style={{ backgroundImage: `url(${imgUrl('/img/couple-bright.jpg')})` }}>
              <span className="lab">{t('Affluent families', '富裕層ファミリー')}</span>
            </div>
            <div className="bd">
              <h3>{t('Affluent families', '富裕層ファミリー')}</h3>
              <p>{t(
                "Japan's aging affluent, facing the ¥1,400 trillion generational transfer — and up to 55% inheritance tax on what they pass down.",
                '¥1,400兆円の世代間移転期を迎える日本の富裕層。引き継ぐ資産には最高55%の相続税が課されます。',
              )}</p>
            </div>
          </div>
          <div className="who">
            <div className="ph" style={{ backgroundImage: `url(${imgUrl('/img/business-owner.jpg')})` }}>
              <span className="lab">{t('Business owners', 'オーナー経営者')}</span>
            </div>
            <div className="bd">
              <h3>{t('SME business owners', '中小企業オーナー')}</h3>
              <p>{t(
                'A ¥9 trillion blue ocean of corporate surplus capital — deployable even when personal financial assets sit below ¥100 million.',
                '約9兆円の法人余剰資本というブルーオーシャン。個人金融資産が1億円未満でも活用できます。',
              )}</p>
            </div>
          </div>
        </div>
        <div className="chips">
          {[['Asset Protection', '資産保護'], ['Succession Planning', '事業承継'], ['Tax Planning', 'タックスプランニング'],
            ['Family Office Setup', 'ファミリーオフィス設立'], ['Multi-Country Structures', '多国間資産ストラクチャー']]
            .map(([en, ja]) => <span key={en}>{t(en, ja)}</span>)}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ['M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18', 'Global Asset Management', 'グローバル資産運用',
   'Discretionary investment management across global markets.', 'グローバル市場を横断した一任運用。', true],
  ['M12 3l7 4v5c0 5-3 7-7 9-4-2-7-4-7-9V7z', 'Trust & Estate Planning', '信託・資産承継設計',
   'Trust structures and estate planning for wealth protection.', '資産保全のための信託ストラクチャーと承継設計。'],
  ['M12 3v18M6 8h12M5 8l-2 6a4 4 0 008 0zM21 14l-2-6M16 8l-2 6a4 4 0 008 0', 'Tax & Legal Advisory', '税務・法務アドバイザリー',
   'International tax planning and legal structuring.', '国際税務プランニングと法的ストラクチャリング。'],
  ['M2 12l20-8-8 20-2-8z', 'Relocation & Residency', '移住・居住サポート',
   'Residency, visa and relocation support for global mobility.', 'ビザ・居住権取得と移住支援によるグローバル・モビリティ。'],
  ['M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6', 'Family Governance & Succession', 'ファミリーガバナンス・承継',
   'Family constitution, governance and succession planning.', '家憲・ガバナンス体制の構築と承継計画。'],
  ['M12 3l2.5 6H21l-5 4 2 7-6-4-6 4 2-7-5-4h6.5z', 'Lifestyle & Concierge', 'ライフスタイル・コンシェルジュ',
   'Premium lifestyle, concierge and family-office support.', 'プレミアムなライフスタイルとコンシェルジュ支援。'],
];

export function Services() {
  const { t } = useLang();
  return (
    <section className="blk" id="services">
      <div className="wrap">
        <div className="head">
          <div className="ey">{t('Family Office as a Service', 'ファミリーオフィス・アズ・ア・サービス')}</div>
          <h2 className="sec brk">{t('One integrated platform for the whole family balance sheet', '一族のすべてを\nひとつの統合プラットフォームで')}</h2>
          <p className="lead">{t(
            'International tax planning, global asset management, relocation and succession — coordinated as a single whole.',
            '国際税務、グローバル資産運用、移住、事業承継——そのすべてをひとつに統合してご提供します。',
          )}</p>
        </div>
        <div className="grid g3">
          {/* Each service is a way in to the consultation, so the whole card is
              the link rather than a "contact us" line inside it. The global
              smooth-scroll picks these up like any other in-page anchor. */}
          {SERVICES.map(([d, en, ja, dEn, dJa, circle]) => (
            <a className="card" href="#contact" key={en}
               aria-label={t(`${en} — book a consultation`, `${ja} — 無料相談を予約`)}>
              <div className="ic"><svg viewBox="0 0 24 24">{circle && <circle cx="12" cy="12" r="9" />}<path d={d} /></svg></div>
              <h3>{t(en, ja)}</h3>
              <p>{t(dEn, dJa)}</p>
              <span className="card-go" aria-hidden="true">{t('Book a consultation →', '無料相談を予約 →')}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['M4 6h11a3 3 0 013 3v9a3 3 0 00-3-3H4zM20 6h-1a3 3 0 00-3 3v9', 'Education', '学ぶ', 'Market insight, tax education, case studies.', '市場の知見、税務の学び、事例のご共有。'],
  ['M4 5h16v11H8l-4 4z', 'Consultation', '相談', 'Understand needs, design the optimal structure.', 'ご要望を理解し、最適なストラクチャーを設計。'],
  ['M3 12h18M12 3a15 15 0 010 18', 'Experience', '体験', 'Visit Dubai, experience the ecosystem.', 'ドバイを訪れ、エコシステムを体感。', true],
  ['M4 19V5M4 19h16M8 15l3-4 3 2 5-7', 'Investment', '投資', 'Implement strategy and wealth planning.', '投資戦略と資産設計を実行。'],
  ['M2 12l20-8-8 20-2-8z', 'Relocation', '移住', 'Global relocation and long-term residency.', 'グローバル移住と長期居住をサポート。'],
];

export function Journey() {
  const { t } = useLang();
  return (
    <section className="blk tint" id="approach">
      <div className="wrap">
        <div className="head center">
          <div className="ey">{t('The Client Journey', 'クライアント・ジャーニー')}</div>
          <h2 className="sec">{t('Five stages to global wealth management', '5つのステップで、グローバルな資産管理へ')}</h2>
        </div>
        <div className="steps">
          {STEPS.map(([d, en, ja, dEn, dJa, circle], i) => (
            <div className="step" key={en}>
              <div className="num"><b>{i + 1}</b><svg viewBox="0 0 24 24">{circle && <circle cx="12" cy="12" r="9" />}<path d={d} /></svg></div>
              <h4>{t(en, ja)}</h4>
              <p>{t(dEn, dJa)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
