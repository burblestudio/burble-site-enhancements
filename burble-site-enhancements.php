<?php

/**
 * Plugin Name:       Burble Site Enhancements
 * Description:       Burble Site Enhancements's plugin description
 * Requires at least: 6.3.0
 * Requires PHP:      7.4
 * Version:           0.1.0
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

// Enqueue admin shortcuts script for logged-in administrators (both front-end and back-end)
function enqueue_admin_shortcuts_script() {
    if ( is_user_logged_in() && current_user_can('administrator') ) {
        wp_enqueue_script( 'admin-shortcuts', plugin_dir_url( __FILE__ ) . 'js/admin-shortcuts.js', array(), '1.0', true );
    }
}
add_action( 'admin_enqueue_scripts', 'enqueue_admin_shortcuts_script' );
add_action( 'wp_enqueue_scripts', 'enqueue_admin_shortcuts_script' );

// Enqueue duplicate posts script only on specific admin pages
function enqueue_duplicate_posts_script($hook_suffix) {
    if ( current_user_can('edit_posts') || current_user_can('edit_pages') ) {
        if ( strpos($hook_suffix, 'edit.php') !== false ) {
            include plugin_dir_path( __FILE__ ) . 'inc/duplicate-posts.php';
        }
    }
}
add_action( 'admin_enqueue_scripts', 'enqueue_duplicate_posts_script' );

// Enqueue front-end CSS for logged-in editors or higher
function enqueue_custom_frontend_css() {
    if ( is_user_logged_in() && current_user_can('edit_others_posts') ) {
        wp_enqueue_style( 'brble-inbricks', plugin_dir_url( __FILE__ ) . 'css/brble-inbricks.css', array(), '1.0' );
    }
}
add_action( 'wp_enqueue_scripts', 'enqueue_custom_frontend_css' );
