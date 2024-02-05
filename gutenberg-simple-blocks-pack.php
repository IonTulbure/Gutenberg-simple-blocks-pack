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

add_action('init', 'mcx_gsbp_blocks_init');

function mcx_gsbp_blocks_init()
{
    // Point to each folder that corresponds to each block within build
    register_block_type(__DIR__ . '/build/horizontal-slider');
    register_block_type(__DIR__ . '/build/vertical-slider');
    register_block_type(__DIR__ . '/build/simple-slider');
}
