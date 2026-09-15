var e={frontmatter:{title:`静态版Ruby？Crystal语言试用`,date:`2024-06-13T11:19:28`,tags:[`Crystal`,`PL`,`Code`],toc:!0,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`静态版Ruby？Crystal语言试用`,html:`<p>前几天在思考，Python 和 JS 都拥抱了类型检查（类型注释），但是 Ruby 却只能用 Sorbet 这样的影响性能的类型检查器（Ruby 没有官方的类型检查工具，引入静态类型检查的 gem 反而降低了性能），在搜索中找到了 Crystal 这门语言。</p>
<p><a href="https://crystal-lang.org/">https://crystal-lang.org/</a></p>
<p>看描述我就惊艳到了：作为一个<strong>静态语言</strong>，Crystal 居然长得这么像 Ruby，于是本着不妨玩玩的想法，我进行了 Crystal 的初试。</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D"># A very basic HTTP server</span></span>
<span class="line"><span style="color:#D73A49">require</span><span style="color:#032F62"> "http/server"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">server </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> HTTP</span><span style="color:#24292E">::</span><span style="color:#005CC5">Server</span><span style="color:#24292E">.new </span><span style="color:#D73A49">do </span><span style="color:#24292E">|</span><span style="color:#D73A49">context</span><span style="color:#24292E">|</span></span>
<span class="line"><span style="color:#D73A49">  context</span><span style="color:#24292E">.response.content_type </span><span style="color:#D73A49">=</span><span style="color:#032F62"> "text/plain"</span></span>
<span class="line"><span style="color:#D73A49">  context</span><span style="color:#24292E">.response.print </span><span style="color:#032F62">"Hello world, got </span><span style="color:#032F62">#</span><span style="color:#005cc5">{</span><span style="color:#D73A49">context</span><span style="color:#032F62">.</span><span style="color:#24292E">request</span><span style="color:#032F62">.</span><span style="color:#24292E">path</span><span style="color:#005cc5">}</span><span style="color:#032F62">!"</span></span>
<span class="line"><span style="color:#D73A49">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">address </span><span style="color:#D73A49">=</span><span style="color:#24292E"> server.</span><span style="color:#6F42C1">bind_tcp</span><span style="color:#005cc5">(</span><span style="color:#005CC5">8080</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#032F62"> "Listening on http://</span><span style="color:#032F62">#</span><span style="color:#005cc5">{</span><span style="color:#24292E">address</span><span style="color:#005cc5">}</span><span style="color:#032F62">"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># This call blocks until the process is terminated</span></span>
<span class="line"><span style="color:#24292E">server.listen</span></span></code></pre>
<!-- more -->
<h2 id="简介翻译自-github-readme"><a href="#简介翻译自-github-readme">简介（翻译自 Github README）</a></h2>
<h3 id="目标"><a href="#目标">目标</a></h3>
<p>Crystal 是具有以下目标的编程语言：</p>
<ul>
<li>和 Ruby 相似（但不要求兼容）的语法</li>
<li>静态类型检查，但不要求处处指定变量或者方法的类型</li>
<li>可以 call C 代码</li>
<li>对编译时进行评估和生成代码，避免 boilerplate code.</li>
<li>编译成高效的原生代码</li>
</ul>
<h3 id="为什么"><a href="#为什么">为什么？</a></h3>
<p>我们喜欢 Ruby 写代码的高效率</p>
<p>我们也喜欢 C 运行代码的高效率</p>
<p>我们想要集二者所长</p>
<p>我们想要编译器能理解我们，而不是我们对编译器指定类型</p>
<p>我们想要完整的面向对象</p>
<p>而且，我们不想为了让代码跑的更快而去写 C 代码。</p>
<h2 id="下载安装"><a href="#下载安装">下载安装</a></h2>
<p>请遵循 RTFM 方法，<strong>R</strong>ead <strong>T</strong>he <strong>F</strong>ucking <strong>M</strong>anual
<a href="https://crystal-lang.org/install/">https://crystal-lang.org/install/</a></p>
<h2 id="语法"><a href="#语法">语法</a></h2>
<p>Crystal 的语法高度类似于 Ruby，建议先学会 Ruby 的语法再说 Crystal。</p>
<p>这里只提一些比较亮点的东西。</p>
<h3 id="ab-problem但是自动泛型"><a href="#ab-problem但是自动泛型">A+B problem，但是自动泛型</a></h3>
<p>Crystal 有自动类型推断的功能。也就是说，大部分情况下类型声明可以直接不写，比如这样</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">def</span><span style="color:#6F42C1"> add</span><span style="color:#005cc5">(</span><span style="color:#24292E">a, b</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">  a </span><span style="color:#D73A49">+</span><span style="color:#24292E"> b</span></span>
<span class="line"><span style="color:#D73A49">end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#6F42C1"> add</span><span style="color:#005cc5">(</span><span style="color:#005CC5">1</span><span style="color:#24292E">, </span><span style="color:#005CC5">2</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#6A737D"># 3</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#6F42C1"> add</span><span style="color:#005cc5">(</span><span style="color:#032F62">"1"</span><span style="color:#24292E">, </span><span style="color:#032F62">"2"</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#6A737D"># "12"</span></span></code></pre>
<p>这段代码有些类似于 C++这样写</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">auto</span><span style="color:#6F42C1"> add</span><span style="color:#005cc5">(</span><span style="color:#D73A49">auto</span><span style="color:#E36209"> a</span><span style="color:#24292E">, </span><span style="color:#D73A49">auto</span><span style="color:#E36209"> b</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#24292E"> a </span><span style="color:#D73A49">+</span><span style="color:#24292E"> b;</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<p>我个人很喜欢 Ruby 和 Crystal 一脉相承的一个想法：程序员的幸福最大化。 <del>Ruby 是这样的，程序员只要负责写的爽就行了，而 Ruby 要考虑的事情就多了（不是）</del></p>
<p>让我们看看 <a href="https://rubyonrails.org/doctrine/zh_cn#optimize-for-programmer-happiness">Rails 信条</a> 中怎么说</p>
<blockquote>
<p>早期 Ruby 的极端邪说就是把程序员的幸福度放到第一位。还把追求幸福置于驱动编程语言与生态圈前进的考量之上。</p>
<p>然而 Python 可能对于“用一种方法，最好只有一种方法来完成一件事”而感到自豪，而 Ruby 则喜欢自身表现力与巧妙。Java 是饱受软件工程师的强力推崇，Ruby 则在欢迎工具里就附上了自尽的绳子。Smalltalk 专注于消息传递的纯粹性，Ruby 则累积关键字和臃肿的语法构造。</p>
<p>Ruby 与众不同的原因是看重的事情不一样。这些考量，都是为了满足和追求软件工程师的幸福。这些追求导致了与其他编程语言的辩论，也打开了主流文化对于究竟什么是软件工程师，以及应该如何应对软件工程师的认知。</p>
<p>Ruby 不仅承认，而且从设计上适应和提升软件工程师的感受。不管它们是不足的、奇思妙想的，还是令人喜悦的。Matz 跨越了惊人难度的实践门槛，让机器面有喜色，且富有人性。Ruby 满满是视觉上的错觉，在我们看起来 Ruby 很简单，清晰，也很优美，背后其实是杂技般的错综复杂。这些选择不是没有代价（问问 JRuby 那些试着要对 Ruby 逆向工程的人看看！），这也是为什么，这是很值得赞扬的一件事。</p>
<p>这是对软件开发另一种愿景的致敬，也决定了我对 Ruby 的钟爱。这不止是简单易用，不仅是美学的元素，也不是单一的技术成就。而是一种愿景，是反文化。Ruby 是一个不适应呆板专业软件开发的人，而是专属于爱好之士的乐土。</p>
</blockquote>
<p>回到刚刚的 A+B problem。 即使 C++有 <code>auto</code> （更多静态类型语言会要求你写冗长的泛型），我们为什么不能更进一步呢？传入两个参数，把它们加起来。电脑理所应当可以从参数类型推导结果类型。那我为什么还要写呢？</p>
<p>我在意的是我写得爽不爽，而不是它是不是符合哪个 RFC 的哪一条。所以，你已经是个成熟的编程语言了，该学会揣摩我到底要写什么类型了。我很喜欢。</p>
<h3 id="面向对象真的"><a href="#面向对象真的">面向对象，真的</a></h3>
<p>Ruby 和 Crystal 都是特别面向对象的语言。比绝大多数自称面向对象的语言还要面向对象。</p>
<p>举个例子，Ruby/Crystal 支持这样的写法</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#005CC5">3</span><span style="color:#24292E">.times </span><span style="color:#D73A49">do </span><span style="color:#24292E">|i|</span></span>
<span class="line"><span style="color:#005CC5">  puts</span><span style="color:#24292E"> i</span></span>
<span class="line"><span style="color:#D73A49">end</span></span>
<span class="line"><span style="color:#6A737D"># 输出：</span></span>
<span class="line"><span style="color:#6A737D"># 0</span></span>
<span class="line"><span style="color:#6A737D"># 1</span></span>
<span class="line"><span style="color:#6A737D"># 2</span></span></code></pre>
<p>这是因为哪怕是数字 3 也被视为一个对象，是 Object 的子类，可以有自己的 methods</p>
<p>所以在 Crystal 内可以写出这样极其直观的代码</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#005CC5">puts</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">.seconds </span><span style="color:#6A737D"># 00:00:03</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">.minute  </span><span style="color:#6A737D"># 00:03:00</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">.hours   </span><span style="color:#6A737D"># 03:00:00</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">.years   </span><span style="color:#6A737D"># Time::MonthSpan(@value=36)</span></span></code></pre>
<p>这些也可以传入到 <code>sleep</code> 中作为参数。<code>sleep 3.seconds</code> 即为 sleep3 秒，所有人一眼就能看懂，再也不用担心什么 sleep 传入的<code>int</code>参数到底是毫秒还是秒的问题。</p>
<p>相似的，由于一切皆对象，可以轻松的这样把一个对象转换为 JSON：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">require</span><span style="color:#032F62"> "json"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#24292E"> </span><span style="color:#005cc5">(</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#005CC5">    a:</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">    b:</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">    c:</span><span style="color:#24292E"> </span><span style="color:#5a32a3">{</span></span>
<span class="line"><span style="color:#005CC5">      a:</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">      b:</span><span style="color:#24292E"> </span><span style="color:#005cc5">[</span><span style="color:#005CC5">1</span><span style="color:#24292E">,</span><span style="color:#005CC5">2</span><span style="color:#24292E">,</span><span style="color:#005CC5">3</span><span style="color:#24292E">,</span><span style="color:#005CC5">4</span><span style="color:#24292E">, </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#005CC5">        str:</span><span style="color:#032F62"> "hello"</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#e36209">}</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">}</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span><span style="color:#24292E">.to_json</span></span>
<span class="line"><span style="color:#005cc5">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D"># {"a":1,"b":2,"c":{"a":2,"b":[1,2,3,4,{"str":"hello"}]}}</span></span></code></pre>
<h3 id="缺点"><a href="#缺点">缺点</a></h3>
<p>Crystal 目前的生态还有问题，vscode 插件甚至无法做到优秀的代码补全和类型检查。好在编译时 Crystal 会报告你的类型错误，呃（）</p>
<h2 id="速度测试"><a href="#速度测试">速度测试</a></h2>
<p>测试代码：欧拉筛素数，数量级 1e8</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">def</span><span style="color:#6F42C1"> get_primes</span><span style="color:#005cc5">(</span><span style="color:#24292E">n</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">  isnt_prime </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> Array</span><span style="color:#24292E">.</span><span style="color:#6F42C1">new</span><span style="color:#005cc5">(</span><span style="color:#24292E">n </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">, </span><span style="color:#005CC5">false</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">  res </span><span style="color:#D73A49">=</span><span style="color:#24292E"> </span><span style="color:#005cc5">[</span><span style="color:#005cc5">]</span><span style="color:#24292E"> </span><span style="color:#D73A49">of</span><span style="color:#005CC5"> Int32</span></span>
<span class="line"><span style="color:#24292E">  isnt_prime.each_index </span><span style="color:#D73A49">do </span><span style="color:#24292E">|val|</span></span>
<span class="line"><span style="color:#D73A49">    next</span><span style="color:#D73A49"> if</span><span style="color:#24292E"> val </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 2</span></span>
<span class="line"><span style="color:#D73A49">    next</span><span style="color:#D73A49"> if</span><span style="color:#24292E"> isnt_prime</span><span style="color:#005cc5">[</span><span style="color:#24292E">val</span><span style="color:#005cc5">]</span><span style="color:#24292E"> </span><span style="color:#D73A49">==</span><span style="color:#005CC5"> true</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#005cc5">(</span><span style="color:#24292E">val </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">..n</span><span style="color:#005cc5">)</span><span style="color:#24292E">.step val </span><span style="color:#D73A49">do </span><span style="color:#24292E">|id|</span></span>
<span class="line"><span style="color:#24292E">      isnt_prime</span><span style="color:#005cc5">[</span><span style="color:#24292E">id</span><span style="color:#005cc5">]</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> true</span></span>
<span class="line"><span style="color:#D73A49">    end</span></span>
<span class="line"><span style="color:#24292E">    res </span><span style="color:#D73A49">&#x3C;</span><span style="color:#D73A49">&#x3C;</span><span style="color:#24292E"> val</span></span>
<span class="line"><span style="color:#D73A49">  end</span></span>
<span class="line"><span style="color:#24292E">  res</span></span>
<span class="line"><span style="color:#D73A49">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#032F62"> "Start calculating..."</span></span>
<span class="line"><span style="color:#24292E">t1 </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> Time</span><span style="color:#24292E">.monotonic</span></span>
<span class="line"><span style="color:#24292E">resu </span><span style="color:#D73A49">=</span><span style="color:#6F42C1"> get_primes</span><span style="color:#005cc5">(</span><span style="color:#005CC5">100000000</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">t2 </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> Time</span><span style="color:#24292E">.monotonic</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#24292E"> resu</span><span style="color:#005cc5">[</span><span style="color:#24292E">..</span><span style="color:#005CC5">100</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#005CC5">puts</span><span style="color:#24292E"> t2 </span><span style="color:#D73A49">-</span><span style="color:#24292E"> t1</span></span></code></pre>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>$ crystal build .\\prime.cr --release</span></span>
<span class="line"><span>$ .\\prime.exe</span></span>
<span class="line"><span>Start calculating...</span></span>
<span class="line"><span>[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547]</span></span>
<span class="line"><span>00:00:01.156142200</span></span></code></pre>
<p>相同框架改写的代码，Crystal 用时 1.2 秒，C++用时 1.2 秒，nodejs 用时 7.9 秒，ruby 用时 16.5 秒，python 用时 22 秒</p>
<p>Crystal 在这个素数筛上还是非常接近 C++ 的速度的</p>`,headings:[{depth:2,slug:`简介翻译自-github-readme`,text:`简介（翻译自 Github README）`},{depth:3,slug:`目标`,text:`目标`},{depth:3,slug:`为什么`,text:`为什么？`},{depth:2,slug:`下载安装`,text:`下载安装`},{depth:2,slug:`语法`,text:`语法`},{depth:3,slug:`ab-problem但是自动泛型`,text:`A+B problem，但是自动泛型`},{depth:3,slug:`面向对象真的`,text:`面向对象，真的`},{depth:3,slug:`缺点`,text:`缺点`},{depth:2,slug:`速度测试`,text:`速度测试`}]};export{e as default};