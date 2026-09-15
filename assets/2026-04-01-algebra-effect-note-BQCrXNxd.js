var e={frontmatter:{date:`2026-04-01T08:17:17`,updatedDate:`2026-04-01T08:17:17`,title:`Algebraic theories 笔记`,tags:[`PL`],categories:[`Algebraic Effects`],category:``,toc:!1,incomplete:!1,hidden:!1,thumbnail:``,displayThumbnail:!1,copyright:`CC BY-SA 4.0`},titleHtml:`Algebraic theories 笔记`,html:`<p>Andrej Bauer 的 Lecture 1 的笔记。</p>
<p>视频和资料: <a href="https://www.cs.uoregon.edu/research/summerschool/summer18/topics.php#Bauer">https://www.cs.uoregon.edu/research/summerschool/summer18/topics.php#Bauer</a></p>
<p>简介：本次讲座介绍数学（Algebraic theories），可参考文章 <a href="https://arxiv.org/abs/1807.05923">What is algebraic about algebraic effects and handlers?</a></p>
<!-- more -->
<p>first of all let's start from group as an example.</p>
<p>Example: a group: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>G</mi><mo separator="true">,</mo><mi>u</mi><mo separator="true">,</mo><mo>⋅</mo><msup><mo separator="true">,</mo><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(G, u, \\cdot, ^{-1})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">G</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">u</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">⋅</span><span class="mpunct"><span class="mpunct">,</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">)</span></span></span></span> - this is the operation</p>
<p>and equations: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>u</mi><mo>⋅</mo><mi>x</mi><mo>=</mo><mi>x</mi><mo>=</mo><mi>x</mi><mo>⋅</mo><mi>u</mi></mrow><annotation encoding="application/x-tex">u \\cdot x = x = x \\cdot u</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">u</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>⋅</mo><mi>y</mi><mo stretchy="false">)</mo><mo>⋅</mo><mi>z</mi><mo>=</mo><mi>x</mi><mo>⋅</mo><mo stretchy="false">(</mo><mi>y</mi><mo>⋅</mo><mi>z</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x \\cdot y) \\cdot z = x \\cdot (y \\cdot z)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.044em;">z</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.044em;">z</span><span class="mclose">)</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>⋅</mo><msup><mi>x</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>u</mi><mo>=</mo><msup><mi>x</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mi>x</mi></mrow><annotation encoding="application/x-tex">x \\cdot x^{-1} = u = x^{-1} \\cdot x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">u</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span></p>
<p>alternative: a monoid: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>M</mi><mo separator="true">,</mo><mi>u</mi><mo separator="true">,</mo><mo>⋅</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(M, u, \\cdot)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">u</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">⋅</span><span class="mclose">)</span></span></span></span> - this is the operation</p>
<p>operations and equations are important.</p>
<h2 id="signature-and-operations"><a href="#signature-and-operations">signature and operations</a></h2>
<p><strong>Definition</strong>: A signature <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi><mo>=</mo><mo stretchy="false">{</mo><mo stretchy="false">(</mo><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>N</mi><mi>i</mi></msub><mo stretchy="false">)</mo><msub><mo stretchy="false">}</mo><mrow><mi>i</mi><mo>∈</mo><mi>I</mi></mrow></msub></mrow><annotation encoding="application/x-tex">\\Sigma = \\{(op_i, N_i)\\}_{i \\in I}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.109em;">N</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">∈</span><span class="mord mathnormal mtight" style="margin-right:0.0785em;">I</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1774em;"><span></span></span></span></span></span></span></span></span></span> where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">op_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> are <em>operation symbols</em>
一个 op 和一个自然数 as argument</p>
<p><strong>Definition</strong>: a term in context <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>i</mi></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">x_i, ..., x_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is</p>
<ul>
<li>one of the variables <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">x_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></li>
<li>or <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">op_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> applied to some terms, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>t</mi><mn>2</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">op_i(t_1, t_2, ...)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mclose">)</span></span></span></span> where the terms are in context</li>
</ul>
<p>↑ read as inductive definition</p>
<p><strong>Def</strong>: an algebraic equational theory T is <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mi>T</mi></msub><mo separator="true">,</mo><msub><mi>ϵ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\\Sigma_T, \\epsilon_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> where <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\\Sigma_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is signature and <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ϵ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\\epsilon_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is a set of equations</p>
<p>an equation is</p>
<p>...</p>
<p>Example of group:</p>
<p>sig: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mrow><mi>g</mi><mi>r</mi><mi>o</mi><mi>u</mi><mi>p</mi></mrow></msub><mo>=</mo><mo stretchy="false">{</mo><mo stretchy="false">(</mo><mi>u</mi><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><mo stretchy="false">(</mo><mo>⋅</mo><mo separator="true">,</mo><mn>2</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><msup><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\Sigma_{group} = \\{(u, 0), ( \\cdot , 2), (^{-1}, 1)\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0359em;">g</span><span class="mord mathnormal mtight" style="margin-right:0.0278em;">r</span><span class="mord mathnormal mtight">o</span><span class="mord mathnormal mtight">u</span><span class="mord mathnormal mtight">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord mathnormal">u</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord">⋅</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen"><span class="mopen">(</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)}</span></span></span></span></p>
<p>for typing convenience we write down <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>⋅</mo></mrow><annotation encoding="application/x-tex">\\cdot</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord">⋅</span></span></span></span> as cdot, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mrow></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span> as inv</p>
<p>so, equations is:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>x | cdot (u(), x) = x</span></span>
<span class="line"><span>x | cdot (x, inv(x)) = x</span></span></code></pre>
<p>Example of a semilattice</p>
<p>sig: <code>{(bottom, 0), (join, 2)</code>
eq:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>(x join y) join z = x join (y join z)</span></span>
<span class="line"><span>bottom join x = x</span></span>
<span class="line"><span>x join y = y join x</span></span>
<span class="line"><span>x join x = x</span></span></code></pre>
<p>so far we described a piece of formalism</p>
<p>let's introduce the language of algebra theory</p>
<p>suppose <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">T</span></span></span></span> a theory (algebraic)</p>
<p>an interpretation <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>I</mi></mrow><annotation encoding="application/x-tex">I</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span></span></span></span> of <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">Σ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\\Sigma_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is given by</p>
<ul>
<li>a carrier set <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|I|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span></span></span></span></li>
<li>a bunch of maps <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy="false">)</mo><mo>∈</mo><msub><mi mathvariant="normal">Σ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">(op_i, n_i) \\in \\Sigma_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">Σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> :
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mi>I</mi></msub><mo>:</mo><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi><mo>×</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo>×</mo><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi><mo>→</mo><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">⟦ op_i ⟧_I: |I| \\times ... \\times |I| \\rightarrow |I|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0497em;vertical-align:-0.2997em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1786em;"><span style="top:-2.4003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0785em;">I</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">...</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span></span></span></span> （args 有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">n_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|I|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span></span></span></span> ）</li>
</ul>
</li>
</ul>
<p>we write <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><mi>x</mi><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo></mrow><annotation encoding="application/x-tex">⟦ x ⟧</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord mathnormal">x</span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span></span></span></span> as interpretation</p>
<p>each term <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">x_1, ..., x_k | t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal">t</span></span></span></span> is interpreted as a map <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>t</mi><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mo>:</mo><mi mathvariant="normal">∣</mi><mi>I</mi><msup><mi mathvariant="normal">∣</mi><mi>k</mi></msup><mo>→</mo><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">⟦ x_1, ..., x_k | t ⟧: |I|^k \\rightarrow |I|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal">t</span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span></span></span></span></p>
<p>follows:</p>
<ul>
<li>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">x_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> is i-th projection</p>
</li>
<li>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo separator="true">,</mo><mi>t</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>t</mi><msub><mi>n</mi><mi>i</mi></msub></msub><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo></mrow><annotation encoding="application/x-tex">⟦ x_1, ..., x_k | op_i (t_1, t..., t_{n_i}) ⟧</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0001em;vertical-align:-0.2501em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span></span></span></span> is a composition:</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>I</mi><msup><mi mathvariant="normal">∣</mi><mi>k</mi></msup><mo>→</mo><mi mathvariant="normal">∣</mi><mi>I</mi><msup><mi mathvariant="normal">∣</mi><msub><mi>n</mi><mi>i</mi></msub></msup><mo>→</mo><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|I|^k \\rightarrow |I|^{n_i} \\rightarrow |I|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0785em;">I</span><span class="mord">∣</span></span></span></span>
where the first arrow uses <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>t</mi><mn>1</mn></msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mo separator="true">,</mo><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>t</mi><mn>2</mn></msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>t</mi><msub><mi>n</mi><mi>i</mi></msub></msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo></mrow><annotation encoding="application/x-tex">⟦ t_1⟧, ⟦t_2⟧, ... ⟦t_{n_i}⟧</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0001em;vertical-align:-0.2501em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3281em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span></span></span></span>
and the second arrow uses <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><mi>o</mi><msub><mi>p</mi><mi>i</mi></msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo></mrow><annotation encoding="application/x-tex">⟦ op_i ⟧</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span></span></span></span></p>
</li>
</ul>
<p>Def: A <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">T</span></span></span></span>-model is an interpretation M of theory T s.t. for every</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mo separator="true">,</mo><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>l</mi><mo>=</mo><mi>r</mi></mrow><annotation encoding="application/x-tex">x_1, ..., x_k | l = r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0197em;">l</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span></span></span></span> in <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ϵ</mi><mi>T</mi></msub></mrow><annotation encoding="application/x-tex">\\epsilon_T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.1389em;">T</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
<p>the maps:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>l</mi><msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mi>M</mi></msub><mo>:</mo><msup><mi>M</mi><mi>k</mi></msup><mo>→</mo><mi>M</mi></mrow><annotation encoding="application/x-tex">⟦ x_1, ... x_k | l ⟧_M: M^k \\rightarrow M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0497em;vertical-align:-0.2997em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0197em;">l</span><span class="mclose"><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1786em;"><span style="top:-2.4003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.109em;">M</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.109em;">M</span></span></span></span></li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><msub><mi>x</mi><mi>k</mi></msub><mi mathvariant="normal">∣</mi><mi>r</mi><msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mi>M</mi></msub><mo>:</mo><msup><mi>M</mi><mi>k</mi></msup><mo>→</mo><mi>M</mi></mrow><annotation encoding="application/x-tex">⟦ x_1, ... x_k | r ⟧_M: M^k \\rightarrow M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0497em;vertical-align:-0.2997em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">...</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0278em;">r</span><span class="mclose"><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1786em;"><span style="top:-2.4003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.109em;">M</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8491em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.109em;">M</span></span></span></span></li>
</ul>
<p>....</p>
<p>Example: a model <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.109em;">M</span></span></span></span> of the theory of a pointed set:</p>
<ul>
<li>a carrier set <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>M</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|M|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mord">∣</span></span></span></span></li>
<li>a map <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo mathvariant="normal" lspace="0em" rspace="0em">⟦</mo><mo>⋅</mo><msub><mo mathvariant="normal" lspace="0em" rspace="0em">⟧</mo><mi>M</mi></msub></mrow><annotation encoding="application/x-tex">⟦ \\cdot ⟧_M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0497em;vertical-align:-0.2997em;"></span><span class="mopen"><span class="mopen">[</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mopen">[</span></span><span class="mord">⋅</span><span class="mclose"><span class="mclose"><span class="mclose">]</span><span class="mspace" style="margin-right:-0.1778em;"></span><span class="mclose">]</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1786em;"><span style="top:-2.4003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.109em;">M</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span></span></span></span>: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><msup><mi>M</mi><mn>0</mn></msup><mi mathvariant="normal">∣</mi><mo>→</mo><mi>M</mi></mrow><annotation encoding="application/x-tex">|M^0| \\rightarrow M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.109em;">M</span></span></span></span></li>
</ul>
<p>Example: every theory T has the trivial model M:</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>|M| = 1</span></span>
<span class="line"><span>⟦ op_i ⟧_M: 1^n_i \\rightarrow 1</span></span></code></pre>
<blockquote>
<p>field is not algebraic. why:
gpt:</p>
</blockquote>
<p>你问到的是一个<strong>很容易让人混淆但其实很深刻的点</strong>：
为什么在 <em lang="zh">algebraic theory（代数理论）</em> 的语境下，<strong>field（域）不是“algebraic”的</strong>，而像
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi><mi mathvariant="normal">_</mi><mn>2</mn><mo>×</mo><mi mathvariant="double-struck">Z</mi><mi mathvariant="normal">_</mi><mn>3</mn></mrow><annotation encoding="application/x-tex">\\mathbb{Z}\\_2 \\times \\mathbb{Z}\\_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9989em;vertical-align:-0.31em;"></span><span class="mord mathbb">Z</span><span class="mord">_2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9989em;vertical-align:-0.31em;"></span><span class="mord mathbb">Z</span><span class="mord">_3</span></span></span></span> 这种例子会被拿来说明问题。</p>
<p>我帮你把这个逻辑拆开讲清楚👇</p>
<hr>
<p><strong>🧠 核心一句话</strong></p>
<p>👉 在这里，“algebraic”指的是：
<strong>能用“有限个运算 + 等式公理”完全描述的结构（equational / algebraic theory）</strong></p>
<p>而 <strong>field 做不到这一点</strong>。</p>
<hr>
<p><strong>1️⃣ 什么叫 “algebraic theory”？</strong></p>
<p>在这个语境里，它的意思是：</p>
<p>👉 只允许用：</p>
<ul>
<li>运算（+、× 这种函数）</li>
<li>等式（=）</li>
</ul>
<p>来写公理</p>
<p>比如：</p>
<p><strong>✅ 群（group）是 algebraic 的</strong></p>
<p>公理是：</p>
<ul>
<li>( (x<em>y)<em>z = x</em>(y</em>z) )</li>
<li>( e*x = x )</li>
<li>( x^{-1} * x = e )</li>
</ul>
<p>👉 全是“等式”，没有条件判断</p>
<hr>
<p><strong>2️⃣ field 哪里出问题？</strong></p>
<p>域的关键公理是：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo mathvariant="normal">≠</mo><mn>0</mn><mo>⇒</mo><mi mathvariant="normal">∃</mi><mi>y</mi><mo separator="true">,</mo><mo separator="true">;</mo><mi>x</mi><mo>⋅</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x \\neq 0 \\Rightarrow \\exists y,; x \\cdot y = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace nobreak"></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">∃</span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mpunct">,;</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>问题在这里👇</p>
<p>👉 这不是“纯等式”
而是：</p>
<ul>
<li>有条件（(x ≠ 0)）</li>
<li>有存在量词（∃）</li>
</ul>
<hr>
<p><strong>🚫 algebraic theory 不允许：</strong></p>
<ul>
<li>❌ “如果……那么……”（条件）</li>
<li>❌ “存在一个……”（∃）</li>
</ul>
<p>它只能写：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>某个表达式</mtext><mo>=</mo><mtext>另一个表达式</mtext></mrow><annotation encoding="application/x-tex">\\text{某个表达式} = \\text{另一个表达式}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">某个表达式</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">另一个表达式</span></span></span></span></span></p>
<hr>
<p><strong>3️⃣ 直觉理解</strong></p>
<p><strong>algebraic theory 像什么？</strong></p>
<p>👉 “盲算规则机器”</p>
<p>只能说：</p>
<ul>
<li>怎么算</li>
<li>算出来必须相等</li>
</ul>
<p>不能说：</p>
<ul>
<li>“如果 x ≠ 0 才能怎样”</li>
</ul>
<hr>
<p><strong>4️⃣ 为什么拿 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="double-struck">Z</mi><mn>2</mn></msub><mo>×</mo><msub><mi mathvariant="double-struck">Z</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\mathbb{Z}_2 \\times \\mathbb{Z}_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathbb">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathbb">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 举例？</strong></p>
<p>我们写成：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="double-struck">Z</mi><mn>2</mn></msub><mo>×</mo><msub><mi mathvariant="double-struck">Z</mi><mn>3</mn></msub></mrow><annotation encoding="application/x-tex">\\mathbb{Z}_2 \\times \\mathbb{Z}_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathbb">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathbb">Z</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
<p>这个结构：</p>
<ul>
<li>是两个域的“直积”</li>
<li>运算是分量计算</li>
</ul>
<hr>
<p><strong>✨ 关键性质</strong></p>
<p><strong>在 algebraic theory 里：</strong></p>
<p>👉 <strong>如果一个结构满足某些等式公理，那么它的直积也满足</strong></p>
<hr>
<p><strong>举个例子</strong></p>
<p>如果“field”是 algebraic 的，那么：</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi><mi mathvariant="normal">_</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">\\mathbb{Z}\\_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9989em;vertical-align:-0.31em;"></span><span class="mord mathbb">Z</span><span class="mord">_2</span></span></span></span> 是 field ✅</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi><mi mathvariant="normal">_</mi><mn>3</mn></mrow><annotation encoding="application/x-tex">\\mathbb{Z}\\_3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9989em;vertical-align:-0.31em;"></span><span class="mord mathbb">Z</span><span class="mord">_3</span></span></span></span> 是 field ✅</li>
</ul>
<p>👉 那么它们的直积也必须是 field ❗</p>
<hr>
<p><strong>💥 但现实是：</strong>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo><mo mathvariant="normal">≠</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">(1,0) \\neq 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace nobreak"></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></p>
<p>但它没有逆元：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(1,0) \\cdot (x,y) = (1,0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span></span></span></span></p>
<p>永远不可能等于 ((1,1))</p>
<p>👉 所以：</p>
<ul>
<li>❌ 它不是 field</li>
</ul>
<hr>
<p><strong>🎯 这说明了什么？</strong></p>
<p>👉 “field 的性质无法只用等式表达”</p>
<p>因为：</p>
<ul>
<li>等式公理会“自动传递”到直积</li>
<li>但 field 的性质不会</li>
</ul>
<hr>
<p><strong>5️⃣ 本质总结</strong></p>
<p><strong>algebraic structure（代数结构）</strong></p>
<ul>
<li>只用等式描述</li>
<li>对直积封闭</li>
</ul>
<p><strong>field</strong></p>
<ul>
<li>
<p>需要：</p>
<ul>
<li>条件（(x ≠ 0)）</li>
<li>存在性（∃逆元）</li>
</ul>
</li>
<li>
<p>❌ 不是纯等式结构</p>
</li>
</ul>
<hr>
<p><strong>🧠 更深一层（你可能会喜欢这个）</strong></p>
<p>其实 field 是：</p>
<p>👉 <strong>first-order theory（一级逻辑）</strong>
而不是：
👉 <strong>equational theory（等式理论）</strong></p>
<hr>
<p><strong>🌟 一句话总结</strong></p>
<p>👉 <strong>field 之所以不是 algebraic 的，是因为“可除性”无法用纯等式表达，而必须用条件和存在性，这破坏了 algebraic theory 的封闭性（尤其是对直积）。</strong></p>
<hr>
<p>如果你愿意，我可以再往下讲一个很有意思的点：</p>
<p>👉 为什么“存在逆元”这种东西，本质上就是“不可代数化”的？（和程序里的 pattern matching / partial function 很像）</p>
<p><strong>free model</strong></p>
<p>这个问题问得很到点子上了，因为 **free model（自由模型）**基本就是 algebraic theory 里的“核心构造”。我们一步一步把它讲清楚，而且尽量贴直觉。</p>
<hr>
<p><strong>🧠 一句话直觉</strong></p>
<p>👉 <strong>free model = 在不引入任何“额外关系”的前提下，由一组生成元“自由生成”的最一般结构</strong></p>
<p>或者更程序员一点：</p>
<p>👉 <strong>就是“只按语法构造出来的结构”，没有任何额外约束</strong></p>
<hr>
<p><strong>1️⃣ 在 algebraic theory 里的背景</strong></p>
<p>我们说一个 theory 是 algebraic 的，意思是：</p>
<ul>
<li>有一些运算（比如 (+), <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>⋅</mo></mrow><annotation encoding="application/x-tex">\\cdot</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord">⋅</span></span></span></span>）</li>
<li>有一些等式公理（比如结合律）</li>
</ul>
<p>👉 一个 <strong>model（模型）</strong> = 一个具体实现这些运算并满足公理的结构</p>
<p>比如：</p>
<ul>
<li>群的一个 model = 某个具体群</li>
<li>环的一个 model = 某个具体环</li>
</ul>
<hr>
<p><strong>2️⃣ free model 是什么？</strong></p>
<p>给你一个集合 (X)（叫生成元 generators）</p>
<p>👉 <strong>free model on (X)</strong> 满足：</p>
<p><strong>✅ 条件 1：包含这些生成元</strong></p>
<p>有一个映射：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>η</mi><mo>:</mo><mi>X</mi><mo>→</mo><mi>F</mi><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\eta: X \\to F(X)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">η</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mclose">)</span></span></span></span></p>
<hr>
<p><strong>✅ 条件 2（最关键！）：通用性质（universal property）</strong></p>
<p>对于任何 model (A)，以及任意函数：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>X</mi><mo>→</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">f: X \\to A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.1076em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span></p>
<p>都存在唯一一个结构保持映射（homomorphism）：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>f</mi><mo>~</mo></mover><mo>:</mo><mi>F</mi><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo><mo>→</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">\\tilde{f}: F(X) \\to A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1257em;vertical-align:-0.1944em;"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9313em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.1076em;">f</span></span><span style="top:-3.6134em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.0833em;"><span class="mord">~</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span></p>
<p>使得：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>f</mi><mo>~</mo></mover><mo>∘</mo><mi>η</mi><mo>=</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">\\tilde{f} \\circ \\eta = f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1257em;vertical-align:-0.1944em;"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9313em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.1076em;">f</span></span><span style="top:-3.6134em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.0833em;"><span class="mord">~</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1944em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">η</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.1076em;">f</span></span></span></span></p>
<hr>
<p><strong>🧠 翻译成人话</strong></p>
<p>👉 你只要告诉我：</p>
<ul>
<li>每个 generator 要变成什么</li>
</ul>
<p>👉 free model 就会：</p>
<ul>
<li>自动帮你扩展成整个结构</li>
<li>而且是唯一的</li>
</ul>
<hr>
<p><strong>3️⃣ 最经典例子</strong></p>
<hr>
<p><strong>🟢 自由群（free group）</strong></p>
<p>给定生成元集合 (X = {a,b})</p>
<p>👉 free group 就是：</p>
<ul>
<li>所有由 (a, b) 和它们的逆组成的“字符串”</li>
<li>只允许用群公理化简（比如 (aa^{-1} = e)）</li>
</ul>
<p>但：</p>
<p>👉 <strong>没有额外关系</strong></p>
<ul>
<li>不会强行规定 (ab = ba)</li>
</ul>
<hr>
<p><strong>🟢 自由幺半群（free monoid）</strong></p>
<p>👉 就是所有字符串：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>X</mi><mo>∗</mo></msup></mrow><annotation encoding="application/x-tex">X^*</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6887em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span></span></span></span></p>
<ul>
<li>运算 = 拼接</li>
<li>单位元 = 空串</li>
</ul>
<hr>
<p><strong>🟢 自由环 / 自由代数</strong></p>
<p>👉 就是“多项式”，但变量之间没有关系</p>
<p>比如：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\\mathbb{Z}\\langle x, y \\rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathbb">Z</span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose">⟩</span></span></span></span></p>
<hr>
<p><strong>4️⃣ 为什么叫 “free”？</strong></p>
<p>👉 因为它是：</p>
<ul>
<li><strong>最不受约束的</strong></li>
<li><strong>只满足公理，没有额外关系</strong></li>
</ul>
<hr>
<p><strong>5️⃣ 和你刚才的问题的联系（关键 insight）</strong></p>
<p>你前面问：</p>
<blockquote>
<p>为什么 field 不是 algebraic 的？</p>
</blockquote>
<p>现在可以看出一个关键点👇</p>
<hr>
<p><strong>algebraic theory 的一个特征：</strong></p>
<p>👉 <strong>一定存在 free models</strong></p>
<hr>
<p><strong>但 field 呢？</strong></p>
<p>如果你尝试构造：</p>
<p>👉 “free field on X”</p>
<p>会出问题：</p>
<ul>
<li>你必须允许除法</li>
<li>但不能除以 0</li>
<li>这不是纯 equational 的</li>
</ul>
<p>👉 结果：</p>
<ul>
<li>构造非常复杂（要做分式域、再 quotient）</li>
<li>不再是“语法自由生成”</li>
</ul>
<hr>
<p><strong>6️⃣ 更抽象一点（但很重要）</strong></p>
<p>free model 本质上是：</p>
<p>👉 一个 <strong>left adjoint（左伴随）</strong>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo>:</mo><mtext>Set</mtext><mo>→</mo><mtext>Model</mtext></mrow><annotation encoding="application/x-tex">F : \\text{Set} \\to \\text{Model}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">Set</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">Model</span></span></span></span></span></p>
<hr>
<p>它的意义是：</p>
<p>👉 “从集合生成最自由的结构”</p>
<hr>
<p><strong>7️⃣ 一个非常直观的类比</strong></p>
<p>你可以这样理解：</p>
<hr>
<p><strong>free model = AST（抽象语法树）</strong></p>
<p>比如你有：</p>
<ul>
<li>常量：(a, b)</li>
<li>运算：(+)</li>
</ul>
<p>👉 free model 就是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>a</span></span>
<span class="line"><span>b</span></span>
<span class="line"><span>a + b</span></span>
<span class="line"><span>(a + b) + a</span></span>
<span class="line"><span>...</span></span></code></pre>
<hr>
<p>然后：</p>
<p>👉 其他 model = “解释器”</p>
<p>把这些表达式解释成：</p>
<ul>
<li>数字</li>
<li>矩阵</li>
<li>函数</li>
</ul>
<hr>
<p><strong>🌟 总结一句话</strong></p>
<p>👉 <strong>free model 是“由生成元构造的、只满足公理、不引入额外关系的最一般模型”，它的本质是一个具有通用性质的“语法结构”。</strong></p>
<hr>
<p>如果你愿意，我可以再讲一个更深的点（会很有意思）：</p>
<p>👉 为什么 free model 本质上就是“程序语法”，而 algebraic theory ≈ “可解释的编程语言”？</p>
<hr>
<blockquote>
<p>为什么 every algebraic theory has a free model</p>
</blockquote>
<p>这个结论其实可以说成一个更精确的版本：</p>
<blockquote>
<p>👉 <strong>对任何 algebraic theory（等式理论），都有一个“自由模型构造” (F(X))，对任意集合 (X) 都存在。</strong></p>
</blockquote>
<p>你问“为什么一定存在”，核心原因其实是：</p>
<blockquote>
<p>👉 <strong>因为 algebraic theory 只用“运算 + 等式”，所以可以用“语法项（terms）”直接构造一个模型。</strong></p>
</blockquote>
<p>我们一步一步拆开讲。</p>
<hr>
<p><strong>🧠 1️⃣ 核心直觉</strong></p>
<p>👉 algebraic theory 的一切东西，本质都是：</p>
<ul>
<li>一些运算符（signature）</li>
<li>一些等式规则（equations）</li>
</ul>
<p>那么你自然可以做一件事：</p>
<p>👉 <strong>把所有“合法表达式”都写出来</strong></p>
<p>这就已经是一个候选模型了。</p>
<hr>
<p><strong>✨ 2️⃣ 构造方法（这就是为什么一定存在）</strong></p>
<p>给定：</p>
<ul>
<li>一个 algebraic theory (T)</li>
<li>一个生成元集合 (X)</li>
</ul>
<p>我们这样构造 free model (F(X))：</p>
<hr>
<p><strong>第一步：生成所有“语法项”（terms）</strong></p>
<p>比如：</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">x \\in X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span></span></span></span></li>
<li>如果有运算 (+)，就可以构造：
<ul>
<li>(x + y)</li>
<li>((x + y) + z)</li>
<li>…</li>
</ul>
</li>
</ul>
<p>👉 得到一个巨大集合：<strong>Term(X)</strong></p>
<hr>
<p><strong>第二步：按公理“取商”（quotient）</strong></p>
<p>如果 theory 里有公理：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy="false">)</mo><mo>+</mo><mi>z</mi><mo>=</mo><mi>x</mi><mo>+</mo><mo stretchy="false">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x + y) + z = x + (y + z)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.044em;">z</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.044em;">z</span><span class="mclose">)</span></span></span></span></p>
<p>👉 那我们就把这些表达式“视为相等”</p>
<hr>
<p>于是得到：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>Term</mtext><mo stretchy="false">(</mo><mi>X</mi><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mo>∼</mo></mrow><annotation encoding="application/x-tex">F(X) = \\text{Term}(X) / \\sim</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">Term</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0785em;">X</span><span class="mclose">)</span><span class="mord">/</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∼</span></span></span></span></p>
<hr>
<p><strong>第三步：定义运算</strong></p>
<p>运算直接在表达式上做：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>a</mi><mo stretchy="false">]</mo><mo>+</mo><mo stretchy="false">[</mo><mi>b</mi><mo stretchy="false">]</mo><mo>:</mo><mo>=</mo><mo stretchy="false">[</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[a] + [b] := [a + b]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">b</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span></span></span></span></p>
<p>👉 自动是良定义的（因为我们已经 quotient 了）</p>
<hr>
<p><strong>🎯 这一步就是关键</strong></p>
<p>👉 <strong>整个构造只用了：</strong></p>
<ul>
<li>语法生成</li>
<li>等式识别（quotient）</li>
</ul>
<p>👉 没有用到：</p>
<ul>
<li>条件（if）</li>
<li>存在性（∃）</li>
</ul>
<hr>
<p><strong>🧠 3️⃣ 为什么这保证“一定存在”？</strong></p>
<p>因为：</p>
<p>👉 这个构造是<strong>纯组合性的（syntactic）</strong></p>
<ul>
<li>语法树一定能生成</li>
<li>等价关系一定能取商</li>
</ul>
<p>👉 所以 free model <strong>可以机械地构造出来</strong></p>
<hr>
<p><strong>💥 对比：为什么 field 不行</strong></p>
<p>回忆 field 的关键公理：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo mathvariant="normal">≠</mo><mn>0</mn><mo>⇒</mo><mi mathvariant="normal">∃</mi><mi>y</mi><mo separator="true">,</mo><mo separator="true">;</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">x \\neq 0 \\Rightarrow \\exists y,; xy = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace nobreak"></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">∃</span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mpunct">,;</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>你没法用“语法项 + 等式”来表达：</p>
<ul>
<li>“x ≠ 0”</li>
<li>“存在 y”</li>
</ul>
<p>👉 所以你不能：</p>
<ul>
<li>只靠“表达式”构造一个 free field</li>
</ul>
<p>结果是：</p>
<p>👉 free field 不再是简单的 term algebra
而是要做：</p>
<ul>
<li>分式</li>
<li>等价类</li>
<li>排除非法情况</li>
</ul>
<p>👉 构造变得<strong>非语法化</strong></p>
<hr>
<p><strong>🧩 4️⃣ 更高层解释（范畴论视角）</strong></p>
<p>对于 algebraic theory：</p>
<p>👉 有一个忘却函子：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mo>:</mo><mtext>Model</mtext><mo>→</mo><mtext>Set</mtext></mrow><annotation encoding="application/x-tex">U: \\text{Model} \\to \\text{Set}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.109em;">U</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">Model</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">Set</span></span></span></span></span></p>
<p>（把模型忘掉结构，只看底层集合）</p>
<hr>
<p><strong>关键定理：</strong></p>
<p>👉 这个函子一定有左伴随：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>F</mi><mo>:</mo><mtext>Set</mtext><mo>→</mo><mtext>Model</mtext></mrow><annotation encoding="application/x-tex">F: \\text{Set} \\to \\text{Model}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">Set</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">Model</span></span></span></span></span></p>
<p>这就是 free model。</p>
<hr>
<p><strong>为什么一定有？</strong></p>
<p>因为：</p>
<p>👉 algebraic theory 本质上就是：</p>
<ul>
<li>一个 <strong>finitary monad</strong></li>
<li>或 <strong>Lawvere theory</strong></li>
</ul>
<p>而这些结构<strong>保证</strong>：</p>
<p>👉 自由代数一定存在</p>
<hr>
<p><strong>🧠 5️⃣ 再用程序类比一次（非常本质）</strong></p>
<p>你可以这样理解：</p>
<hr>
<p><strong>algebraic theory ≈ 编程语言语法</strong></p>
<ul>
<li>运算 = 函数符号</li>
<li>公理 = rewrite rules</li>
</ul>
<hr>
<p><strong>free model = AST（抽象语法树）</strong></p>
<p>👉 永远可以构造 AST：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>Add(Add(x, y), z)</span></span></code></pre>
<p>然后再按规则化简。</p>
<hr>
<p>👉 所以 free model 一定存在，本质原因是：</p>
<blockquote>
<p><strong>语法总是可以自由生成</strong></p>
</blockquote>
<hr>
<p><strong>🌟 最终总结</strong></p>
<p>👉 <strong>每个 algebraic theory 都有 free model，是因为它的公理是纯等式的，这允许我们用“语法项 + 等价关系”直接构造一个模型，这个构造是完全机械且总是可行的。</strong></p>
<hr>
<p>如果你想再深入一步，我可以讲一个很关键的桥梁：</p>
<p>👉 为什么“free model 存在”其实等价于“这个理论是 monadic 的”？（这会把 universal algebra 和 category theory 连起来）</p>
<blockquote>
<p>其实我没看懂什么是一个 model</p>
</blockquote>
<p>很好，这一步卡住是非常正常的——因为“model”这个词本身就有点抽象。我们换一个更<strong>直观 + 分层</strong>的方式来讲，让你真正“抓住它”。</p>
<hr>
<p><strong>🧠 一句话直觉</strong></p>
<p>👉 <strong>model（模型）= 把一套“符号规则”真正变成“具体东西”的实现</strong></p>
<hr>
<p><strong>1️⃣ 从最简单的例子开始</strong></p>
<p>假设我写一个“理论”（theory）：</p>
<ul>
<li>有一个运算：(+)</li>
<li>满足规则：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi></mrow><annotation encoding="application/x-tex">x + y = y + x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span></li>
</ul>
<p>👉 这只是“规则”，还没有具体对象</p>
<hr>
<p><strong>什么是 model？</strong></p>
<p>👉 一个 <strong>model</strong> 就是：</p>
<ul>
<li>给你一个具体集合</li>
<li>告诉你 (+) 到底怎么计算</li>
<li>并且满足这些规则</li>
</ul>
<hr>
<p><strong>举例</strong></p>
<p><strong>✅ 这是一个 model</strong></p>
<p>集合：整数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi></mrow><annotation encoding="application/x-tex">\\mathbb{Z}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">Z</span></span></span></span></p>
<p>运算：普通加法</p>
<p>✔ 满足交换律</p>
<hr>
<p><strong>✅ 这也是一个 model</strong></p>
<p>集合：二维向量</p>
<p>运算：向量加法</p>
<p>✔ 也满足交换律</p>
<hr>
<p>👉 它们都是“同一个理论”的不同实现</p>
<hr>
<p><strong>🎯 关键理解</strong></p>
<p>👉 <strong>theory 是“语法规则”</strong>
👉 <strong>model 是“具体解释”</strong></p>
<hr>
<p><strong>2️⃣ 一个更程序员的类比（非常重要）</strong></p>
<p>你可以这样理解：</p>
<hr>
<p><strong>theory = 接口 / 抽象类</strong></p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">interface</span><span style="color:#6F42C1"> Addable</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#6F42C1">  add</span><span style="color:#e36209">(</span><span style="color:#E36209">x</span><span style="color:#24292E">, </span><span style="color:#E36209">y</span><span style="color:#e36209">)</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> T</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#6A737D">  // 要满足：add(x,y) == add(y,x)</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<hr>
<p><strong>model = 一个具体实现</strong></p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">class</span><span style="color:#6F42C1"> IntegerAdd</span><span style="color:#D73A49"> implements</span><span style="color:#6F42C1"> Addable</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#6F42C1">  add</span><span style="color:#e36209">(</span><span style="color:#E36209">x</span><span style="color:#24292E">, </span><span style="color:#E36209">y</span><span style="color:#e36209">)</span><span style="color:#24292E"> = x + y</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<p>或者：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">class</span><span style="color:#6F42C1"> VectorAdd</span><span style="color:#D73A49"> implements</span><span style="color:#6F42C1"> Addable</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#6F42C1">  add</span><span style="color:#e36209">(</span><span style="color:#E36209">x</span><span style="color:#24292E">, </span><span style="color:#E36209">y</span><span style="color:#e36209">)</span><span style="color:#24292E"> = </span><span style="color:#6F42C1">vector_add</span><span style="color:#e36209">(</span><span style="color:#E36209">x</span><span style="color:#24292E">, </span><span style="color:#E36209">y</span><span style="color:#e36209">)</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<hr>
<p>👉 这些实现就是 models</p>
<hr>
<p><strong>3️⃣ 回到 algebraic theory 的语境</strong></p>
<p>一个 algebraic theory 包含：</p>
<ul>
<li>一些运算符（signature）</li>
<li>一些等式（equations）</li>
</ul>
<hr>
<p><strong>model =</strong></p>
<p>👉 一个集合 (A)，加上：</p>
<ul>
<li>每个运算符的具体实现（函数）</li>
<li>满足所有等式</li>
</ul>
<hr>
<p><strong>4️⃣ 再举一个更“代数味”的例子</strong></p>
<p><strong>群（group）这个 theory</strong></p>
<p>它说：</p>
<ul>
<li>有运算 (*)</li>
<li>有单位元 (e)</li>
<li>有逆元</li>
<li>满足结合律</li>
</ul>
<hr>
<p><strong>model 就是：</strong></p>
<p>任何一个具体群，比如：</p>
<ul>
<li>整数加法群 (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Z</mi><mo separator="true">,</mo><mo>+</mo></mrow><annotation encoding="application/x-tex">\\mathbb{Z}, +</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8833em;vertical-align:-0.1944em;"></span><span class="mord mathbb">Z</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">+</span></span></span></span>)</li>
<li>非零实数乘法群</li>
<li>置换群</li>
</ul>
<hr>
<p>👉 每一个“具体群” = 一个 model</p>
<hr>
<p><strong>5️⃣ 为什么叫 “model”？</strong></p>
<p>这个词来自逻辑学：</p>
<p>👉 意思是：</p>
<p><strong>“让这些公式为真”的东西</strong></p>
<hr>
<p>比如：
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi></mrow><annotation encoding="application/x-tex">x + y = y + x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span></p>
<p>👉 在整数里是真的 ✔
👉 在矩阵乘法里不是真的 ❌</p>
<hr>
<p>所以：</p>
<ul>
<li>整数是这个 theory 的 model</li>
<li>矩阵乘法不是</li>
</ul>
<hr>
<p><strong>🧠 6️⃣ 一点点更抽象（但很关键）</strong></p>
<p>你可以这样统一理解：</p>
<hr>
<p><strong>theory</strong></p>
<p>= 一堆符号 + 规则（纯语法）</p>
<p><strong>model</strong></p>
<p>= 一个“解释函数”，把：</p>
<ul>
<li>符号 → 具体运算</li>
<li>变量 → 具体元素</li>
</ul>
<p>并让所有规则成立</p>
<hr>
<p><strong>🔥 7️⃣ 和 free model 的关系</strong></p>
<p>现在你可以理解这句话了：</p>
<p>👉 <strong>free model 是一种“最通用的 model”</strong></p>
<p>它的特点是：</p>
<ul>
<li>元素 = 纯表达式（语法树）</li>
<li>没有额外关系</li>
<li>任何其他 model 都是它的“解释”</li>
</ul>
<hr>
<p><strong>🌟 最终总结</strong></p>
<p>👉 <strong>model 就是：一个具体世界，在这个世界里，你的理论规则都成立。</strong></p>
<hr>
<p>如果你愿意，我们可以继续往前推进一个非常关键的点（会让你彻底通）：</p>
<p>👉 为什么“model = 解释”，而“free model = 语法本身”？（这其实是整个 universal algebra / type theory 的核心桥梁）</p>
<hr>
<blockquote>
<p>解释这个板书（懒得放板书图片）</p>
</blockquote>
<p>很好，这张板书其实已经把 <strong>“algebraic = 语法 + 等式”</strong> 讲得非常本质了，只是写法比较“范畴/PL风”，我们把它逐行翻译成人话。</p>
<hr>
<p><strong>🧠 整体在干嘛？</strong></p>
<p>这段在做一件事：</p>
<p>👉 <strong>构造 free model（自由模型）</strong></p>
<p>并且用的是：</p>
<p>👉 <strong>“语法树（syntax tree）”的方式来构造</strong></p>
<p>这正是“algebraic”的核心：
<strong>一切从语法出发</strong></p>
<hr>
<p><strong>🧩 上半部分：Term in context</strong></p>
<p>板书：</p>
<blockquote>
<p>Term in context (x_1, ..., x_k) is:</p>
<ul>
<li>one of the variables (x_i)</li>
<li>(op_i(t_1, ..., t_n)) where (t_1,...,t_n) are terms</li>
</ul>
</blockquote>
<hr>
<p><strong>👉 翻译</strong></p>
<p>在变量集合 (x_1,...,x_k) 下，一个 term（表达式）可以是：</p>
<p><strong>1️⃣ 一个变量</strong></p>
<p>比如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>x₁</span></span></code></pre>
<hr>
<p><strong>2️⃣ 一个运算应用</strong></p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op_i(t₁, ..., tₙ)</span></span></code></pre>
<p>其中：</p>
<ul>
<li>(op_i)：某个操作（operation）</li>
<li>(t₁,...,tₙ)：已经是 term 的东西</li>
</ul>
<hr>
<p><strong>🧠 关键点</strong></p>
<p>👉 这是一个<strong>归纳定义（inductive definition）</strong></p>
<p>也就是：</p>
<ul>
<li>从最简单的（变量）开始</li>
<li>不断用运算“长出更复杂的表达式”</li>
</ul>
<hr>
<p><strong>✨ 直觉</strong></p>
<p>这就是在定义：</p>
<p>👉 <strong>所有“合法程序 / 表达式”的集合</strong></p>
<hr>
<p><strong>🌳 下半部分：Free model = Tree_T(X)</strong></p>
<p>板书：</p>
<blockquote>
<p>Free model (Free_T(X)):</p>
<ol>
<li>(Tree_T(X)) = set of well-founded trees, defined inductively</li>
</ol>
</blockquote>
<hr>
<p><strong>👉 翻译</strong></p>
<p>自由模型就是：</p>
<p>👉 <strong>所有“良基树”（well-founded trees）组成的集合</strong></p>
<hr>
<p><strong>什么是 tree？</strong></p>
<p>比如一个表达式：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op(a, op(b, c))</span></span></code></pre>
<p>可以画成：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>      op</span></span>
<span class="line"><span>     /  \\</span></span>
<span class="line"><span>    a   op</span></span>
<span class="line"><span>        / \\</span></span>
<span class="line"><span>       b   c</span></span></code></pre>
<p>👉 这就是一棵树</p>
<hr>
<p><strong>“well-founded” 是啥？</strong></p>
<p>👉 没有无限向下的结构</p>
<p>也就是：</p>
<ul>
<li>不会有无限展开</li>
<li>每个表达式都是有限的</li>
</ul>
<p>👉 本质就是：<strong>有限语法树</strong></p>
<hr>
<p><strong>🧩 具体构造规则</strong></p>
<p>板书：</p>
<hr>
<p><strong>规则 1：</strong></p>
<blockquote>
<p>for every (x ∈ X), there is tree return (x ∈ Tree_T(X))</p>
</blockquote>
<p>👉 每个变量本身就是一棵树</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>x</span></span></code></pre>
<hr>
<p><strong>规则 2：</strong></p>
<blockquote>
<p>if ((op_i : n_i) ∈ Σ_T) and (t₁,...,tₙ ∈ Free_T(X))</p>
</blockquote>
<p>👉 如果：</p>
<ul>
<li>有一个操作 (op_i)，参数个数是 (n_i)</li>
<li>已经有 (n_i) 个子树</li>
</ul>
<hr>
<blockquote>
<p>then (op_i(t₁,...,tₙ))</p>
</blockquote>
<p>👉 那就可以构造一棵新树：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>        op_i</span></span>
<span class="line"><span>       / ... \\</span></span>
<span class="line"><span>     t₁      tₙ</span></span></code></pre>
<hr>
<p><strong>🎯 这整个构造在干嘛？</strong></p>
<p>👉 在构造：</p>
<p><strong>👉 所有可能的“语法表达式”</strong></p>
<p>也就是：</p>
<blockquote>
<p><strong>term algebra（项代数）</strong></p>
</blockquote>
<hr>
<p><strong>🔥 关键 insight（这就是 algebraic 的本质）</strong></p>
<p>现在你可以理解老师想表达的核心了：</p>
<hr>
<p><strong>👉 algebraic = 可以用“语法树”构造 free model</strong></p>
<p>因为：</p>
<ul>
<li>运算 = 语法构造规则</li>
<li>公理 = 等式（之后再 quotient）</li>
</ul>
<hr>
<p><strong>👉 free model = “纯语法世界”</strong></p>
<p>里面的元素就是：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>x</span></span>
<span class="line"><span>op(x,y)</span></span>
<span class="line"><span>op(op(x,y), z)</span></span>
<span class="line"><span>...</span></span></code></pre>
<p>👉 没有任何“解释”（interpretation）</p>
<hr>
<p><strong>🧠 和 model 的关系（关键桥梁）</strong></p>
<p>现在你可以把三件事连起来：</p>
<hr>
<p><strong>1️⃣ free model</strong></p>
<p>= 所有语法树</p>
<hr>
<p><strong>2️⃣ 一个 model（比如整数）</strong></p>
<p>= 给这些语法一个“解释”</p>
<p>比如：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op = +</span></span>
<span class="line"><span>x = 3</span></span>
<span class="line"><span>y = 5</span></span></code></pre>
<p>👉 那：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>op(x,y) → 8</span></span></code></pre>
<hr>
<p><strong>3️⃣ homomorphism</strong></p>
<p>就是：</p>
<p>👉 把“语法树”映射到“具体值”</p>
<hr>
<p><strong>💥 为什么这说明 “field 不是 algebraic”</strong></p>
<p>因为这里的构造：</p>
<p>👉 <strong>完全是语法驱动的</strong></p>
<p>你只需要：</p>
<ul>
<li>运算符</li>
<li>参数个数</li>
</ul>
<hr>
<p>但 field 需要：</p>
<ul>
<li>“x ≠ 0 才能除”</li>
<li>“存在逆元”</li>
</ul>
<p>👉 这些不是语法能表达的</p>
<hr>
<p><strong>🌟 一句话总结这块板书</strong></p>
<p>👉 <strong>这段板书在说明：algebraic theory 的 free model 可以用“语法树（term trees）”归纳地构造出来，而这正是 algebraic 的本质——结构完全由运算的语法生成。</strong></p>
<hr>
<p><strong>🧠 如果再往前一步（非常关键）</strong></p>
<p>这其实就是 PL 里的一个巨大对应关系：</p>
<table>
<thead>
<tr>
<th>概念</th>
<th>对应</th>
</tr>
</thead>
<tbody>
<tr>
<td>algebraic theory</td>
<td>语言语法</td>
</tr>
<tr>
<td>term</td>
<td>AST</td>
</tr>
<tr>
<td>free model</td>
<td>所有程序</td>
</tr>
<tr>
<td>model</td>
<td>解释器</td>
</tr>
<tr>
<td>homomorphism</td>
<td>解释过程</td>
</tr>
</tbody>
</table>
<hr>
<p>如果你愿意，我可以帮你把这个直接连到：</p>
<p>👉 algebraic effects 为什么“必须是 algebraic”的（那一步会直接通整个 PL 语义）</p>`,headings:[{depth:2,slug:`signature-and-operations`,text:`signature and operations`}]};export{e as default};