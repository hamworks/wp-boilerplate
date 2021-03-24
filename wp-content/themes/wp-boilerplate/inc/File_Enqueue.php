<?php

namespace HAMWORKS\Wp_Boilerplate\Theme;

/**
 * Class File_Enqueue
 *
 * @package HAMWORKS\Wp_Boilerplate\Theme
 */
class File_Enqueue {
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'editor_style_support' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_index_file' ) );
	}

	public function editor_style_support() {
		add_theme_support( 'editor-styles' );
		add_editor_style( 'build/index.css' );
	}

	public function enqueue_index_file() {
		if ( file_exists( dirname( __FILE__ ) . '/../build/index.asset.php' ) ) {
			$asset_file = include dirname( __FILE__ ) . '/../build/index.asset.php';
			wp_enqueue_style( 'wp-boilerplate-index', get_template_directory_uri() . '/build/index.css', array(), $asset_file['version'] );
			wp_enqueue_script(
				'wp-boilerplate-index',
				get_template_directory_uri() . '/build/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		}
	}
}
