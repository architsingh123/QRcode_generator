const generateBtn = document.getElementById('generate-btn');
const qrInput = document.getElementById('qr-input');
const qrCodeDiv = document.getElementById('qr-code');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
  const inputValue = qrInput.value;

  if (inputValue.trim() !== '') {
    qrCodeDiv.innerHTML = ''; // Clear previous QR code

    const qr = new QRCode(qrCodeDiv, {
      text: inputValue,
      width: 200,
      height: 200,
    });
  }
}
