// const loadJS = uri => {
//   const s = document.createElement('script');
//   s.src = uri;
//   document.head.appendChild(s);
// };

// exports.onInitialClientRender = () => {
//   loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
//   loadJS(
//     'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.min.js'
//   );
//   loadJS('/main.js');
// };

// var scripts = [
//   'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
//   'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.min.js',
//   // '/main.js',
// ];

// // https://stackoverflow.com/a/41092221

// const createScriptElement = uri => {
//   const script = document.createElement('script');
//   script.src = uri;
//   return script;
// };

// const createScriptSequence = scripts => {
//   var els = [];
//   //Create all the script elements
//   scripts.forEach((script, index) => {
//     //console.log(script);
//     els.push(createScriptElement(script));
//     if (index > 0) {
//       //Add an onload listener for each script (except the last) which loads
//       //  the next one in the sequence.
//       els[index - 1].addEventListener(
//         'load',
//         function oneTime() {
//           //Probably don't need to remove this, but better to clean things up.
//           els[index - 1].removeEventListener('load', oneTime, false);
//           document.head.appendChild(els[index]);
//         },
//         false
//       );
//     }
//   });
//   //Return the first script in the sequence
//   return els[0];
// };

// exports.onInitialClientRender = () => {
//   document.head.appendChild(createScriptSequence(scripts));
// };
