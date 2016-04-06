Loki includes many different editing options that can be enabled or disabled at will. The desired options are given as the `options` [setting](Settings.md).

Two default sets of options are included in Loki: `default`, a slightly-limited set of features that are suitable for most users; and `power`, a larger set of features suitable for power users. Individual options can be added and subtracted from these sets by appending their identifiers to the end, prefixed with a `+` or a `-` as desired.

For instructions on how to give this option string to Loki, see [the main installation article](Installation.md).

### Examples ###
| **Selector** | **Description** |
|:-------------|:----------------|
| `"default"`  | Includes all the items in the default set. |
| `"default + underline"` | Includes all the items in the default set, plus underlining. |
| `"power - anchors - tables"` | Includes all the items in the power user set except for anchors and tables. |
| `"power - blockquotes + underline - source"` | Includes all the items in the power user set except for blockquotes and source code editing, and adds in underlining. |

All of the individual Loki options are listed below.

### Option Reference ###
| **Identifier** | **Description** | **In `default`?** | **In `power`?** |
|:---------------|:----------------|:------------------|:----------------|
| `bold`         | Allows the user to make text bold. | Yes               | Yes             |
| `italic`       | Allows the user to italicize text. | Yes               | Yes             |
| `headings`     | Allows the user to insert headings. | Yes               | Yes             |
| `images`       | Allows the user to add images. | Yes               | Yes             |
| `links`        | Allows the user to insert links. | Yes               | Yes             |
| `clipboard`    | Allows the user to cut, copy, and paste.<sup>1</sup> | Yes               | Yes             |
| `align`        | Allows the user to align paragraphs and blocks. | Yes               | Yes             |
| `blockquotes`  | Allows the user to use block quotations. | Yes               | Yes             |
| `lists`        | Allows the user to use bulleted and numbered lists. | Yes               | Yes             |
| `find`         | Allows the user to run find-and-replace. | Yes               | Yes             |
| `cleanup`      | Allows the user to run a HTML cleanup at will. | Yes               | Yes             |
| `highlight`    | Allows the user to highlight blocks of text. | No                | Yes             |
| `pre`          | Allows the user to edit blocks of pre-formatted text. | No                | Yes             |
| `tables`       | Allows the user to insert and edit tables. | No                | Yes             |
| `anchors`      | Allows the user to insert named anchors. | No                | Yes             |
| `source`       | Allows the user to directly edit the document HTML source. | No                | Yes             |
| `underline`    | Allows the user to underline text. _Not recommended._ | No                | No              |

  1. The user will be able to do this directly using the browser, but turning on the `clipboard` option adds cut, copy, and paste toolbar buttons and contextual (right-click) menu items.