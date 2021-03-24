<?php

namespace HAMWORKS\Wp_Boilerplate\Theme;

/**
 * Class Theme_Setup
 *
 * @package HAMWORKS\Wp_Boilerplate\Theme
 */
class Theme_Setup {
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'text_domain_setup' ) );
		add_action( 'after_setup_theme', array( $this, 'add_theme_supports' ) );
		add_action( 'after_setup_theme', array( $this, 'set_content_width' ), 0 );
	}

	public function text_domain_setup() {
		load_theme_textdomain( 'wp-boilerplate', get_template_directory() . '/languages' );
	}

	public function add_theme_supports() {
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}

	public function set_content_width() {
		$GLOBALS['content_width'] = apply_filters( 'wp_boilerplate_content_width', 640 );
	}
}
