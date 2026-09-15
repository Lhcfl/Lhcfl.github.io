var e={frontmatter:{title:`PFPL 笔记 - XI Types and Propositions`,date:`2025-09-18T16:46:01`,tags:[],categories:[`Practical Foundations for Programming Languages`],copyright:`CC BY-NC-SA 4.0`},titleHtml:`PFPL 笔记 - XI Types and Propositions`,html:`<p>笔记 11 Types and Propositions</p>
<!-- more -->
<h2 id="constructive-logic"><a href="#constructive-logic">Constructive Logic</a></h2>
<p>构造性逻辑将「真」定义为「存在一个证明」</p>
<p>著名的 Curry-Howard 同构描述了</p>
<ul>
<li>Propositions as types</li>
<li>Proofs as programs</li>
<li>Simplification of proofs as evaluation of programs</li>
</ul>
<p>Constructive logic 没有排中律，which means 如果我们有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϕ</mi></mrow><annotation encoding="application/x-tex">\\phi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ϕ</span></span></span></span> false 并不能推出 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">¬</mi><mi>ϕ</mi></mrow><annotation encoding="application/x-tex">\\neg \\phi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">¬</span><span class="mord mathnormal">ϕ</span></span></span></span> true</p>
<h3 id="constructive-semantics"><a href="#constructive-semantics">Constructive Semantics</a></h3>
<p>Constructive Logic 关注两个判断： <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϕ</mi><mtext>\xA0prop</mtext></mrow><annotation encoding="application/x-tex">\\phi \\text{ prop}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ϕ</span><span class="mord text"><span class="mord">\xA0prop</span></span></span></span></span> 和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ϕ</mi><mtext>\xA0true</mtext></mrow><annotation encoding="application/x-tex">\\phi \\text{ true}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ϕ</span><span class="mord text"><span class="mord">\xA0true</span></span></span></span></span></p>
<p>命题不止被视为一个真值，还被视为一个问题陈述</p>
<p><img src="/images/constructive%20logic%20semantics.png" alt=""></p>
<h2 id="classical-logic"><a href="#classical-logic">Classical Logic</a></h2>
<p>constructive logic 没有排中律比较难受</p>
<p>书中认为 Constructive Logic 某种意义上是“人类死角”而 classical logic 是“上帝视角”
<img src="/images/Pasted%20image%2020250917163905.png" alt=""></p>`,headings:[{depth:2,slug:`constructive-logic`,text:`Constructive Logic`},{depth:3,slug:`constructive-semantics`,text:`Constructive Semantics`},{depth:2,slug:`classical-logic`,text:`Classical Logic`}]};export{e as default};