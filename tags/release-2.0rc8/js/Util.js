/**
 * @class This is merely a container which holds a library of utility
 * functions and classes. The library is organized around existing
 * DOM/JS classes, if they exist. For example, functions which extend
 * or provide cross-browser functionality on DOM Nodes are located in
 * Util.Node.
 */
var Util = {
	is: function is(type, objects)
	{
		for (var i = 0; i < objects.length; i++) {
			if (typeof(objects[i]) != type)
				return false;
		}
		
		return true;
	},
	
	is_boolean: function is_boolean()
	{
		return Util.is('boolean', arguments);
	},
	
	is_function: function is_function()
	{
		return Util.is('function', arguments);
	},
	
	is_string: function is_string()
	{
		return Util.is('string', arguments);
	},
	
	is_number: function is_number()
	{
		return Util.is('number', arguments);
	},
	
	is_object: function is_object()
	{
		return Util.is('object', arguments);
	},
	
	is_valid_object: function is_non_null_object()
	{
		for (var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) != 'object' || arguments[i] == null)
				return false;
		}
		
		return true;
	},
	
	is_undefined: function is_undefined()
	{
		return Util.is('undefined', arguments);
	},
	
	is_null: function is_null()
	{
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i] != null)
				return false;
		}
		
		return true;
	},
	
	is_blank: function is_blank()
	{
		for (var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) != 'undefined' || arguments[i] != null)
				return false;
		}
		
		return true;
	},
	
	is_enumerable: function is_enumerable()
	{
		for (var i = 0; i < arguments.length; i++) {
			var o = arguments[i];
			if (typeof(o) != 'object' || typeof(o.length) != 'number')
				return false;
		}
		
		return true;
	},
	
	trim: function trim_string(str)
	{
		str = str.replace(/^\s+/, '');
		for (var i = str.length - 1; i >= 0; i--) {
			if (/\S/.test(str.charAt(i))) {
				str = str.substring(0, i + 1);
				break;
			}
		}
		return str;
	}
};
