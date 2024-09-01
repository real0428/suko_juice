const texts = ["哈囉，今天心情好嗎？", "歡迎光臨！", "希望您今天過得愉快！"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // 打字速度
const firstDelay = 1000
const newTextDelay = 2000; // 完成後等待時間
const typingEffectElement = document.getElementById('typing-effect');

function type() {
  if (charIndex < texts[textIndex].length) {
    typingEffectElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEffectElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

setTimeout(type, firstDelay);