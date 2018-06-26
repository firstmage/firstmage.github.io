/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Copyright © 2008-now Harris Blondman, visual, communication, and studio. All rights reserved. www.harrisblondman.nl

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */


/* ! Preferences *//*
================================================================================================================================ */
preferences = new Object();

/* System
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.reusable = new Array();

/* Utilities
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.w_window = 0;
preferences.h_window = 0;
preferences.w_document = 0;
preferences.h_document = 0;
preferences.w_body = 0;
preferences.h_body = 0;
preferences.x_scroll = 0;
preferences.y_scroll = 0;

/* Em
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.em = 0;
preferences.em_factor = 0;
preferences.em_line_height = 0;

/* User agent
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.user_agent_handheld_flag = false;
	if (typeof user_agent_handheld_flag !== 'undefined') preferences.user_agent_handheld_flag = user_agent_handheld_flag;

/* Template
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.template = '';
	if (typeof template !== 'undefined') preferences.template = template;

/* Menu
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.menu_items = new Array();
	if (typeof menu_items !== 'undefined' && menu_items.length) preferences.menu_items = menu_items;

/* Modernizr
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.modernizr_csscalc = false;
	if (typeof modernizr_csscalc !== 'undefined') preferences.modernizr_csscalc = modernizr_csscalc;

/* Imagesloaded
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.imagesloaded_option = true;
preferences.imagesloaded_flag = preferences.imagesloaded_option;

preferences.imagesloaded_timeout = null;
preferences.imagesloaded_duration = 128;
preferences.imagesloaded_num = 0;
preferences.imagesloaded_n = 0;

preferences.imagesloaded_switch = false;

/* Blocks
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.blocks_option = false;
preferences.blocks_flag = preferences.blocks_option;

/* Debug
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.debug_option = false;
preferences.debug_flag = preferences.debug_option;

/* Transitions
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.transitions_option = true;
preferences.transitions_flag = preferences.transitions_option;

/* State
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.state_option = true;
preferences.state_flag = preferences.state_option;

preferences.state_current = location.href;

// #note -> Custom
preferences.state_y = new Array();
preferences.state_resize_timeout = null;
preferences.state_resize_timeout_duration = 100;
preferences.state_scroll_timeout = null;
preferences.state_scroll_timeout_duration = 100;

/* Autoscroll
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.autoscroll_option = true;
preferences.autoscroll_flag = preferences.autoscroll_option;

preferences.autoscroll_zoom_factor = 0.75; // #note -> Used for variable scrolling speed
// #note -> Corresponding transition and timeout durations in css and js.
preferences.autoscroll_zoom_duration_min = 800; // #note -> Used for variable scrolling speed
// #note -> Corresponding transition and timeout durations in css and js.
preferences.autoscroll_zoom_duration_max = 1000; // #note -> Used for variable scrolling speed

preferences.autoscroll_animate_timeout = null;
// #note -> Corresponding duration for wallpaper in CSS and javaScript
preferences.autoscroll_animate_duration = 800;

preferences.autoscroll_url = '';
	if (typeof autoscroll_url !== 'undefined') preferences.autoscroll_url = autoscroll_url;

/* Wallpaper
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Wallpaper effect is on by default.
preferences.wallpaper_option = true;
preferences.wallpaper_flag = preferences.wallpaper_option;

preferences.wallpaper_hide_flag = false;
  // #note -> Show wallpaper on redirect using autoscroll_url
  if (preferences.autoscroll_url) preferences.wallpaper_hide_flag = true;
preferences.wallpaper_lock = false;
preferences.wallpaper_timeout = null;
// #note -> Corresponding duration for wallpaper in CSS and javaScript
preferences.wallpaper_timeout_duration = 800;


preferences.wallpaper_distribute_do_timeout = null;
preferences.wallpaper_distribute_do_delay = 100;

preferences.wallpaper_distribute_n = 0;

preferences.wallpaper_distribute_w = new Array();
preferences.wallpaper_distribute_h = new Array();
preferences.wallpaper_distribute_r = new Array();
preferences.wallpaper_distribute_r_reverse = new Array();

preferences.wallpaper_distribute_r_window = 0;
preferences.wallpaper_distribute_r_reverse_window = 0;

// #note -> Distribute settings
preferences.wallpaper_distribute_dimensions_min = 42;
  // #note -> Can't be larger than 100
  preferences.wallpaper_distribute_dimensions_min = Math.min(100, preferences.wallpaper_distribute_dimensions_min);

preferences.wallpaper_distribute_dimensions_random = 42;
  // #note -> Can't be larger than (100 - minimum height)
  preferences.wallpaper_distribute_dimensions_random = Math.min((100 - preferences.wallpaper_distribute_dimensions_min), preferences.wallpaper_distribute_dimensions_random);

preferences.wallpaper_distribute_margin = 6;
  // #note -> Can't be larger than (100 - minimum height - added random height)
  preferences.wallpaper_distribute_margin = Math.min(((100 - preferences.wallpaper_distribute_dimensions_min - preferences.wallpaper_distribute_dimensions_random) / 2), preferences.wallpaper_distribute_margin);

preferences.wallpaper_distribute_increment_dimensions = 6;
  // #note -> Can't be larger than preferences.wallpaper_distribute_margin
  preferences.wallpaper_distribute_increment_dimensions = Math.min(preferences.wallpaper_distribute_margin, preferences.wallpaper_distribute_increment_dimensions);
    // #note -> Can't be smaller than 1
    preferences.wallpaper_distribute_increment_dimensions = Math.max(1, preferences.wallpaper_distribute_increment_dimensions);

preferences.wallpaper_distribute_increment_coordinates = 2;
  // #note -> Can't be larger than preferences.wallpaper_distribute_increment_dimensions
  preferences.wallpaper_distribute_increment_coordinates = Math.min(preferences.wallpaper_distribute_increment_dimensions, preferences.wallpaper_distribute_increment_coordinates);
    // #note -> Needs to be a fraction of preferences.wallpaper_distribute_increment_dimensions
    preferences.wallpaper_distribute_increment_coordinates = preferences.wallpaper_distribute_increment_dimensions / Math.round(preferences.wallpaper_distribute_increment_dimensions / preferences.wallpaper_distribute_increment_coordinates);

/* Scrolltimer
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.scrolltimer_option = true;
preferences.scrolltimer_flag = preferences.scrolltimer_option;

if (! preferences.wallpaper_flag) preferences.scrolltimer_flag = false;

preferences.scrolltimer_w_body = 0;
preferences.scrolltimer_h_body = 0;
preferences.scrolltimer_x_scroll = 0;
preferences.scrolltimer_y_scroll = 0;

preferences.scrolltimer_direction = 0;
preferences.scrolltimer_direction_y_keep = 0;
preferences.scrolltimer_direction_timeout = null;
preferences.scrolltimer_direction_timeout_duration = 100;

preferences.scrolltimer_switch = false;
preferences.scrolltimer_timeout = null;
preferences.scrolltimer_timeout_duration = 100;
preferences.scrolltimer_interval = null;
// #note -> Corresponding duration for foreground and image in CSS and javaScript
preferences.scrolltimer_interval_duration = 1000;

preferences.scrolltimer_wallpaper_page_num = 0;
preferences.scrolltimer_wallpaper_page_n = 0;
//
preferences.scrolltimer_wallpaper_image_num = 0;
preferences.scrolltimer_wallpaper_image_n = 0;
//
preferences.scrolltimer_wallpaper_elements = new Array();
preferences.scrolltimer_wallpaper_elements_num = 0;
preferences.scrolltimer_wallpaper_elements_n = 0;
//
preferences.scrolltimer_wallpaper_reset = false;
//
preferences.scrolltimer_wallpaper_reset_up = false;

preferences.scrolltimer_wallpaper_srcbig = '';
preferences.scrolltimer_wallpaper_srcbig_timeout = null;
// #note -> Corresponding duration for foreground and image in CSS and javaScript
preferences.scrolltimer_wallpaper_srcbig_timeout_duration = preferences.scrolltimer_interval_duration;

preferences.scrolltimer_wallpaper_insert_switch = false;

preferences.scrolltimer_wallpaper_withdraw_timeout = null;
preferences.scrolltimer_wallpaper_withdraw_timeout_duration = 1000;

preferences.scrolltimer_wheel_timeout = null;
preferences.scrolltimer_wheel_timeout_duration = 50;

/* Swipe #fix -> 2017-11-15 Adding swipe event to trigger wallpaper *//*
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.swipe_option = true;
preferences.swipe_flag = preferences.swipe_option;

if (! preferences.user_agent_handheld_flag) preferences.swipe_flag = false;

preferences.swipe_distance_x = 0;
preferences.swipe_distance_y = 0;
preferences.swipe_x = 0;
preferences.swipe_y = 0;
preferences.swipe_t = 0;
preferences.swipe_duration = 0;
preferences.swipe_duration_maximum = 200;
preferences.swipe_x_threshold = 150;
preferences.swipe_y_threshold = 100;

preferences.swipe_stopscroll_duration = 100;

/* Keyboard
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.keyboard_option = true; // #note -> Keyboard function sometimes breaks the focus, which in turn breaks the slideshow.
preferences.keyboard_flag = preferences.keyboard_option;

if (preferences.user_agent_handheld_flag) preferences.keyboard_flag = false;


/* ! #fix -> 2017-11-15 Adding lightbox panel *//*
================================ */

/* Lightbox
-------------------------------------------------------------------------------------------------------------------------------- */
preferences.hh_lightbox_option = true;
preferences.hh_lightbox_flag = preferences.hh_lightbox_option;



/* ! Events *//*
================================================================================================================================ */

/* On ready
-------------------------------------------------------------------------------------------------------------------------------- */
// Flag
var flag_ready = false;
// #note -> This is equivalent to the deprecated $(document).ready()
$(
	function() {
		// Flag
		flag_ready = true;
		// Flagged
		if (flag_ready) {
			// On ready
			HB_on_ready();
		}

		// Return
		return true;
	}
);

/* On load
-------------------------------------------------------------------------------------------------------------------------------- */
// Flag
//var object = $(window);
if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
	var object = preferences.reusable['window'];
var flag_load = false;
object.on(
	'load', 
	function() {
		// Flag
		flag_load = true;

		// Flagged
		if (flag_load) {
			// On load
			HB_on_load();
		}

		// Return
		return true;
	}
);

// Unset
//object = null;
//preferences.reusable['window'] = null;

/* On resize
-------------------------------------------------------------------------------------------------------------------------------- */
// Flag
//var object = $(window);
//if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
//	var object = preferences.reusable['window'];
var flag_resize = false;
object.on(
	'resize', 
	function() {
		// Flag
		flag_resize = true;

		// Flagged
		if (flag_load) {
			// On resize
			HB_on_resize();
		}

		// Return
		return true;
	}
);

// Unset
//object = null;
//preferences.reusable['window'] = null;

/* On scroll
-------------------------------------------------------------------------------------------------------------------------------- */
// Flag
//var object = $(window);
//if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
//	var object = preferences.reusable['window'];
var flag_scroll = false;
object.on(
	'scroll', 
	function() {
		// Flag
		flag_scroll = true;

		// Flagged
		if (flag_load) {
			// On scroll
			HB_on_scroll();
		}

		// Return
		return true;
	}
);

// Unset
object = null;
//preferences.reusable['window'] = null;


/* ! Event functions *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_on_ready() {
	// Utilities
	HB_dimensions_window();
	HB_dimensions_document();
	//HB_dimensions_body();
	//HB_coordinates_scroll();
	//HB_a_target();
	//HB_a_current();
	HB_flag_class_name();

	// Em
	HB_em_ready();
	//HB_em_resize();

	// Imagesloaded
	HB_imagesloaded_ready_delay();
	//	HB_imagesloaded_ready();

  //HB_transitions_off_delay();
  //  HB_transitions_off();
  //HB_transitions_on_delay();
  //  HB_transitions_on();

	// State
	HB_state_ready();
	//HB_state_load();
	//HB_state_resize();
	//HB_state_scroll_delay();
	//	HB_state_scroll();
	//HB_state_lastload();

	// Autoscroll
	HB_autoscroll_ready();
	//HB_autoscroll_load();

  // Wallpaper
  HB_wallpaper_ready();
  HB_wallpaper_distribute_windowratio();
  //HB_wallpaper_distribute_do_delay(false);
    HB_wallpaper_distribute_do(false);

  // Scrolltimer
  HB_scrolltimer_dimensions_body();
  HB_scrolltimer_ready();
  //HB_scrolltimer_load();

  // Swipe
  HB_swipe_ready();

  // Keyboard
  JL_keyboard_ready();

/* ! #fix -> 2017-11-15 Adding lightbox panel *//*
================================ */
  // HH_lightbox
  HH_lightbox();
  HH_lightbox_menu();

	// Return
	return true;
}

/* Load
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_on_load() {
	// Utilities
	HB_dimensions_window();
	HB_dimensions_document();
	//HB_dimensions_body();
	HB_coordinates_scroll();
	HB_a_target();
	HB_a_current();
	//HB_flag_class_name();

	// Em
	//HB_em_ready();
	//HB_em_resize();

	// Imagesloaded
	//HB_imagesloaded_ready_delay();
	//	HB_imagesloaded_ready();

  //HB_transitions_off_delay();
  //  HB_transitions_off();
  //HB_transitions_on_delay();
  //  HB_transitions_on();

	// State
	//HB_state_ready();
	HB_state_load();
	//HB_state_resize();
	//HB_state_scroll_delay();
	//	HB_state_scroll();
	//HB_state_lastload();

	// Autoscroll
	//HB_autoscroll_ready();
	HB_autoscroll_load();

  // Wallpaper
  //HB_wallpaper_ready();
  //HB_wallpaper_distribute_windowratio();
  //HB_wallpaper_distribute_do_delay(false);
  //  HB_wallpaper_distribute_do(false);

  // Scrolltimer
  HB_scrolltimer_dimensions_body();
  //HB_scrolltimer_ready();
  HB_scrolltimer_load();

  // Swipe
  //HB_swipe_ready();

  // Keyboard
  //JL_keyboard_ready();

	// Return
	return true;
}

/* Resize
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_on_resize() {
	// Utilities
	HB_dimensions_window();
	HB_dimensions_document();
	//HB_dimensions_body();
	HB_coordinates_scroll();
	//HB_a_target();
	//HB_a_current();
	//HB_flag_class_name();

	// Em
	//HB_em_ready();
	HB_em_resize();

	// Imagesloaded
	//HB_imagesloaded_ready_delay();
	//	HB_imagesloaded_ready();

  //HB_transitions_off_delay();
    HB_transitions_off();
  HB_transitions_on_delay();
  //  HB_transitions_on();

	// State
	//HB_state_ready();
	//HB_state_load();
	HB_state_resize();
	//HB_state_scroll_delay();
	//	HB_state_scroll();
	//HB_state_lastload();

	// Autoscroll
	//HB_autoscroll_ready();
	//HB_autoscroll_load();

  // Wallpaper
  //HB_wallpaper_ready();
  HB_wallpaper_distribute_windowratio();
  HB_wallpaper_distribute_do_delay(false);
  //  HB_wallpaper_distribute_do(false);

  // Scrolltimer
  HB_scrolltimer_dimensions_body();
  //HB_scrolltimer_ready();
  //HB_scrolltimer_load();

  // Swipe
  //HB_swipe_ready();

  // Keyboard
  //JL_keyboard_ready();

	// Return
	return true;
}

/* Scroll
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_on_scroll() {
	// Utilities
	//HB_dimensions_window();
	//HB_dimensions_document();
	//HB_dimensions_body();
	HB_coordinates_scroll();
	//HB_a_target();
	//HB_a_current();
	//HB_flag_class_name();

	// Em
	//HB_em_ready();
	//HB_em_resize();

	// Imagesloaded
	//HB_imagesloaded_ready_delay();
	//	HB_imagesloaded_ready();

  //HB_transitions_off_delay();
  //  HB_transitions_off();
  //HB_transitions_on_delay();
  //  HB_transitions_on();

	// State
	//HB_state_ready();
	//HB_state_load();
	//HB_state_resize();
	HB_state_scroll_delay();
	//	HB_state_scroll();
	//HB_state_lastload();

	// Autoscroll
	//HB_autoscroll_ready();
	//HB_autoscroll_load();

  // Wallpaper
  //HB_wallpaper_ready();
  //HB_wallpaper_distribute_windowratio();
  //HB_wallpaper_distribute_do_delay(false);
  //  HB_wallpaper_distribute_do(false);

  // Scrolltimer
  //HB_scrolltimer_dimensions_body();
  //HB_scrolltimer_ready();
  //HB_scrolltimer_load();

  // Swipe
  //HB_swipe_ready();

  // Keyboard
  //JL_keyboard_ready();

	// Return
	return true;
}


/* ! Utilities *//*
================================================================================================================================ */

/* Window
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_dimensions_window() {
	// Set up
	//var object = $(window);
	if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
		var object = preferences.reusable['window'];

	// Set
	preferences.w_window = object.width();
	preferences.h_window = object.height();
		// #note -> jQuery bug
		if (preferences.user_agent_handheld_flag) {
			preferences.w_window = window.innerWidth ? window.innerWidth : object.width();
			preferences.h_window = window.innerHeight ? window.innerHeight : object.height();
		}

	// Unset
	object = null;
	//preferences.reusable['window'] = null;

	// Return
	return true;
}

/* Document
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_dimensions_document() {
	// Set up
	//var object = $(document);
	if (! preferences.reusable['document']) preferences.reusable['document'] = $(document);
		var object = preferences.reusable['document'];

	// Set
	preferences.w_document = object.width();
	preferences.h_document = object.height();

	// Unset
	object = null;
	//preferences.reusable['document'] = null;

	// Return
	return true;
}

/* Body
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_dimensions_body() {
	// Set up
	//var object = $('body');
	if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
		var object = preferences.reusable['body'];

	// Set
	preferences.w_body = object.width();
	preferences.h_body = object.height();

	// Unset
	object = null;
	//preferences.reusable['body'] = null;

	// Return
	return true;
}

/* Scroll
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_coordinates_scroll() {
	// Set up
	//var object = $(window);
	if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
		var object = preferences.reusable['window'];

	// Set
	preferences.x_scroll = object.scrollLeft();
	preferences.y_scroll = object.scrollTop();

	// Unset
	object = null;
	//preferences.reusable['window'] = null;

	// Return
	return true;
}

/* A, target
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_a_target() {
	// Set up
	var object = $('a:not(.flag-target)');
	//if (! preferences.reusable['a_not___flag_target__']) preferences.reusable['a_not___flag_target__'] = $('a:not(.flag-target)');
	//	var object = preferences.reusable['a_not___flag_target__'];

	// Check
	if (window.location.protocol && window.location.hostname && RegExp()) {
		// HTTP
		var regular_expression = new RegExp("^http", "i");
		// Inbound
		var regular_expressionn = new RegExp("^" + window.location.protocol + "\\/\\/" + window.location.hostname, "i");
		// File
		var regular_expressionnn = new RegExp("pdf|doc|docx|xls|xlsx|gif|jpg|jpeg|png$", "i");
		// Mailto
		//var regular_expressionnnn = new RegExp("^mailto", "i");

		// Set
		object.each(
			function() {
				// Set up
				var objectt = $(this);
				var href = objectt.attr('href');

				// Set
				if ((href.match(regular_expression) && ! href.match(regular_expressionn)) || href.match(regular_expressionnn)) objectt.attr('target', '_blank');

				// Unset
				href = null;

				// Set
				// #note -> Add class to prevent links from being checked on every run.
				objectt.addClass('flag-target');

				// Unset
				objectt = null;

				// Return
				return true;
			}
		);

		// Unset
		//regular_expression = regular_expressionn = regular_expressionnn = regular_expressionnnn = null;
		regular_expression = regular_expressionn = regular_expressionnn = null;
	}

	// Unset
	object = null;
	//preferences.reusable['a_not___flag_target__'] = null;

	// Return
	return true;
}

/* A, current
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_a_current() {
	// Set up
	var object = $('a:not(.flag-current):not(:has(img))');
	//if (! preferences.reusable['a_not___flag_current___not___has__img____']) preferences.reusable['a_not___flag_current___not___has__img____'] = $('a:not(.flag-current):not(:has(img))');
	//	var object = preferences.reusable['a_not___flag_current___not___has__img____'];
	var path = (window.location.pathname.match(/^\//i) ? '' : '/') + window.location.pathname + window.location.search;
	var url = window.location.protocol + '//' + window.location.hostname + path;
	var path_parent = path;
		path_parent = path_parent.replace(/\/$/i, '');
			path_parent = path_parent.replace(/\/$/i, '');
				path_parent = path_parent.split('/');
					path_parent.pop();
						path_parent = path_parent.join('/');
							path_parent += '/';
	var url_parent = window.location.protocol + '//' + window.location.hostname + path_parent;

	// Set
	object.each(
		function() {
			// Set up
			var objectt = $(this);
			var href = objectt.attr('href');
				href = $('<a>').attr('href', href);
					href = href.get(0).protocol + '//' + href.get(0).hostname + (href.get(0).pathname.match(/^\//i) ? '' : '/') + href.get(0).pathname + href.get(0).search;
			var href_relative = href.match(/^[\/\.]/i) ? true : false;

			// Set
			// #note -> Current
			if ((href_relative && href.toLowerCase() === path.toLowerCase()) || (! href_relative && href.toLowerCase() === url.toLowerCase())) {
				objectt.addClass('current');
			} else {
				objectt.removeClass('current');
			}

			// Set
			// #note -> Current parent
			if ((href_relative && href !== path && href.toLowerCase() === path_parent.toLowerCase()) || (! href_relative && href !== url && href.toLowerCase() === url_parent.toLowerCase())) {
				objectt.addClass('current-parent');
			} else {
				objectt.removeClass('current-parent');
			}

			// Unset
			href = href_relative = null;

			// Set
			// #note -> Add class to prevent links from being checked on every run.
			//objectt.addClass('flag-current');

			// Unset
			objectt = null;

			// Return
			return true;
		}
	);

	// Unset
	path = url = path_parent = url_parent = null;

	// Unset
	object = null;
	//preferences.reusable['a_not___flag_current___not___has__img____'] = null;

	// Return
	return true;
}

/* Flag, class name
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_flag_class_name() {
	// Set up
	//var object = $('body');
	if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
		var object = preferences.reusable['body'];

	// Set
	object.removeClass('flag-javascript-false');
	object.addClass('flag-javascript-true');

	// Check
	if (preferences.user_agent_handheld_flag) {
		// Set
		object.removeClass('flag-handheld-false');
		object.addClass('flag-handheld-true');
	}

	// #note -> Modernizr

	// Check
	if (preferences.modernizr_csscalc) {
		// Set
		object.removeClass('flag-modernizr-csscalc-false');
		object.addClass('flag-modernizr-csscalc-true');
	}

	// #note -> Imagesloaded

	// Check
	if (preferences.imagesloaded_flag) {
		// Set
		object.removeClass('flag-imagesloaded-false');
		object.addClass('flag-imagesloaded-true');
	}

	// #note -> Blocks

	// Check
	if (preferences.blocks_flag) {
		// Set
		object.removeClass('flag-blocks-false');
		object.addClass('flag-blocks-true');
	}

	// #note -> Debug

	// Check
	if (preferences.debug_flag) {
		// Set
		object.removeClass('flag-debug-false');
		object.addClass('flag-debug-true');
	}

	// #note -> Transitions

	// Check
	if (preferences.transitions_flag) {
		// Set
		object.removeClass('flag-transitions-false');
		object.addClass('flag-transitions-true');
	}

	// #note -> State

	// Check
	if (preferences.state_flag) {
		// Set
		object.removeClass('flag-state-false');
		object.addClass('flag-state-true');
	}

	// #note -> Autoscroll

	// Check
	if (preferences.autoscroll_flag) {
		// Set
		object.removeClass('flag-autoscroll-false');
		object.addClass('flag-autoscroll-true');
	}

	// #note -> Wallpaper

	// Check
	// #note -> Wallpaper effect is on by default.
	if (! preferences.wallpaper_flag) {
		// Set
		object.removeClass('flag-wallpaper-true');
		object.addClass('flag-wallpaper-false');
	}

	// #note -> Scrolltimer

	// Check
	if (preferences.scrolltimer_flag) {
		// Set
		object.removeClass('flag-scrolltimer-false');
		object.addClass('flag-scrolltimer-true');
	}

	// #note -> Swipe

	// Check
	if (preferences.swipe_flag) {
		// Set
		object.removeClass('flag-swipe-false');
		object.addClass('flag-swipe-true');
	}

	// #note -> Keyboard

	// Check
	if (preferences.keyboard_flag) {
		// Set
		object.removeClass('flag-keyboard-false');
		object.addClass('flag-keyboard-true');
	}

	// Unset
	object = null;
	//preferences.reusable['body'] = null;

	// Return
	return true;
}

/* Shuffle, Fisher-Yates
-------------------------------------------------------------------------------------------------------------------------------- */
Array.prototype.shuffle_fisher_yates = function() {
	// Set up
	var n_count = this.length;
	var n_random = 0;
	var element_keep = '';

	// Set
	while (--n_count) {
		n_random = Math.floor(Math.random() * (n_count - 1));
		element_keep = this[n_count];
		this[n_count] = this[n_random];
		this[n_random] = element_keep;
	}

	// Unset
	n_count = n_random = element_keep = null;

	// Return
	return true;
}

/* Query string, get variable
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_query_string_get_variable(input_variable_name) {
	// Set up
	var r = false;
	var variable_name = input_variable_name.toLowerCase();
	var query_string = window.location.search.substring(1);
		query_string = query_string.split('&');

	// Set
	for (n = 0, nn = query_string.length; n < nn; n++) {
		// Set up
		var pair = query_string[n].split('=');
		var name = decodeURIComponent(pair[0]).toLowerCase();
		var value = decodeURIComponent(pair[1]);

		// Set
		if (name === variable_name) r = value;

		// Unset
		pair = name = value = null;
	}
	// Unset
	n = nn = null;

	// Unset
	variable_name = query_string = null;

	// Return
	return r;
}


/* ! Em *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_em_ready() {
	// Set up
	//var object = $('body');
	if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
		var object = preferences.reusable['body'];

	// Set
	preferences.em = Math.abs(object.css('font-size').replace('px', ''));
	preferences.em_factor = Math.round(1000 * (Math.abs(object.css('line-height').replace('px', '')) / preferences.em)) / 1000;
	preferences.em_line_height = preferences.em * preferences.em_factor;

	// Unset
	object = null;
	//preferences.reusable['body'] = null;

	// Return
	return true;
}

/* Resize
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_em_resize() {
	// Ready
	HB_em_ready();

	// Return
	return true;
}


/* ! Imagesloaded *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_imagesloaded_ready_delay() {
	// Check
	if (preferences.imagesloaded_flag) {
		// Reset
		clearTimeout(preferences.imagesloaded_timeout);

		// Set
		preferences.imagesloaded_timeout = setTimeout(
			function() {
				// Ready
				//HB_imagesloaded_ready_delay();
					HB_imagesloaded_ready();

				// Return
				return true;
			}, 
			preferences.imagesloaded_duration
		);
	}

	// Return
	return true;
}
function HB_imagesloaded_ready() {
	// Check
	if (preferences.imagesloaded_flag) {
		// Set up
		var object = $('img:visible');
		//if (! preferences.reusable['img_visible']) preferences.reusable['img_visible'] = $('img_visible');
		//	var object = preferences.reusable['img_visible'];

		// Reset
		preferences.imagesloaded_num = object.length;
		preferences.imagesloaded_n = 0;

		// Set
		object.each(
			function() {
				// Set up
				var objectt = $(this);

				// Check
				if (objectt.width() > 0 && objectt.height() > 0) {
					// Set
					preferences.imagesloaded_n++;
				} else {
					// Ready
					HB_imagesloaded_ready_delay();
					//	HB_imagesloaded_ready();

					// Return
					return false;
				}

				// Unset
				objectt = null;

				// Return
				return true;
			}
		);

		// Unset
		object = null;
		//preferences.reusable['img_visible'] = null;

		// Check
		if (preferences.imagesloaded_n >= preferences.imagesloaded_num) {
			// Lastload
			HB_imagesloaded_lastload();
		}
	}

	// Return
	return true;
}

/* Lastload
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_imagesloaded_lastload() {
	// Check
	if (preferences.imagesloaded_flag) {
		// Set up
		//var object = $('body');
		if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
			var object = preferences.reusable['body'];

		// Set
		object.addClass('switch-imagesloaded');

		// Unset
		object = null;
		//preferences.reusable['body'] = null;

		// Set
		preferences.imagesloaded_switch = true;

		//TODO: #note -> Add all functions which should be executed after the last image from HTML or Ajax is loaded

    // State
    //HB_state_ready();
    //HB_state_load();
    //HB_state_resize();
    //HB_state_scroll_delay();
    //  HB_state_scroll();
    HB_state_lastload();
	}

	// Return
	return true;
}


/* ! Transitions *//*
================================================================================================================================ */

/* On
-------------------------------------------------------------------------------------------------------------------------------- */
var transitions_on_timeout = null;
var transitions_on_delay = (0.4 * 1024);
function HB_transitions_on_delay() {
  //if (! preferences.transitions_flag) return false;

  clearTimeout(transitions_on_timeout);
  transitions_on_timeout = setTimeout(
    function() {
      //HB_transitions_on_delay();
        HB_transitions_on();

        return true;
    }, 
    transitions_on_delay
  );

  return true;
}
function HB_transitions_on() {
  //if (! preferences.transitions_flag) return false;

  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.removeClass('flag-transitions-false');
  object.addClass('flag-transitions-true');

  preferences.transitions_flag = preferences.transitions_option;

  object = null;

  return true;
}

/* Off
-------------------------------------------------------------------------------------------------------------------------------- */
var transitions_off_timeout = null;
var transitions_off_delay = (0.4 * 1024);
function HB_transitions_off_delay() {
  //if (! preferences.transitions_flag) return false;

  clearTimeout(transitions_off_timeout);
  transitions_off_timeout = setTimeout(
    function() {
      //HB_transitions_off_delay();
        HB_transitions_off();

        return true;
    }, 
    transitions_off_delay
  );

  return true;
}
function HB_transitions_off() {
  //if (! preferences.transitions_flag) return false;

  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.removeClass('flag-transitions-true');
  object.addClass('flag-transitions-false');

  preferences.transitions_flag = false;

  object = null;

  return true;
}


/* ! State *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_state_ready() {
  if (! preferences.state_flag) return false;

  HB_state_pop();

  return true;
}

/* Load
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Custom
function HB_state_load() {
  if (! preferences.state_flag) return false;

  HB_state_setup();

  return true;
}

/* Resize
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Custom
function HB_state_resize_delay() {
  if (! preferences.state_flag) return false;

  clearTimeout(preferences.state_resize_timeout);
  preferences.state_resize_timeout = setTimeout(
    function() {
      //HB_state_resize_delay();
        HB_state_resize();

        return true;
    }, 
    preferences.state_resize_timeout_duration
  );

  return true;
}
function HB_state_resize() {
  if (! preferences.state_flag) return false;

  HB_state_setup();

  return true;
}

/* Scroll
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Custom
function HB_state_scroll_delay() {
  if (! preferences.state_flag) return false;

  clearTimeout(preferences.state_scroll_timeout);
  preferences.state_scroll_timeout = setTimeout(
    function() {
      //HB_state_scroll_delay();
        HB_state_scroll();

        return true;
    }, 
    preferences.state_scroll_timeout_duration
  );

  return true;
}
function HB_state_scroll() {
  if (! preferences.state_flag) return false;

  if (preferences.state_y.length) {
    if (! preferences.reusable['_entry']) preferences.reusable['_entry'] = $('.entry');
      var object = preferences.reusable['_entry'];
    var n = 0;

    while(preferences.state_y[n] <= preferences.y_scroll + (preferences.h_window / 3)) n++;

    HB_state_change(object.eq(n - 1).find('h2 a').first().attr('href'), false);

    object = n = null;
  }


  return true;
}

/* Lastload
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Custom
function HB_state_lastload() {
  if (! preferences.state_flag) return false;

  HB_state_setup();

  return true;
}

/* Setup
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Custom
function HB_state_setup() {
  if (! preferences.state_flag) return false;


  preferences.state_y = new Array();


  if (! preferences.reusable['_entry']) preferences.reusable['_entry'] = $('.entry');
    var object = preferences.reusable['_entry'];

  object.each(
    function() {
      preferences.state_y.push($(this).offset().top);

      return true;
    }
  );

  object = null;


  return true;
}

/* Reload
-------------------------------------------------------------------------------------------------------------------------------- */
// #note -> Function to optionally execute actions on pop, such as a page reload
var state_switch_pop = ('state' in window.history && window.history.state !== null);
function HB_state_pop() {
  if (! preferences.state_flag) return false;

  if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
    var object = preferences.reusable['window'];

  object.bind(
    'popstate', 
    function (event) {
      // #note -> Ignore inital popstate fired by certain browsers
      var pop = ! state_switch_pop && window.location.href == location.href;

      state_switch_pop = true;

      if (pop) return true;

      // #note -> Comment out not to reload
      window.location.reload();

      return true;
    }
  );

  object = null;

	return true;
}

/* Change
-------------------------------------------------------------------------------------------------------------------------------- */
var state_change_timeout = null;
var state_change_delay = (0.125 * 1024);
function HB_state_change_delay(href, replace) {
  if (! preferences.state_flag) return false;

  clearTimeout(state_change_timeout);
  state_change_timeout = setTimeout(
    function() {
      //HB_state_change_delay(href, replace);
        HB_state_change(href, replace);

        return true;
    }, 
    state_change_delay
  );

  return true;
}
function HB_state_change(href, replace) {
  if (! preferences.state_flag) return false;

  if (preferences.state_current !== href) {
    preferences.state_current = href;

    if (replace && history.replaceState) {
      history.replaceState(
        {
          url: preferences.state_current
        }, 
        null, 
        preferences.state_current
      );
    } else if (history.pushState) {
      history.pushState(
        {
          url: preferences.state_current
        }, 
        null, 
        preferences.state_current
      );
    }
  }

	return true;
}


/* ! Autoscroll *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_autoscroll_ready() {
  if (! preferences.autoscroll_flag) return false;


  HB_autoscroll_setup();


  return true;
}

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_autoscroll_load() {
  if (! preferences.autoscroll_flag) return false;
  if (! preferences.autoscroll_url) return false;


  if (preferences.wallpaper_hide_flag) HB_autoscroll_url(preferences.autoscroll_url, true, true);


  return true;
}

/* Setup
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_autoscroll_setup() {
  if (! preferences.autoscroll_flag) return false;


  if (! preferences.reusable['_entry_header_h2_a']) preferences.reusable['_entry_header_h2_a'] = $('.entry-header h2 a');
    var object = preferences.reusable['_entry_header_h2_a'];

  object.off();
  object.on(
  //object.bind(
    'click', 
    function() {
      if (preferences.wallpaper_hide_flag) HB_autoscroll_url($(this).attr('href'), false, false);

      return false;
    }
  );

  object = null;


  return true;
}

/* Animate
-------------------------------------------------------------------------------------------------------------------------------- */
// #todo -> Add scroll interuption
function HB_autoscroll_animate_delay(input_y) {
  if (! preferences.autoscroll_flag) return false;


  clearTimeout(preferences.autoscroll_animate_timeout);

  preferences.autoscroll_animate_timeout = setTimeout(
    function() {
        //HB_autoscroll_animate_delay(input_y);
          HB_autoscroll_animate(input_y);

        return true;
      }, 
      preferences.autoscroll_animate_duration
  );


  return true;
}
function HB_autoscroll_animate(input_y) {
  if (! preferences.autoscroll_flag) return false;


  if (! preferences.reusable['html__body']) preferences.reusable['html__body'] = $('html, body');
    var object = preferences.reusable['html__body'];
  var y = parseFloat(input_y);
    if (! y) y = 0;
      // #note -> Maximum scroll value
      if (preferences.h_document && preferences.h_window - (preferences.h_document - y) > 0) y -= preferences.h_window - (preferences.h_document - y);

  object.stop();

  if (Math.round(y) !== Math.round(preferences.y_scroll)) {
    object.animate(
      {
        scrollTop: y, 
      }, 
      {
        duration: Math.max(Math.min(preferences.autoscroll_zoom_factor * Math.abs(y - preferences.y_scroll), preferences.autoscroll_zoom_duration_max), preferences.autoscroll_zoom_duration_min), 
        easing: 'swing', 
        //step: function() {
        //  return true;
        //}, 
        //complete: function() {
        //  return true;
        //}, 
      }
    );
  }

  object = y = null;


  return true;
}

/* URL
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_autoscroll_url(input_url, input_delay, input_replace) {
  if (! preferences.autoscroll_flag) return false;


  var object = $('.entry-header h2 a[href="' + input_url + '"]');
  if (object.length) {
    var y = object.closest('.entry-header').offset().top;
      y -= preferences.em_line_height;

    if (input_delay) {
      HB_autoscroll_animate_delay(y);
    } else {
      HB_autoscroll_animate(y);
    }

    y = null;
  }
  object = null;


  //HB_state_change_delay(input_url, input_replace);
    HB_state_change(input_url, input_replace);


  return true;
}


/* ! Wallpaper *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_ready() {
  if (! preferences.wallpaper_flag) return false;


  // #note -> Show wallpaper on redirect using autoscroll_url
  if (preferences.wallpaper_hide_flag) {
    //HB_wallpaper_show();
    HB_wallpaper_focus('body');
  } else {
    //HB_wallpaper_hide();
    HB_wallpaper_focus('wallpaper-background');
  }


  var object = $('.header .access .menu-0 .menu-item-0 a, .header .access .menu-0 .menu-item-1 a');

  object.off();
  object.on(
  //object.bind(
    'click', 
    function() {
      // #note -> Custom version of code from HB_autoscroll_url(input_url, input_delay, input_replace)
      if (! preferences.wallpaper_hide_flag) {
        var object = $('.entry-page').first();
        if (object.length) {
          var y = object.offset().top;
            y -= preferences.em_line_height;

          if (y <= preferences.y_scroll + (preferences.h_window / 3)) {
            HB_autoscroll_animate_delay(0);
            //  HB_autoscroll_animate(0);
          }

          y = null;
        }
        object = null;
      }


      //HB_state_change_delay($(this).attr('href'), false);
        HB_state_change($(this).attr('href'), false);


      HB_wallpaper_showhide();


      return false;
    }
  );

  object = null;


  var object = $('.header .access .menu-0 .menu-item-2 a');

  object.off();
  object.on(
  //object.bind(
    'click', 
    function() {
      if (! preferences.wallpaper_hide_flag) {
        HB_autoscroll_url($(this).attr('href'), true, false);
      } else {
        HB_autoscroll_url($(this).attr('href'), false, false);
      }


      HB_wallpaper_show();


      return false;
    }
  );

  object = null;


  // #fix -> Pointer events don't work on images on IE.
  if (! preferences.reusable['_wallpaper_image_p___wallpaper_image_p_a___insert_image_p___insert_image_p_a']) preferences.reusable['_wallpaper_image_p___wallpaper_image_p_a___insert_image_p___insert_image_p_a'] = $('.wallpaper-image p, .wallpaper-image p a, .insert-image p, .insert-image p a');
    var object = preferences.reusable['_wallpaper_image_p___wallpaper_image_p_a___insert_image_p___insert_image_p_a'];

  object.off();
  object
  .on(
    'click', 
    function() {
      // #note -> Autoscroll after clicking a wallpaper image, but not after clicking an inserted image.
      if ($(this).parent().parent().hasClass('wallpaper-image')) HB_autoscroll_url($(this).attr('href'), true, false);


      HB_wallpaper_show();


      return false;
    }
  )
  // #fix -> Scrolling on fixed images doesn't work. This event listener scrolls .wallpaper-background when scroll happens over an image. On handhelds, events are fired differently, so for those the wallpaper images only scroll in onde direction, regardless of the actual scrolling direction.
  .on(
  'wheel mousewheel DOMMouseScroll MozMousePixelScroll touchmove', 
    function(event) {
      var direction = 0;
        // #note -> Various event properties that return scrolldirection
        if (typeof event.originalEvent.deltaY !== 'undefined') {
          if (event.originalEvent.deltaY < 0) {
            direction = -1;
          } else {
            direction = 1;
          }
        } else if (typeof event.originalEvent.wheelDelta !== 'undefined') {
          if (event.originalEvent.wheelDelta > 0) {
            direction = -1;
          } else {
            direction = 1;
          }
        } else if (typeof event.originalEvent.detail !== 'undefined') {
          if (event.originalEvent.detail < 0) {
            direction = -1;
          } else {
            direction = 1;
          }
        }


      // #fix -> Corresponding direction on handhelds, to prevent scrolling up
      if (preferences.user_agent_handheld_flag) direction = 1;


      if (direction === 1 || (direction === -1 && preferences.scrolltimer_y_scroll > 0)) {
        if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
          var object = preferences.reusable['_wallpaper_background'];

        if (preferences.scrolltimer_y_scroll >= 0) object.scrollTop(preferences.scrolltimer_y_scroll + (direction * 10));

        object = null;
      }


      direction = null;
    }
  )
  ;

  object = null;


// #fix -> 2017-11-15 Adding lightbox panel
/*
  if (! preferences.reusable['_entry_images__entry_image']) preferences.reusable['_entry_images__entry_image'] = $('.entry-images .entry-image');
    var object = preferences.reusable['_entry_images__entry_image'];

  object.off();
  object.on(
    'click', 
    function() {
      var href = $(this).closest('.entry').find('.entry-header h2 a').attr('href');
      var src = $(this).find('img').attr('src');
      var srcbig = $(this).find('img').attr('data-srcbig');
      var w = $(this).find('img').attr('data-w');
      var h = $(this).find('img').attr('data-h');


      HB_scrolltimer_insert(href, src, srcbig, w, h);

      href = src = srcbig = w = h = null;
    }
  );

  object = null;
*/


  // #fix -> 2017-09-27 Open wallpaper when clicking on the background behind the piles of images.
/*
  if (! preferences.reusable['_wallpaper_background_p']) preferences.reusable['_wallpaper_background_p'] = $('.wallpaper-background p');
    var object = preferences.reusable['_wallpaper_background_p'];

  object.off();
  object.on(
    'click', 
    function() {
      if (event.target === event.currentTarget) {
        HB_wallpaper_show();
      }
    }
  );
*/

  object = null;


  HB_wallpaper_distribute_setup();


  return true;
}

/* Show
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_show() {
  if (! preferences.wallpaper_flag) return false;


  if (preferences.wallpaper_lock) return false;
  preferences.wallpaper_lock = true;
  preferences.wallpaper_timeout = setTimeout(
    function() {
      preferences.wallpaper_lock = false;

      return true;
    }, 
    preferences.wallpaper_timeout_duration
  );


  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.addClass('switch-wallpaper-show');

  object = null;


  HB_wallpaper_focus('body');


  preferences.wallpaper_hide_flag = true;


  HB_scrolltimer_withdraw();


  return true;
}

/* Hide
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_hide() {
  if (! preferences.wallpaper_flag) return false;


  if (preferences.wallpaper_lock) return false;
  preferences.wallpaper_lock = true;
  preferences.wallpaper_timeout = setTimeout(
    function() {
      preferences.wallpaper_lock = false;

      return true;
    }, 
    preferences.wallpaper_timeout_duration
  );


  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.removeClass('switch-wallpaper-show');

  object = null;


  HB_wallpaper_focus('wallpaper-background');


  preferences.wallpaper_hide_flag = false;


  return true;
}

/* Showhide
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_showhide() {
  if (! preferences.wallpaper_flag) return false;


  if (! preferences.wallpaper_hide_flag) {
    HB_wallpaper_show();
  } else {
    HB_wallpaper_hide();
  }


  return true;
}

/* Focus
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_focus(input_string) {
  if (! preferences.wallpaper_flag) return false;


  if (input_string === 'wallpaper-background') {
    if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
      var object = preferences.reusable['_wallpaper_background'];
  } else {
    if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
      var object = preferences.reusable['body'];
  }

  object.focus();

  object = null;


  return true;
}

/* Distribute setup
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_distribute_setup() {
  if (! preferences.wallpaper_flag) return false;


  if (! preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image']) preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image'] = $('.insert-images .insert-image, .wallpaper-images .wallpaper-image');
    var object = preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image'];

  object.each(
    function() {
      var w = $(this).find('img').first().attr('data-w');
        if (! w) w = 1200;
      var h = $(this).find('img').first().attr('data-h');
        if (! h) h = 1200;

      preferences.wallpaper_distribute_w.push(w);
      preferences.wallpaper_distribute_h.push(h);
      preferences.wallpaper_distribute_r.push(w / h);
      preferences.wallpaper_distribute_r_reverse.push(h / w);

      w = h = null;
    }
  );

  object = null;


  return true;
}

/* Distributesetupinsert
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_distribute_setup_insert(w, h) {
  if (! preferences.wallpaper_flag) return false;


  preferences.wallpaper_distribute_w[0] = w;
  preferences.wallpaper_distribute_h[0] = h;
  preferences.wallpaper_distribute_r[0] = preferences.wallpaper_distribute_w[0] / preferences.wallpaper_distribute_h[0];
  preferences.wallpaper_distribute_r_reverse[0] = preferences.wallpaper_distribute_h[0] / preferences.wallpaper_distribute_w[0];


  return true;
}

/* Distribute windowratio
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_distribute_windowratio() {
  if (! preferences.wallpaper_flag) return false;


  preferences.wallpaper_distribute_r_window = preferences.w_window / preferences.h_window;
  preferences.wallpaper_distribute_r_reverse_window =  preferences.h_window / preferences.w_window;


  return true;
}

/* Distribute do
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_wallpaper_distribute_do_delay(firstonly) {
  if (! preferences.wallpaper_flag) return false;

  clearTimeout(preferences.wallpaper_distribute_do_timeout);
  preferences.wallpaper_distribute_do_timeout = setTimeout(
    function() {
      //HB_wallpaper_distribute_do_delay(firstonly);
        HB_wallpaper_distribute_do(firstonly);

        return true;
    }, 
    preferences.wallpaper_distribute_do_delay
  );

  return true;
}
function HB_wallpaper_distribute_do(firstonly) {
  if (! preferences.wallpaper_flag) return false;


  preferences.wallpaper_distribute_n = 0;


  if (! preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image']) preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image'] = $('.insert-images .insert-image, .wallpaper-images .wallpaper-image');
    var object = preferences.reusable['_insert_images__insert_image___wallpaper_images__wallpaper_image'];

  object.each(
    function() {
      var r_window = preferences.wallpaper_distribute_r_window;
      var r_reverse_window = preferences.wallpaper_distribute_r_reverse_window;

      var container = $(this);
      var image = container.find('img').first();

      var w_image = preferences.wallpaper_distribute_w[preferences.wallpaper_distribute_n];
      var h_image = preferences.wallpaper_distribute_h[preferences.wallpaper_distribute_n];
      var r_image = preferences.wallpaper_distribute_r[preferences.wallpaper_distribute_n];
      var r_reverse_image = preferences.wallpaper_distribute_r_reverse[preferences.wallpaper_distribute_n];

      var w = 0;
      var h = 0;
      var x = 0;
      var y = 0;

      var margin_w = margin_h = preferences.wallpaper_distribute_margin;
      //#note -> Does this favor the larger or the smaller of the two margins, or does it do something else? If not, write a condition that favors the smaller margin of the two? Or leave as above? Or change in another way?
      // Landscape, horizontal margin is larger than vertical margin
      if (r_window >= 1) {
        // #note -> Express as vh
        margin_h *= r_window;
      // Portrait, horizontal margin is smaller than vertical margin
      } else {
        // #note -> Express as vw
        margin_w *= r_reverse_window;
      }


      // #note -> First image is always shown as big as possible
      dimensions_min = preferences.wallpaper_distribute_dimensions_min
      dimensions_random = preferences.wallpaper_distribute_dimensions_random;
      if (preferences.wallpaper_distribute_n === 0) {
        dimensions_min = dimensions_min + dimensions_random;
        dimensions_random = 0;
      }


      if (r_window >= r_image) {
        h = (Math.random() * dimensions_random) + dimensions_min;
        w = (r_image * h);
        x = Math.random() * ((r_window * 100) - w - margin_w - margin_w) + margin_w;
        y = Math.random() * (100 - h - margin_h - margin_h) + margin_h;

        // #note -> Express as vw
        w *= r_reverse_window;
        x *= r_reverse_window;

        // #note -> Round to increment
        h = Math.round(h / preferences.wallpaper_distribute_increment_dimensions) * preferences.wallpaper_distribute_increment_dimensions;
        w = Math.round(w / preferences.wallpaper_distribute_increment_dimensions) * preferences.wallpaper_distribute_increment_dimensions;
        x = Math.round(x / preferences.wallpaper_distribute_increment_coordinates) * preferences.wallpaper_distribute_increment_coordinates;
        y = Math.round(y / preferences.wallpaper_distribute_increment_coordinates) * preferences.wallpaper_distribute_increment_coordinates;
      } else {
        w = (Math.random() * dimensions_random) + dimensions_min;
        h = (w / r_image);
        x = Math.random() * (100 - w - margin_w - margin_w) + margin_w;
        y = Math.random() * ((100 / r_window) - h - margin_h - margin_h) + margin_h;

        // #note -> Express as vh
        h *= r_window;
        y *= r_window;

        // #note -> Round to increment
        w = Math.round(w / preferences.wallpaper_distribute_increment_dimensions) * preferences.wallpaper_distribute_increment_dimensions;
        h = Math.round(h / preferences.wallpaper_distribute_increment_dimensions) * preferences.wallpaper_distribute_increment_dimensions;
        x = Math.round(x / preferences.wallpaper_distribute_increment_coordinates) * preferences.wallpaper_distribute_increment_coordinates;
        y = Math.round(y / preferences.wallpaper_distribute_increment_coordinates) * preferences.wallpaper_distribute_increment_coordinates;
      }


      // #note -> Non-accelerated
      container.css('width', w + 'vw');
      container.css('height', h + 'vh');
      container.css('left', x + 'vw');
      // #fix -> Use margin-top instead of top so images are placed vertically relative and stay in their parent .wallpaper-images div.
      //container.css('top', y + 'vh');
      container.css('margin-top', y + 'vh');

      // #note -> .insert p is used for loading high quality image on top of low quality image.
      container.find('p').first().css('height', h + 'vh');


      r_window = r_reverse_window = null;
      container = image = null;
      w_image = h_image = r_image = r_reverse_image = null;
      w = h = x = y = null;
      margin_w = margin_h = null;


      preferences.wallpaper_distribute_n++;


      if (firstonly) return false;
    }
  );

  object = null;


  return true;
}


/* ! Scrolltimer *//*
================================================================================================================================ */

/* Dimensions body
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_dimensions_body() {
  if (! preferences.scrolltimer_flag) return false;


  if (! preferences.reusable['_wallpaper_background_p']) preferences.reusable['_wallpaper_background_p'] = $('.wallpaper-background p');
    var object = preferences.reusable['_wallpaper_background_p'];

  preferences.scrolltimer_w_body = object.width();
  preferences.scrolltimer_h_body = object.height();

  object = null;


	return true;
}

/* Coordinates scroll
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_coordinates_scroll() {
  if (! preferences.scrolltimer_flag) return false;

  if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
    var object = preferences.reusable['_wallpaper_background'];

  preferences.scrolltimer_x_scroll = object.scrollLeft();
  preferences.scrolltimer_y_scroll = object.scrollTop();

  object = null;


  return true;
}

/* Direction
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_direction() {
  if (! preferences.scrolltimer_flag) return false;


  // #fix -> Don't set scroll direction when scrolling above 0.
  if (preferences.scrolltimer_y_scroll <= 0) return false;


  if (preferences.scrolltimer_y_scroll === preferences.scrolltimer_direction_y_keep) return false;


  preferences.scrolltimer_direction = 1;
    if (preferences.scrolltimer_y_scroll < preferences.scrolltimer_direction_y_keep) preferences.scrolltimer_direction = -1;
      // #fix -> Corresponding direction on handhelds, to prevent scrolling up
      if (preferences.user_agent_handheld_flag) preferences.scrolltimer_direction = 1;
  preferences.scrolltimer_direction_y_keep = preferences.scrolltimer_y_scroll;


  clearTimeout(preferences.scrolltimer_direction_timeout);
  preferences.scrolltimer_direction_timeout = setTimeout(
    function() {
      preferences.scrolltimer_direction = 0;

      clearTimeout(preferences.scrolltimer_direction_timeout);


      return true;
    }
    , 
    preferences.scrolltimer_direction_timeout_duration
  );


  return true;
}

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_ready() {
  if (! preferences.scrolltimer_flag) return false;


  if (! preferences.reusable['_wallpaper_foreground__wallpaper_images']) preferences.reusable['_wallpaper_foreground__wallpaper_images'] = $('.wallpaper-foreground .wallpaper-images');
    var object = preferences.reusable['_wallpaper_foreground__wallpaper_images'];

  preferences.scrolltimer_wallpaper_page_num = object.length;

  object.each(
    function() {
      var objectt = $(this).find('.wallpaper-image');

      objectt.each(
        function() {
          preferences.scrolltimer_wallpaper_image_num++;

          preferences.scrolltimer_wallpaper_elements.push('image');
        }
      );

      objectt = null;

      preferences.scrolltimer_wallpaper_elements.pop();
      preferences.scrolltimer_wallpaper_elements.push('page');
    }
  );

  object = null;

  preferences.scrolltimer_wallpaper_elements.pop();
  preferences.scrolltimer_wallpaper_elements.push('page');

  preferences.scrolltimer_wallpaper_elements_num = preferences.scrolltimer_wallpaper_elements.length;


  return true;
}

/* Load
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_load() {
  if (! preferences.scrolltimer_flag) return false;


  if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
    var object = preferences.reusable['_wallpaper_background'];

  object.off();
  object.on(
  //object.bind(
    'scroll', 
    function() {
      HB_scrolltimer_coordinates_scroll();
      HB_scrolltimer_direction();

      HB_scrolltimer_loop();
      HB_scrolltimer_switch();


      HB_scrolltimer_noticeoff();


      return true;
    }
  );

  object = null;


  return true;
}

/* Loop
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_loop() {
  if (! preferences.scrolltimer_flag) return false;

  if (preferences.scrolltimer_y_scroll + (2 * preferences.h_window) >= preferences.scrolltimer_h_body) {
    if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
      var object = preferences.reusable['_wallpaper_background'];

    // #note -> Infinite scroll using scrollTop() does not work seamlessly on iPhone and Firefox. Jumping back to the top makes the scroll stop untill it's actively started again.
    object.scrollTop(0);

    object = null;


    // #fix -> Prevent scroll direction from becoming -1 when scroll jumps to 0.
    preferences.scrolltimer_direction_y_keep = preferences.scrolltimer_y_scroll = 0;
  }


  return true;
}

/* Switch
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_switch() {
  if (! preferences.scrolltimer_flag) return false;


  if (! preferences.scrolltimer_switch) {
    HB_scrolltimer_timer();

    preferences.scrolltimer_switch = true;
  }


  clearTimeout(preferences.scrolltimer_timeout);
  preferences.scrolltimer_timeout = setTimeout(
    function() {
      preferences.scrolltimer_switch = false;

      clearTimeout(preferences.scrolltimer_timeout);
      clearInterval(preferences.scrolltimer_interval);


      return true;
    }
    , 
    preferences.scrolltimer_timeout_duration
  );


  return true;
}

/* Timer
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_timer() {
  if (! preferences.scrolltimer_flag) return false;


  HB_scrolltimer_action();

  clearInterval(preferences.scrolltimer_interval);
  preferences.scrolltimer_interval = setInterval(
    function() {
      HB_scrolltimer_action();


      return true;
    }, 
    preferences.scrolltimer_interval_duration
  );


  return true;
}

/* Action
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_action() {
  if (! preferences.scrolltimer_flag) return false;


  if (preferences.scrolltimer_wallpaper_insert_switch) {
    HB_scrolltimer_withdraw();

    return false;
  }


  // Scrolling forward
  if (preferences.scrolltimer_direction === 1) {


    preferences.scrolltimer_wallpaper_reset = true;


    // Move image
    if (preferences.scrolltimer_wallpaper_elements[preferences.scrolltimer_wallpaper_elements_n] === 'image') {


      preferences.scrolltimer_wallpaper_reset_up = false;


      if (! preferences.reusable['_wallpaper_image']) preferences.reusable['_wallpaper_image'] = $('.wallpaper-image');
        var object = preferences.reusable['_wallpaper_image'];

      object.eq(preferences.scrolltimer_wallpaper_image_n).addClass('switch-scrolltimer');

      object = null;


      if (preferences.debug_option) console.log(preferences.scrolltimer_wallpaper_elements[preferences.scrolltimer_wallpaper_elements_n] + ' ' + preferences.scrolltimer_wallpaper_image_n);


    // Move page
    } else if (preferences.scrolltimer_wallpaper_elements[preferences.scrolltimer_wallpaper_elements_n] === 'page') {


      preferences.scrolltimer_wallpaper_reset_up = true;


      preferences.scrolltimer_wallpaper_page_n++;
      //  if (preferences.scrolltimer_wallpaper_page_n >= preferences.scrolltimer_wallpaper_page_num) preferences.scrolltimer_wallpaper_page_n = 0;


      // Reset image
      if (preferences.scrolltimer_wallpaper_page_n >= preferences.scrolltimer_wallpaper_page_num) {
        preferences.scrolltimer_wallpaper_page_n = 0;


        //// #note -> redistribute when going back to first page
        ////HB_wallpaper_distribute_windowratio();
        ////HB_wallpaper_distribute_do_delay(false);
        //  HB_wallpaper_distribute_do(false);


        if (! preferences.reusable['_wallpaper_image']) preferences.reusable['_wallpaper_image'] = $('.wallpaper-image');
          var object = preferences.reusable['_wallpaper_image'];

        object.removeClass('switch-scrolltimer');

        object = null;
      }


      if (! preferences.reusable['_wallpaper_foreground']) preferences.reusable['_wallpaper_foreground'] = $('.wallpaper-foreground');
        var object = preferences.reusable['_wallpaper_foreground'];

      object.css('transform', 'translate3d(0, ' + (-100 * preferences.scrolltimer_wallpaper_page_n) + 'vh, 0)');

      object = null;


      if (preferences.debug_option) console.log(preferences.scrolltimer_wallpaper_elements[preferences.scrolltimer_wallpaper_elements_n] + ' ' + preferences.scrolltimer_wallpaper_page_n);


    }


    preferences.scrolltimer_wallpaper_image_n++;
      if (preferences.scrolltimer_wallpaper_image_n >= preferences.scrolltimer_wallpaper_image_num) preferences.scrolltimer_wallpaper_image_n = 0;

    preferences.scrolltimer_wallpaper_elements_n++;
      if (preferences.scrolltimer_wallpaper_elements_n >= preferences.scrolltimer_wallpaper_elements_num) preferences.scrolltimer_wallpaper_elements_n = 0;


  // Scrolling back
  } else if ((preferences.scrolltimer_direction === -1)) {

    if (! preferences.scrolltimer_wallpaper_reset || preferences.scrolltimer_wallpaper_reset_up) {
      preferences.scrolltimer_wallpaper_page_n--;
        if (preferences.scrolltimer_wallpaper_page_n < 0) {
          preferences.scrolltimer_wallpaper_page_n = preferences.scrolltimer_wallpaper_page_num - 1;

          //// #note -> redistribute when going back to first page
          ////HB_wallpaper_distribute_windowratio();
          ////HB_wallpaper_distribute_do_delay(false);
          //  HB_wallpaper_distribute_do(false);
        }


      if (! preferences.reusable['_wallpaper_foreground']) preferences.reusable['_wallpaper_foreground'] = $('.wallpaper-foreground');
        var object = preferences.reusable['_wallpaper_foreground'];

      // #note -> Corresponding duration for foreground and image in CSS and javaScript
      object.css('transform', 'translate3d(0, ' + (-100 * preferences.scrolltimer_wallpaper_page_n) + 'vh, 0)');

      object = null;
    }


    preferences.scrolltimer_wallpaper_reset_up = false;


    if (preferences.debug_option) console.log('page ' + preferences.scrolltimer_wallpaper_page_n);


    // Set element
    preferences.scrolltimer_wallpaper_image_n = 0;
    preferences.scrolltimer_wallpaper_elements_n = 0;
    for (n = 0, nn = preferences.scrolltimer_wallpaper_elements.length, nnn = 0; n < nn; n++) {
      if (preferences.scrolltimer_wallpaper_elements[n] === 'page') nnn++;
      if (nnn >= preferences.scrolltimer_wallpaper_page_n && preferences.scrolltimer_wallpaper_elements[n] === 'image') break;


      preferences.scrolltimer_wallpaper_image_n++;
      //  if (preferences.scrolltimer_wallpaper_image_n >= preferences.scrolltimer_wallpaper_image_num) preferences.scrolltimer_wallpaper_image_n = 0;

      preferences.scrolltimer_wallpaper_elements_n++;
      //  if (preferences.scrolltimer_wallpaper_elements_n >= preferences.scrolltimer_wallpaper_elements_num) preferences.scrolltimer_wallpaper_elements_n = 0;
    }
    n = nn = nnn = null;


    // Reset image
    if (preferences.scrolltimer_wallpaper_reset) {
      preferences.scrolltimer_wallpaper_reset = false;


      if (! preferences.reusable['_wallpaper_image']) preferences.reusable['_wallpaper_image'] = $('.wallpaper-image');
        var object = preferences.reusable['_wallpaper_image'];

      object.removeClass('switch-scrolltimer');

      object = null;
    }


  }


  return true;
}

/* Insert
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_insert(href, src, srcbig, w, h) {
  if (! preferences.scrolltimer_flag) return false;


  if (preferences.scrolltimer_wallpaper_insert_switch) return false;


  HB_wallpaper_distribute_setup_insert(w, h);


  //HB_wallpaper_distribute_windowratio();
  //HB_wallpaper_distribute_do_delay(true);
    HB_wallpaper_distribute_do(true);


  if (! preferences.reusable['_insert_image']) preferences.reusable['_insert_image'] = $('.insert-image');
    var object = preferences.reusable['_insert_image'];

  object.find('a').attr('href', href);
  object.find('img').attr('src', src);
  object.css('background-image', 'url(' + src + ')');
  // #note -> .insert p is used for loading high quality image on top of low quality image.
  object.find('p').first().css('background-image', 'none');

  object = null;


  preferences.scrolltimer_wallpaper_srcbig = srcbig;


  clearTimeout(preferences.scrolltimer_wallpaper_srcbig_timeout);
  preferences.scrolltimer_wallpaper_srcbig_timeout = setTimeout(
    function() {
      if (! preferences.reusable['_insert_image']) preferences.reusable['_insert_image'] = $('.insert-image');
        var object = preferences.reusable['_insert_image'];

      object.find('img').attr('src', preferences.scrolltimer_wallpaper_srcbig);
      // #note -> .insert p is used for loading high quality image on top of low quality image.
      //object.css('background-image', 'url(' + preferences.scrolltimer_wallpaper_srcbig + ')');
      object.find('p').first().css('background-image', 'url(' + preferences.scrolltimer_wallpaper_srcbig + ')');

      object = null;
    }, 
    preferences.scrolltimer_wallpaper_srcbig_timeout_duration
  );


  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.addClass('switch-insert-in');

  object = null;

  preferences.scrolltimer_wallpaper_insert_switch = true;


  //HB_state_change_delay(href, false);
  //  HB_state_change(href, false);

  //HB_state_change_delay($('.header .access .menu-0 .menu-item-1 a').attr('href'), false);
    HB_state_change($('.header .access .menu-0 .menu-item-1 a').attr('href'), false);


  HB_wallpaper_hide();


  return true;
}

/* Withdraw
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_withdraw() {
  if (! preferences.scrolltimer_flag) return false;


  if (! preferences.scrolltimer_wallpaper_insert_switch) return false;


  if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
    var object = preferences.reusable['body'];

  object.removeClass('switch-insert-in');
  object.addClass('switch-insert-out');

  object = null;


  clearTimeout(preferences.scrolltimer_wallpaper_withdraw_timeout);
  preferences.scrolltimer_wallpaper_withdraw_timeout = setTimeout(
    function() {
      if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
        var object = preferences.reusable['body'];

      object.removeClass('switch-insert-out');

      object = null;
    }, 
    preferences.scrolltimer_wallpaper_withdraw_timeout_duration
  );


  preferences.scrolltimer_wallpaper_insert_switch = false;


  return true;
}

/* Noticeoff
-------------------------------------------------------------------------------------------------------------------------------- */
function HB_scrolltimer_noticeoff() {
  if (! preferences.scrolltimer_flag) return false;


	if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
		var object = preferences.reusable['body'];

	object.addClass('switch-scrolltimer-noticeoff');

	object = null;
}


/* ! Swipe *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
// #todo -> change vh wallpaper on handheld if swipe is active so scroll can't happen
function HB_swipe_ready() {
	if (! preferences.swipe_flag) return false;


	if (! preferences.reusable['window']) preferences.reusable['window'] = $(window);
		var object = preferences.reusable['window'];

	//object.get(0).addEventListener(
	//	'touchstart', 
	//	function (input_event) {
	//		var event = input_event;
	//		var objectt = event.changedTouches[0];
  //
	//		preferences.swipe_distance_x = 0;
	//		preferences.swipe_distance_y = 0;
  //
	//		preferences.swipe_x = objectt.pageX;
	//		preferences.swipe_y = objectt.pageY;
	//		preferences.swipe_t = new Date().getTime();
  //
	//		// Stop scroll
	//		//event.preventDefault();
  //
	//		event = objectt = null;
  //
	//		return true;
	//	}, 
	//	false
	//);

	//object.get(0).addEventListener(
	//	'touchmove', 
	//	function(input_event) {
	//		var event = input_event;
	//
	//		// Stop scroll
	//		event.preventDefault();
	//
	//		event = null;
	//
	//		return true;
	//	}, 
	//	false
	//);

	//object.get(0).addEventListener(
	//	'touchend', 
	//	function(input_event) {
	//		var event = input_event;
	//		var objectt = event.changedTouches[0];
	//		var string = false;
  //
	//		preferences.swipe_distance_x = objectt.pageX - preferences.swipe_x;
	//		preferences.swipe_distance_y = objectt.pageY - preferences.swipe_y;
	//		preferences.swipe_duration = new Date().getTime() - preferences.swipe_t;
  //
	//		if (preferences.swipe_duration <= preferences.swipe_duration_maximum && Math.abs(objectt.pageY - preferences.swipe_y) <= preferences.swipe_y_threshold) {
	//			//if (preferences.swipe_distance_x <= -1 * preferences.swipe_x_threshold) {
	//			//	string = 'left';
	//			//} else if (preferences.swipe_distance_x >= preferences.swipe_x_threshold) {
	//			//	string = 'right';
	//			//}
	//			//if (preferences.swipe_distance_y <= -1 * preferences.swipe_y_threshold) {
	//			//	string = 'up';
	//			//} else if (preferences.swipe_distance_y >= preferences.swipe_y_threshold) {
	//			//	string = 'down';
	//			//}
	//		}
  //
	//		HB_swipe_handle(string);
  //
	//		// Stop scroll
	//		//event.preventDefault();
  //
	//		event = objectt = string = null;
  //
	//		return true;
	//	}, 
	//	false
	//);

  //#note -> Custom, stop scroll movement if finger leaves screen
	object.get(0).addEventListener(
		'touchend', 
		function(input_event) {
			var event = input_event;
			var objectt = event.changedTouches[0];

      HB_swipe_handle();

			// Stop scroll
			//event.preventDefault();

			event = objectt = null;

			return true;
		}, 
		false
	);

	object = null;


	return true;
}

/* Handle
-------------------------------------------------------------------------------------------------------------------------------- */
/*
//#note -> Custom, stop scroll movement if finger leaves screen
function HB_swipe_handle(input_string) {
	if (! preferences.swipe_flag) return false;


	var string = input_string;


	return true;
}
*/
function HB_swipe_handle() {
	if (! preferences.swipe_flag) return false;


  if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
    var object = preferences.reusable['_wallpaper_background'];

  object.css('overflow', 'hidden');

  setTimeout(
    function() {
      if (! preferences.reusable['_wallpaper_background']) preferences.reusable['_wallpaper_background'] = $('.wallpaper-background');
        var object = preferences.reusable['_wallpaper_background'];

      object.css('overflow', 'auto');

      object = null;
    }, 
    preferences.swipe_stopscroll_duration
  );

  object = null;


	return true;
}



/* ! Keyboard *//*
================================================================================================================================ */

/* Ready
-------------------------------------------------------------------------------------------------------------------------------- */
function JL_keyboard_ready() {
  if (! preferences.keyboard_flag) return false;

  //JL_keyboard_flush();
  JL_keyboard_keys();

	return true;
}

/* Flush
-------------------------------------------------------------------------------------------------------------------------------- */
function JL_keyboard_flush() {
  if (! preferences.keyboard_flag) return false;

  if (! preferences.reusable['document']) preferences.reusable['document'] = $(document);
    var object = preferences.reusable['document'];

  object.unbind('keydown');
  object.unbind('keyup');

  object = null;

  return true;
}

/* Keys
-------------------------------------------------------------------------------------------------------------------------------- */
function JL_keyboard_keys() {
  if (! preferences.keyboard_flag) return false;

  if (! preferences.reusable['document']) preferences.reusable['document'] = $(document);
    var object = preferences.reusable['document'];

  object.unbind('keydown');
  object.unbind('keyup');

  // Set
  object.keydown(
    function(input_event) {
      var event = input_event;
      var trigger_event = 'click';

      // Escape
      //} else if (event.keyCode == 27) {
      // Escape or W or X
      //} else 
      if (event.keyCode == 27 || event.keyCode == 87 || event.keyCode == 88) {
        if (preferences.wallpaper_hide_flag) {
          if (! preferences.reusable['_header__access__menu_0__menu_item_1_a']) preferences.reusable['_header__access__menu_0__menu_item_1_a'] = $('.header .access .menu-0 .menu-item-1 a');
            var object = preferences.reusable['_header__access__menu_0__menu_item_1_a'];
          object.first().trigger(trigger_event);
          object = null;
        }
      // Left
      //} else if (event.keyCode == 37) {
      // Up
      //} else if (event.keyCode == 38) {
      // Right
      //} else if (event.keyCode == 39) {
      // Down
      //} else if (event.keyCode == 40) {
      // I
      } else if (event.keyCode == 73) {
        if (! preferences.reusable['_header__access__menu_0__menu_item_2_a']) preferences.reusable['_header__access__menu_0__menu_item_2_a'] = $('.header .access .menu-0 .menu-item-2 a');
          var object = preferences.reusable['_header__access__menu_0__menu_item_2_a'];
        object.first().trigger(trigger_event);
        object = null;
      // O
      } else if (event.keyCode == 79) {
        if (! preferences.wallpaper_hide_flag) {
          if (! preferences.reusable['_header__access__menu_0__menu_item_0_a']) preferences.reusable['_header__access__menu_0__menu_item_0_a'] = $('.header .access .menu-0 .menu-item-0 a');
            var object = preferences.reusable['_header__access__menu_0__menu_item_0_a'];
          object.first().trigger(trigger_event);
          object = null;
        } else {
          //HB_autoscroll_animate_delay(0);
            HB_autoscroll_animate(0);
        }
      // 0 of C
      //} else if (event.keyCode == 48 || event.keyCode == 67) {
      //	// Set
      //	if (document.elementFromPoint) document.elementFromPoint(0, 0).click();
      }

      // Unset
      event = trigger_event = null;

      // Return
      return true;
    }
  );

  object = null;

  return true;
}


/* ! #fix -> 2017-11-15 Adding lightbox panel *//*
================================ */

/* Lightbox
-------------------------------------------------------------------------------------------------------------------------------- */
function HH_lightbox() {
  if (! preferences.hh_lightbox_flag) return false;

  if (! preferences.reusable['_entry_images__entry_image']) preferences.reusable['_entry_images__entry_image'] = $('.entry-images .entry-image');
    var object = preferences.reusable['_entry_images__entry_image'];

  object.off();
  object.on(
    'click', 
    function() {
      if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
      var objectBody = preferences.reusable['body'];
      objectBody.addClass('hh-lightbox-flag');
      $('#hh-lightbox-images').empty();
      $(this).closest('.entry-images').clone().appendTo('#hh-lightbox-images');

//       $('#hh-lightbox-images').attr('tabindex',-1);
      $('#hh-lightbox-background').focus();

// #note -> Scroll to image setup
// #note -> On one safari copy, problem with scrolling, maybe due to speed or image loading
        var imgClass = $(this).attr('class').split(' ').pop();
        var lightboxCoord = $('#hh-lightbox-images').offset();
        var imgCoord = $('#hh-lightbox-images .entry-image.' + imgClass).offset();
        var imgScrollTo = imgCoord.top - lightboxCoord.top;
//         console.log(' lightboxCoord= ' + lightboxCoord.top + ' class= ' + imgClass + ' top= ' + imgScrollTo + ' imgCoord= ' + imgCoord.top + ' imgCoordOrigin= ' + imgCoordOrigin.top);
        HH_lightbox_scroll(imgScrollTo);

// #note -> Swap images background
      HH_lightbox_swapimages();

// #note -> add title
      var objectTitle = $(this).closest('.entry').find('.entry-header h2');

      $('#hh-header .menu-item-0').empty();
      objectTitle.clone().appendTo('#hh-header .menu-item-0');

      objectTitle = null;
    }
  );

  object = objectBody = null;

  return true;
}

/* Lightbox Swap image (background tricks)
-------------------------------------------------------------------------------------------------------------------------------- */
function HH_lightbox_swapimages() {
  if (! preferences.hh_lightbox_flag) return false;

  $('#hh-lightbox-images .entry-image').each(
    function(){
      var imageSmall = $(this).find('img').attr('src');
      var imageBig = $(this).find('img').attr('data-srcbig');

      $(this).css('background-image', 'url(' + imageSmall + ')');
      $(this).find('p').css('background-image', 'url(' + imageBig + ')');
    }
  );

  return true;

}


/* Lightbox Menu
-------------------------------------------------------------------------------------------------------------------------------- */

function HH_lightbox_menu() {
  if (! preferences.hh_lightbox_flag) return false;

  var object = $('#hh-header .access .menu-0 .menu-item-0 a, #hh-header .access .menu-0 .menu-item-1 a');

  object.off();
  object.on(
  //object.bind(
    'click', 
    function() {
      if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
      var objectBody = preferences.reusable['body'];

      HH_lightbox_scroll(0);
      objectBody.removeClass('hh-lightbox-flag');

      return false;
    }
  );

  object = null;

  var object2 = $('#hh-header .access .menu-0 .menu-item-2 a');

  object2.off();
  object2.on(
    'click', 
    function() {
      if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
      var objectBody = preferences.reusable['body'];

      HH_lightbox_scroll(0);
      objectBody.removeClass('hh-lightbox-flag');

      HB_autoscroll_url($(this).attr('href'), true, false);

      return false;
    }
  );

  object2 = null;

// #fix -> 2017-11-21 close on image click

  var object3 = $('#hh-lightbox-images');

  object3.off();
  object3.on(
    'click', 
    function() {
      if (! preferences.reusable['body']) preferences.reusable['body'] = $('body');
      var objectBody = preferences.reusable['body'];

      HH_lightbox_scroll(0);
      objectBody.removeClass('hh-lightbox-flag');

      HB_autoscroll_url($(this).attr('href'), true, false);

      return false;
    }
  );

  object3 = null;


}

/* Lightbox Scoll
-------------------------------------------------------------------------------------------------------------------------------- */

function HH_lightbox_scroll(input_y) {
  $('#hh-lightbox-background').scroll();
  $('#hh-lightbox-background').animate({
    scrollTop: input_y
  }, 800);
}


