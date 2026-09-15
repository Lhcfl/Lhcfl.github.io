var e={frontmatter:{title:`Lean 初见笔记`,date:`2024-09-03T18:01:21`,tags:[`Math`,`PL`,`Lean`,`Code`,`Functional`],toc:!0,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`Lean 初见笔记`,html:`<p>Lean 4 是一个功能强大的交互式定理证明器和编程语言，结合了逻辑推理与编程，主要用于形式化验证、数学证明以及高可靠性软件开发。Lean 4 提供了一个灵活的类型系统和高性能的编译器，使其在理论研究和实际应用中都有出色表现。 —— GPT 说的。</p>
<p>F*ck 我为什么要去看这种东西啊（悲） —— 我说的</p>
<!-- more -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.post-content { 
  font-family: "Open sans", Arial;
}
</style>
<h2 id="假装这是前言"><a href="#假装这是前言">假装这是前言</a></h2>
<p>\\senioria/</p>
<p>这篇博客我会尝试用英语写。</p>
<h2 id="preparation"><a href="#preparation">Preparation</a></h2>
<h3 id="install"><a href="#install">Install</a></h3>
<p>Follow the guide at <a href="https://leanprover-community.github.io/get_started.html">https://leanprover-community.github.io/get_started.html</a></p>
<h3 id="the-book"><a href="#the-book">The book</a></h3>
<p>I'm firstly reading <a href="https://leanprover-community.github.io/mathematics_in_lean/C01_Introduction.html">Mathematics in Lean</a> to start. It is the standard mathematics-oriented reference is Mathematics in Lean, recommended by Lean Community. Unlike other popular languages, you may need a high perspective of math to learn Lean.</p>
<ul>
<li>Senioria: linca 这种动态语言迷居然觉得 lean 爽 x（超小声（</li>
<li>Me: no 我是在用它作为定理证明 （看上去就好坐牢</li>
</ul>
<p>（……真的有人会用 Lean 这种语言去写代码吗……学术代码例外）</p>
<p>Unlike other languages, in general, if you just open a single <code>.lean</code> file in your text editor and try to compile it, you'll get a bunch of confusing errors.</p>
<p>Thus, you should <strong><em>strictly</em></strong> follow <a href="https://leanprover-community.github.io/install/project.html#working-on-an-existing-project">the guide</a>, if you're a starter. I suggest this because I messed up my environment just by swapping a step (oh...), that's my personal experience.</p>
<p>如果你是初学者，你应该严格的遵守安装指南。这是我的亲身体会，你只需要交换一个看上去微不足道的步骤就能搞坏你的环境。（毕竟初学者）</p>
<p>Every non-trivial piece of Lean code needs to live inside a Lean project (sometimes also called a Lean package). A "Lean project" is more than just a folder that you've named "My Lean stuff". Rather, it's a folder containing some very specific things: in particular, a git repository and a file lakefile.lean that gathers information about dependencies of the project, including for instance the version of Lean that should be used.</p>
<h3 id="basics"><a href="#basics">Basics</a></h3>
<p>Learn requires us to justify <strong>each</strong> step in a calculation. For example:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> </span><span style="color:#005cc5">(</span><span style="color:#24292E">a b c : ℝ</span><span style="color:#005cc5">)</span><span style="color:#24292E"> : a * b * c = b * </span><span style="color:#005cc5">(</span><span style="color:#24292E">a * c</span><span style="color:#005cc5">)</span><span style="color:#24292E"> := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">mul_comm a b</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">mul_assoc b a c</span><span style="color:#005cc5">]</span></span></code></pre>
<p>The <code>rw</code> means "rewrite". And the <code>mul_comm</code> here means Commutative property of multiplication（乘法交换律）. So, <code>rw [mul_comm a b]</code> means "rewrite patterns match <code>(a * b)</code> to <code>(b * a)</code>".</p>
<p>You can see the replaced formula in VSCode here:</p>
<p><img src="/images/mul_comm_20240903184037.png" alt="mul_comm_20240903184037.png"></p>
<p>And <code>\\l</code> (<code>←</code>) stands for right-to-left equation replacement. For example:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> </span><span style="color:#005cc5">(</span><span style="color:#24292E">a b c : ℝ</span><span style="color:#005cc5">)</span><span style="color:#24292E"> : b * </span><span style="color:#005cc5">(</span><span style="color:#24292E">a * c</span><span style="color:#005cc5">)</span><span style="color:#24292E"> = a * b * c := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">\xA0 rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">← mul_assoc b a c</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">\xA0 rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">← mul_comm a b</span><span style="color:#005cc5">]</span></span></code></pre>
<p>It is the reverse of the previous proof.</p>
<h3 id="tactic"><a href="#tactic">Tactic</a></h3>
<p>It will be annoying to write duplicated basic formulas, for example if we are proving this:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : g + a + d + e + b + h + f + c = a + b + c + d + e + f + g + h := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_comm g</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc a, add_comm g, ← add_assoc</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + d</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_comm g, ← add_assoc</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + d + e</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_comm g, ← add_assoc</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + d + e + b</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a</span><span style="color:#e36209">)</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc a, add_comm </span><span style="color:#e36209">(</span><span style="color:#24292E">d + e</span><span style="color:#e36209">)</span><span style="color:#24292E">, ← add_assoc a</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + b + </span><span style="color:#5a32a3">(</span><span style="color:#24292E">d + e</span><span style="color:#5a32a3">)</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_comm </span><span style="color:#e36209">(</span><span style="color:#24292E">g + h</span><span style="color:#e36209">)</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + b + </span><span style="color:#5a32a3">(</span><span style="color:#24292E">d + e</span><span style="color:#5a32a3">)</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_comm </span><span style="color:#e36209">(</span><span style="color:#24292E">f + </span><span style="color:#5a32a3">(</span><span style="color:#24292E">g + h</span><span style="color:#5a32a3">)</span><span style="color:#e36209">)</span><span style="color:#24292E">, ← add_assoc</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">add_assoc </span><span style="color:#e36209">(</span><span style="color:#24292E">a + b</span><span style="color:#e36209">)</span><span style="color:#24292E">, add_comm </span><span style="color:#e36209">(</span><span style="color:#24292E">d + e</span><span style="color:#e36209">)</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">← add_assoc, ← add_assoc, ← add_assoc, ← add_assoc</span><span style="color:#005cc5">]</span></span></code></pre>
<p>We reordered the items tediously, but this is something that a human would know is correct at first glance. In fact, Lean requires a rigorous proof, so this is essential, but we can let the computer do this boring work for us. We need to introduce a magic: <em>Tactic</em></p>
<blockquote>
<p>The\xA0<code>ring</code>\xA0tactic is imported indirectly when we import\xA0<code>Mathlib.Data.Real.Basic</code>, but we will see in the next section that it can be used for calculations on structures other than the real numbers. It can be imported explicitly with the command\xA0<code>import\xA0Mathlib.Tactic</code>. We will see there are similar tactics for other common kind of algebraic structures.</p>
</blockquote>
<p>The <code>ring</code>\xA0tactic is designed to prove identities in any commutative ring as long as they follow purely from the ring axioms, without using any local assumption. So we can rewrite the tedious proof above, with only one line:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : g + a + d + e + b + h + f + c = a + b + c + d + e + f + g + h := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">\xA0 ring</span></span></code></pre>
<p>到这里 2.1.\xA0Calculating 的内容就结束了，今天就先写到这里。</p>`,headings:[{depth:2,slug:`假装这是前言`,text:`假装这是前言`},{depth:2,slug:`preparation`,text:`Preparation`},{depth:3,slug:`install`,text:`Install`},{depth:3,slug:`the-book`,text:`The book`},{depth:3,slug:`basics`,text:`Basics`},{depth:3,slug:`tactic`,text:`Tactic`}]};export{e as default};