// bai1
  const lab7Img = document.querySelector('.container img');
  
  lab7Img.addEventListener('mouseover', function(event){
    lab7Img.src = './img/2.jpg';
    console.log(lab7Img);
  });
  lab7Img.addEventListener('mouseout', function(event){
    lab7Img.src = './img/0.jpg';
  });
  
  lab7Img.addEventListener('click', function(event){
    lab7Img.src = './img/1.jpg';
  });
// bai1

// bai2