<?php

namespace HAMWORKS\Wp_Boilerplate\Theme;

/**
 * Class Menu_Setup
 *
 * @package HAMWORKS\Wp_Boilerplate\Theme
 */
class Menu_Setup {
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'register_menu' ) );
	}

	public function register_menu() {
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'wp-boilerplate' ),
			)
		);
	}
}
