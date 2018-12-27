<?php

/*
** Enqueue scripts and styles
*/
  function syp_scripts() {

    $parent_style = 'bard-style';

    // Theme Stylesheet
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css', array(), '1.4.9.5' );

    // Fontello Icons
    wp_enqueue_style( 'syp_fontello', get_template_directory_uri( '/assets/css/fontello.css' ), array( $parent_style ) );

    // Slick Slider
    wp_enqueue_style( 'syp_slick', get_template_directory_uri( '/assets/css/slick.css' ) );

    // Scrollbar
    wp_enqueue_style( 'syp_scrollbar', get_template_directory_uri( '/assets/css/perfect-scrollbar.css' ) );

    // WooCommerce
    wp_enqueue_style( 'syp_bard-woocommerce', get_template_directory_uri( '/assets/css/woocommerce.css' ) );

    // Theme Responsive CSS
    wp_enqueue_style( 'syp_bard-responsive', get_template_directory_uri( '/assets/css/responsive.css' ) );

    // Enqueue Custom Scripts
    wp_enqueue_script( 'syp_bard-plugins', get_template_directory_uri( '/assets/js/custom-plugins.js' ), array( 'jquery' ), false, true );
    wp_enqueue_script( 'syp_bard-custom-scripts', get_template_directory_uri( '/assets/js/custom-scripts.js' ), array( 'jquery' ), false, true );

    // Comment reply link
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
      wp_enqueue_script( 'syp_comment-reply' );
    }

    wp_enqueue_style( 'child-style',
      get_stylesheet_directory_uri() . '/style.css',
      array( $parent_style ),
      wp_get_theme()->get('Version')
    );

    wp_enqueue_script( 'syp_mainjs', get_stylesheet_directory_uri() . '/main.js', false, true );
    
  }
  add_action( 'wp_enqueue_scripts', 'syp_scripts' );













?>