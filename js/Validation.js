function Validation(){
  this.kiemTraRong = function(input, spanId, message){
    if(input === ''){
      spanId.style.display = 'block';
      spanId.innerHTML = message;
      return false;
    }
    spanId.style.display = 'none';
    spanId.innerHTML = "";
    return true;
  };

  this.kiemTraChucVu = function(id, spanId, message){
    if(id.selectedIndex !== 0){
      spanId.style.display = 'none';
      spanId.innerHTML = "";
      return true;
    }
    spanId.style.display = 'block';
    spanId.innerHTML = message;
    return false;
  };

  this.kiemTraDoDaiKyTu = function(input, min, max, spanId, message) {
    if(input.length>min && input.length<max){
      spanId.style.display = 'none';
      spanId.innerHTML ='';
      return true;
    }
    spanId.style.display = 'block';
    spanId.innerHTML = message;
    return false;
  };

  this.kiemTraChuoi = function (input, spanId, message){
    var letters = /^[A-Za-z]+$/; 
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"+"ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    if(pattern.test(input)){
      spanId.style.display = 'none';
      spanId.innerHTML ='';
      return true;
    }
    spanId.style.display = 'block';
    spanId.innerHTML = message;
    return false;
  };
  
  this.kiemTraEmails = function(input, spanId, message){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.match(mailformat)){
      spanId.style.display = 'none';
      spanId.innerHTML ='';
      return true;
    }
    spanId.style.display = 'block';
    spanId.innerHTML = message;
    return false;
  };

  
}