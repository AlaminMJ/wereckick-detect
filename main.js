const body = document.querySelector(".container");
const pagex = document.querySelectorAll("h2")[0];
const pagey = document.querySelectorAll("h2")[1];

body.addEventListener("dragover", (e) => {
  e.preventDefault();
});
body.addEventListener("drop", (e) => {
  e.preventDefault();
  //   console.log(e);
  const filer = new FileReader();
  filer.onload = () => {
    const res = filer.result;
    const img = `  <img src="${res}" >`;
    body.innerHTML = img;
    console.log(img)
    // body.appendChild(img )

  };

  //   console.log(e.dataTransfer.files[0].type);
  filer.readAsDataURL(e.dataTransfer.files[0]);
});

// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// changedTouches: TouchList {0: Touch, length: 1}
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// isTrusted: true
// metaKey: false
// path: (5) [div.container, body, html, document, Window]
// returnValue: true
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}
// srcElement: div.container
// target: div.container
// targetTouches: TouchList
// 0: Touch {identifier: 0, target: div.container, screenX: 490, screenY: 357, clientX: 364.2585754394531, …}
// length: 1
// [[Prototype]]: TouchList
// timeStamp: 3406
// touches: TouchList
// 0: Touch {identifier: 0, target: div.container, screenX: 490, screenY: 357, clientX: 364.2585754394531, …}
// length: 1
// [[Prototype]]: TouchList
// type: "touchstart"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 0
// [[Prototype]]: TouchEvent

// altKey: false
// altitudeAngle: 1.5707963267948966
// azimuthAngle: 0
// bubbles: true
// button: 0
// buttons: 0
// cancelBubble: false
// cancelable: true
// clientX: 5
// clientY: 3
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 1
// eventPhase: 0
// fromElement: null
// height: 1
// isPrimary: false
// isTrusted: true
// layerX: 5
// layerY: 31
// metaKey: false
// movementX: 0
// movementY: 0
// offsetX: 5
// offsetY: 31
// pageX: 5
// pageY: 31
// path: (4) [body, html, document, Window]
// pointerId: 3
// pointerType: "touch"
// pressure: 0
// relatedTarget: null
// returnValue: true
// screenX: 137
// screenY: 166
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: true}
// srcElement: body
// tangentialPressure: 0
// target: body
// tiltX: 0
// tiltY: 0
// timeStamp: 3430
// toElement: null
// twist: 0
// type: "click"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 1
// width: 1
// x: 5
// y: 3
