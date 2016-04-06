[Loki 3](https://eric.test.carleton.edu/dev/loki3/) is the version of Loki currently being developed in the trunk. Its aim is to address Loki 2's shortcomings, and make Loki more attractive as an open-source project: a serious competitor to FCKeditor and TinyMCE.

## What's better in Loki 3 ##
  * **Powerful Plugins**
    * Loki 3 introduces the concept of "editing contexts". The default WYSIWYG view is simply the "visual" context; plugins can define new contexts and switch between them at will, allowing the plugin to change almost the entire Loki interface. This allows "edit source" to be implemented purely as a plugin, something that was impossible in the capabilities branch.
    * A Loki 3 plugin can specify a list of other plugins that it depends on, and restrict what versions of those plugins it can accept. If a depended-upon plugin was not explicitly requested, it will be loaded anyway. This makes "support plugins" practical: plugins that exist only to provide support for others. Loki itself defines a dummy plugin named "core", allowing plugins to simply add, e.g., "core >= 3.0" to their dependency string to signal that they need at least Loki 3.0.
    * Plugins that were requested but not built in to Loki are automatically downloaded from the server. A "loading" context displays while this is in progress.
    * It should be possible to implement CMS integration as a separate plugin that makes modifications to the linking and image-insertion plugins.
  * **Localization**
    * In Loki 2, all user-visible strings are hard-coded, and only available in US English. Loki 3 includes a full localization system. Plugins define localization strings in an easily-parsed format, and these `strings` files are compiled to JavaScript by the Loki build process.
    * Loki locales include support for inflecting nouns based on number; necessary because some languages go well beyond singular/plural, and some languages make little distinction.
    * Loki locales include date and time formatting.
  * **Browser Support**
    * Loki 3 moves beyond Loki 2's Gecko/IE dichotomy and additionally targets Opera and WebKit-based browsers, including Safari and Chrome.
  * **Themes**
    * Loki 2's appearance can only be altered by editing its CSS files. This makes it impossible to present different appearances from one Loki installation. Loki 3 includes support for multiple themes.
    * Loki 3's default theme has a much more modern look.

## Internal changes ##
  * **Better OOP.** Loki 3's OOP paradigm is more explicit and easy to understand than Loki 2's, and, because it makes use of JavaScript `prototype` objects, is faster at runtime, especially when inheritance is used.
  * **Third-party utility library.** Instead of providing all cross-browser support on its own, Loki 3 defers to the excellent [base2](http://base2.googlecode.com/) library by [Dean Edwards](http://dean.edwards.name). base2 patches browser objects to bring them in compliance with Web standards; for example, in IE, `addEventListener` and its cousins magically appear.
  * **All packaged up.** Almost all Loki code lives within the `Loki` global object, minimizing potential conflicts. Because Loki 2 defines a `UI` object, it will possibly conflict with, e.g., [Prototype UI](http://www.prototype-ui.com/).
  * **TinyMCE excised.** Loki no longer depends on any TinyMCE code.