<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head profile="http://gmpg.org/xfn/11">
    <title><?php
        if ( is_single() ) { single_post_title(); }
        elseif ( is_home() || is_front_page() ) { bloginfo('name'); print ' | '; bloginfo('description'); get_page_number(); }
        elseif ( is_page() ) { single_post_title(''); }
        elseif ( is_search() ) { bloginfo('name'); print ' | Search results for ' . wp_specialchars($s); get_page_number(); }
        elseif ( is_404() ) { bloginfo('name'); print ' | Not Found'; }
        else { bloginfo('name'); wp_title('|'); get_page_number(); }
    ?></title>
 
    <meta http-equiv="content-type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
 
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" />
 
    <?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

    <?php wp_head(); ?>
 
    <link rel="alternate" type="application/rss+xml" href="<?php bloginfo('rss2_url'); ?>" title="<?php printf( __( '%s latest posts', 'hbd-theme' ), wp_specialchars( get_bloginfo('name'), 1 ) ); ?>" />
    <link rel="alternate" type="application/rss+xml" href="<?php bloginfo('comments_rss2_url') ?>" title="<?php printf( __( '%s latest comments', 'hbd-theme' ), wp_specialchars( get_bloginfo('name'), 1 ) ); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
</head>
<body>
<div id="wrapper" class="hfeed">
    <div id="header">
		<div class="topbar">
			<div class="logo">
				<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logouwv.png" height="50px" width="auto"/>
			</div>
				<div id="masthead">
		 
					<div id="access">
						<!--<div class="skip-link"><a href="#content" title="<?php _e( 'Skip to content', 'hbd-theme' ) ?>"><?php _e( 'Skip to content', 'hbd-theme' ) ?></a></div>-->
						<?php #wp_page_menu( 'sort_column=menu_order' ); ?>
						<?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container_class' => 'menu-header' ) ); ?>
					</div><!-- #access -->
					
		
					
				</div><!-- #masthead -->
			</div>
			<div class="searchbar">


        <input type="text" name="searchterm" placeholder="Zoekterm...">
        Sorteer op:
        <select name="sort">
          <option value="Aflopend">Nieuw naar Oud</option>
          <option value="Oplopend">Oud naar Nieuw</option>
          <option value="Actief">Actief</option>
          <option value="Inactief">Inactief</option>
        </select>
        <input type="submit" value="Zoek" /> 
    </form>
</div>
<div class="addvacancybar">
    <h2><a href="add.php">+ Nieuwe vacature aanmaken</a></h2>
</div>
    </div><!-- #header -->
 
    <div id="main">