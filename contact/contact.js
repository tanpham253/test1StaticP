function registerNow() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let dateofbirth = document.getElementById('dateofbirth').value;    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let content = document.getElementById('content').value;
    if(name === '' || phone === ''|| address === '' ||email === ''||content === ''){
        alert('Vui lòng điền đầy đủ thông tin !')
        return;
    }
    if (password !== confirmPassword){
        alert('Xác nhận mật khẩu không trùng khớp !')
        return;
    }
    if(!check){
        alert('Vui lòng đồng ý với điều khoản !')
        return;
    }

    let Registers = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
    console.log("Tạo tài khoản thành công:", Registers);
    alert("Đăng ký thành công!");
}