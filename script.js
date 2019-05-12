var all_img = document.getElementsByClassName('single-img');
var current_img = document.getElementById('current-img');
var image_number=-1;
for(var i = 0; i<all_img.length;i++){
	all_img[i].setAttribute("data-img", i+1); 
	all_img[i].addEventListener("click",function(){
	current_img.src = this.src;
	if(image_number>0){
		all_img[image_number-1].classList.remove("img-blur");
	}
	this.classList.add("img-blur");
	image_number = this.getAttribute("data-img");
		
	});
}