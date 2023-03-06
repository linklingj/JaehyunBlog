const photoInput = document.getElementById('photo');
const previewImg = document.getElementById('preview');

const title = document.getElementById('title');
const content = document.getElementById('content');

const submitBtn = document.getElementById('submit-btn');

photoInput.addEventListener('change', () => {
    const selectedPhoto = photoInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        previewImg.src = reader.result;
        previewImg.style.display = 'block';
    });

    reader.readAsDataURL(selectedPhoto);
});

submitBtn.addEventListener('click', () => {
    
    var t = title.value;
    var c = content.value;
    var photo = photoInput.files[0];

    if (title == "" || content == "") {
        alert("제목 및 내용을 작성하세요...!");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.addEventListener('load', () => {
        const base64Image = reader.result;

        // Create a new object to store the post data
        const post = {
            title: t,
            content: c,
            image: base64Image, // Convert image file to object URL if it exists
            date: new Date().toISOString()
        };
        
        // Save the post data to local storage
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        if (posts.length > 10) {
            alert("최대 10개까지만 저장할 수 있습니다.");
            return;
        }
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    });


});