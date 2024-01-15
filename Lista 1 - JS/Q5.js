function processarArquivo() {
  // Obtém o elemento de entrada de arquivo
  const fileInput = document.getElementById('fileInput');

  // Verifica se um arquivo foi selecionado
  if (fileInput.files.length > 0) {
      // Obtém o primeiro arquivo do input
      const arquivo = fileInput.files[0];

      // Obtém informações do arquivo
      const nomeArquivo = arquivo.name;
      const tamanhoArquivo = arquivo.size; // em bytes
      const extensaoArquivo = nomeArquivo.split('.').pop();

      // Exibe as informações do arquivo
      const infoArquivoElement = document.getElementById('infoArquivo');
      infoArquivoElement.innerHTML = `
          <p><strong>Nome do Arquivo:</strong> ${nomeArquivo}</p>
          <p><strong>Tamanho do Arquivo:</strong> ${tamanhoArquivo} bytes</p>
          <p><strong>Extensão do Arquivo:</strong> ${extensaoArquivo}</p>
      `;
  } else {
      alert("Por favor, selecione um arquivo.");
  }
}
