While [the main installation article](Installation.md) has some useful examples on how to initialize Loki, it doesn't cover every possibility. Installers with some JavaScript experience can use this more technical reference to perform more customization.

### The Loki object ###

Loki makes available a global object named `Loki` that you can use to create editors on your page. It offers these methods and properties:

  * `Loki.convert_textarea(area, settings, callback)`
    * Converts one textarea to an instance of the Loki editor. This method can be called at any time (i.e. you do not need to wait for the window's `load` event).
      * **area**: either an [HTMLTextAreaElement](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-24874179) object, or the ID of a textarea
      * **settings**: a Loki [settings object](#Settings.md)
      * **callback**: an optional [callback function](#Callbacks.md) that will be called when the editor is created
  * `Loki.convert_textareas(areas, settings, callback)`
    * Converts a list of textareas to instances of the Loki editor. This method can be called at any time (i.e. you do not need to wait for the window's `load` event).
      * **areas**: an array whose elements are either [HTMLTextAreaElement](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-24874179) objects or ID's of textareas
      * **settings**: a Loki [settings object](#Settings.md) that will be used for each created editor
      * **callback**: an optional [callback function](#Callbacks.md) that will be called when each editor is created
  * `Loki.convert_textareas_by_class(classes, settings, callback)`
    * Converts textareas which have all provided classes to instances of the Loki editor This method can be called at any time (i.e. you do not need to wait for the window's `load` event).
      * **classes**: a space-separated list of classes to match
      * **settings**: a Loki [settings object](#Settings.md) that will be used for each created editor
      * **callback**: an optional [callback function](#Callbacks.md) that will be called when each editor is created
  * `Loki.convert_all_textareas(settings, callback)`
    * Converts all textareas on the page to instances of the Loki editor. This method can be called at any time (i.e. you do not need to wait for the window's `load` event).
      * **settings**: a Loki [settings object](#Settings.md) that will be used for each created editor
      * **callback**: an optional [callback function](#Callbacks.md) that will be called when each editor is created
  * `Loki.version`
    * A string identifying the version of Loki; e.g., `"2.0rc4"`, `"2.0.1"`, `"2.1b1"`.

### Settings ###
Loki [settings](Settings.md) are given in a normal JavaScript object, where the keys and values of the object correspond respectively with the names of the settings and their desired values.

The `options` setting is of particular importance, as it describes which editing features should be loaded. For more information, see [the options article](Options.md).

### Callbacks ###
Because it is possible to call the `convert` functions before the page has finished loading (and thus before it is possible to actually create a Loki editor), the functions do not return the Loki editor objects themselves. If you need access to these objects, you can specify a callback function. When the editor is created, this function will be called with two arguments: the `UI.Loki` object as the first, and the textarea from which it was created as the second.