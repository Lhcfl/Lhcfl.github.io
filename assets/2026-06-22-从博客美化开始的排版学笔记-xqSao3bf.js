var e={frontmatter:{date:`2026-06-22T10:05:40`,updatedDate:`2026-06-22T10:05:40`,title:`从博客美化开始的排版学笔记`,tags:[`Blog`,`Typography`],incomplete:!1,toc:!0,hidden:!1,thumbnail:``,displayThumbnail:!1,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`从博客美化开始的排版学笔记`,html:`<p>近期对我的博客进行了进一步的风格优化。为此，阅读了 <a href="https://practicaltypography.com/">Butterick’s Practical Typography</a>（下文简称书本）。尽管我的审美水平一言难尽，也没有进行过任何专业的美术训练，但我仍希望尝试编写一些我读和美化博客下的感悟，并希望自己在之后也能继续记得这些。</p>
<!-- more -->
<p>这篇文章不打算讲网页博客以外的排版有关内容。</p>
<p><strong>Disclaimer</strong>: 在排版学上我真的，真的，真的很菜，这里我阐述的任何意见都不是专业的排版学知识，只是我一知半解的尝试为自己总结的结果，如果您有更好的想法欢迎告诉我。</p>
<h2 id="最简单的前置知识"><a href="#最简单的前置知识">最简单的前置知识</a></h2>
<p>要阅读这篇文章你至少得知道以下概念：</p>
<dl>
<dt>CSS</dt>
<dd>CSS (Cascading Style Sheets) 是网页的样式语言，可以将 CSS 理解为网页的排版工具：字体、字号、留白、颜色、版面布局，以及各种视觉细节，最终都通过 CSS 来实现。
</dd>
<dt>px</dt>
<dd>像素 (pixel)，是 CSS 中最常见的长度单位。16px 表示一个固定大小的长度。
</dd>
<dt>em</dt>
<dd>相对长度单位，表示当前元素字体大小的倍数。例如，当字体大小为 16px 时，2em 等于 32px。
</dd>
</dl>
<h2 id="你的博客你的选择"><a href="#你的博客你的选择">你的博客，你的选择</a></h2>
<p><del>又到了我最喜欢的叠甲时间</del> 书本作者假定的是你是一个专业写手，并且希望自己的内容吸引读者。作者举了这样一个表格作为例子：</p>
<blockquote>
<p>一旦读者收回了注意力，你就没有读者了。那么你作为作家，只留下了字面上的意义：你在某些页面上写了几个字。如果你的读者已经消失了，那还有什么意义呢？你的写作比一串随机的字母更有价值吗？就像树林里倒下的树一样，没有人注意到这两者之间的区别。……你应该不断问自己：<strong>我的读者想要什么？</strong> 因为你的读者和你截然不同：</p>
<table>
<thead>
<tr>
<th></th>
<th>作者</th>
<th>读者</th>
</tr>
</thead>
<tbody>
<tr>
<td>注意力跨度</td>
<td>长</td>
<td>短</td>
</tr>
<tr>
<td>对话题的兴趣</td>
<td>高</td>
<td>低</td>
</tr>
<tr>
<td>容易被他人观点说服</td>
<td>否</td>
<td>是</td>
</tr>
<tr>
<td>关心你的幸福</td>
<td>是</td>
<td>否</td>
</tr>
</tbody>
</table>
<p>遗憾的是，专业作者有时会想象这个对比是这样的：</p>
<table>
<thead>
<tr>
<th></th>
<th>作者</th>
<th>读者</th>
</tr>
</thead>
<tbody>
<tr>
<td>注意力跨度</td>
<td>长</td>
<td>无限！</td>
</tr>
<tr>
<td>对话题的兴趣</td>
<td>高</td>
<td>无限！</td>
</tr>
<tr>
<td>容易被他人观点说服</td>
<td>否</td>
<td>勉强</td>
</tr>
<tr>
<td>关心你的幸福</td>
<td>是</td>
<td>当然！</td>
</tr>
</tbody>
</table>
</blockquote>
<p>然而，众所周知中文博客早就已经日渐式微沦为作者自娱自乐的地方，就算你写的博客美仑美奂惊为天人，也没有在SNS上发个帖子有更多的读者。那么如果反正没有读者，那么有些东西的权重就没那么高了对吧（划掉</p>
<p>总而言之，你的博客，你的选择。在博客这件事上，开心就好。</p>
<h2 id="typography-in-ten-minutes"><a href="#typography-in-ten-minutes">Typography in ten minutes</a></h2>
<p>书本一开头就介绍了最重要的5条规则，分别是：</p>
<ul>
<li>
<p>排版的质量主要取决于<a href="https://practicaltypography.com/body-text.html">正文</a>的外观，因为正文比别的东西多。</p>
</li>
<li>
<p>根据需要调整<a href="https://practicaltypography.com/point-size.html">字体大小</a>，在网页上，最适合的大小是15~25px。</p>
</li>
<li>
<p>调整<a href="https://practicaltypography.com/line-spacing.html">行距</a>为120~145%。</p>
</li>
<li>
<p><a href="https://practicaltypography.com/line-length.html">每行长度</a>应该是45~90个英文字母。</p>
</li>
<li>
<p>选择好的字体，记得不要是Times New Roman或者Arial，它们太过于基础。</p>
</li>
</ul>
<p>对于博客而言，这五条规则确实无比的重要。可惜，这也主要是为英文设计的，而且作者似乎在某些地方也有点太过于激进了。在这里，我计划简单介绍一下中文博客，我自己的审美选择。</p>
<h2 id="formatting-by-elements"><a href="#formatting-by-elements">Formatting by Elements</a></h2>
<style>
.a11y { font-family: var(--blog-font-sans); font-size: 0.8em; color: white; background-color: rgb(9, 127, 16); padding: 0.1em 0.2em; }
.spec { font-family: var(--blog-font-sans); font-size: 0.8em; color: white; background-color: rgb(9, 127, 16); padding: 0.1em 0.2em; }
</style>
<p>在介绍排版之前，我觉得很重要的一点是：<em lang="zh">排版排的是内容的版</em>。你得先知道自己写的是什么东西，为什么写，再在这基础上进行排版的美化。正如书本所说：</p>
<blockquote>
<p>Good typography <em>reinforces</em> the meaning of the text.</p>
</blockquote>
<p>因此，讲解各种元素的格式的时候，同时应当注意什么时候运用这些元素。</p>
<h3 id="标题"><a href="#标题">标题</a></h3>
<p>标题是一个很常见的排版糟糕的地方。许多Markdown编辑器自带的预览功能对于标题的格式就是从大到小把字体调一下。</p>
<p><span class="a11y">A11y</span> <strong>除了文章标题以外别用H1</strong> 一个页面内应该只有一个H1元素，它一般是你的文章标题，所以不要在你的Markdown正文里用H1. 类似的，不要跳过标题层级，这会让那些使用屏幕阅读器的人感到迷惑</p>
<p><strong>不要超过3种标题</strong> 比如如果你从2级标题开始，那就只用2,3,4三级的标题。一般来说，即使是论文3级标题都够用了，很少有情况你会在一篇博客里非要写到4级标题的程度。太多的标题毫无意义，只会让页面变得很丑，目录也看上去会更复杂。</p>
<p><strong>强调标题的最佳手段是上下各加空白</strong> 不要把你的标题弄到2em甚至3em的大小，这看上去太过于恐怖了，非常夺目，而且一旦标题需要嵌套就很灾难。用空白来强调标题的存在。即使是最大的标题也不需要2em的字体。</p>
<p><strong>只需要加粗，不需要斜体</strong> 标题中，加粗比斜体更容易阅读，且在页面上更突出。</p>
<p><strong>不要下划线</strong>  划线是一种打字机时代留下的枯燥习惯。打字机没有粗体或斜体样式。所以唯一能强调文字的方法是换行，在文字下方打下划线。它是对打字机技术不足的一种权宜之计。</p>
<h3 id="强调"><a href="#强调">强调</a></h3>
<p>强调大体可以分为两类，粗体和斜体。</p>
<p><strong>不要用斜体中文、不要用斜体非衬线字体</strong>。中文和无衬线字体上的斜体只是倾斜<sup><a href="#user-content-fn-%E6%9C%89%E7%9A%84%E6%97%A0%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93%E8%AE%BE%E8%AE%A1%E4%BA%86%E4%B8%93%E9%97%A8%E7%9A%84%E6%96%9C%E4%BD%93%EF%BC%8C%E4%B8%8D%E5%9C%A8%E8%AE%A8%E8%AE%BA%E8%8C%83%E5%9B%B4%E5%86%85" id="user-content-fnref-%E6%9C%89%E7%9A%84%E6%97%A0%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93%E8%AE%BE%E8%AE%A1%E4%BA%86%E4%B8%93%E9%97%A8%E7%9A%84%E6%96%9C%E4%BD%93%EF%BC%8C%E4%B8%8D%E5%9C%A8%E8%AE%A8%E8%AE%BA%E8%8C%83%E5%9B%B4%E5%86%85" data-footnote-ref aria-describedby="footnote-label">1</a></sup>，不会在页面上显得突出。中文根本就没有斜体，你看到的<i>斜体</i>只是简单的倾斜了文本，相比之下，衬线字体英文的<em>italic font style</em>是经过专门设计以区分其正体文本的。</p>
<p>为此，中英文混排的时候，如何轻度强调是一个问题。好在，中文习惯于使用<em lang="zh">下方标点</em>来进行强调，如你所见。使用 <code>font-style: normal; text-emphasis: filled dot;</code> 来让你的中文 <code>&#x3C;em></code> 不再使用斜体而是使用正确的 text-emphasis。</p>
<p><strong>不要大量强调</strong> 对于任何一个词，要么用粗体，要么用斜体，不要兼用。同时，尽可能少用强调，因为如果所有内容都被强调等于什么内容都没被强调。</p>
<style>
#bad-emphasis { font-weight: bold; } #bad-emphasis.ok { font-weight: normal; }
</style>
<div id="bad-emphasis">
<p><strong>有些人喜欢疯狂的滥用粗体和斜体</strong>，只要他们觉得某一个话题是值得注意的，就干脆整段整段的加粗。不要变成这样的人。这种习惯会消耗读者的视网膜和耐心。而且滥用粗体会让你无法强调其中额外某个词。（有人会<b><u>粗体划线</u></b>或大量使用<b><i>粗斜体</i></b>。这两点都是糟糕的主意。）</p>
<p><button type="button" class="btn" onclick="javascript:document.getElementById('bad-emphasis').classList.toggle('ok')">我受够了，变回来吧</button></p>
</div>
<p><strong>无需强调标点</strong>。正如左边这个句号，它不需要被强调。</p>
<details>
<summary>通过编码技巧解决混排难题</summary>
<p>我使用的是Remark/Rehype框架。对于混排的问题，我写了一个简单的插件解决：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span><span style="color:#24292E"> toString </span><span style="color:#D73A49">as</span><span style="color:#24292E"> hastToString </span><span style="color:#005cc5">}</span><span style="color:#24292E"> </span><span style="color:#D73A49">from</span><span style="color:#032F62"> "hast-util-to-string"</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span><span style="color:#24292E"> visit </span><span style="color:#005cc5">}</span><span style="color:#24292E"> </span><span style="color:#D73A49">from</span><span style="color:#032F62"> "unist-util-visit"</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">import</span><span style="color:#D73A49"> type</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span><span style="color:#24292E"> Root </span><span style="color:#005cc5">}</span><span style="color:#24292E"> </span><span style="color:#D73A49">from</span><span style="color:#032F62"> "hast"</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> rehypeLanguageDetect</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#24292E"> </span><span style="color:#e36209">(</span><span style="color:#E36209">tree</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Root</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#24292E"> </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#6F42C1">    visit</span><span style="color:#5a32a3">(</span><span style="color:#24292E">tree, </span><span style="color:#032F62">"element"</span><span style="color:#24292E">, </span><span style="color:#005cc5">(</span><span style="color:#E36209">node</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#D73A49">      if</span><span style="color:#24292E"> </span><span style="color:#e36209">(</span><span style="color:#5a32a3">[</span><span style="color:#032F62">"em"</span><span style="color:#5a32a3">]</span><span style="color:#24292E">.</span><span style="color:#6F42C1">includes</span><span style="color:#5a32a3">(</span><span style="color:#24292E">node.tagName</span><span style="color:#5a32a3">)</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#D73A49">        const</span><span style="color:#005CC5"> textContent</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> hastToString</span><span style="color:#5a32a3">(</span><span style="color:#24292E">node</span><span style="color:#5a32a3">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">        </span></span>
<span class="line"><span style="color:#D73A49">        if</span><span style="color:#24292E"> </span><span style="color:#5a32a3">(</span><span style="color:#24292E">textContent.</span><span style="color:#6F42C1">match</span><span style="color:#005cc5">(</span><span style="color:#032F62">/</span><span style="color:#22863A;font-weight:bold">\\p</span><span style="color:#032F62">{Script=Han}</span><span style="color:#D73A49">+</span><span style="color:#032F62">/</span><span style="color:#D73A49">gu</span><span style="color:#005cc5">)</span><span style="color:#5a32a3">)</span><span style="color:#24292E"> </span><span style="color:#5a32a3">{</span></span>
<span class="line"><span style="color:#24292E">          node.properties.lang </span><span style="color:#D73A49">=</span><span style="color:#032F62"> "zh"</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">        </span><span style="color:#5a32a3">}</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#e36209">}</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#005cc5">}</span><span style="color:#5a32a3">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
</details>
<h3 id="下划线"><a href="#下划线">下划线</a></h3>
<p>又一个我违背书本原则的设计。书本认为：</p>
<blockquote>
<p>In a printed document, don’t underline. Ever. It’s ugly and it makes text harder to read.</p>
</blockquote>
<p>但是，除了排版学以外，博客也应该考虑可访问性。下划线可以让链接的颜色足够漂亮的同时让链接与别的非链接文本区分出来。根据 WCAG 标准，不允许</p>
<blockquote>
<p><a href="https://dequeuniversity.com/class/visual-design-wcag-2.2/color/distinguish-links-from-text#non-color-method-or-high-contrast">Color as a Way to Visually Distinguish Links:</a> Color alone MUST NOT be used as the only way to distinguish links from surrounding text unless the color contrast between the link and the surrounding text is at least 3 to 1 and an additional differentiation (e.g. underline, outline, etc.) is provided when the link is hovered or receives focus.</p>
</blockquote>
<p>原书本的设计则疑似有点极端了，使用 <span style="font-variant: small-caps">small caps</span> 来标记内部链接，这完全无法被用在中文上。</p>
<h3 id="换行"><a href="#换行">换行</a></h3>
<p>原始版本的Markdown直接换行不会真的换行，行末放置两个空格再换行才会生成一个<code>&#x3C;br></code>。而换行两次则是一个<code>&#x3C;p></code>。一些编辑器可以让行末换行真的换行，但我不推荐这种设计。请把你的Markdown处理器配置成需要行末2个空格才能换行。</p>
<p>我不推荐自动换行主要是因为兼容性考虑，顺带一提，单换行<code>&#x3C;br></code>在语义上也不如段落<code>&#x3C;p></code>好。</p>
<h3 id="字号"><a href="#字号">字号</a></h3>
<p><strong>建议的正文大小是15~25px</strong> 我们通常从比阅读纸质书本更远处阅读屏幕，因此更大的点数有助于补偿。太小的字伤害读者的眼睛。而且，更大的字体有助于在即使是DPI较低的屏幕上也能取得更美观的效果。见<a href="https://practicaltypography.com/screen-reading-considerations.html">Screen-reading Considerations</a></p>
<p><strong>同一个字号对于不同字体显示效果可能不同</strong> 这是一个很挺陷阱的地方，在有些时候，你甚至需要为不同字体填不同的字号</p>
<p><img src="/images/fonts-size-difference.png" alt="Different fonts set at the same point size won&#x27;t necessarily appear the same size on the page"></p>
<h3 id="字体"><a href="#字体">字体</a></h3>
<p><strong>一般不要使用等宽字体</strong> 虽然对于中文来说可能无所谓，毕竟CJK字符是方块字，但是只要你打拉丁字符，等宽字体就会显得很丑。等宽字体是为了适应打字机的机械需求而被发明的。与比例字体相比，等宽字体更难辨认。</p>
<p>——代码和数字除外。由于大量使用符号和空白字符对齐，代码使用等宽字体更易读。等宽数字在表格上可以按位对齐，也是广泛的需求。</p>
<p><strong>混合字体收益递减</strong> 你可以在文档里混合使用多种字体，但是其收益递减。大多数文档可以有两种字体，但是很少有3种的，同时几乎没有混合4种字体的。</p>
<p>（这条是针对英文的，我有些怀疑这一点是否对中文生效，因为中文光是常见字体就有楷体、仿宋、宋体、黑体、圆体）</p>
<p><strong>你可以混合任意两种看上去明显不同的字体</strong> 虽然一般而言，会推荐混合 sans-serif和serif字体。字体混合最成功时，每种字体在文档中都有一致的角色。在尝试用一种字体做正文，一种字体写标题。或者试试用一种字体写文档中间的内容，用一种字体写边缘的部分（行号、页脚和其他杂项）。或者在有项目符号和编号的列表中，尝试用一种字体表示项目符号或数字，用一种字体表示列表项的正文。</p>
<p>在一段里同时使用多种字体很少奏效。最好每段只用一种字体，并且只在段落分隔时更换字体。</p>
<h3 id="颜色"><a href="#颜色">颜色</a></h3>
<p><strong>颜色少更好</strong> 正如在强调章节所说的，什么都强调等于什么都不强调，如果你把网站颜色弄得眼花缭乱，那么颜色就丧失了强调的作用。除非你就不打算通过颜色表示任何重点，我个人还是挺喜欢Windows 8 Metro设计的（笑</p>
<p><strong>白底灰字、灰底白字</strong> 不要用<code>#000000</code>当文字颜色，它们太深了。与纸张不同，电脑屏幕不是靠反射环境光，而是靠发射自身的光线工作，而且对比度更强。因此，在屏幕上，深灰色文字比黑色文字更易阅读。这就是为什么许多电子阅读器允许你降低屏幕亮度或改变文本颜色。</p>
<p><strong>暗色模式真挺难的</strong> 比较难通过一个简单的规则自动设计暗色模式和亮色模式。人眼比起深色更容易区分浅色，所以如果你用的是浅色，要轻柔地调整，深色需要更大幅度的调整。</p>
<p>奇怪的技巧：如果你想要最鲜艳的红色，可以用一个老式印刷工的技巧——让颜色稍微偏橙。</p>
<h3 id="链接网址电子邮箱"><a href="#链接网址电子邮箱">链接、网址、电子邮箱</a></h3>
<p>网址用于识别互联网上的某个位置。它们通常看起来像 <a href="http://www.somelongname.com/folder/subfolder/page.html%E3%80%82%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E5%9C%B0%E5%9D%80%E9%80%9A%E5%B8%B8%E9%87%87%E7%94%A8">http://www.somelongname.com/folder/subfolder/page.html。电子邮件地址通常采用</a> <a href="mailto:nameofperson@somelongname.com">nameofperson@somelongname.com</a> 的形式。</p>
<p>这就是第一条。由于URL确实允许中文，加上Markdown引擎处理中文的缺陷，请记得在网址前后添加空格，不然就会错误的把后面的文字当成链接的一部分。如果你希望没有空格，可以用<code>&#x3C;></code>把链接括起来。</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">网址用于识别互联网上的某个位置。它们通常看起来像 </span><span style="color:#24292E">&#x3C;</span><span style="color:#24292E;text-decoration:underline">http://www.somelongname.com/folder/subfolder/page.html</span><span style="color:#24292E">></span><span style="color:#24292E">。</span></span>
<span class="line"><span style="color:#24292E">电子邮件地址通常采用 nameofperson@somelongname.com 的形式。</span></span></code></pre>
<p>网址用于识别互联网上的某个位置。它们通常看起来像 <a href="http://www.somelongname.com/folder/subfolder/page.html">http://www.somelongname.com/folder/subfolder/page.html</a>。电子邮件地址通常采用 <a href="mailto:nameofperson@somelongname.com">nameofperson@somelongname.com</a> 的形式。</p>
<p><strong>注意网址长度</strong> 很多时候网址很长，很长，真的很长，比如 <a href="https://example.com/search?q=5b2p6JuL77ya5L2g55yL5Ye65p2l5LqG6L+Z5pivYmFzZTY077yM5Y+v5oOc5rKh5pyJ5aWW5YqxCg==">https://example.com/search?q=5b2p6JuL77ya5L2g55yL5Ye65p2l5LqG6L+Z5pivYmFzZTY077yM5Y+v5oOc5rKh5pyJ5aWW5YqxCg==</a></p>
<p>编写CSS的时候切记处理一行都无法容纳下一个词语的“特殊”情况（它在链接里真的很常见），否则你讲看到你的布局被一个超级长的链接顶出世界外。</p>
<h3 id="块引用-blockquote"><a href="#块引用-blockquote">块引用 (blockquote)</a></h3>
<p>格式化引用块很简单，稍微缩小一点字体大小，左侧缩进2~5em，与首行缩进一样，缩进需要足够大以显眼，但是也不能太大避免让行长过短。</p>
<p>对于中文，你还可以尝试把字体换成楷体或者仿宋。</p>
<h3 id="表格"><a href="#表格">表格</a></h3>
<p>表格的格式有很多种方式。但默认表格有两个格式缺陷，你应该始终修正：border（边线）和padding（边距）。</p>
<p>单元格border是表格中每个单元格周围的线条，在写表格的时候，它们比较有用，但是表格x满了后，它们的作用就没那么大了。单元格中的文本会形成隐含的网格。格子边界会使网格显得杂乱，尤其是在有许多小格子的表格中。</p>
<style>
#bad-table tr, #bad-table td, #bad-table th { border: 1px solid; padding: unset; }
</style>
<div id="bad-table">
<table>
<thead>
<tr>
<th>这是</th>
<th>一个</th>
<th>一个</th>
</tr>
</thead>
<tbody>
<tr>
<td>表格</td>
<td>示例</td>
<td>啊啊</td>
</tr>
<tr>
<td>不知道</td>
<td>说什么</td>
<td>了</td>
</tr>
</tbody>
</table>
</div>
<p>当你准备格式化表格时，我建议先关闭所有单元格边界，然后根据需要重新开启。</p>
<p>默认的单元格padding太紧了。小心地增加空间，一点点就足够了。而且，没有必要让所有细胞边缘都一样。上下边缘可以比侧边边界大，如果这样看起来没错的话。</p>
<table>
<thead>
<tr>
<th>这是</th>
<th>一个</th>
<th>一个</th>
</tr>
</thead>
<tbody>
<tr>
<td>表格</td>
<td>示例</td>
<td>啊啊</td>
</tr>
<tr>
<td>不知道</td>
<td>说什么</td>
<td>了</td>
</tr>
</tbody>
</table>
<h3 id="居中文本"><a href="#居中文本">居中文本</a></h3>
<blockquote>
<p>居中文本就像香草冰淇淋，安全但是无聊</p>
</blockquote>
<p>用于短语或标题时，居中文本是可以接受的，比如主要章节标题。但是，整段文本不应置中。居中使文本块难以阅读。</p>
<h3 id="首行缩进"><a href="#首行缩进">首行缩进</a></h3>
<p>首行缩进是标示新段落开头的最常用方式。另一种常见方式是段落间距。首行缩进和段落间距是二选一的，同时使用这两种方式是错误的。如果你在段落中使用首行缩进，就不要在段落之间留额外的空格。反之亦然。</p>
<h3 id="段落间距"><a href="#段落间距">段落间距</a></h3>
<p>段间距需要空间足够大以便易于察觉，但又不能大到让段落看起来不连贯。</p>
<h3 id="行距"><a href="#行距">行距</a></h3>
<p>行间距是指文本行之间的垂直距离。许多文档流行使用双倍行距或单倍行距，中间没有其他选择，这是打字机时代留下的过时习惯。最初，打字机只能以单行为单位垂直移动纸张。因此，行距的选择限制在一行、两行或更多行。单倍行距使得文本密集难读，但是双倍行距又太过于宽松。</p>
<blockquote>
<p>对于大多数文本，最佳行距 (line height) 在点数大小的120%到145%之间。</p>
</blockquote>
<p>悲伤的是，中文的行距要比英文大，我也不知道为什么，这可能是因为中文经常会视觉上占满整个方格，而英文一般只占 3/4 个方格？总而言之，中文的排版要求与英文的是矛盾的：</p>
<blockquote>
<p>版心的行距 (line gap)<sup><a href="#user-content-fn-line-gap" id="user-content-fnref-line-gap" data-footnote-ref aria-describedby="footnote-label">2</a></sup> 多半介于字型大小的50%–100%之间，当行长较短或字型较小时，行距设定也会相对较小。反之，行距一般不会超过字型大小，就算超过字型大小，也不会因而增加易读性。</p>
</blockquote>
<h3 id="行长"><a href="#行长">行长</a></h3>
<p>行长是指文本块左右两边之间的距离。过长的排纹是常见问题，但很容易纠正。更短的行长会极大提升版面的可读性和专业性。</p>
<p>短行比长行更易读。随着线长增加，你的眼睛必须从一条线的末端移动到下一条线的起点，从而更难垂直追踪进度。平均行长（含空格）应在45至90英文字符之间。你可以用字数来检查行长。简单的经验是，你应该能在一行放2~3个英文字母表，就像这样：</p>
<p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
<p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz</p>
<p>许多响应式网页对行长的关注不足。无论是什么宽度的屏幕，最佳的行长都是45~90字符。由于阅读距离的差异，桌面显示器上的像素和移动屏幕上的像素并不相同。请参见<a href="https://practicaltypography.com/screen-reading-considerations.html">屏幕阅读的考虑因素</a>。</p>
<p>为了保持文本可读性，<strong>不要害怕空白</strong>，为了限制行长让网页拥有很大一片空白区域完全是可接受的。如果你真的具有空白恐惧症，在空白的地方放 <code>&#x3C;aside></code> 或目录之类的东西填充，而不是让行长变得很长。</p>
<h3 id="排版细节"><a href="#排版细节">排版细节</a></h3>
<p><strong>孤字不成行</strong> 需要避免段落最后一行只有一个汉字。幸运的是，在现代我们有浏览器自动帮我们完成这项工作，只需要：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#22863A">body</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#005CC5">	text-wrap</span><span style="color:#24292E">: pretty;</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<p>缺点是，截至2026年，Firefox不目前还不支持这个属性。对于新版本其他浏览器的用户，可以缩放这个网页，会发现任何一行都应该不会在段落最后一行只有一个汉字（甚至更糟糕点，一个句号）的情况。</p>
<p><strong>中英混排空白</strong> 参见<a href="https://stblog.penclub.club/posts/StopPanguing/">移除盘古：为什么你应该停止在中西文间使用空格</a>，汉字与英文之间应该插入通常是1/4汉字宽度的空白，但不应该是空格。如今已经是2026年，使用 <code>text-autospace</code> 即可。</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#22863A">body</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#005CC5">	text-autospace</span><span style="color:#24292E">: </span><span style="color:#005CC5">normal</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label"><a href="#footnote-label">Footnotes</a></h2>
<ol>
<li id="user-content-fn-%E6%9C%89%E7%9A%84%E6%97%A0%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93%E8%AE%BE%E8%AE%A1%E4%BA%86%E4%B8%93%E9%97%A8%E7%9A%84%E6%96%9C%E4%BD%93%EF%BC%8C%E4%B8%8D%E5%9C%A8%E8%AE%A8%E8%AE%BA%E8%8C%83%E5%9B%B4%E5%86%85">
<p>有的无衬线字体设计了专门的斜体，不在讨论范围内 <a href="#user-content-fnref-%E6%9C%89%E7%9A%84%E6%97%A0%E8%A1%AC%E7%BA%BF%E5%AD%97%E4%BD%93%E8%AE%BE%E8%AE%A1%E4%BA%86%E4%B8%93%E9%97%A8%E7%9A%84%E6%96%9C%E4%BD%93%EF%BC%8C%E4%B8%8D%E5%9C%A8%E8%AE%A8%E8%AE%BA%E8%8C%83%E5%9B%B4%E5%86%85" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-line-gap">
<p>line gap = line height - font size <a href="#user-content-fnref-line-gap" data-footnote-backref="" aria-label="Back to reference 2" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,headings:[{depth:2,slug:`最简单的前置知识`,text:`最简单的前置知识`},{depth:2,slug:`你的博客你的选择`,text:`你的博客，你的选择`},{depth:2,slug:`typography-in-ten-minutes`,text:`Typography in ten minutes`},{depth:2,slug:`formatting-by-elements`,text:`Formatting by Elements`},{depth:3,slug:`标题`,text:`标题`},{depth:3,slug:`强调`,text:`强调`},{depth:3,slug:`下划线`,text:`下划线`},{depth:3,slug:`换行`,text:`换行`},{depth:3,slug:`字号`,text:`字号`},{depth:3,slug:`字体`,text:`字体`},{depth:3,slug:`颜色`,text:`颜色`},{depth:3,slug:`链接网址电子邮箱`,text:`链接、网址、电子邮箱`},{depth:3,slug:`块引用-blockquote`,text:`块引用 (blockquote)`},{depth:3,slug:`表格`,text:`表格`},{depth:3,slug:`居中文本`,text:`居中文本`},{depth:3,slug:`首行缩进`,text:`首行缩进`},{depth:3,slug:`段落间距`,text:`段落间距`},{depth:3,slug:`行距`,text:`行距`},{depth:3,slug:`行长`,text:`行长`},{depth:3,slug:`排版细节`,text:`排版细节`},{depth:2,slug:`footnote-label`,text:`Footnotes`}]};export{e as default};