let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.URL = window.URL || window.webkitURL;

let upload = document.querySelector('.upload');
let dropbox = document.querySelector('#file');
dropbox.addEventListener('dragenter', dragenter, false);
dropbox.addEventListener('dragover', dragover, false);
dropbox.addEventListener('drop', drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files);
}

function handleFiles(files) {
  if (!files.length) {
    return;
  } else {
    console.log('fff', files);
    for (var i = 0; i < files.length; i++) {
      let item = document.createElement('div');
      item.className = 'upload-item';
      let img = document.createElement('img');
      img.className = 'upload-image';

      img.src = window.URL.createObjectURL(files[i]);
      img.onload = function () {
        window.URL.revokeObjectURL(this.src);
      };

      item.appendChild(img);
      document.querySelector('.image-input').before(item);
    }
  }
}

function handleChangeFiles(files) {
  if (!files.length) {
    return;
  } else {
    for (var i = 0; i < files.length; i++) {
      let item = document.createElement('div');
      item.className = 'upload-item';
      let img = document.createElement('img');
      img.className = 'upload-image';

      img.src = window.URL.createObjectURL(files[i]);
      img.onload = function () {
        window.URL.revokeObjectURL(this.src);
      };

      item.appendChild(img);
      document.querySelector('.image-input').before(item);
    }
  }
}
