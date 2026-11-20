var e={frontmatter:{title:`使 Hexo 支持高亮 Lean`,date:`2024-09-03T21:03:03`,tags:[`Lean`,`Hexo`,`Blog`,`Code`],toc:!0,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`使 Hexo 支持高亮 Lean`,html:`<p>说真的，Hexo 这么烂下去我真要换 Hugo 了——为什么它甚至不支持给 hljs 添加语言插件？</p>
<p>好吧，这篇博客讲述如何让你的 Hexo 博客支持高亮 Lean，并且是后端渲染。</p>
<!-- more -->
<h2 id="step-1-安装-highlightjs-lean"><a href="#step-1-安装-highlightjs-lean">Step 1. 安装 highlightjs-lean</a></h2>
<p>问题的起因就是 hljs 并不默认支持 lean，因此必须手动安装之。在你的 hexo 博客根目录进行：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">npm</span><span style="color:#032F62"> install</span><span style="color:#032F62"> highlightjs-lean</span></span>
<span class="line"><span style="color:#6A737D"># 或者 yarn add highlightjs-lean</span></span></code></pre>
<h2 id="step-2-将-lean-语言支持添加到-hljs"><a href="#step-2-将-lean-语言支持添加到-hljs">Step 2. 将 Lean 语言支持添加到 hljs</a></h2>
<p>你需要创建一个简单的 hexo 插件做这件事情。在你的 hexo 博客根目录新建 <code>scripts</code> 文件夹，随意新建一个 javascript 文件，名字自取，例如 <code>add-lean.js</code></p>
<p>在该 js 文件中写入以下内容：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> hljs</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> require</span><span style="color:#005cc5">(</span><span style="color:#032F62">"highlight.js"</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> leanHljs</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> require</span><span style="color:#005cc5">(</span><span style="color:#032F62">"highlightjs-lean"</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">hljs.</span><span style="color:#6F42C1">registerLanguage</span><span style="color:#005cc5">(</span><span style="color:#032F62">"lean"</span><span style="color:#24292E">, leanHljs</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span></code></pre>
<p>这样就注册了 lean 的语言支持</p>
<h2 id="step-3-把-hexo-utils-的语言定义文件里添加上-lean"><a href="#step-3-把-hexo-utils-的语言定义文件里添加上-lean">Step 3. 把 hexo-utils 的语言定义文件里添加上 Lean</a></h2>
<p>如果你做了上述操作，恭喜你，至少 autodetect 能尝试识别 Lean 了。但是 hljs 的 autodetect 众所周知的不准确，于是你尝试在代码块中指定语言为 <code>lean</code>，嘿，hexo 反而自动给你转成 plaintext 了~</p>
<p><a href="https://github.com/hexojs/hexo-util/blob/313dee34cafd88c08bfa491dfdbbc78a6a50cf8b/lib/highlight.ts#L128-L130">在这三行中</a>揭示了原因。 hexo-utils 使用了一个 hard-coded 的 <code>highlight_alias.json</code> 文件，任何不在这个 <code>json</code> 文件中的语言都会直接被视作 <code>plaintext</code>， 我不懂它为什么要这样干，hljs 明明提供了 api 让你获得 available 的语言，但它就是这么干了。</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> alias</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> require</span><span style="color:#005cc5">(</span><span style="color:#032F62">'../highlight_alias.json'</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> highlight</span><span style="color:#005cc5">(</span><span style="color:#E36209">str</span><span style="color:#D73A49">:</span><span style="color:#005CC5"> string</span><span style="color:#24292E">, </span><span style="color:#E36209">options</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Options</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:rgba(255, 18, 18, 0.8)">{</span></span>
<span class="line"><span style="color:#6A737D">  //...</span></span>
<span class="line"><span style="color:#D73A49">  if</span><span style="color:#24292E"> </span><span style="color:#e36209">(</span><span style="color:#D73A49">!</span><span style="color:#24292E">lang </span><span style="color:#D73A49">||</span><span style="color:#D73A49"> !</span><span style="color:#24292E">alias.aliases</span><span style="color:#5a32a3">[</span><span style="color:#24292E">lang</span><span style="color:#5a32a3">]</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#24292E">    lang </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'plaintext'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span></span></code></pre>
<p>由于这个文件是硬编码的，你甚至不能更改它。所以插件在这里有些苍白无力。你不得不写一个 不是插件的脚本（比如 <code>pre-deploy.js</code>），在每次 deploy 前把该文件修改一下：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> fs</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> require</span><span style="color:#005cc5">(</span><span style="color:#032F62">"fs"</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> alias</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> JSON</span><span style="color:#24292E">.</span><span style="color:#6F42C1">parse</span><span style="color:#005cc5">(</span></span>
<span class="line"><span style="color:#24292E">  fs.</span><span style="color:#6F42C1">readFileSync</span><span style="color:#e36209">(</span><span style="color:#032F62">"node_modules/hexo-util/highlight_alias.json"</span><span style="color:#e36209">)</span><span style="color:#24292E">.</span><span style="color:#6F42C1">toString</span><span style="color:#e36209">(</span><span style="color:#e36209">)</span></span>
<span class="line"><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">alias.aliases</span><span style="color:#005cc5">[</span><span style="color:#032F62">"lean"</span><span style="color:#005cc5">]</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#032F62"> "lean"</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">alias.languages.</span><span style="color:#6F42C1">push</span><span style="color:#005cc5">(</span><span style="color:#032F62">"lean"</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">fs.</span><span style="color:#6F42C1">writeFileSync</span><span style="color:#005cc5">(</span></span>
<span class="line"><span style="color:#032F62">  "node_modules/hexo-util/highlight_alias.json"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">  JSON</span><span style="color:#24292E">.</span><span style="color:#6F42C1">stringify</span><span style="color:#e36209">(</span><span style="color:#24292E">alias</span><span style="color:#e36209">)</span></span>
<span class="line"><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span></code></pre>
<p>然后在你每次 deploy 前，需要执行一下</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">node</span><span style="color:#032F62"> pre-deploy.js</span></span></code></pre>
<p>把该文件修改后，hexo 终于支持了 lean 语言的高亮。</p>
<h2 id="或者"><a href="#或者">或者……</a></h2>
<p>不跟你 hexo 的 markdown 渲染器玩辣！</p>
<p>安装 markdown-it-highlightjs，作为 markdown-it 的插件，关掉 hexo 的 highlight 处理。现在 Step3 的所有内容直接可以不看，Lean 4 高亮已经好了。</p>
<h2 id="成果展示"><a href="#成果展示">成果展示</a></h2>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> MIL.Common</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">open</span><span style="color:#24292E"> Nat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">-- These are pieces of data.</span></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#005CC5"> 2</span><span style="color:#24292E"> + </span><span style="color:#005CC5">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">def</span><span style="color:#6F42C1"> f</span><span style="color:#24292E"> </span><span style="color:#005cc5">(</span><span style="color:#24292E">x : ℕ</span><span style="color:#005cc5">)</span><span style="color:#24292E"> :=</span></span>
<span class="line"><span style="color:#24292E">  x + </span><span style="color:#005CC5">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#24292E"> f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">-- These are propositions, of type \`</span><span style="color:#D73A49">Prop</span><span style="color:#24292E">\`.</span></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#005CC5"> 2</span><span style="color:#24292E"> + </span><span style="color:#005CC5">2</span><span style="color:#24292E"> = </span><span style="color:#005CC5">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">def</span><span style="color:#6F42C1"> FermatLastTheorem</span><span style="color:#24292E"> :=</span></span>
<span class="line"><span style="color:#24292E">  ∀ x y z n : ℕ, n </span><span style="color:#24292E">></span><span style="color:#24292E"> </span><span style="color:#005CC5">2</span><span style="color:#24292E"> ∧ x * y * z ≠ </span><span style="color:#005CC5">0</span><span style="color:#24292E"> → x ^ n + y ^ n ≠ z ^ n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#24292E"> FermatLastTheorem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">-- These are proofs of propositions.</span></span>
<span class="line"><span style="color:#D73A49">theorem</span><span style="color:#6F42C1"> easy</span><span style="color:#24292E"> : </span><span style="color:#005CC5">2</span><span style="color:#24292E"> + </span><span style="color:#005CC5">2</span><span style="color:#24292E"> = </span><span style="color:#005CC5">4</span><span style="color:#24292E"> :=</span></span>
<span class="line"><span style="color:#24292E">  rfl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#24292E"> easy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">theorem</span><span style="color:#6F42C1"> hard</span><span style="color:#24292E"> : FermatLastTheorem :=</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic">  sorry</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">#check</span><span style="color:#24292E"> hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">-- Here are some proofs.</span></span>
<span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : ∀ m n : Nat, Even n → Even </span><span style="color:#005cc5">(</span><span style="color:#24292E">m * n</span><span style="color:#005cc5">)</span><span style="color:#24292E"> := </span><span style="color:#D73A49">fun</span><span style="color:#24292E"> m n ⟨k, </span><span style="color:#005cc5">(</span><span style="color:#24292E">hk : n = k + k</span><span style="color:#005cc5">)</span><span style="color:#24292E">⟩ ↦</span></span>
<span class="line"><span style="color:#D73A49">  have</span><span style="color:#24292E"> hmn : m * n = m * k + m * k := </span><span style="color:#D73A49">by</span><span style="color:#24292E"> rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">hk, mul_add</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#D73A49">  show</span><span style="color:#24292E"> ∃ l, m * n = l + l </span><span style="color:#D73A49">from</span><span style="color:#24292E"> ⟨_, hmn⟩</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : ∀ m n : Nat, Even n → Even </span><span style="color:#005cc5">(</span><span style="color:#24292E">m * n</span><span style="color:#005cc5">)</span><span style="color:#24292E"> :=</span></span>
<span class="line"><span style="color:#D73A49">fun</span><span style="color:#24292E"> m n ⟨k, hk⟩ ↦ ⟨m * k, </span><span style="color:#D73A49">by</span><span style="color:#24292E"> rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">hk, mul_add</span><span style="color:#005cc5">]</span><span style="color:#24292E">⟩</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : ∀ m n : Nat, Even n → Even </span><span style="color:#005cc5">(</span><span style="color:#24292E">m * n</span><span style="color:#005cc5">)</span><span style="color:#24292E"> := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">  -- Say m and n are natural numbers, and assume n=</span><span style="color:#005CC5">2</span><span style="color:#24292E">*k.</span></span>
<span class="line"><span style="color:#24292E">  rintro m n ⟨k, hk⟩</span></span>
<span class="line"><span style="color:#24292E">  -- We need to prove m*n is twice a natural number. Let's </span><span style="color:#D73A49">show</span><span style="color:#24292E"> it's twice m*k.</span></span>
<span class="line"><span style="color:#24292E">  use m * k</span></span>
<span class="line"><span style="color:#24292E">  -- Substitute </span><span style="color:#D73A49">for</span><span style="color:#24292E"> n,</span></span>
<span class="line"><span style="color:#24292E">  rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">hk</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">  -- and now it's obvious.</span></span>
<span class="line"><span style="color:#24292E">  ring</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : ∀ m n : Nat, Even n → Even </span><span style="color:#005cc5">(</span><span style="color:#24292E">m * n</span><span style="color:#005cc5">)</span><span style="color:#24292E"> := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">  rintro m n ⟨k, hk⟩; use m * k; rw </span><span style="color:#005cc5">[</span><span style="color:#24292E">hk</span><span style="color:#005cc5">]</span><span style="color:#24292E">; ring</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">example</span><span style="color:#24292E"> : ∀ m n : Nat, Even n → Even </span><span style="color:#005cc5">(</span><span style="color:#24292E">m * n</span><span style="color:#005cc5">)</span><span style="color:#24292E"> := </span><span style="color:#D73A49">by</span></span>
<span class="line"><span style="color:#24292E">  intros; simp </span><span style="color:#005cc5">[</span><span style="color:#24292E">*, parity_simps</span><span style="color:#005cc5">]</span></span></code></pre>`,headings:[{depth:2,slug:`step-1-安装-highlightjs-lean`,text:`Step 1. 安装 highlightjs-lean`},{depth:2,slug:`step-2-将-lean-语言支持添加到-hljs`,text:`Step 2. 将 Lean 语言支持添加到 hljs`},{depth:2,slug:`step-3-把-hexo-utils-的语言定义文件里添加上-lean`,text:`Step 3. 把 hexo-utils 的语言定义文件里添加上 Lean`},{depth:2,slug:`或者`,text:`或者……`},{depth:2,slug:`成果展示`,text:`成果展示`}]};export{e as default};