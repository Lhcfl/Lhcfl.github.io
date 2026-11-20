var e={frontmatter:{title:`Hexo 博客添加数学支持`,date:`2023-10-13T10:44:31`,tags:[`Hexo`,`Blog`,`Code`],copyright:`CC BY-SA 3.0`,categories:[]},titleHtml:`Hexo 博客添加数学支持`,html:`<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi} = -1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8247em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0359em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span></p>
<!-- more -->
<p>数学支持对于个人博客来说我觉得至关重要，但是默认的 Hexo 渲染 Markdown 的引擎 <code>hexo-render-marked</code> 却不支持。本文讲述如何通过更换 Hexo 的 Markdown 渲染引擎的方式让你的博客支持数学。</p>
<div class="tip">
警告：在开始本指南之前，请确保您位于 hexo 主目录中。
</div>
<p>默认的 Hexo 安装将包括一个使用 <code>marked</code> 的 Markdown renderer（渲染器）插件，因此如果要更换，例如更换成本教程使用的 <code>hexo-renderer-markdown-it</code> ，你应该先卸载它。</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">$</span><span style="color:#032F62"> npm</span><span style="color:#032F62"> un</span><span style="color:#032F62"> hexo-renderer-marked</span><span style="color:#005CC5"> --save</span></span></code></pre>
<p>如果您已经删除了默认 renderer 以及您可能添加的其他 renderer，现在可以安全地安装 <code>hexo-renderer-markdown-it</code></p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">$</span><span style="color:#032F62"> npm</span><span style="color:#032F62"> i</span><span style="color:#032F62"> hexo-renderer-markdown-it</span><span style="color:#005CC5"> --save</span></span></code></pre>
<p>安装 <code>markdown-it</code> 数学插件：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">$</span><span style="color:#032F62"> npm</span><span style="color:#032F62"> install</span><span style="color:#032F62"> katex</span><span style="color:#032F62"> @renbaoshuo/markdown-it-katex</span></span></code></pre>
<p>在 <code>_config.yml</code> 中添加下列配置：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#22863A">markdown</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">  preset</span><span style="color:#24292E">: </span><span style="color:#032F62">"default"</span></span>
<span class="line"><span style="color:#22863A">  render</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">    html</span><span style="color:#24292E">: </span><span style="color:#005CC5">true</span></span>
<span class="line"><span style="color:#22863A">    xhtmlOut</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#22863A">    langPrefix</span><span style="color:#24292E">: </span><span style="color:#032F62">"language-"</span></span>
<span class="line"><span style="color:#22863A">    breaks</span><span style="color:#24292E">: </span><span style="color:#005CC5">true</span></span>
<span class="line"><span style="color:#22863A">    linkify</span><span style="color:#24292E">: </span><span style="color:#005CC5">true</span></span>
<span class="line"><span style="color:#22863A">    typographer</span><span style="color:#24292E">: </span><span style="color:#005CC5">true</span></span>
<span class="line"><span style="color:#22863A">    quotes</span><span style="color:#24292E">: </span><span style="color:#032F62">"“”‘’"</span></span>
<span class="line"><span style="color:#22863A">  enable_rules</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">  disable_rules</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">  plugins</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#24292E">    - </span><span style="color:#22863A">name</span><span style="color:#24292E">: </span><span style="color:#032F62">"@renbaoshuo/markdown-it-katex"</span></span>
<span class="line"><span style="color:#22863A">      options</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">        skipDelimitersCheck</span><span style="color:#24292E">: </span><span style="color:#005CC5">true</span></span>
<span class="line"><span style="color:#22863A">  anchors</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">    level</span><span style="color:#24292E">: </span><span style="color:#005CC5">2</span></span>
<span class="line"><span style="color:#22863A">    collisionSuffix</span><span style="color:#24292E">: </span><span style="color:#032F62">""</span></span>
<span class="line"><span style="color:#22863A">    permalink</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#22863A">    permalinkClass</span><span style="color:#24292E">: </span><span style="color:#032F62">"header-anchor"</span></span>
<span class="line"><span style="color:#22863A">    permalinkSide</span><span style="color:#24292E">: </span><span style="color:#032F62">"left"</span></span>
<span class="line"><span style="color:#22863A">    permalinkSymbol</span><span style="color:#24292E">: </span><span style="color:#032F62">"¶"</span></span>
<span class="line"><span style="color:#22863A">    case</span><span style="color:#24292E">: </span><span style="color:#005CC5">0</span></span>
<span class="line"><span style="color:#22863A">    separator</span><span style="color:#24292E">: </span><span style="color:#032F62">"-"</span></span>
<span class="line"><span style="color:#22863A">  images</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">    lazyload</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#22863A">    prepend_root</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#22863A">    post_asset</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#22863A">  inline</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span><span style="color:#6A737D"> # https://markdown-it.github.io/markdown-it/#MarkdownIt.renderInline</span></span></code></pre>
<p>可选的，你可能需要去你的主题设置里，添加 KaTeX 样式表：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">link</span></span>
<span class="line"><span style="color:#6F42C1">  rel</span><span style="color:#24292E">=</span><span style="color:#032F62">"stylesheet"</span></span>
<span class="line"><span style="color:#6F42C1">  href</span><span style="color:#24292E">=</span><span style="color:#032F62">"https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"</span></span>
<span class="line"><span style="color:#24292E">/></span></span></code></pre>
<p>关于 <code>hexo-renderer-markdown-it</code> 的其他说明，请参考 <a href="https://github.com/hexojs/hexo-renderer-markdown-it">https://github.com/hexojs/hexo-renderer-markdown-it</a></p>`,headings:[]};export{e as default};