// Smooth scrolling cho navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiển thị năm hiện tại ở footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Xử lý form liên hệ (ví dụ cơ bản, bạn cần backend để xử lý gửi email thật)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Lấy dữ liệu từ form
        const name = this.name.value;
        const email = this.email.value;
        const message = this.message.value;

        // Ở đây bạn có thể thêm logic gửi email bằng AJAX đến một backend API
        // Hoặc sử dụng một dịch vụ như Formspree, EmailJS

        alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được nhận (đây chỉ là demo).`);
        this.reset(); // Xóa form sau khi gửi
    });
}

// Hiệu ứng xuất hiện khi cuộn (tùy chọn)
const sections = document.querySelectorAll('section');
const options = {
    root: null, // Quan sát trong viewport
    threshold: 0.1, // Kích hoạt khi 10% section hiển thị
    rootMargin: "-50px" // Giảm vùng quan sát một chút
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear'); // Thêm class 'appear' khi section vào viewport
        observer.unobserve(entry.target); // Ngừng quan sát sau khi đã xuất hiện
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Thêm CSS cho hiệu ứng 'appear' (thêm vào file style.css)
/*
section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.appear {
    opacity: 1;
    transform: translateY(0);
}
*/
// Bỏ comment phần CSS trên nếu bạn muốn sử dụng hiệu ứng này.
// Bạn có thể thêm class 'hidden' ban đầu cho các section trong HTML và JS sẽ xóa nó đi.