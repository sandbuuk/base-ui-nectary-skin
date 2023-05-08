const { host, pathname } = window.location;

(window as any).appurl = (host + pathname).replace(/\/$/, '')

import(/* webpackChunkName: "bootstrap" */'./bootstrap')
