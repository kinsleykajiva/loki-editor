/**
 * Declares instance variables.
 *
 * @constructor
 *
 * @class Represents keybinding.
 */
UI.Left_Align_Keybinding = function()
{
	Util.OOP.inherits(this, UI.Keybinding);
	this.test = function(e) { return this.matches_keycode(e, 76) && e.ctrlKey; }; // Ctrl-L
	//this.action = function() { this._loki.exec_command('JustifyLeft'); };
	this.action = function() { this._align_helper.align_left(); };

	this.init = function(loki)
	{
		this.superclass.init.call(this, loki);
		this._align_helper = (new UI.Align_Helper).init(this._loki);
		return this;
	};
};
