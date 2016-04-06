# Introduction #

A simple way to integrate loki into drupal.

# Details #

Download and extract loki. Place the files in a folder at the root of your server called loki.

Edit the template.php file in a root folder of a drupal theme (ie /themes/cobaltblue/), and add the following:

```
/**
 * transform textareas with id edit-body, disables resizable property
 */
function phptemplate_textarea($element)
{
	static $loki_loaded = false;
	if ($element['#id'] == 'edit-body')
	{
		$element['#resizable'] = false;
		if (!$loki_loaded)
		{
			drupal_add_js('loki/loki.js');
			drupal_add_js('Loki.convert_textarea("edit-body");', 'inline');
			$loki_loaded = true;
		}
	}
	return theme_textarea($element) ;
}
```

The exact same code could alternatively be put into a basic module. It would be nice to add some administrative options, or customize the setup for different users.