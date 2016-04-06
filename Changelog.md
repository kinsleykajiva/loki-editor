## Loki 2.1.0a1 _(Not yet released)_ ##
  * Support for WebKit-based browsers like Safari and Chrome ([#1](http://code.google.com/p/loki-editor/issues/detail?id=1))
  * Extensible component architecture ([#192](http://code.google.com/p/loki-editor/issues/detail?id=192))
  * More modern appearance ([#193](http://code.google.com/p/loki-editor/issues/detail?id=193))
  * Loki no longer conflicts with Prototype ([#194](http://code.google.com/p/loki-editor/issues/detail?id=194))

## Loki 2.0.4 _(January 12, 2010)_ ##
  * Improved compatibility with Internet Explorer 8
  * Fixes and improvements to the indenting HTML generator

## Loki 2.0.3 _(April 9, 2009)_ ##
  * Loki no longer fails to open documents that have empty tables. ([#176](http://code.google.com/p/loki-editor/issues/detail?id=176))
  * Loki can now create documents with `<pre>` tags when using its indenting HTML generator. ([#172](http://code.google.com/p/loki-editor/issues/detail?id=172))
  * `div` elements with no classes are no longer wantonly stripped ([#174](http://code.google.com/p/loki-editor/issues/detail?id=174))
  * Loki will now clean up `<br />` tags at the end of list items and table cells, as well as paragraphs, etc. ([#173](http://code.google.com/p/loki-editor/issues/detail?id=173))
  * Deleting the placeholder for a named anchor will now delete the anchor itself. ([#152](http://code.google.com/p/loki-editor/issues/detail?id=152))
  * Improved the experience of deleting an anchor using Delete or Backspace. ([#183](http://code.google.com/p/loki-editor/issues/detail?id=183))
  * Loki now avoids the non-breaking space characters that are used to hold open empty paragraphs. ([#177](http://code.google.com/p/loki-editor/issues/detail?id=177))
  * Loki will warn the user when creating an empty link (e.g., `http://`). ([#178](http://code.google.com/p/loki-editor/issues/detail?id=178))
  * Vastly improved the presentation of the warnings for potentially invalid links. ([#184](http://code.google.com/p/loki-editor/issues/detail?id=184))
  * The shortcut key for underlining text has been fixed. ([#179](http://code.google.com/p/loki-editor/issues/detail?id=179))
  * Improved the check to make sure the user is not indenting the first item in a list. ([#182](http://code.google.com/p/loki-editor/issues/detail?id=182))

## Loki 2.0.2 _(December 30, 2008)_ ##
  * Loki no longer mangles links to email addresses in documents. ([#164](http://code.google.com/p/loki-editor/issues/detail?id=164))
  * An error prevented Loki from adding images that were not secured with HTTPS when they were not added from the CMS-integrated list. ([#163](http://code.google.com/p/loki-editor/issues/detail?id=163))
  * A bug was introduced in 2.0.1 that stripped the protocol off of links and image sources, even if their locations were on different domains than the editor. ([#166](http://code.google.com/p/loki-editor/issues/detail?id=166))
  * Creating a link across multiple blocks now works properly. ([#140](http://code.google.com/p/loki-editor/issues/detail?id=140))
  * Loki's optional indenting HTML generator did not escape quote (`"`) characters in attribute values. ([#160](http://code.google.com/p/loki-editor/issues/detail?id=160))
  * Loki now accepts any inline CSS rules that _begin with_ an entry in the `acceptable_inline_styles` setting. This means that, for example, allowing `border` will now also allow `border-width`, `border-color`, etc.  ([#168](http://code.google.com/p/loki-editor/issues/detail?id=168))
  * Custom link titles were being overwritten when the link was edited and it was found via CMS integration with the CMS-provided title. ([#159](http://code.google.com/p/loki-editor/issues/detail?id=159))
  * Loki's HTML generator now always preserves the original source ordering of element attributes. ([#161](http://code.google.com/p/loki-editor/issues/detail?id=161))
  * The behavior of comment stripping was fixed: comments were previously stripped if "!" _was_ an allowable tag.  ([#167](http://code.google.com/p/loki-editor/issues/detail?id=167))
  * Loki now permits `list-style` and friends in inline styles by default.  ([#169](http://code.google.com/p/loki-editor/issues/detail?id=169))
  * Loki now removes empty Microsoft Word-generated paragraphs, even if they contain newline characters.  ([#170](http://code.google.com/p/loki-editor/issues/detail?id=170))
  * Microsoft Word section classes are now removed even if the `div` element to which they are applied is not. ([#171](http://code.google.com/p/loki-editor/issues/detail?id=171))
  * Clipboard toolbar support for Gecko browsers is now totally neutered; it hasn't worked since Firefox 3 anyway. ([#91](http://code.google.com/p/loki-editor/issues/detail?id=91))
  * CMS integration: Loki now supports a "selector\_text" attribute on linkable items. If present, the text in this element will be used to represent the item in the dropdown box instead of its title. This allows, for example, hierarchical views of content to be presented. ([#158](http://code.google.com/p/loki-editor/issues/detail?id=158))

## Loki 2.0.1 _(December 2, 2008)_ ##
  * Loki can now send [crash reports](CrashReports.md) to a server-side script. ([#156](http://code.google.com/p/loki-editor/issues/detail?id=156))
  * When CMS integration is in use, links to items not found by the finder feed no longer lose their titles when edited. ([#151](http://code.google.com/p/loki-editor/issues/detail?id=151))
  * Characters with special meaning in HTML are now properly encoded by Loki's HTML generator. ([#153](http://code.google.com/p/loki-editor/issues/detail?id=153))
  * Links to anchors on the same page are now left in a fully-relative form. ([#154](http://code.google.com/p/loki-editor/issues/detail?id=154))
  * Fixed an issue where pressing Backspace at the beginning of a paragraph could cause that paragraph to be effectively deleted. ([#155](http://code.google.com/p/loki-editor/issues/detail?id=155))
  * When editing a named anchor, the `id` attribute is now also updated if it is present. ([#149](http://code.google.com/p/loki-editor/issues/detail?id=149))
  * Loki now prevents Gecko browsers from making links relative to the editor's domain. ([#148](http://code.google.com/p/loki-editor/issues/detail?id=148))

## Loki 2.0 Release Candidate 9 _(October 14, 2008)_ ##
  * Comments will now no longer be stripped from Loki documents if "!" is added to the list of allowable tags. ([#143](http://code.google.com/p/loki-editor/issues/detail?id=143))
  * Trying to access the clipboard using the shortcut keys on Windows Gecko-based browsers no longer producing a misleading error message. ([#130](http://code.google.com/p/loki-editor/issues/detail?id=130))
  * Block-level tags will no longer be converted to paragraphs if the entire document is selected. ([#137](http://code.google.com/p/loki-editor/issues/detail?id=137))
  * Worked around a Gecko bug/quirk that caused the optional indenting HTML generator to die when given a document containing an `object` tag. ([#144](http://code.google.com/p/loki-editor/issues/detail?id=144))
  * Fixed a long-standing bug under IE in some internal code that deals with element attributes. ([#146](http://code.google.com/p/loki-editor/issues/detail?id=146))
  * The optional HTML generator no longer mangles named HTML entities. ([#139](http://code.google.com/p/loki-editor/issues/detail?id=139))
  * The link dialog now correctly loads links from RSS in the background, even if an external link is being edited. ([#141](http://code.google.com/p/loki-editor/issues/detail?id=141))
  * Fixed a bug that prevented Loki from parsing URL's that contained port numbers. ([#142](http://code.google.com/p/loki-editor/issues/detail?id=142))

## Loki 2.0 Release Candidate 8 _(September 3, 2008)_ ##
  * Loki now has the (experimental) ability to indent and prettify its HTML output. This is off by default, and is controlled by a new `html_generator` [setting](Settings.md). ([#41](http://code.google.com/p/loki-editor/issues/detail?id=41))
  * Fixed some weird scrolling behavior under Mozilla. ([#125](http://code.google.com/p/loki-editor/issues/detail?id=125))
  * Fixed a regression in clipboard support when the PHP helper is used. ([#136](http://code.google.com/p/loki-editor/issues/detail?id=136))

## Loki 2.0 Release Candidate 7 _(August 26, 2008)_ ##
  * Fixed a bug in the code that parses the `options` setting string. ([#134](http://code.google.com/p/loki-editor/issues/detail?id=134))
  * Fixed a race condition where clipboard support could break. ([#135](http://code.google.com/p/loki-editor/issues/detail?id=135))
  * Fixed the creation of extraneous paragraphs when pasting content into Internet Explorer. ([#126](http://code.google.com/p/loki-editor/issues/detail?id=126))

## Loki 2.0 Release Candidate 6 _(July 18, 2008)_ ##
  * A serious bug in an internal range function was causing image insertion to fail if there were more than one image after the insertion point and editing to fail if there were any images after the targeted one. ([#113](http://code.google.com/p/loki-editor/issues/detail?id=113))
  * Named anchors that had content inside the A tag or other attributes (like href) were having them destroyed. ([#106](http://code.google.com/p/loki-editor/issues/detail?id=106))
  * Fixed a bug that prevented images from being inserted into empty paragraphs under Internet Explorer. ([#112](http://code.google.com/p/loki-editor/issues/detail?id=112))
  * Fixed automatic cleanup-on-paste under Firefox 3 and Internet Explorer. ([#115](http://code.google.com/p/loki-editor/issues/detail?id=115))
  * Changed paragraph alignment to use CSS; previously it used the deprecated align attribute. ([#114](http://code.google.com/p/loki-editor/issues/detail?id=114))
  * Loki now accepts a whitelist of acceptable inline styles; only styles not on that whitelist will be stripped. A small default list is built-in. ([#108](http://code.google.com/p/loki-editor/issues/detail?id=108))
  * Changes to the options system in 2.0rc5 accidentally disabled the horizontal rule masseuse, which resulted in the remove button being left in saved documents. ([#120](http://code.google.com/p/loki-editor/issues/detail?id=120))
  * The list of allowable tags no longer needs to be provided in upper case. ([#119](http://code.google.com/p/loki-editor/issues/detail?id=119))
  * Fixed two bugs with unmassaging lists. ([#121](http://code.google.com/p/loki-editor/issues/detail?id=121) and [#124](http://code.google.com/p/loki-editor/issues/detail?id=124))
  * The contextual menu now appears in the correct position under IE. ([#90](http://code.google.com/p/loki-editor/issues/detail?id=90))

## Loki 2.0 Release Candidate 5 _(July 16, 2008)_ ##
  * Revamped the [options system](Options.md). The public interface for common cases has not changed, although we now recommend the use of the new `"power"` set in place of `"all"`. ([#102](http://code.google.com/p/loki-editor/issues/detail?id=102))
  * Icons now properly appear with alpha blending in IE6. ([#9](http://code.google.com/p/loki-editor/issues/detail?id=9))
  * Fixed image editing under Firefox 3. ([#95](http://code.google.com/p/loki-editor/issues/detail?id=95))
  * Content that is pasted into the editing document now always receives all cleanups. ([#96](http://code.google.com/p/loki-editor/issues/detail?id=96))
  * Worked around the tendency of Mozilla to rewrite image URL's relative to the editor's location. ([#99](http://code.google.com/p/loki-editor/issues/detail?id=99))
  * Fixed an issue where images could not be inserted under Internet Explorer if the cursor was in a text node. ([#100](http://code.google.com/p/loki-editor/issues/detail?id=100))
  * Fixed issues where clicking a part of the editing window that did not actually have any content in it would not place a carat in Firefox 3 ([#103](http://code.google.com/p/loki-editor/issues/detail?id=103)) and Internet Explorer ([#104](http://code.google.com/p/loki-editor/issues/detail?id=104)).
  * The contextual menu no longer disappears right after appearing in Firefox 3. ([#92](http://code.google.com/p/loki-editor/issues/detail?id=92))
  * Dialog contents no longer become visible before styles are applied to the window. ([#93](http://code.google.com/p/loki-editor/issues/detail?id=93))
  * Made the label of the "Edit source" button somewhat more clear. ([#94](http://code.google.com/p/loki-editor/issues/detail?id=94))
  * Fixed a serious bug in our IE compatibility layer that led to various strange behaviors. ([#97](http://code.google.com/p/loki-editor/issues/detail?id=97))
  * The (obsolete) PHP helper now adds the `charset` attribute to all script tags that it generates. ([#101](http://code.google.com/p/loki-editor/issues/detail?id=101))
  * Various stability fixes to internal code.

## Loki 2.0 Release Candidate 4 _(July 2, 2008)_ ##
  * Loki is now much easier to use without using a helper script:
    * There is a new public interface (contained within the new `Loki` object) for creating instances of the Loki editor. The new interface hides some additional implementation details from the user, and makes it easier to create Loki instances for multiple `textarea`s. ([#85](http://code.google.com/p/loki-editor/issues/detail?id=85))
    * In cases where the Loki distribution archive is installed normally (i.e. the filename of the `loki.js` script is not changed), Loki can determine the URL to its files automatically. ([#84](http://code.google.com/p/loki-editor/issues/detail?id=84))
    * It is no longer necessary to separately give the locations of the clipboard helper files; they will be found using the normal Loki base URI. ([#86](http://code.google.com/p/loki-editor/issues/detail?id=86))
    * Loki now gives access to its version number in the `Loki.version` string.
  * Four major bugs have been fixed:
    * There was an issue that prevented Loki instances from being created if the default site and type regular expressions were not specified. ([#87](http://code.google.com/p/loki-editor/issues/detail?id=87))
    * The link dialog was not appearing if [CMS integration](CMSIntegration.md) was not being used. ([#88](http://code.google.com/p/loki-editor/issues/detail?id=88))
    * The contextual menu no longer opens at an incorrect position if the editing document has been scrolled. ([#77](http://code.google.com/p/loki-editor/issues/detail?id=77))
    * The PHP helper should no longer mangle the default site and type regular expressions. ([#75](http://code.google.com/p/loki-editor/issues/detail?id=75))
  * The behavior of Loki's automatic cleanup under Firefox 2 was changed, eliminating some serious performance issues. ([#76](http://code.google.com/p/loki-editor/issues/detail?id=76))
  * The toolbar icons have been replaced by new ones based on the [Silk set](http://www.famfamfam.com/lab/icons/silk/). ([#9](http://code.google.com/p/loki-editor/issues/detail?id=9))

## Loki 2.0 Release Candidate 3 _(June 26, 2008)_ ##
  * Improved stability of Loki's handling of the delete and backspace keys. ([#66](http://code.google.com/p/loki-editor/issues/detail?id=66))
  * Made the handling of externally-generated tables without `thead`s much less intrusive. ([#81](http://code.google.com/p/loki-editor/issues/detail?id=81))
  * Fixed up the behavior of the buttons for removing horizontal rules. ([#67](http://code.google.com/p/loki-editor/issues/detail?id=67))
  * Fixed an ECMAScript syntax error. ([#73](http://code.google.com/p/loki-editor/issues/detail?id=73))
  * Improved the cleanup of nested paragraphs. ([#74](http://code.google.com/p/loki-editor/issues/detail?id=74))
  * Fixed the cleanup of `param` tags; they are no longer wrapped in paragraphs. ([#78](http://code.google.com/p/loki-editor/issues/detail?id=78))
  * Fixed the cell properties dialog. ([#80](http://code.google.com/p/loki-editor/issues/detail?id=80))
  * Loki no longer includes references to stylesheets from the original developers' website. ([#18](http://code.google.com/p/loki-editor/issues/detail?id=18))
  * PHP helper:
    * The `add_document_style_sheets` method now properly accepts single CSS filenames instead of just arrays of them. ([#71](http://code.google.com/p/loki-editor/issues/detail?id=71))
    * Removed all use of static method calls for PHP5 compatibility. ([#72](http://code.google.com/p/loki-editor/issues/detail?id=72))
    * Improved the stability of the code that serializes Loki's options, so that no combination will produce invalid JavaScript. ([#83](http://code.google.com/p/loki-editor/issues/detail?id=83))

## Loki 2.0 Release Candidate 2 _(February 5, 2008)_ ##
A number of important issues were fixed over RC1.
  * We now display a preemptive message explaining the enhanced privileges needed for clipboard operations on Gecko browsers. ([#31](http://code.google.com/p/loki-editor/issues/detail?id=31))
  * Line break elements were being removed when they were at the end of inline elements (instead of just when they occurred at the end of blocks). ([#58](http://code.google.com/p/loki-editor/issues/detail?id=58))
  * Content was being lost from multi-paragraph containers that only contained a sole paragraph during cleanup. ([#59](http://code.google.com/p/loki-editor/issues/detail?id=59))
  * Fixed an issue with cleanup of BR tags when switching from source view. ([#60](http://code.google.com/p/loki-editor/issues/detail?id=60))
  * Running cut or copy on an empty selection was clearing the clipboard. ([#62](http://code.google.com/p/loki-editor/issues/detail?id=62))

## Loki 2.0 Release Candidate 1 _(January 29, 2008)_ ##
  * When linking to an existing item, anchors now appear in the order in which they appear in the item, not in alphabetical order. ([#50](http://code.google.com/p/loki-editor/issues/detail?id=50))
  * Fixed a bug where the link dialog would sometimes not load the list of existing items. ([#52](http://code.google.com/p/loki-editor/issues/detail?id=52))
  * Fixed a bug where containers that should only contain either zero or two or more paragraphs were not cleaned up if they only contained a single paragraph. ([#48](http://code.google.com/p/loki-editor/issues/detail?id=48))
  * The PHP helper no longer relies on the SCRIPT\_URI server variable, which is not always available. ([#53](http://code.google.com/p/loki-editor/issues/detail?id=53))
  * Fixed a bug where the Loki HTML parser sometimes overran the ends of tags.  ([#57](http://code.google.com/p/loki-editor/issues/detail?id=57))
  * The JavaScript generated by the PHP helper is now more error-aware and more robust in cases where multiple instances of Loki are being generated on one page.
  * The readme file is now more informative (but still not informative enough).
  * Internals:
    * Better support for operations on ranges in Internet Explorer: better node insertion and range positioning implementations, implementations for cloning and deleting the contents of the range, and the ability to create new ranges on documents.
    * New utility functions for traversing a DOM node's ancestry and finding its offset within its parent.
    * The Python helper (and thus the build script) now ignores JavaScript files that begin with ".". Certain editors can leave these files lying around, and they were being erroneously included in builds.


## Loki 2.0 Beta 4 _(January 19, 2008)_ ##
  * The new link dialog will now default to displaying the tab that was last used to create a link. ([#37](http://code.google.com/p/loki-editor/issues/detail?id=37))
  * Pressing Enter/Return within a dialog now submits it (unless the cursor is in a position where Enter does something special, like selecting a dropdown item). ([#38](http://code.google.com/p/loki-editor/issues/detail?id=38))
  * The link dialog now allows the user to manually enter in an anchor name when the list of anchors can not be determined. ([#19](http://code.google.com/p/loki-editor/issues/detail?id=19))
  * A button was added to the toolbar that forces Loki to clean up the editing document when it is pressed. ([#56](http://code.google.com/p/loki-editor/issues/detail?id=56))
  * Loki can now always cleanup pasted content, even if the user uses the browser's menu to do so or otherwise bypasses Loki's clipboard capabilities. ([#54](http://code.google.com/p/loki-editor/issues/detail?id=54))
  * Loki now better enforces proper HTML document structure. ([#55](http://code.google.com/p/loki-editor/issues/detail?id=55))
  * The above cleanup changes fix some bizarre Mozilla behavior that occurs when plain text with line breaks is pasted in. ([#8](http://code.google.com/p/loki-editor/issues/detail?id=8))
  * Error messages are now cleared when the retry link is clicked. ([#25](http://code.google.com/p/loki-editor/issues/detail?id=25))
  * Loki can now be configured to allow changes to the size of an image made using the browser's controls to be preserved when the document is saved. ([#27](http://code.google.com/p/loki-editor/issues/detail?id=27))
  * Illegally self-nested HTML elements (e.g. a `B` tag within another `B` tag) are now cleaned up. ([#29](http://code.google.com/p/loki-editor/issues/detail?id=29))
  * Loki now cleans up unnecessary `BR` tags that are the last children of their parents. ([#39](http://code.google.com/p/loki-editor/issues/detail?id=39))
  * The labels on the indent and outdent buttons were changed to be more friendly and informative. ([#43](http://code.google.com/p/loki-editor/issues/detail?id=43))


## Loki 2.0 Beta 3 _(December 19, 2007)_ ##
  * Fixed a bug that made it impossible to link to an anchor on the item being edited. ([#4](http://code.google.com/p/loki-editor/issues/detail?id=4))
  * The link dialog no longer displays the last existing item you linked to as the default when the user goes to create a new link to an existing item. ([#5](http://code.google.com/p/loki-editor/issues/detail?id=5))
  * Directly editing anchors is now possible. ([#13](http://code.google.com/p/loki-editor/issues/detail?id=13))
  * Loki no longer replaces special punctuation characters with ASCII equivalents. ([#14](http://code.google.com/p/loki-editor/issues/detail?id=14))