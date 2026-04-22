const WHATSAPP_NUMBER = '5512991952950';
const WHATSAPP_MESSAGE =
  'Olá, vim pela página da Genial 3D Impressões e quero mais informações sobre o colecionável 3D.';

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll('.js-whatsapp-link').forEach((link) => {
  link.setAttribute('href', whatsappUrl);
});

document.querySelectorAll('.image-frame img').forEach((img) => {
  const frame = img.closest('.image-frame');

  if (!frame) return;

  img.addEventListener('error', () => {
    frame.classList.add('is-missing');
  });

  if (img.complete && img.naturalWidth === 0) {
    frame.classList.add('is-missing');
  }
});
