exports.onInitialClientRender = () => {
  [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.min.js',
    '/main.js',
  ].forEach(uri => {
    const s = document.createElement('script');
    s.src = uri;
    document.head.appendChild(s);
  });
};
