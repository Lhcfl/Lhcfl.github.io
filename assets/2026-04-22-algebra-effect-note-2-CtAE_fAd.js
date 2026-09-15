var e={frontmatter:{date:`2026-04-22T07:58:47`,updatedDate:`2026-04-22T07:58:47`,title:`Algebraic theories 笔记 2`,tags:[`PL`],categories:[`Algebraic Effects`],category:``,toc:!1,incomplete:!1,hidden:!1,thumbnail:``,displayThumbnail:!1,copyright:`CC BY-SA 4.0`},titleHtml:`Algebraic theories 笔记 2`,html:`<p>Andrej Bauer 的 Lecture 2 的笔记。</p>
<p>视频和资料: <a href="https://www.cs.uoregon.edu/research/summerschool/summer18/topics.php#Bauer">https://www.cs.uoregon.edu/research/summerschool/summer18/topics.php#Bauer</a></p>
<p>简介：本次讲座介绍数学（Algebraic theories），可参考文章 <a href="https://arxiv.org/abs/1807.05923">What is algebraic about algebraic effects and handlers?</a></p>
<!-- more -->
<p>Q1: artiy 是什么</p>
<p>在 <strong>Algebraic effects</strong> 里，**arity（元数）**指的是：<br>
👉 一个 <em>effect operation</em> 接受多少“输入参数”，以及这些参数的结构是什么。</p>
<p>但它比普通函数的“几个参数”要稍微多一层含义。</p>
<hr>
<h2 id="1️⃣-最直观的理解像函数参数个数"><a href="#1️⃣-最直观的理解像函数参数个数">1️⃣ 最直观的理解（像函数参数个数）</a></h2>
<p>在最简单的情况下，arity 就是：</p>
<blockquote>
<p>一个操作接受几个参数</p>
</blockquote>
<p>比如：</p>
<ul>
<li>
<p><code>read : unit → string</code><br>
👉 arity = 0（不需要输入）</p>
</li>
<li>
<p><code>write : string → unit</code><br>
👉 arity = 1（需要一个字符串）</p>
</li>
</ul>
<p>这和普通函数的 arity 是一样的。</p>
<hr>
<h2 id="2️⃣-在-algebraic-effects-里的完整版含义"><a href="#2️⃣-在-algebraic-effects-里的完整版含义">2️⃣ 在 algebraic effects 里的“完整版含义”</a></h2>
<p>在 algebraic effects 中，一个 operation 通常写成：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op : A → B</span></span></code></pre>
<p>这里：</p>
<ul>
<li>
<p><code>A</code> = 参数类型（input）</p>
</li>
<li>
<p><code>B</code> = continuation 的返回类型</p>
</li>
</ul>
<p>👉 所以 <strong>arity 本质上是 A 的结构</strong></p>
<p>也就是说：</p>
<blockquote>
<p>arity = operation 接受的“参数形状”（type signature 的输入部分）</p>
</blockquote>
<hr>
<h2 id="3️⃣-更关键的一点它隐含-continuation"><a href="#3️⃣-更关键的一点它隐含-continuation">3️⃣ 更关键的一点：它隐含 continuation</a></h2>
<p>在 effect 理论里，一个 operation 实际上是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op(a, k)</span></span></code></pre>
<ul>
<li>
<p><code>a : A</code>（参数）</p>
</li>
<li>
<p><code>k : B → ...</code>（continuation）</p>
</li>
</ul>
<p>👉 所以更完整地说：</p>
<blockquote>
<p>arity 描述的是 operation 在触发时，传入的“参数部分”，不包括 continuation</p>
</blockquote>
<hr>
<h2 id="4️⃣-举个更贴近-effect-的例子"><a href="#4️⃣-举个更贴近-effect-的例子">4️⃣ 举个更贴近 effect 的例子</a></h2>
<p>比如 nondeterminism：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>choose : unit → bool</span></span></code></pre>
<p>看起来 arity 是 0，但实际运行时：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>choose((), k)</span></span></code></pre>
<p>handler 可能这样用：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>k(true)</span></span>
<span class="line"><span>k(false)</span></span></code></pre>
<p>👉 所以：</p>
<ul>
<li>
<p>arity = <code>unit</code></p>
</li>
<li>
<p>continuation 是隐含的，不算在 arity 里</p>
</li>
</ul>
<hr>
<h2 id="5️⃣-在代数理论algebraic-theory里的本源定义"><a href="#5️⃣-在代数理论algebraic-theory里的本源定义">5️⃣ 在代数理论（algebraic theory）里的本源定义</a></h2>
<p>从更数学的角度（universal algebra）：</p>
<blockquote>
<p>arity = operation symbol 对应的参数个数（或参数类型）</p>
</blockquote>
<p>例如：</p>
<ul>
<li>
<p><code>+</code> 是二元（arity 2）</p>
</li>
<li>
<p><code>0</code> 是零元（arity 0）</p>
</li>
</ul>
<p>而 algebraic effects 只是把它推广到了：</p>
<p>👉 <strong>typed + 带 continuation 的版本</strong></p>
<hr>
<h2 id="️-一句话总结"><a href="#️-一句话总结">✔️ 一句话总结</a></h2>
<blockquote>
<p>在 algebraic effects 中，<strong>arity 指的是一个 effect operation 的输入参数类型（不包含 continuation）</strong>，也就是它“需要多少、什么样的输入”。</p>
</blockquote>
<hr>
<p>如果你是在看 PL 课（比如 algebraic effects + handlers），我可以帮你把：</p>
<ul>
<li>
<p>arity</p>
</li>
<li>
<p>signature</p>
</li>
<li>
<p>handler clause</p>
</li>
</ul>
<p>三者之间的关系画一张结构图，这样会更清晰。</p>
<hr>
<p>带参数的 op：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>op: P × |I|^A -> |I|</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中 P 是参数，A 是元数 （arity)</span></span>
<span class="line"><span></span></span></code></pre>
<p>signature <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span> =  <code>{ op_i : P ~> A_i }</code></p>
<hr>
<p>The free model <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mi>r</mi><mi>e</mi><msub><mi>e</mi><mi>T</mi></msub><mo stretchy="false">(</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">Free_T(V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mord mathnormal">e</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.2222em;">V</span><span class="mclose">)</span></span></span></span> is the set of compitations with effects described by theory T and returing values from set V</p>
<p>这是在用 <strong>代数理论（algebraic theory）/ 自由模型（free model）</strong> 的语言，形式化地定义一个 algebraic effect handler。</p>
<p>你看到的：</p>
<ul>
<li>一个操作解释
[
[![\\mathrm{op}]!]_M
]</li>
<li>和一个返回子句
[
r : V \\to |Free_{T'}(V')|
]</li>
</ul>
<p>本质上是在说：</p>
<blockquote>
<p>“一个 handler 如何处理 effect operation，以及如何处理普通 return 值。”</p>
</blockquote>
<p>我一步一步拆开。</p>
<hr>
<h1 id="1-整个背景"><a href="#1-整个背景">1. 整个背景</a></h1>
<p>通常：</p>
<ul>
<li>(T) 是源 effect signature/theory</li>
<li>(T') 是目标 theory</li>
</ul>
<p>handler 会把：</p>
<p>[
Free_T(V)
]</p>
<p>中的 computation，转换成：</p>
<p>[
Free_{T'}(V')
]</p>
<p>中的 computation。</p>
<p>也就是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>带有效果 T 的程序</span></span>
<span class="line"><span>        ↓ handler</span></span>
<span class="line"><span>带有效果 T' 的程序</span></span></code></pre>
<p>例如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>State effect</span></span>
<span class="line"><span>   ↓ handler</span></span>
<span class="line"><span>纯 computation</span></span></code></pre>
<p>或者：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>NonDet</span></span>
<span class="line"><span>   ↓ handler</span></span>
<span class="line"><span>List effect</span></span></code></pre>
<hr>
<h1 id="2-free_tv-是什么"><a href="#2-free_tv-是什么">2. Free_T(V) 是什么</a></h1>
<p>它表示：</p>
<blockquote>
<p>“使用 effect theory (T) 构造的自由 computation”</p>
</blockquote>
<p>里面可以有：</p>
<ul>
<li>return value</li>
<li>effect operations</li>
<li>continuation</li>
</ul>
<p>比如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">return 3</span></span></code></pre>
<p>或者：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">choose</span><span style="color:#005cc5">(</span><span style="color:#24292E">x,y</span><span style="color:#005cc5">)</span></span></code></pre>
<p>或者：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">get</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span></span></code></pre>
<p>等等。</p>
<hr>
<h1 id="3-handler-需要定义两件事"><a href="#3-handler-需要定义两件事">3. handler 需要定义两件事</a></h1>
<p>handler 要告诉我们：</p>
<hr>
<h2 id="1return-怎么处理"><a href="#1return-怎么处理">（1）return 怎么处理</a></h2>
<p>这就是：</p>
<p>[
r : V \\to |Free_{T'}(V')|
]</p>
<p>意思：</p>
<blockquote>
<p>一个纯返回值 (v \\in V)，应该被变成什么 computation。</p>
</blockquote>
<p>例如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">return x  ↦  return x</span></span></code></pre>
<p>那对应：</p>
<p>[
r(v)=\\eta(v)
]</p>
<p>这里 (\\eta) 是 monad unit。</p>
<hr>
<p>例如 state handler 可能：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">return x ↦ return </span><span style="color:#005cc5">(</span><span style="color:#24292E">x,s</span><span style="color:#005cc5">)</span></span></code></pre>
<p>于是：</p>
<p>[
r(v)=\\text{return }(v,s)
]</p>
<hr>
<h1 id="4-operation-怎么处理"><a href="#4-operation-怎么处理">4. operation 怎么处理</a></h1>
<p>这是：</p>
<p>[
[![\\mathrm{op}]!]_M
]</p>
<p>这里最容易迷糊。</p>
<hr>
<p>先看 operation 的一般形式：</p>
<p>在 algebraic effects 里，一个 operation 通常长这样：</p>
<p>[
\\mathrm{op}: P \\rightsquigarrow A
]</p>
<p>意思：</p>
<ul>
<li>参数集 (P)</li>
<li>返回值集合 (A)</li>
</ul>
<p>例如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>choose : 1 → Bool</span></span></code></pre>
<p>没有参数，返回 bool。</p>
<p>或者：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>read : 1 → String</span></span></code></pre>
<hr>
<p>而 operation 在 free model 中，会被解释成：</p>
<p>[
[![\\mathrm{op}]!]_M :
P \\times |M|^A \\to |M|
]</p>
<p>这里：</p>
<ul>
<li>(M) 是某个 model</li>
<li>(|M|) 是底层 carrier set</li>
</ul>
<hr>
<h1 id="5-为什么有-continuation"><a href="#5-为什么有-continuation">5. 为什么有 continuation</a></h1>
<p>这最关键。</p>
<p>effect operation 不只是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">op</span><span style="color:#005cc5">(</span><span style="color:#24292E">arg</span><span style="color:#005cc5">)</span></span></code></pre>
<p>它还有：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">之后要做什么</span></span></code></pre>
<p>也就是 continuation。</p>
<p>因此：</p>
<p>[
|M|^A
]</p>
<p>表示：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>operation 的每个可能返回值</span></span>
<span class="line"><span>↦ 后续 computation</span></span></code></pre>
<p>即：</p>
<p>[
k : A \\to |M|
]</p>
<hr>
<p>例如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">x </span><span style="color:#24292E">&#x3C;</span><span style="color:#24292E">- choose</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">k</span><span style="color:#005cc5">(</span><span style="color:#24292E">x</span><span style="color:#005cc5">)</span></span></code></pre>
<p>continuation 是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>Bool → computation</span></span></code></pre>
<hr>
<h1 id="6-所以-handler-的-operation-clause-是什么"><a href="#6-所以-handler-的-operation-clause-是什么">6. 所以 handler 的 operation clause 是什么</a></h1>
<p>handler 必须告诉你：</p>
<blockquote>
<p>当遇到 op 时，如何处理它和 continuation。</p>
</blockquote>
<p>即：</p>
<p>[
[![\\mathrm{op}]!]_M
]</p>
<p>实际上是在定义：</p>
<p>[
P \\times |Free_{T'}(V')|^A
\\to
|Free_{T'}(V')|
]</p>
<hr>
<p>也就是：</p>
<p>给定：</p>
<ul>
<li>operation 参数</li>
<li>continuation</li>
</ul>
<p>产生：</p>
<ul>
<li>新 computation</li>
</ul>
<hr>
<h1 id="7-举个-nondeterminism-handler-例子"><a href="#7-举个-nondeterminism-handler-例子">7. 举个 nondeterminism handler 例子</a></h1>
<p>operation：</p>
<p>[
choose : 1 \\rightsquigarrow Bool
]</p>
<p>handler：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">choose</span><span style="color:#005cc5">(</span><span style="color:#24292E">k</span><span style="color:#005cc5">)</span><span style="color:#24292E"> ↦</span></span>
<span class="line"><span style="color:#24292E">  append</span><span style="color:#005cc5">(</span><span style="color:#24292E">k</span><span style="color:#e36209">(</span><span style="color:#24292E">true</span><span style="color:#e36209">)</span><span style="color:#24292E">, k</span><span style="color:#e36209">(</span><span style="color:#24292E">false</span><span style="color:#e36209">)</span><span style="color:#005cc5">)</span></span></code></pre>
<p>这里：</p>
<ul>
<li>continuation:
[
k : Bool \\to Free_{T'}(V')
]</li>
</ul>
<p>handler 手动调用 continuation 两次：</p>
<ul>
<li>(k(true))</li>
<li>(k(false))</li>
</ul>
<p>再组合。</p>
<hr>
<h1 id="8-数学上整体是什么意思"><a href="#8-数学上整体是什么意思">8. 数学上整体是什么意思</a></h1>
<p>所以：</p>
<hr>
<h2 id="return-clause"><a href="#return-clause">return clause</a></h2>
<p>[
r : V \\to |Free_{T'}(V')|
]</p>
<p>定义：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>return value 如何翻译</span></span></code></pre>
<hr>
<h2 id="operation-clause"><a href="#operation-clause">operation clause</a></h2>
<p>[
[![op]!]_M
]</p>
<p>定义：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>effect operation 如何翻译</span></span></code></pre>
<p>包括：</p>
<ul>
<li>operation 参数</li>
<li>continuation 的控制方式</li>
</ul>
<hr>
<h1 id="9-为什么只定义这些就够了"><a href="#9-为什么只定义这些就够了">9. 为什么只定义这些就够了</a></h1>
<p>这是自由模型（free model）的 universal property。</p>
<p>因为：</p>
<p>[
Free_T(V)
]</p>
<p>是“由”</p>
<ul>
<li>return</li>
<li>operations</li>
</ul>
<p>自由生成的。</p>
<p>所以：</p>
<blockquote>
<p>只要定义 generators 如何映射，
整个 homomorphism 自动唯一扩展。</p>
</blockquote>
<p>也就是说：</p>
<p>handler 本质是一个 model homomorphism：</p>
<p>[
Free_T(V)
\\to
Free_{T'}(V')
]</p>
<p>而：</p>
<ul>
<li>(r)</li>
<li>([![op]!]_M)</li>
</ul>
<p>就是定义这个 homomorphism 所需的数据。</p>
<hr>
<h1 id="10-最直观理解"><a href="#10-最直观理解">10. 最直观理解</a></h1>
<p>你可以把：</p>
<p>[
[![op]!]_M
]</p>
<p>理解成：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>handler 的 op clause</span></span></code></pre>
<p>而：</p>
<p>[
r
]</p>
<p>理解成：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>handler 的 return clause</span></span></code></pre>
<p>整个 handler 就是在递归解释 syntax tree。</p>`,headings:[{depth:2,slug:`1️⃣-最直观的理解像函数参数个数`,text:`1️⃣ 最直观的理解（像函数参数个数）`},{depth:2,slug:`2️⃣-在-algebraic-effects-里的完整版含义`,text:`2️⃣ 在 algebraic effects 里的“完整版含义”`},{depth:2,slug:`3️⃣-更关键的一点它隐含-continuation`,text:`3️⃣ 更关键的一点：它隐含 continuation`},{depth:2,slug:`4️⃣-举个更贴近-effect-的例子`,text:`4️⃣ 举个更贴近 effect 的例子`},{depth:2,slug:`5️⃣-在代数理论algebraic-theory里的本源定义`,text:`5️⃣ 在代数理论（algebraic theory）里的本源定义`},{depth:2,slug:`️-一句话总结`,text:`✔️ 一句话总结`},{depth:1,slug:`1-整个背景`,text:`1. 整个背景`},{depth:1,slug:`2-free_tv-是什么`,text:`2. Free_T(V) 是什么`},{depth:1,slug:`3-handler-需要定义两件事`,text:`3. handler 需要定义两件事`},{depth:2,slug:`1return-怎么处理`,text:`（1）return 怎么处理`},{depth:1,slug:`4-operation-怎么处理`,text:`4. operation 怎么处理`},{depth:1,slug:`5-为什么有-continuation`,text:`5. 为什么有 continuation`},{depth:1,slug:`6-所以-handler-的-operation-clause-是什么`,text:`6. 所以 handler 的 operation clause 是什么`},{depth:1,slug:`7-举个-nondeterminism-handler-例子`,text:`7. 举个 nondeterminism handler 例子`},{depth:1,slug:`8-数学上整体是什么意思`,text:`8. 数学上整体是什么意思`},{depth:2,slug:`return-clause`,text:`return clause`},{depth:2,slug:`operation-clause`,text:`operation clause`},{depth:1,slug:`9-为什么只定义这些就够了`,text:`9. 为什么只定义这些就够了`},{depth:1,slug:`10-最直观理解`,text:`10. 最直观理解`}]};export{e as default};