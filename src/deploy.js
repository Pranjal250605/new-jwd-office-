/**
 * Where this build gets its heavy assets and its API from.
 *
 * Two builds come out of this repo:
 *
 *   · the Vercel site — everything is same-origin, both values are empty, and
 *     nothing about the app changes;
 *   · the static export for the client's WordPress host (`npm run build:static`)
 *     — the 187 MB of video and the advisor's serverless function cannot live
 *     on that host, so both are fetched from the Vercel origin instead.
 *
 * Set at build time from VITE_REMOTE_ORIGIN, so the origin is never guessed at
 * runtime and the Vercel build is byte-identical to what it was before.
 */
const ORIGIN = (import.meta.env.VITE_REMOTE_ORIGIN ?? '').replace(/\/$/, '');

/** Absolute URL for an asset that stays on Vercel (videos). */
export const remoteAsset = (path) => `${ORIGIN}${path}`;

/** Absolute URL for the advisor endpoint. */
export const apiUrl = (path) => `${ORIGIN}${path}`;

/** True when this bundle is the detached static export. */
export const IS_STATIC_EXPORT = ORIGIN !== '';

/**
 * URL for a file in public/img.
 *
 * These are referenced as string literals in JSX and inline styles, which
 * Vite does not rewrite the way it rewrites imported assets — so an absolute
 * "/img/x.jpg" 404s the moment the site is served from a subfolder. Going
 * through BASE_URL keeps them correct at a domain root, in a subfolder, and
 * on Vercel alike.
 */
export const imgUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
