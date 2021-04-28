#   Loca Snacks
## Start animation how-to:

* #### Upload files from **[build.zip](https://github.com/croqo/loca/files/6355414/build.zip)** to web server
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
    <source src="<path/to/this/file/on/your/server>/jingle.webm">
    <source src="<path/to/this/file/on/your/server>/jingle.mp3">
</audio>
```
* #### Profit! ([demo page link](https://loca.croc.work))
