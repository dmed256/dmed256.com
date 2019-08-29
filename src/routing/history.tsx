import { createBrowserHistory } from 'history';

import { trackPage } from './analytics';

const history = createBrowserHistory();

trackPage(window.location);
history.listen(trackPage);

export default history;
