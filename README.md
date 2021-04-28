#   LocaSnacks™️
## Start animation how-to:


* #### Upload files from **[build_v0.4.0.zip](https://github.com/croqo/loca/releases/download/v0.4.0/build_v0.4.0.zip)** to web server
* #### Update your **functions.php** file with:
```php 
add_action( 'wp_enqueue_scripts', 'crocwork_scripts' );
function locasocks_scripts() {
  wp_enqueue_style( 
    'crocwork-css', get_template_directory_uri() . 
    '/__<path/to/this/file/on/your/server>__' . '/build_v0.4.0.css' );
  wp_enqueue_script( 
    'crocwork-js', get_template_directory_uri() . 
    '/__<path/to/this/file/on/your/server>__' . '/build_v0.4.0.js' );
}
```
* #### Insert this fragment to your HTML 
```html
<div class="modal is-active">
    <div class="modal-background primary">
        <figure 
            class="lottie" 
            data-name="logo"
            >
        </figure>
    </div>
    <div class="modal-background acrylic is-link"></div>
    <div class="modal-content">
        <figure 
            class="lottie" 
            data-name="button" 
            onclick="window.crocwork.action('bells')" 
            >
        </figure>
    </div>
</div>

<audio class="sound" data-name="jingle">
    <source src="__<path/to/this/file/on/your/server>__/jingle.webm">
    <source src="__<path/to/this/file/on/your/server>__/jingle.mp3">
</audio>
```
* #### Profit! ([demo page link](https://locasnack.croc.work))
