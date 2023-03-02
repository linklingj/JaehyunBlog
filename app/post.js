const photoInput = document.getElementById('photo');
const previewImg = document.getElementById('preview');

photoInput.addEventListener('change', () => {
    const selectedPhoto = photoInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        previewImg.src = reader.result;
        previewImg.style.display = 'block';
    });

    reader.readAsDataURL(selectedPhoto);
});