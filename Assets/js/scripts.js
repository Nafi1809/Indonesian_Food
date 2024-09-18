document.querySelectorAll('.row .menu-card img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'Block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

// Fungsi untuk menutup popup dengan tombol close
document.querySelector('.popup-image .close').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

// Fungsi untuk menutup popup jika klik di luar gambar
document.querySelector('.popup-image').onclick = (event) => {
    if (event.target === document.querySelector('.popup-image')) {
        document.querySelector('.popup-image').style.display = 'none';
    }
};
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Fungsi untuk memperbarui tanggal
function updateDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    const dateElement = document.getElementById('date-display');
    dateElement.textContent = formattedDate;
}

// Panggil fungsi updateDate saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateDate);
document.addEventListener('DOMContentLoaded', (event) => {
    // Ambil elemen link Sign in
    const signUpLink = document.getElementById('sign-up-link');

    // Tambahkan pendengar event klik pada link Sign in
    signUpLink.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default link
        window.location.href = 'login.html'; // Arahkan ke login.html
    });
});