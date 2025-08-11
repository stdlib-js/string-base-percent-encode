// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-utf16-to-utf8-array@v0.2.2-esm/index.mjs";function r(r){var e,n,s,o,a;for(s=(o=t(r)).length,n="",a=0;a<s;a++)n+=(e=o[a])>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||45===e||46===e||95===e||126===e?r.charAt(a):"%"+e.toString(16).toUpperCase();return n}export{r as default};
//# sourceMappingURL=index.mjs.map
