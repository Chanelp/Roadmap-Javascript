const textToCopy = document.querySelector('#textToCopy');

textToCopy.addEventListener('copy', showMessagewhenCopy);

function showMessagewhenCopy() {
    alert('Text copied!!')
}