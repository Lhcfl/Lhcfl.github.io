var e={frontmatter:{title:`PFPL 笔记 - VI Dynamic Types`,date:`2025-04-13T23:34:46`,tags:[],categories:[`Practical Foundations for Programming Languages`],copyright:`CC BY-NC-SA 4.0`},titleHtml:`PFPL 笔记 - VI Dynamic Types`,html:`<p>笔记 7</p>
<!-- more -->
<h2 id="girards-system-f"><a href="#girards-system-f">Girard's System F</a></h2>
<p>之前我们讨论的语言都非常地单态，每个表达式都有独立的一个类型，不支持多态。</p>
<p>这一章讲了通过 System F i.e. polymorphic typed lambda calculus 如何实现多态的。</p>
<p>引入一种全称类型，<code>∀ t . τ</code></p>
<p><code>Λ t . e</code> 是一个泛型函数，它的类型是一个 <code>∀ t . τ</code></p>
<p>比如</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>Λ t . λ (x : t) ↦ x</span></span></code></pre>
<p>是一个 polymorphic identity function 具有类型</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>∀ t . t ↦ t</span></span></code></pre>
<p>我们自然的可以把它叫作 unit， 而上面那个函数其实就是 <code>⟨ ⟩</code> 它完全就是 null tuple 因为它是这个类型的唯一个元素</p>
<p>二元组也能被很好的定义，和 Chapter 17 untyped lambda calculus 一样：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>τ₁ × τ₂  ≝ ∀ r . (τ₁ → τ₂ → r) → r</span></span>
<span class="line"><span>⟨e₁, e₂⟩ ≝ Λ r . λ (x : τ₁ → τ₂ → r) ↦ x e₁ e₂</span></span>
<span class="line"><span>e.l      ≝ e[τ₁] λ (x : τ₁) (y: τ₂) ↦ x</span></span>
<span class="line"><span>e.l      ≝ e[τ₂] λ (x : τ₁) (y: τ₂) ↦ y</span></span></code></pre>
<p>容易看出这就是 17 章定义的 pair 加上了泛型类型。</p>
<p>sum type 也是容易定义的，只需要看出来 sum type 可以看作一个函数链，其中只有一个函数是能被调的</p>
<p><img src="/images/systemf_binary_sum.png" alt=""></p>
<p>还有自然数。容易把自然数看成对于泛型 t 的</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>t -> (t -> t) -> t</span></span></code></pre>
<p>比如</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>zero :: t -> (t -> t) -> t</span></span>
<span class="line"><span>zero z s = z</span></span>
<span class="line"><span>succ :: nat -> nat</span></span>
<span class="line"><span>succ e z s = s(e z s)</span></span></code></pre>
<p>由此可知， <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mrow><mo>→</mo><mi mathvariant="normal">∀</mi></mrow></mrow><annotation encoding="application/x-tex">\\mathcal{L}{\\rightarrow \\forall}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathcal">L</span><span class="mord"><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">∀</span></span></span></span></span> 至少具有和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mrow><mtext>nat\xA0</mtext><mo>→</mo></mrow></mrow><annotation encoding="application/x-tex">\\mathcal{L}{\\text{nat }\\rightarrow}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathcal">L</span><span class="mord"><span class="mord text"><span class="mord">nat\xA0</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span></span></span></span></span> 一样的表达力。事实上，它的表达力更强。</p>
<p>System F 可以表达 Godel's T 的 evaluate function，但是 Godel's T 没法表达自己的。当然二者都不是完备的，无法表达自己</p>
<p>注意到，多态性仅靠类型就能一定程度上推断出行为。例如对于类型 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∀</mi><mo stretchy="false">(</mo><mi>t</mi><mi mathvariant="normal">.</mi><mi>t</mi><mo>→</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\forall (t. t \\to t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∀</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mord">.</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span> 因为我们没有任何关于 t 的信息，为了总是能成立，它只能是 identity function <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Λ</mi><mo stretchy="false">(</mo><mi>t</mi><mi mathvariant="normal">.</mi><mi>λ</mi><mo stretchy="false">(</mo><mi>x</mi><mo>:</mo><mi>t</mi><mo stretchy="false">)</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\Lambda (t. \\lambda (x:t) x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Λ</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mord">.</span><span class="mord mathnormal">λ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span></p>
<p>（题外话：上面的东西很直观，但我没理解如何证明的，但从我之前在知乎上看的东西看，似乎在范畴论里可以证出来 ∀ t → t 只有 ident function？）</p>
<p>参数化理论意味着，我们能够仅凭程序类型推导出关于程序行为的定理。这类定理有时被称为自由定理，因为它们是类型推导的“免费”结果，无需程序分析或验证即可推导。这些定理支撑了多态语言的卓越体验，即类型良好的程序在执行时往往能按预期运行。也就是说，满足类型检查器是正确性的充分条件。参数化对程序行为的限制非常严格，以至于只有相对较少的同类型程序会表现出非预期的行为，从而排除了编写代码时经常出现的一大类错误</p>
<h2 id="abstract-types"><a href="#abstract-types">Abstract Types</a></h2>
<h3 id="existential-types"><a href="#existential-types">Existential Types</a></h3>
<p>有了 forall 类型当然就有 exist 类型对吧。</p>
<p>据说 existential type 在 rust 里的对应是 <code>dyn Trait</code> —— 你不知道具体是什么类型 但是保证了这里存在一个类型 T 满足 Trait. 或者说，存在类型对应一个 trait 而它的一个实例对应一个 impl</p>
<p>比如</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">fn</span><span style="color:#6F42C1"> get_animal</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">-</span><span style="color:#D73A49">></span><span style="color:#D73A49"> impl</span><span style="color:#6F42C1"> Animal</span><span style="color:#24292E">;</span></span></code></pre>
<p>你不知道具体返回的是哪个 animal，可能是 Cat 或者 Dog，但是它保证了会返回一个 Animal，它其实是</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>get_animal : () → ∃ (t . ⟨ Animal ⟩ )</span></span></code></pre>
<p>所以</p>
<p><img src="/images/existential_type.png" alt=""></p>
<p>其实 pack 就是构造了一个存在类型</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding="application/x-tex">\\rho</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ρ</span></span></span></span> 是 e2 的类型其实</p>
<p>Main idea of data abstracton is to introduce a <strong>interface</strong></p>
<p>抽象类型一个重大的动力是实现一个抽象的接口，客户端不需要关注具体实现，只要二者都满足相同的接口和一个（后面我们会讲得性质（？））</p>
<p>Existential type 可以用 System F 表示：</p>
<p>∃ t . τ == ∀ u . (∀ t. τ → u ) → u</p>
<p>这意味着如果给定了 (∀ t. τ → u )，也就是存在类型最后的那个 client 我们都当然能构造出 u ，这也是 ∃ 类型用 ∀ 类型 的解释</p>
<h4 id="bisimilar"><a href="#bisimilar">Bisimilar</a></h4>
<p>// todo</p>
<h2 id="constructors-and-kinds"><a href="#constructors-and-kinds">Constructors and Kinds</a></h2>
<p>注意到 nat → nat 和 nat list 可以被思考为</p>
<ul>
<li>(→) 构造子作用在 nat 和 nat 上</li>
<li>list 作用在 nat 上</li>
</ul>
<p>（就像函数那样）</p>
<h3 id="我们是否要支持-type-上的计算"><a href="#我们是否要支持-type-上的计算">我们是否要支持 type 上的计算？</a></h3>
<p>比如考虑 ⟨ t₁ , t₂ ⟩ . l 似乎它等价于 t₁ 那么 ⟨ t₁ , t₂ ⟩ . l 的表达式也应该具有 t₁ 类型？</p>
<p>需要引入 definational equality of constructor 的概念，并且要求我们设计一个算法看它是否等价（甚至对于太强的类型系统可能遇到图灵完备问题？）</p>
<p>另一种方案：禁止这种 constructors 这样等价就只有完全长得一模一样的概念了
这个方案的问题是会让 substitution 的定义变得困难</p>
<p>这里新书选择了第一种方案，旧书选择了第二种</p>
<p>目前已经有了许多检查 type equality 的方式</p>`,headings:[{depth:2,slug:`girards-system-f`,text:`Girard's System F`},{depth:2,slug:`abstract-types`,text:`Abstract Types`},{depth:3,slug:`existential-types`,text:`Existential Types`},{depth:4,slug:`bisimilar`,text:`Bisimilar`},{depth:2,slug:`constructors-and-kinds`,text:`Constructors and Kinds`},{depth:3,slug:`我们是否要支持-type-上的计算`,text:`我们是否要支持 type 上的计算？`}]};export{e as default};