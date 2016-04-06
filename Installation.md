Installing Loki is a very simple process. Follow these instructions to integrate Loki with your web site or application. If you have questions or run into any difficulty, you can post a message to [the Loki installers discussion group](http://groups.google.com/group/loki-installers), where you will be answered by a developer.

### 1. Installing files ###
First, the Loki files must be uploaded to and extracted on your web server. Due to browser security features, the entire Loki folder _must_ be placed in an area that will be served from the same host and port as the page(s) on which you want Loki to appear.
  1. Obtain a packaged version of Loki from [the downloads section](http://code.google.com/p/loki-editor/downloads/list). Do not download a source package.
  1. Loki is distributed in BZip2-compressed tarballs. If you have direct (e.g. shell, terminal services) access to your web server, you can simply extract the archive directly in place using standard UNIX utilities. If you only have FTP access to your server, you must first extract the `loki-###.tar.bz2` file on your own computer, and then upload the resulting folder. Windows users will first need to download a utility like [7zip](http://www.7-zip.org/) or [WinRAR](http://www.win-rar.com) to open the file.

### 2. Integrating Loki with your site ###
First, include Loki in a `script` tag within your document's `head`. For example, if you were the administrator of _example.com_ and installed Loki at `http://www.example.com/static/scripts/loki/`, you could write:
```
<html lang="en">
  <head>
    <title>My Website – Edit a page</title>
    <script src="/static/scripts/loki/loki.js" type="text/javascript" charset="utf-8"></script>

    [Loki initialization code]

    ...
  </head>
  <body>
    ...
  </body>
</html>
```
Loki inserts itself into your document by substituting itself for existing `textarea` elements. The section labeled `[Loki initialization code]` should be replaced with appropriate code that  tells Loki which `textarea`s should be replaced. Some examples are provided below; for detailed information, see [the initialization article](Initialization.md).

#### Replacing all textareas on the page ####
The following code will replace all textareas on a page with Loki editors, using default settings.
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_all_textareas();
</script>
```

To create editors with a different set of features than the default, you can tweak the Loki [options](Options.md). For example, to replace all textareas with editors that include all "power-user" features except for anchors, you can write:
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_all_textareas({options: "power - anchors"});
</script>
```

There are several other [settings](Settings.md) that can be edited. To create editors with power-user options that sanitize unsecured images when Loki is served over HTTPS, you can write:
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_all_textareas({options: "power", sanitize_unsecured: true});
</script>
```

#### Replacing textareas with certain classes ####
If you need more flexibility, you can only have Loki replace the textareas that have certain classes. For example, to replace all of the textareas that have the class `rich` with full-featured editors, you can write:
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_textareas_by_class("rich", {options: "power"});
</script>
```

You can match multiple classes by separating them with spaces, just as you can do in the HTML `class` attribute itself. To replace all of the textareas that are classed both as `rich` and `loki`, you can write:
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_textareas_by_class("rich loki", {options: "power"});
</script>
```

#### Replacing specific textareas ####
You can replace specific textareas based on their ID's. For example, to replace the textareas with ID's "editor" and "comment", you can write:
```
<script type="text/javascript" charset="utf-8">
   Loki.convert_textareas(["editor", "comment"], {options: "default + tables"});
</script>
```