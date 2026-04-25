document.addEventListener('DOMContentLoaded', function() {
    // 為卡片添加點擊事件
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 檢查是否點擊的是按鈕，防止雙重導航
            if (!e.target.classList.contains('btn-learn-more')) {
                const link = this.querySelector('.btn-learn-more');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });

    const infoCards = document.querySelectorAll('button.info-card');
    infoCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // 平滑滾動
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 頁面加載動畫
    const cards = document.querySelectorAll('.profile-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards`;
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

// 添加淡入動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// 詳細頁面返回按鈕功能
function goBack() {
    window.history.back();
}