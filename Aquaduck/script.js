document.addEventListener('DOMContentLoaded', function() {
    // Bubble animation setup
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    bubbleContainer.style.position = 'fixed';
    bubbleContainer.style.top = '0';
    bubbleContainer.style.left = '0';
    bubbleContainer.style.width = '100%';
    bubbleContainer.style.height = '100%';
    bubbleContainer.style.pointerEvents = 'none';
    bubbleContainer.style.zIndex = '100';
    document.body.appendChild(bubbleContainer);

    // Navigation hover effects
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            // Play quack sound
            // No data-sound attribute found, commenting this part
            // if (this.dataset.sound) {
            //     const quack = new Audio(`/sounds/${this.dataset.sound}.mp3`);
            //     quack.play();
            // }
            
            // Create ripple effect
            createRipple(e.clientX, e.clientY);
            
            // Generate random bubbles
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createBubble(Math.random() * window.innerWidth, window.innerHeight + 20);
                }, i * 200);
            }
        });
    });

    function createBubble(x, y) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        bubble.style.width = `${10 + Math.random() * 20}px`;
        bubble.style.height = bubble.style.width;
        bubbleContainer.appendChild(bubble);
        
        // Animation
        const duration = 2 + Math.random() * 3;
        bubble.style.transition = `all ${duration}s ease-out`;
        setTimeout(() => {
            bubble.style.transform = `translateY(-${window.innerHeight + 100}px) translateX(${(Math.random() - 0.5) * 100}px)`;
            bubble.style.opacity = '0';
        }, 10);
        
        // Clean up
        setTimeout(() => bubble.remove(), duration * 1000);
    }

    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.transform = 'scale(20)';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => ripple.remove(), 1000);
    }
});
