// Ham toi uu code
function getEle(id) {
    return document.getElementById(id);
}
// Kiem tra nguoi dung chon loai xe
function LayLoaiXe() {
    var kq;
    var uberX = getEle("uberX").checked;
    var uberSUV = getEle("uberSUV").checked;
    var uberBlack = getEle("uberBlack").checked;

    if (uberX) {
        kq = "uberX";
    } else if (uberSUV) {
        kq = "uberSUV";
    } else if (uberBlack) {
        kq = "uberBlack";
    }
    return kq;
}

// Xu ly su kien tinh tien
getEle("tinhTien").addEventListener("click", function() {
    // Lay gia tri nhap vao
    var soKm = getEle("soKm").value;
    soKm = +soKm;
    var soTime = getEle("soTime").value;
    soTime = +soTime;
    // Goi ham lay ra loai xe
    var loaiXe = LayLoaiXe();
    // Show thong bao khi chua nhap thong tin
    if (soKm == "" || soTime == "" || loaiXe == null) {
        alert("Vui lòng điền đủ thông tin !!!");
    }
    // Tinh tien theo loai xe
    var thanhTien = 0;
    var km1UberX = 8000;
    var tGianUberX = 2000;
    var km1UberSUV = 9000;
    var tGianUberSUV = 3000;
    var km1UberBlack = 10000;
    var tGianUberBlack = 4000;
    switch (loaiXe) {
        case "uberX":
            if (soKm < 1) {
                thanhTien = soKm * km1UberX + soTime * tGianUberX;
            } else if (soKm >= 1 && soKm <= 20) {
                thanhTien = km1UberX + (soKm - 1) * 12000 + soTime * tGianUberX;
            } else if (soKm > 20) {
                thanhTien = km1UberX + 20 * 12000 + (soKm - 21) * 10000 + soTime * tGianUberX;
            }
            break;
        case "uberSUV":
            if (soKm < 1) {
                thanhTien = soKm * km1UberSUV + soTime * tGianUberSUV;
            } else if (soKm >= 1 && soKm <= 20) {
                thanhTien = km1UberSUV + (soKm - 1) * 14000 + soTime * tGianUberSUV;
            } else if (soKm > 20) {
                thanhTien = km1UberSUV + 20 * 14000 + (soKm - 21) * 12000 + soTime * tGianUberSUV;
            }
            break;
        case "uberBlack":
            if (soKm < 1) {
                thanhTien = soKm * km1UberBlack + soTime * tGianUberBlack;
            } else if (soKm >= 1 && soKm <= 20) {
                thanhTien = km1UberBlack + (soKm - 1) * 16000 + soTime * tGianUberBlack;
            } else if (soKm > 20) {
                thanhTien = km1UberBlack + 20 * 16000 + (soKm - 21) * 14000 + soTime * tGianUberBlack;
            }
            break;

        default:
            break;
    }
    // Hien thi div thanh tien
    getEle("divThanhTien").style.display = "block";
    var spanTien = getEle("xuatTien");
    // in ra man hinh
    spanTien.innerHTML = thanhTien;
});


// Tao bang hoa don
function createTable() {
    var contentTbody = "";
    contentTbody = contentTbody + `
        <tr>
            <td>${loaiXe}</td>
            <td>${soKm}</td>
            <td>${soTime}</td>
            <td>${thanhTien}</td>
        </tr>
         <tr>
            <td>${loaiXe}</td>
            <td>${soKm}</td>
            <td>${soTime}</td>
            <td>${thanhTien}</td>
        </tr>
        <tr>
            <td>${loaiXe}</td>
            <td>${soKm}</td>
            <td>${soTime}</td>
            <td>${thanhTien}</td>
        </tr>
        <tr>
            <td>${loaiXe}</td>
            <td>${soKm}</td>
            <td>${soTime}</td>
            <td>${thanhTien}</td>
         </tr>
        `;
};

getEle("inHoaDon").addEventListener("click", function() {
    // Lay gia tri nhap vao
    var soKm = getEle("soKm").value;
    soKm = +soKm;
    var soTime = getEle("soTime").value;
    soTime = +soTime;
    // Goi ham lay ra loai xe
    var loaiXe = LayLoaiXe();
    // Show thong bao khi chua nhap thong tin
    if (soKm == "" || soTime == "" || loaiXe == null) {
        alert("Vui lòng điền đủ thông tin !!!");
    };

});