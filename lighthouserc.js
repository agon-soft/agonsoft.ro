module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: process.env.LHCI_SERVER_URI
      },
    },
  };
