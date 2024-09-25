// Select all menu card images and the popup elements
const menuCards = document.querySelectorAll('.menu-card');
const popupImage = document.querySelector('.popup-image');
const popupClose = document.querySelector('.popup-image .close');
const popupImg = popupImage.querySelector('img');


//function untuk membuka popup dengah gambar
menuCards.forEach(card => {
  const img = card.querySelector('img');
  img.addEventListener('click', () => {
    popupImage.style.display = 'flex'; // memperlihatkan popup
    popupImg.src = imgrendang.src; // Set the popup image source
  });
});

//menutup popup saat tombol silang di pencet
popupClose.addEventListener('click', () => {
  popupImage.style.display = 'none'; // hilangkan pop up
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric',second:'numeric'  };
    return date.toLocaleDateString(undefined, options);
}

//Fungsi untuk memperbarui tanggal
function updateDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    const dateElement = document.getElementById('date-display');
    dateElement.textContent = formattedDate;````````````````````````````````````````````````````````````````````
}

//Panggil fungsi updateDate saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateDate);
document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(updateDate, 1000);
    //Ambil elemen link Sign in
    const signUpLink = document.getElementById('sign-up-link');

    //Tambahkan pendengar event klik pada link Sign in
    signUpLink.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default link
        window.location.href = 'login.html'; // Arahkan ke login.html
    });
});