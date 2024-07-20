
const typingElement = document.getElementById('typing-element');
  const textToType = 'Hello Guys, Welcome To My Tour Guide Services Berpengalaman selama 3+ Tahun dalam membimbing Tour untuk para wisatawan';
  let index = 0;

  function type() {
    const char = textToType[index];
    if (char === '<') {
      const tag = '';
      while (char !== '>') {
        index++;
        char = textToType[index];
        tag += char;
      }
      typingElement.innerHTML += tag;
    } else {
      typingElement.innerHTML += char;
    }
    index++;
    if (index < textToType.length) {
      setTimeout(type, 50);
    }
  }

  type();

  


 