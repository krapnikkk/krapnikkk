const fs = require("fs");

const journey = {
  works: {
    "three-minigame-adapter": "小游戏Adapter[ThreeJS版]",
    "three-minigame-adapter-demo": "小游戏Adapter[ThreeJS版]演示案例demo工程",
    "TextImageGenerator": "利用css渲染自定义文字图片生成器",
    "FairyGUI-createjs":"一个基于createjs扩展实现fairygui的运行时",
    "FairyGUI-createjs-example":"createjs版fairygui的sdk案例展示",
    "Super-Quick-Recognizer": "可视化手写字符识别数据管理工具",
  },
  study: {
    "learn_WebGL": "学习webgl的读书笔记",
    "learning-threejs": "学习threejs的读书笔记",
    "PureMVC_TypeScript":"PureMVC【TS】源码解析",
    "canvas_animation":"练习基于Canvas2d的动画合集",
    "head_first_design_patterns_typescript":"使用typescript实现《head_first_design_patterns》的案例",
    "JS-gameMathematics":"《HTML5游戏编程核心技术与实战》读书笔记",
  },
  tools: {
    "fgui-restore": "对fairygui发布出来的资源文件进行逆向还原",
    "fgui-viewer": "fairgui发布资源在线浏览",
    "padlocal-http": "为Wechat机器人PadLocal扩展通过HTTP或WebSocket接收事件和调用API的能力",
    "ccc-plugin-dragonBones-Viewer": "cocos creator龙骨动画资源预览插件",
    "JDCouponAssistant ": "京东网页端领优惠券&营销活动&日常签到的浏览器JS脚本插件",
    "winform-SignInAssistant":"使用winform编写的京东金融每日签到&任务助手桌面程序",
    "SpriteSpliter":"使用nodejs编写的用于合图分割的小工具",
  },
  games: {
    "TheAviator": "threejs+fgui实现的飞行员小游戏",
    "egret-game": "使用egret引擎进行开发的小游戏合集",
    "FairyGUI-sudoku": "laya+fgui实现的数独小游戏",
  }
};

const tables = Object.keys(journey)
  .map(type => {
    return Object.keys(journey[type]).reduce(
      (acc, name) => {
        const isCfg = typeof journey[type][name] === "object";
        const desc = isCfg ? journey[type][name].desc : journey[type][name];
        const href = isCfg ? journey[type][name].href : `https://github.com/krapnikkk/${name}`;
        return (
          acc +
          "|" +
          [
            `[${name}](${href})`,
            desc,
            `<img alt="Stars" src="https://img.shields.io/github/stars/krapnikkk/${name}?style=flat&labelColor=373f51&color=4FC08D" />`,
            `<img alt="Stars" src="https://img.shields.io/github/forks/krapnikkk/${name}?style=flat&labelColor=373f51&color=4FC08D" />`,
          ].join("|") +
          "|\r\n"
        );
      },
      `
### ${type[0].toUpperCase() + type.slice(1)}
|📦  Projects|📃  Description|⭐  Stars|📚  Forks|
|-----------|--------------|---------|--------|
`,
    );
  })
  .join("\n");

// fs.writeFileSync("./journey.md", tables);
const tpl = fs.readFileSync("./README_TPL.md", { encoding: "utf8" });
fs.writeFileSync("./README.md", tpl.replace("<!-- journey -->", tables));