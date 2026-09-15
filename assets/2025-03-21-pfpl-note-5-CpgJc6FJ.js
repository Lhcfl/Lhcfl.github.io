var e={frontmatter:{title:`PFPL 笔记 - V Infinite Data Types`,date:`2025-03-21T16:03:19`,tags:[],categories:[`Practical Foundations for Programming Languages`],toc:!0,copyright:`CC BY-NC-SA 4.0`},titleHtml:`PFPL 笔记 - V Infinite Data Types`,html:`<p>笔记 5</p>
<!-- more -->
<h2 id="inductive-and-co-inductive-types"><a href="#inductive-and-co-inductive-types">Inductive and Co-Inductive Types</a></h2>
<p>inductive type 一个很直观的例子是自然数类型 nat</p>
<p>之前的定义是</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>zero : nat</span></span>
<span class="line"><span>n: nat |- succ(n) : nat</span></span></code></pre>
<p>现在我们引入新的定义</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>Gamma |- e : unit + nat</span></span>
<span class="line"><span>------------------</span></span>
<span class="line"><span>Gamma |- fold(nat, e) : nat</span></span></code></pre>
<p>fold(nat, e) 是 nat 的唯一引入形式。在这样的表达式里， z 被定义为 fold(nat, l) 而 s(e) 被定义为 fold(nat, e)</p>
<p>另一个不错的例子是 stream. 熟悉 Haskell 的会知道 Haskell 内存在无限列表这样的东西。</p>
<p>在之前，我们的递归类型需要递归到把所有值都计算出来，stream 相反，需要什么就计算什么</p>
<p><img src="/images/stream.png" alt=""></p>
<p>其中 hd(e) 为 head of the stream</p>`,headings:[{depth:2,slug:`inductive-and-co-inductive-types`,text:`Inductive and Co-Inductive Types`}]};export{e as default};