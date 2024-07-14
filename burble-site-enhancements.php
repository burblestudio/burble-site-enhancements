<?php

/**
 * Plugin Name:       Burble Site Enhancements
 * Description:       Burble Site Enhancements's plugin description
 * Requires at least: 6.3.0
 * Requires PHP:      7.4
 * Version:           0.0.1
 * Author:            burblestudio
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       burble_site_enhancements
 * Website:           https://burblestudio.com
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$plugin_prefix = 'BURBLESITEENHANCEMENTS';

// Extract the version number
$plugin_data = get_file_data(__FILE__, ['Version' => 'Version']);

// Plugin Constants
define($plugin_prefix . '_DIR', plugin_basename(__DIR__));
define($plugin_prefix . '_BASE', plugin_basename(__FILE__));
define($plugin_prefix . '_PATH', plugin_dir_path(__FILE__));
define($plugin_prefix . '_VER', $plugin_data['Version']);
define($plugin_prefix . '_CACHE_KEY', 'burble_site_enhancements-cache-key-for-plugin');
define($plugin_prefix . '_REMOTE_URL', 'https://brickslibrary.burbledev.com/wp-content/uploads/downloads/173/info.json');

require constant($plugin_prefix . '_PATH') . 'inc/update.php';

new DPUpdateChecker(
	constant($plugin_prefix . '_DIR'),
	constant($plugin_prefix . '_VER'),
	constant($plugin_prefix . '_CACHE_KEY'),
	constant($plugin_prefix . '_REMOTE_URL'),
	constant($plugin_prefix . '_BASE')
);

function cks_enqueue_admin_scripts() {
    wp_enqueue_script('cks-admin-js', plugins_url('/js/admin-shortcuts.js', __FILE__), array('jquery'), null, true);
}

add_action('admin_enqueue_scripts', 'cks_enqueue_admin_scripts');