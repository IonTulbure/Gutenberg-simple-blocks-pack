<?php

/**
 * Gutenberg Simple Blocks Pack
 *
 * @package           GutenbergSimpleBlocksPack
 * @author            Ion Tulbure
 * @copyright         2024 Ion Tulbure
 * @license           GPL v3
 *
 * @wordpress-plugin
 * Plugin Name:       Gutenberg Simple Blocks Pack
 * Plugin URI:        https://mustcode.xyz
 * Description:       A collection of blocks to extend Gutenberg.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Ion Tulbure
 * Author URI:        https://mustcode.xyz
 * Text Domain:       gutenberg-simple-blocks-pack
 * License:           GPL v3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html#license-text
 */

// Prevent direct access.
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Current plugin version.
 */
define('GUTENBERG_SIMPLE_BLOCKS_PACK_VERSION', '1.0.0');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

/* add_action('init', 'mcx_gsbp_blocks_init');

function mcx_gsbp_blocks_init()
{
    // Point to each folder that corresponds to each block within build
    register_block_type(__DIR__ . '/build/accordion');
    register_block_type(__DIR__ . '/build/simple-slider');
} */

add_action('init', 'mcx_gsbp_blocks_init');

function mcx_gsbp_blocks_init()
{
    // Generates an array of directory paths based on the build folder
    $mcx_block_directories = glob(__DIR__ . "/build/*", GLOB_ONLYDIR);

    foreach ($mcx_block_directories as $block) {
        register_block_type($block);
    }
}

/**
 * Adds block category to the Gutenberg block inserter
 * 
 */

add_filter('block_categories_all', 'mcx_gsbp_block_category', 10, 2);

function mcx_gsbp_block_category($categories, $post)
{
    return array_merge(
        array(
            array(
                'slug' => 'mcx-gsbp-gutenberg-blocks',
                'title' => 'MCX Gutenberg Simple Blocks',
            ),
        ),
        $categories
    );
}
