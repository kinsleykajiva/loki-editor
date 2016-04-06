As described in [issue 28](http://code.google.com/p/loki-editor/issues/detail?id=28), using our current (2.1) implementation, we are not able to trap the accelerator key combinations to trigger our editing functions under all browsers. This document details the support.

## Legend ##
  * **Working** – The implementation that we have currently works just fine.
  * **Non-working** – The implementation doesn't work, but it is unknown whether or not it can be made to work.
  * **Impossible** – Research has been done, but it appears that this is an impossible task on the platform.
  * **Unknown** – It is not known whether or not this works yet.
  * **_N/A_** – The browser/OS combination does not actually exist.

## Status ##

| | **Internet Explorer 7** | **Firefox 2** | **Camino 1.5** | **Safari 3.0.4** | **WebKit 525**<sup>1</sup> | **Opera 9.5** |
|:|:------------------------|:--------------|:---------------|:-----------------|:---------------------------|:--------------|
| **Windows** | Working                 | Working       | _N/A_          | Non-working      | Unknown                    | Working       |
| **Mac OS X** | _N/A_                   | Impossible<sup>2</sup> | Impossible<sup>2</sup> | Working          | Working                    | Non-working   |

## Notes ##
  1. WebKit 525 refers to the [latest nightly builds of Safari 3](http://nightly.webkit.org) at the time of this writing (2007-12-23). It includes some changes to keyboard event behavior over WebKit 523.x (Safari 3), and thus is worth listing separately.
  1. While might be possible with a bit of trickery to detect these key combinations, it seems that it is impossible to prevent their default behavior from happening.