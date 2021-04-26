<?php

add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

function add_theme_scripts() {
	// wp_enqueue_style( 'custom-fonts', get_template_directory_uri() . '/assets/fonts/ProximaNova-Black/stylesheet.css' );
	// wp_enqueue_style( 'owl-theme', get_template_directory_uri() . '/assets/css/owl.theme.default.css');
	// wp_enqueue_style( 'owl-crowesl', get_template_directory_uri() . '/assets/css/owl.carousel.min.css' , array('owl-theme'), time());
	// wp_enqueue_style( 'fontawesome-css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css');
	// wp_enqueue_style( 'custom', get_template_directory_uri() . '/assets/css/custom.css');
	// wp_enqueue_style( 'loca', get_template_directory_uri() . '/assets/loca/build_v0.3.1.css');
	// wp_enqueue_style( 'responsive', get_template_directory_uri() . '/assets/css/responsive.css?v='.time(), array(), time() );
	// wp_enqueue_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery.min.js');
	// wp_enqueue_script( 'custom', get_template_directory_uri() . '/assets/js/custom.js' );
	// wp_enqueue_script( 'loca', get_template_directory_uri() . '/assets/loca/build_v0.3.1.js', array('jquery') );
}
