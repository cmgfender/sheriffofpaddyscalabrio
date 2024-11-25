document.querySelector('.add-tool').addEventListener('click', () => {
    const toolsSection = document.querySelector('.tools-section');
    const newTool = document.createElement('div');
    newTool.classList.add('tool-placeholder');
    newTool.innerHTML = `
      <h3>New Tool</h3>
      <p>Description for the new tool goes here.</p>
    `;
    toolsSection.insertBefore(newTool, document.querySelector('.add-tool'));
  });