Starting with version 2.0.1, Loki can submit a "crash report" whenever an exception prevents Loki from switching to source view or submitting the editing document. Loki will post the crash report as a [JSON](http://en.wikipedia.org/wiki/JSON) object (with a Content-Type of `application/json`) to the script you specify in the `crash_report_uri` setting. The format of the posted object is detailed below.

The JSON that Loki produces is formatted and indented, making it easily readable by humans.

| **version** | The version of Loki that produced the crash report. |
|:------------|:----------------------------------------------------|
| **report\_version** | The version of the crash report format (1.0). The major version will not be incremented unless a breaking change is made. Minor version increases will always reflect a backwards-compatible change. |
| **user\_agent** | The browser's user agent string (the value of `navigator.userAgent`). |
| **platform** | The browser's platform string (the value of `navigator.platform`). |
| **settings** | The settings object with which the Loki editor instance was created. |
| **options** | An array of the handles of the editing options in use. |
| **exception** | The exception object that caused the crash.         |
| **document** | The (unclean) document that was being edited.       |


### Example Report ###
```
{
    "version": "2.0.1",
    "report_version": "1.0",
    "user_agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4",
    "platform": "MacIntel",
    "settings": {
        "base_uri": "/static/loki/",
        "use_xhtml": true,
        "document_style_sheets": [
            "/static/css/default_styles.css",
            "/static/css/loki_document.css"
        ],
        "html_generator": "loki",
        "crash_report_uri": "http://www.example.com/tools/report_loki_crash",
        "allowable_inline_styles": [
            "text-align",
            "vertical-align",
            "float",
            "direction",
            "display",
            "clear",
            "list-style"
        ]
    },
    "options": [
        "bold",
        "italic",
        "underline",
        "headings",
        "pre",
        "br",
        "hr",
        "clipboard",
        "highlight",
        "align",
        "blockquotes",
        "lists",
        "find",
        "tables",
        "images",
        "links",
        "anchors",
        "cleanup",
        "source",
        "debug"
    ],
    "exception": {
        "message": "Foo!",
        "fileName": "http://www.example.com/static/loki/loki.js",
        "lineNumber": 22216,
        "name": "TypeError"
    },
    "document": "<p>Some example text.</p>"
}
```