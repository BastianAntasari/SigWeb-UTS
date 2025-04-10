function klik() {
    var nama, password, alamat;
    nama = document.getElementById("nama").value;
    password = document.getElementById("pass").value;
    if (password !== 'Selesai') {
        alert('password salah, kerjakan lagi');
        return;
    }
    var txt = "Selamat " + nama + ", pekerjaan anda sudah selesai";
    document.getElementById("hasil").innerHTML = txt;
}