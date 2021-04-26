<?php
/* Template Name: Home */ 


get_header(); 
?>
<div class="home_page">
     <div id="home_slider" class="owl-carousel owl-theme">
           <?php
		     if ( have_rows('slider') ) :
		      $count_slide=0;
			      while ( have_rows('slider') ) : the_row(); 
		  ?>
		  <?php if($count_slide==0){ ?>
		  <div class="item">
		       <img class='dekstop' src="<?php echo get_sub_field("background_image"); ?>">
			  <?php 
				if(get_sub_field("background_image_ipad") != '')
				{
					echo "<img src='".get_sub_field("background_image_ipad")."' class='ipad' />";
				}
					if(get_sub_field("background_image_mobile") != '')
				{
					echo "<img src='".get_sub_field("background_image_mobile")."' class='mobile' />";
				}
									
			?>
			  
                  <div class="banner-section slide1">
					  <div class="video_animation">
		                     <img src="<?php echo get_sub_field("image_1"); ?>">
		               </div>
		               <div class="text_section">
		                  <h1><?php echo get_sub_field("main_heading"); ?></h1>
		                  <img src="<?php echo get_sub_field("image"); ?>">
		               </div> 
                  </div>
		    </div>
		    <?php } else if($count_slide==1) { ?>
			  <div class="item">
		       <img class='dekstop' src="<?php echo get_sub_field("background_image"); ?>">
				   <?php 
				if(get_sub_field("background_image_ipad") != '')
				{
					echo "<img src='".get_sub_field("background_image_ipad")."' class='ipad' />";
				}
					if(get_sub_field("background_image_mobile") != '')
				{
					echo "<img src='".get_sub_field("background_image_mobile")."' class='mobile' />";
				}
									
			?>
                  <div class="banner-section slide2">
					  <div class="video_animation">
		                     <img src="<?php echo get_sub_field("image_1"); ?>">
		               </div>
		               <div class="text_section">
		                  <h1><?php echo get_sub_field("main_heading"); ?></h1>
		                  <img src="<?php echo get_sub_field("image"); ?>">
		               </div> 
                  </div>
		    </div>	
			<?php } else { ?>
			<div class="item">
		       <img class='dekstop' src="<?php echo get_sub_field("background_image"); ?>">
				 <?php 
				if(get_sub_field("background_image_ipad") != '')
				{
					echo "<img src='".get_sub_field("background_image_ipad")."' class='ipad' />";
				}
					if(get_sub_field("background_image_mobile") != '')
				{
					echo "<img src='".get_sub_field("background_image_mobile")."' class='mobile' />";
				}
									
			?>
                  <div class="banner-section slide3">
					  <div class="text_section">
		                <h1><?php echo get_sub_field("main_heading"); ?></h1>
		                <img src="<?php echo get_sub_field("image"); ?>">
		               </div>
		                <div class="video_animation">
		                     <img src="<?php echo get_sub_field("image_1"); ?>">
		                 </div>
                  </div>
		    </div>
		    <?php } ?>	
		    <?php
		        $count_slide++;
	             endwhile;
            endif;
	     ?>
    </div>
</div>
<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
<?php get_footer(); ?>