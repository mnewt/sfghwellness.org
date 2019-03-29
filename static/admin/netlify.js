import CMS from 'netlify-cms';

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate);

if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', user => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}
