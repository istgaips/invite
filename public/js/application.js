jQuery(document).ready(function(){
	$('body').addClass('js-active');	
	
	$('#logo').cycle({ 
	    fx:    'fade',
	    continuous: 1,
	    speed: 10000,
	    delay: 20000
	 });
});

function changeImage(current) {
    var imagesNumber = 6;
 
    for (i=1; i<=imagesNumber; i++) {
        if (i == current) {
            document.getElementById("normal" + current).style.display = "block";
        } else {
            document.getElementById("normal" + i).style.display = "none";
        }
    }
};

function changePreview(current) {

    document.getElementById("preview").src = document.getElementById("img" + i).src;

};
