/* ─────────────────────────────────────────────────────────────────────────
   海外銀行口座開設 — diagrams shown on each page
   ---------------------------------------------------------------------
   Edit this file directly on the server; nothing needs rebuilding.

   1. Upload the diagram image into the  img/banks/  folder.
   2. Add its file name, in quotes, to the page's list below. Several images
      show one under another, in the order listed.
        'uae-nonresident': ['uae-status-1.png', 'uae-status-2.png'],
   3. Reload the page (Cmd+Shift+R on a Mac, Ctrl+F5 on Windows).

   To make an image a link, write it as
        { src: 'banner.jpg', href: 'https://…' }
   An empty list [] shows "このページの図解は現在準備中です。"
   ───────────────────────────────────────────────────────────────────────── */
window.__BANK_PAGES__ = {

  /* アラブ首長国連邦 */
  // UAE非居住者口座の現状と弊社ご案内 — ① then ② (10.07, from Ohkubo-san)
  'uae-nonresident': [
    { src: 'uae-nonresident-1.webp', alt: 'UAE非居住者口座の現実と弊社の特別ルート' },
    { src: 'uae-nonresident-2.webp', alt: 'Emirates NBD 非居住者口座開設のご案内' },
  ],
  'uae-accounts': [],      // 各種銀行口座開設

  /* ラオス */
  'jdb': [],               // JDB銀行（SAKURA PAY）

  // └ JDB銀行口座開設のメリット (10.07)
  'jdb-merits': [
    { src: 'jdb-merits-1.jpg', alt: 'JDB銀行口座開設のメリット' },
  ],

  // └ SAKURA PAYについて (10.07)
  'sakura-pay': [
    { src: 'sakura-pay-1.jpg', alt: 'JDB銀行 × SAKURAPAY 日本とアジアをつなぐ新しい決済サービス' },
  ],

  // └ 口座開設方法 (10.07). An entry with  href  makes the whole image a link
  //   (opens in a new tab) — here, the SAKURA PAY registration page.
  'jdb-open': [
    { src: 'jdb-open-1.jpg', alt: 'JDB銀行×SAKURA PAY 口座開設方法' },
    { src: 'jdb-open-register.jpg',
      alt: 'JDB銀行（SAKURA PAY）会員登録・口座開設 — 下記のURLからお申し込みください',
      href: 'https://secure.sakura-pay.com/account/register2/ada8em6n' },
  ],

};
