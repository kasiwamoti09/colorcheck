function changeColor(color) {
    document.getElementById("displayBox_1").style.backgroundColor = color;
    document.getElementById("displayBox_2").style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", () => {
  const colorPicker_1 = document.getElementById("colorPicker_1");
  const colorPicker_2 = document.getElementById("colorPicker_2");

  // 選択色表示
  const selectedColorBox_1 = document.getElementById("selectedColorBox_1");
  const selectedColorHex_1 = document.getElementById("selectedColorHex_1");

  const selectedColorBox_2 = document.getElementById("selectedColorBox_2");
  const selectedColorHex_2 = document.getElementById("selectedColorHex_2");

  // スプリットコンプリメンタリーとトーン表示
  const splitComp1Box_1 = document.getElementById("splitComp1Box_1");
  const splitComp2Box_1 = document.getElementById("splitComp2Box_1");
  const splitComp1Hex_1 = document.getElementById("splitComp1Hex_1");
  const splitComp2Hex_1 = document.getElementById("splitComp2Hex_1");
  const lightToneSplit1Box_1 = document.getElementById("lightToneSplit1Box_1");
  const darkToneSplit1Box_1 = document.getElementById("darkToneSplit1Box_1");
  const lightToneSplit1Hex_1 = document.getElementById("lightToneSplit1Hex_1");
  const darkToneSplit1Hex_1 = document.getElementById("darkToneSplit1Hex_1");
  const lightToneSplit2Box_1 = document.getElementById("lightToneSplit2Box_1");
  const darkToneSplit2Box_1 = document.getElementById("darkToneSplit2Box_1");
  const lightToneSplit2Hex_1 = document.getElementById("lightToneSplit2Hex_1");
  const darkToneSplit2Hex_1 = document.getElementById("darkToneSplit2Hex_1");

  const splitComp1Box_2 = document.getElementById("splitComp1Box_2");
  const splitComp2Box_2 = document.getElementById("splitComp2Box_2");
  const splitComp1Hex_2 = document.getElementById("splitComp1Hex_2");
  const splitComp2Hex_2 = document.getElementById("splitComp2Hex_2");
  const lightToneSplit1Box_2 = document.getElementById("lightToneSplit1Box_2");
  const darkToneSplit1Box_2 = document.getElementById("darkToneSplit1Box_2");
  const lightToneSplit1Hex_2 = document.getElementById("lightToneSplit1Hex_2");
  const darkToneSplit1Hex_2 = document.getElementById("darkToneSplit1Hex_2");
  const lightToneSplit2Box_2 = document.getElementById("lightToneSplit2Box_2");
  const darkToneSplit2Box_2 = document.getElementById("darkToneSplit2Box_2");
  const lightToneSplit2Hex_2 = document.getElementById("lightToneSplit2Hex_2");
  const darkToneSplit2Hex_2 = document.getElementById("darkToneSplit2Hex_2");


  // ページ読み込み時にも一度実行
  const initialHex_1 = colorPicker_1.value;
  selectedColorBox_1.style.backgroundColor = initialHex_1;
  selectedColorHex_1.textContent = initialHex_1.toUpperCase();
  const [c1_1, c2_1] = get4SplitComplementaryColors(initialHex_1);
  splitComp1Box_1.style.backgroundColor = c1_1;
  splitComp2Box_1.style.backgroundColor = c2_1;
  splitComp1Hex_1.textContent = c1_1;
  splitComp2Hex_1.textContent = c2_1;

  const { lightTone: lightToneSplit1_1, darkTone: darkToneSplit1_1 } = getToneVariants(c1_1);
  lightToneSplit1Box_1.style.backgroundColor = lightToneSplit1_1;
  lightToneSplit1Hex_1.textContent = lightToneSplit1_1;
  darkToneSplit1Box_1.style.backgroundColor = darkToneSplit1_1;
  darkToneSplit1Hex_1.textContent = darkToneSplit1_1;
  const { lightTone: lightToneSplit2_1, darkTone: darkToneSplit2_1 } = getToneVariants(c2_1);
  lightToneSplit2Box_1.style.backgroundColor = lightToneSplit2_1;
  lightToneSplit2Hex_1.textContent = lightToneSplit2_1;
  darkToneSplit2Box_1.style.backgroundColor = darkToneSplit2_1;
  darkToneSplit2Hex_1.textContent = darkToneSplit2_1;
  

  // ページ読み込み時にも一度実行
  const initialHex_2 = colorPicker_2.value;
  selectedColorBox_2.style.backgroundColor = initialHex_2;
  selectedColorHex_2.textContent = initialHex_2.toUpperCase();
  const [c1_2, c2_2] = get4SplitComplementaryColors(initialHex_2);
  splitComp1Box_2.style.backgroundColor = c1_2;
  splitComp2Box_2.style.backgroundColor = c2_2;
  splitComp1Hex_2.textContent = c1_2;
  splitComp2Hex_2.textContent = c2_2;
  // スプリット1の明るいトーンと暗いトーン
  const { lightTone: lightToneSplit1_2, darkTone: darkToneSplit1_2 } = getToneVariants(c1_2);
  lightToneSplit1Box_2.style.backgroundColor = lightToneSplit1_2;
  lightToneSplit1Hex_2.textContent = lightToneSplit1_2;
  darkToneSplit1Box_2.style.backgroundColor = darkToneSplit1_2;
  darkToneSplit1Hex_2.textContent = darkToneSplit1_2;
  // スプリット2の明るいトーンと暗いトーン
  const { lightTone: lightToneSplit2_2, darkTone: darkToneSplit2_2 } = getToneVariants(c2_2);
  lightToneSplit2Box_2.style.backgroundColor = lightToneSplit2_2;
  lightToneSplit2Hex_2.textContent = lightToneSplit2_2;
  darkToneSplit2Box_2.style.backgroundColor = darkToneSplit2_2;
  darkToneSplit2Hex_2.textContent = darkToneSplit2_2;  
  

  
  
  colorPicker_1.addEventListener("input", (event) => {
    const chosenHex_1 = event.target.value;

    // 選択した色を表示
    selectedColorBox_1.style.backgroundColor = chosenHex_1;
    selectedColorHex_1.textContent = chosenHex_1.toUpperCase();

    // スプリットコンプリメンタリー2色を取得
    const [c1_1, c2_1] = get4SplitComplementaryColors(chosenHex_1);

    // スプリット1とスプリット2のボックスに反映
    splitComp1Box_1.style.backgroundColor = c1_1;
    splitComp2Box_1.style.backgroundColor = c2_1;
    splitComp1Hex_1.textContent = c1_1;
    splitComp2Hex_1.textContent = c2_1;

    // スプリット1の明るいトーンと暗いトーン
    const { lightTone: lightToneSplit1_1, darkTone: darkToneSplit1_1 } = getToneVariants(c1_1);
    lightToneSplit1Box_1.style.backgroundColor = lightToneSplit1_1;
    lightToneSplit1Hex_1.textContent = lightToneSplit1_1;
    darkToneSplit1Box_1.style.backgroundColor = darkToneSplit1_1;
    darkToneSplit1Hex_1.textContent = darkToneSplit1_1;

    // スプリット2の明るいトーンと暗いトーン
    const { lightTone: lightToneSplit2_1, darkTone: darkToneSplit2_1 } = getToneVariants(c2_1);
    lightToneSplit2Box_1.style.backgroundColor = lightToneSplit2_1;
    lightToneSplit2Hex_1.textContent = lightToneSplit2_1;
    darkToneSplit2Box_1.style.backgroundColor = darkToneSplit2_1;
    darkToneSplit2Hex_1.textContent = darkToneSplit2_1;



     //選択1色目
     selectedColorBox_1.onclick = () => {
        // selectedColorBoxの背景色を取得
        const bgColor_1 = window.getComputedStyle(selectedColorBox_1).backgroundColor;
    
        // mainColorBoxの背景色を変更
        document.getElementById("mainColorBox_1").style.backgroundColor = bgColor_1;
        document.getElementById("mainColorBox2_1").style.backgroundColor = bgColor_1;
        document.getElementById("figure_1").style.backgroundColor = bgColor_1;
      };
  
      splitComp1Box_1.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgColor_1 = window.getComputedStyle(splitComp1Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bgColor_1;
      };
  
      splitComp2Box_1.onclick = () => {
        // splitComp2Boxの背景色を取得
        const bgColor_1 = window.getComputedStyle(splitComp2Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bgColor_1;
      };

      //明るいスプリット１カラー
      lightToneSplit1Box_1.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bglightColor_1 = window.getComputedStyle(lightToneSplit1Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bglightColor_1;
      };

      //明るいスプリット2カラー
      lightToneSplit2Box_1.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bglightColor_1 = window.getComputedStyle(lightToneSplit2Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bglightColor_1;
      };


      //暗いスプリット１カラー
      darkToneSplit1Box_1.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgdarkColor_1 = window.getComputedStyle(darkToneSplit1Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bgdarkColor_1;
      };

      //暗いスプリット2カラー
      darkToneSplit2Box_1.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgdarkColor_1 = window.getComputedStyle(darkToneSplit2Box_1).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_1").style.backgroundColor = bgdarkColor_1;
      };


  });



  colorPicker_2.addEventListener("input", (event) => {
    const chosenHex_2 = event.target.value;

    // 選択した色を表示
    selectedColorBox_2.style.backgroundColor = chosenHex_2;
    selectedColorHex_2.textContent = chosenHex_2.toUpperCase();

    // スプリットコンプリメンタリー2色を取得
    const [c1_2, c2_2] = get4SplitComplementaryColors(chosenHex_2);

    // スプリット1とスプリット2のボックスに反映
    splitComp1Box_2.style.backgroundColor = c1_2;
    splitComp2Box_2.style.backgroundColor = c2_2;
    splitComp1Hex_2.textContent = c1_2;
    splitComp2Hex_2.textContent = c2_2;

    // スプリット1の明るいトーンと暗いトーン
    const { lightTone: lightToneSplit1_2, darkTone: darkToneSplit1_2 } = getToneVariants(c1_2);
    lightToneSplit1Box_2.style.backgroundColor = lightToneSplit1_2;
    lightToneSplit1Hex_2.textContent = lightToneSplit1_2;
    darkToneSplit1Box_2.style.backgroundColor = darkToneSplit1_2;
    darkToneSplit1Hex_2.textContent = darkToneSplit1_2;

    // スプリット2の明るいトーンと暗いトーン
    const { lightTone: lightToneSplit2_2, darkTone: darkToneSplit2_2 } = getToneVariants(c2_2);
    lightToneSplit2Box_2.style.backgroundColor = lightToneSplit2_2;
    lightToneSplit2Hex_2.textContent = lightToneSplit2_2;
    darkToneSplit2Box_2.style.backgroundColor = darkToneSplit2_2;
    darkToneSplit2Hex_2.textContent = darkToneSplit2_2;


     //選択２色目
     selectedColorBox_2.onclick = () => {
        // selectedColorBoxの背景色を取得
        const bgColor_2 = window.getComputedStyle(selectedColorBox_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("mainColorBox_2").style.backgroundColor = bgColor_2;
        document.getElementById("mainColorBox2_2").style.backgroundColor = bgColor_2;
        document.getElementById("figure_2").style.backgroundColor = bgColor_2;
      };
  
      splitComp1Box_2.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgColor_2 = window.getComputedStyle(splitComp1Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bgColor_2;
      };
  
      splitComp2Box_2.onclick = () => {
        // splitComp2Boxの背景色を取得
        const bgColor_2 = window.getComputedStyle(splitComp2Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bgColor_2;
      };


      //明るいスプリット１カラー
      lightToneSplit1Box_2.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bglightColor_2 = window.getComputedStyle(lightToneSplit1Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bglightColor_2;
      };

      //明るいスプリット2カラー
      lightToneSplit2Box_2.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bglightColor_2 = window.getComputedStyle(lightToneSplit2Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bglightColor_2;
      };


      //暗いスプリット１カラー
      darkToneSplit1Box_2.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgdarkColor_2 = window.getComputedStyle(darkToneSplit1Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bgdarkColor_2;
      };

      //暗いスプリット2カラー
      darkToneSplit2Box_2.onclick = () => {
        // splitComp1Boxの背景色を取得
        const bgdarkColor_2 = window.getComputedStyle(darkToneSplit2Box_2).backgroundColor;
      
        // mainColorBoxの背景色を変更
        document.getElementById("arrow_2").style.backgroundColor = bgdarkColor_2;
      };
  });

  
  // ----------------------------------------
  // 補助関数群
  // ----------------------------------------

  function get4SplitComplementaryColors(baseHex) {
    const { h, s, l } = hexToHsl(baseHex);
    const complementHue = (h + 180) % 360;
    const offsets = [30, -30];
    return offsets.map(offset => {
      const hue = (complementHue + offset + 360) % 360;
      return hslToHex(hue, s, l);
    });
  }

  function getToneVariants(baseHex) {
    const { h, s, l } = hexToHsl(baseHex);
    const lightTone = hslToHex(h, s, Math.min(l + 20, 100));
    const darkTone = hslToHex(h, s, Math.max(l - 20, 0));
    return { lightTone, darkTone };
  }

  function hexToHsl(hex) {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0;
    let l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) {
        h = (g - b) / d + (g < b ? 6 : 0);
      } else if (max === g) {
        h = (b - r) / d + 2;
      } else {
        h = (r - g) / d + 4;
      }
      h *= 60;
    }

    return {
      h: Math.round(h),
      s: +(s * 100).toFixed(1),
      l: +(l * 100).toFixed(1),
    };
  }

  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r, g, b;

    if (0 <= h && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const toHex = (val) => val.toString(16).padStart(2, "0").toUpperCase();
    return "#" + toHex(r) + toHex(g) + toHex(b);
  }
});






//テキスト入力部
const title_1 = document.getElementById('title_1');
const explan_1 = document.getElementById('explan_1');

const title_2 = document.getElementById('title_2');
const explan_2 = document.getElementById('explan_2');

const textInput = document.getElementById('textInput');
const textInput2 = document.getElementById('textInput2');

//const mainColorBox = document.getElementById('mainColorBox');

textInput.addEventListener('input', () => {
  const userInput = textInput.value;
  title_1.firstChild.textContent = userInput || "";
  title_2.firstChild.textContent = userInput || "";
  //mainColorBox.textContent = userInput ? ` ${userInput}` : "";
});

textInput2.addEventListener("input", () => {
  const userInput = textInput2.value;
  explan_1.textContent = userInput || "";
  explan_2.textContent = userInput || "";
});

function changeTextColor(color) {
  const title1 = document.getElementById('title_1');
  const title2 = document.getElementById('title_2');
  const explan1 = document.getElementById('explan_1');
  const explan2 = document.getElementById('explan_2');

  // タイトルと説明文の文字色を変更
  title1.style.color = color;
  title2.style.color = color;
  explan1.style.color = color;
  explan2.style.color = color;
}

