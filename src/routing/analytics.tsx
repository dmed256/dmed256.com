type TrackPage = (
  ({ pathname, search, hash }: any) => void
)

let trackPage: TrackPage = () => {};

if (process.env.NODE_ENV === 'production') {
  const GoogleAnalytics = require('react-ga');
  GoogleAnalytics.initialize('UA-126720450-2');

  trackPage = ({ pathname, search, hash }: any) => {
    const page = pathname + search + hash;
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };
}

export {
  trackPage,
};
