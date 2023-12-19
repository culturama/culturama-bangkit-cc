const myMiddleware = (request, h) => {
  // Logic sebelum penanganan permintaan

  // Contoh: Log informasi tentang permintaan
  console.log(`Incoming request: ${request.method.toUpperCase()} ${request.path}`);

  // Lanjutkan ke handler berikutnya
  return h.continue;
};

module.exports = myMiddleware;
