const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const text = event.target.result;

    let i = 0;
    const intervalId = setInterval(() => {
      output.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  };

  reader.readAsText(file);
});

