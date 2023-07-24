module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'https://old-snow-4073.fly.dev',
        token: process.env.LHCI_TOKEN
      },
    },
  };
