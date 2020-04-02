import EmojiButton from './emoji-button';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#emoji-button');
  const picker = new EmojiButton();
  document.log("asd");

  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });

    button.addEventListener('click', () => {
      document.log("asdasd");
      picker.togglePicker(button);
    });
}); 