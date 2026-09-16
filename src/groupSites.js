/**
 * The three sibling group sites.
 *
 * The 09.16 Investment sheet wires every group reference on this page — the
 * utility bar, the hero「グループサイト」pills and the ひとつのハブと、3つの専門会社
 * cards — to these URLs, so they live in one place rather than three.
 *
 * `investment` is deliberately NOT the URL the sheet gives. The sheet asks for
 * https://jwd-investment.com/, but that host is down — it does not resolve at
 * all — so linking it would ship four dead links. It points at the Investment
 * site's own Vercel deployment instead, which serves the same site. Swap this
 * one line back once jwd-investment.com resolves again.
 *
 * Note the ANAWAK host too: the sheet moves it from jwd-anawak.com to
 * anawak.com.
 */
export const GROUP = {
  // was, per the 09.16 sheet: 'https://jwd-investment.com/'
  investment: 'https://jwd-insurance.vercel.app/',
  anawak: 'https://anawak.com/',
  luna: 'https://www.dubai-trip.ae/',
};
