const listNhanVien = new ListNhanVien();
const validation = new Validation();

function getE(id){
  return document.getElementById(id);
}

// obj btn
const btnThem    = getE('btnThem');
const btnThemNV  = getE('btnThemNV');
const btnCapNhat = getE('btnCapNhat');
// 

btnThem.addEventListener('click', function(event){
  btnCapNhat.style.display = 'none';
});

btnThemNV.addEventListener('click', function(event){
  // lay value 6 input nhap vao
  const maNV   = getE('msnv').value;
  const tenNV  = getE('name').value;
  const email  = getE('email').value;
  const pass   = getE('password').value;
  const date   = getE('datepicker').value;

  const chucvu = getE('chucvu').value;

  const tbMaNV    = getE('tbMaNV');
  const tbTen     = getE('tbTen');
  const tbEmail   = getE('tbEmail');
  const tbMatKhau = getE('tbMatKhau');
  const tbNgay    = getE('tbNgay');
  const tbChucVu  = getE('tbChucVu');

  var isValid = true;
  isValid &= validation.kiemTraRong(maNV, tbMaNV, 'maNV khong duoc rong');

  isValid &= validation.kiemTraRong(tenNV, tbTen, 'tenNV khong duoc rong') && validation.kiemTraDoDaiKyTu(tenNV, 4, 11, tbMaNV, 'do dai ky tu 4-10 ') && validation.kiemTraChuoi(tenNV, tbMaNV, 'ki tu phai bat dau bang ki tu /^[A-Za-z]');

  isValid &= validation.kiemTraRong(email, tbEmail, 'email khong duoc rong') && validation.kiemTraEmails(email, tbEmail, 'email khong dung dinh dang');

  isValid &= validation.kiemTraRong(pass, tbMatKhau, 'password khong duoc rong');

  isValid &= validation.kiemTraRong(date, tbNgay, 'date khong duoc rong');

  isValid &= validation.kiemTraChucVu(chucvu, tbChucVu, 'moi chon chuc vu');


  if(isValid){
    createTable();
  }


  const NV     = new NhanVien(maNV, tenNV, email, pass, date, chucvu);
  listNhanVien.addNV(NV);
  console.log(NV);
  console.log(listNhanVien);
});

function createTable(){
  const tableDanhSach = getE('tableDanhSach');
  tableDanhSach.innerHTML = '';

  for(var i=0; i< listNhanVien.listNV.length; i++){
    var tagTR = document.createElement('tr');

    var td_maNV = document.createElement('td');
    var td_tenNV = document.createElement('td');
    var td_email = document.createElement('td');
    var td_date = document.createElement('td');

    td_maNV.innerHTML = listNhanVien.listNV[i].maNV;
    td_tenNV.innerHTML = listNhanVien.listNV[i].tenNV;
    td_email.innerHTML = listNhanVien.listNV[i].email;
    td_date.innerHTML = listNhanVien.listNV[i].date;
    td_chucvu.innerHTML = listNhanVien.listNV[i].chucvu;

    tagTR.appendChild(td_maNV);
    tagTR.appendChild(td_tenNV);
    tagTR.appendChild(td_email);
    tagTR.appendChild(td_date);
    tagTR.appendChild(td_chucvu);

    tableDanhSach.appendChild(tagTR);

// cach 2 - append phai reset tbody, inner k phai reset
    var contentHTML = '';
    listNhanVien.listNV.map(function(item, index, arr){
      contentHTML += `
        <tr>
          <td>${item.maNV}</td>
          <td>${item.tenNV}</td>
          <td>${item.email}</td>
          <td>${item.date}</td>
          <td>${item.chucvu}</td>
        </tr>
      `;
    });
    tableDanhSach.innerHTML = contentHTML;
  }
}