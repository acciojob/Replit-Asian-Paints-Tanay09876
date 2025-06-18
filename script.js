document.getElementById('change_button').addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = 'transparent';
  }

  
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

document.getElementById('reset_button').addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = 'transparent';
  }
});
