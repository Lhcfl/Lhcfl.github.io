var e={frontmatter:{title:`试试 idris2`,date:`2025-05-05T17:20:29`,tags:[`Idris`,`Code`,`PL`,`Functional`],copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`试试 idris2`,html:`<p>唉早知道就不折腾这种全世界都找不出一万个人在用的东西了.txt</p>
<!-- more -->
<h2 id="先写简介吧"><a href="#先写简介吧">先写简介吧</a></h2>
<blockquote>
<p>大体上看, Idris 这个语言的设计, 基本上是 Haskell 的延续, 整体上语法和 Haskell 十分接近, Haskell 程序员用起来基本上只会更爽, 不太会有什么不适 (除了不是默认 Lazy 这一点需要适应之外).</p>
<p>所以简而言之, Idris 就是带 Dependent Type 的 Haskell, 外加各种语法上的改良, 解决了诸多由 Haskell 所遗留的问题, 是 Haskeller 心目中的理想语言.</p>
<p>怎么评价 Idris 语言？ - 罗宸的回答 - 知乎 <a href="https://www.zhihu.com/question/55342708/answer/156894932">https://www.zhihu.com/question/55342708/answer/156894932</a></p>
</blockquote>
<p>简单来说这是一门给你加了一些很有趣和实用的特性的函数式语言，其实很早就听说过它，但是之前一直被函数式吓退，这几天才折腾</p>
<p>然后……好吧折腾的结果是白折腾了。</p>
<h2 id="辛苦的安装"><a href="#辛苦的安装">辛苦的安装</a></h2>
<p>你们歧视 Windows 是吧？？</p>
<p>windows 需要安装 msy2，然后使用 msy2 上的 mingw 来安装，自己下的 winlib 上的 mingw gcc 缺了一些必要的头文件，装不上。这一点就折腾了我半天</p>
<p>然后安装的时候 chez 默认安装路径带空格，又让我白 make 了一次，爆了一堆 <code>C:/Programs</code> 不是可执行文件……</p>
<p>费劲终于 build 好了，试图修改一下 make install 的位置发现 idris2 还是按照写死的路径找对应的 support，否则就要配置一堆环境变量，我懒受不了了改回默认安装路径了</p>
<p>终于 idris2 能启动了，然后又要指定 chez 的路径的环境变量。。。还没有提示，只是简单爆一句 “找不到指定文件” 我操找不到什么文件啊你倒是说啊 😭，花了我十几分钟才想通发生了什么……</p>
<p>此刻我已经被 idris2 折腾得精疲力竭了，简单跑了个 hello world 发现没问题就放弃了</p>
<h2 id="怎么又要装-lsp"><a href="#怎么又要装-lsp">怎么又要装 LSP</a></h2>
<p>（当然啊）</p>
<p>在写 hello world 的时候发现一点语法高亮都没有，然后意思到又要装 lsp，一看 lsp 是 idris2 写的而且要装 pack，问题是 pack 又只给了 bash 的安装脚本（我操你们真的歧视 Windows 吧</p>
<p>彻底被磨干了精力，放弃</p>
<h2 id="放弃"><a href="#放弃">放弃</a></h2>
<p>这 Windows 就是不行啊，要和整个世界作斗争，用 WSL 去了（）</p>`,headings:[{depth:2,slug:`先写简介吧`,text:`先写简介吧`},{depth:2,slug:`辛苦的安装`,text:`辛苦的安装`},{depth:2,slug:`怎么又要装-lsp`,text:`怎么又要装 LSP`},{depth:2,slug:`放弃`,text:`放弃`}]};export{e as default};