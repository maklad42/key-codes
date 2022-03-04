document.addEventListener('keypress', function onPress(e) {
  console.log(e);
  let keyblock = document.querySelector('.codes');
  let oldkey = document.querySelector('.wrapper');
  if (oldkey) {
    oldkey.remove();
  }
  let wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  let key = document.createElement('div');
  key.className = 'key';
  key.innerText = e.key;

  let cc = document.createElement('div');
  cc.className = 'charCode';
  cc.innerHTML = e.key.charCodeAt(0);
  wrapper.append(key);
  wrapper.append(cc);
  keyblock.append(wrapper);
});
