---
layout: post
title:  "Chinese Fonts for Web Developers"
date:   2015-03-15 15:25:08
categories: technology
---

参考了ks的[文章](http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/)
下面是目前中文字体的最佳实践
## 操作系统的预装字体 ##
操作系统决定了开发者可以使用的字体。所以，第一步，我们必须了解操作系统到底提供哪些字体。
下面是两种操作系统采用的![字体](/figures/chinese_fonts_on_operation_sysytem.png)

Windows操作系统：

    黑体：SimHei
    宋体：SimSun
    新宋体：NSimSun
    仿宋：FangSong
    楷体：KaiTi
    仿宋GB2312：FangSongGB2312
    楷体GB2312：KaiTiGB2312
    微软雅黑：Microsoft YaHei （Windows 7开始提供）

OS X操作系统：

    冬青黑体: Hiragino Sans GB （SNOW LEOPARD开始提供）
    华文细黑：STHeiti Light （又名STXihei）
    华文黑体：STHeiti
    华文楷体：STKaiti
    华文宋体：STSong
    华文仿宋：STFangsong

如果用户装了MicroSoft Office，还会多出一些字体。

    隶书：LiSu
    幼圆：YouYuan
    华文细黑：STXihei
    华文楷体：STKaiti
    华文宋体：STSong
    华文中宋：STZhongsong
    华文仿宋：STFangsong
    方正舒体：FZShuTi
    方正姚体：FZYaoti
    华文彩云：STCaiyun
    华文琥珀：STHupo
    华文隶书：STLiti
    华文行楷：STXingkai
    华文新魏：STXinwei

## font-family命令 ##

CSS的font-family命令，指定了网页元素所使用的字体。下面是一个例子。  

    <style type="text/css">
      @font-face{
    font-family: 'Droid Serif';
    src: url('DroidSerif.ttf');
      }
      @font-face{
    font-family: 'Yanone Kaffeesatz';
    src: url('YanoneKaffeesatz-Regular.ttf');
      }
      @font-face{
    font-family: 'Ubuntu Mono';
    src: url('UbuntuMono-Regular.ttf');
      }
这是我的展示ppt中用到字体命令

它的规则有三条

- 优先使用排在前面的字体。
- 如果找不到该种字体，或者该种字体不包括所要渲染的文字，则使用下一种字体。
- 如果所列出的字体，都无法满足需要，则让操作系统自行决定使用哪种字体。 

根据这些规则，font-family应该优先指定英文字体，然后再指定中文字体。否则，中文字体所包含的英文字母，会取代英文字体，这往往很丑陋。

为了保证兼容性，中文字体的中文名称和英文名称，应该都写入font-family。比如，”微软雅黑”的英文名称是Microsoft YaHei。

## 常用字体说明 ##
（1）宋体（SimSun）

宋体是最常见的中文字体，如果没有指定字体，操作系统往往选择它来渲染。很多人认为，这种字体并不美观。

（2）微软雅黑（Microsoft YaHei）

微软雅黑的美观度和清晰度都较好，可以作为网页的首选字体。它在Mac平台的对应字体是华文细黑（STXihei）。

但是，Windows XP没有预装这种字体，这时可以选择黑体（Simhei）替代。不过，黑体比较粗，不应用于字号较小的文字。

（3）仿宋（FangSong）

这种字体是衬线体，比宋体的装饰性更强。如果字号太小，会影响清晰度，所以只有在字号大于14px的情况下，才可以考虑这种字体。

它在Mac平台的对应字体是”华文仿宋”（STFangsong）。

（4）楷体（KaiTi）

楷体也是衬线体，装饰性与仿宋体接近，但是宽度更大，笔画更清楚一些。这种字体也不应该在小于14px的情况下使用。

它在Mac平台的对应字体是”华文楷体”（STKaiti）。