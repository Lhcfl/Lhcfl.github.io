var e={frontmatter:{title:`一千个计算机人有一千个强类型`,date:`2025-04-07T10:31:12`,tags:[`Code`],copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`一千个计算机人有一千个强类型`,html:`<p>所以不要再说强类型了啊！！</p>
<!-- more -->
<h2 id="q-什么是强类型"><a href="#q-什么是强类型">Q: 什么是强类型？</a></h2>
<blockquote>
<p>强类型意味着不会发生隐式类型转换（所以 Rust 是强类型）
—— 某 Rust 课教师</p>
</blockquote>
<p>你好，Rust 有 <code>&#x26;String</code> 到 <code>&#x26;str</code> 的隐式类型转换</p>
<blockquote>
<p>可以绕过类型系统的限制说明是强类型
—— <a href="https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed">https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed</a></p>
</blockquote>
<p>坏了，带 unsafe 的东西基本都能拿指针强制 reinterpret 绕过类型系统的限制，这下 Rust 成弱类型了</p>
<blockquote>
<p>不同类型的对象可以相加就是弱类型！
——不知道哪来的野鸡教程</p>
</blockquote>
<p>能重载加法运算符的语言多了去了，这下全变成弱类型了，Rust 也是弱类型，Haskell 也是弱类型，C++也是弱类型，Python 也是弱类型</p>
<blockquote>
<p>如果编译器的类型系统检查通过就不会在运行时发生类型错误，那就是强类型的
—— 某编译原理课教师</p>
</blockquote>
<p>……有没有一种可能这个定义是 type safety，以及只要是能造出某种 <code>std::any</code> 的都可以在运行时发生类型错误，这下全变成弱类型语言了。哦还有那些做不到 null safe 的语言也全变成弱类型了</p>
<blockquote>
<p>强类型意味着在该语言的实现下，归类为某种类型的对象是否都能携带对应信息以决定其类型。
—— 某知乎答主</p>
</blockquote>
<p>这下所有动态语言全部变成强类型了，毕竟动态语言必须要在对象上存储它的类型信息</p>
<h2 id="一千个计算机人有一千个强类型"><a href="#一千个计算机人有一千个强类型">一千个计算机人有一千个强类型</a></h2>
<p>总结以后你会发现，一般来说公认地，C 是弱类型语言，JavaScript 是弱类型语言，Rust、Haskell 这样的是强类型语言，剩下的语言都是有争议的。有的人觉得 C++ 到处是隐式类型转换怎么就是强类型了，有的人觉得 C++ 所有东西都要写明类型很强啊，有的人觉得 Python 倾向于不进行隐式类型转换就是强类型语言。很多人完全不分辨 static/dynamic typed 与 strong/weak typed，所以有人觉得 C 也是强类型，甚至还有一些当老师的人原地混淆强类型与类型安全。坏消息是，动态语言在某种意义上比含有 <code>void*</code> 或者 <code>transmute</code> / <code>reinterpret_cast</code> 这种操作的语言更加“类型安全”得多了，毕竟遇到错误的类型动态语言直接抛一个 <code>TypeError</code> 至少不会 panic，控制了错误的范围，而允许你 reinterpret_cast 的语言要是 cast 出了问题直接就是一个 undefined behavior 上来了鬼知道会不会在 114514 层调用链后造成点缓冲区溢出之类的安全漏洞。</p>
<p>浏览大家的回答，会发现那些还在区分强弱类型的人根本就没吵出一个严谨的定义来。</p>
<ul>
<li>JavaScript: 几乎都认为它是弱的</li>
<li>C: 很多人认为它是弱的，一些人觉得是强的</li>
<li>C++: 有人觉得强，有人觉得弱</li>
<li>Java: 有人觉得强，有人觉得弱</li>
<li>Python: 很多人觉得弱，不少觉得强</li>
<li>Rust: 几乎都认为它是强的</li>
<li>Haskell: 几乎都认为它是强的</li>
</ul>
<p><strong>强/弱类型根本就没有一个公认的、well-defined 的定义。</strong> 这比“面向对象的语言”还严重，OOP 虽然争议比较多，起码能来个自我解释，比如说“impl 封装继承多态 ←→ OOP”之类的。</p>
<h2 id="不要再说强弱类型语言了"><a href="#不要再说强弱类型语言了">不要再说强/弱类型语言了</a></h2>
<p>如果你想说的是静态类型和动态类型，which 我们可以不规范的定义为</p>
<ul>
<li>静态类型语言：不是动态类型语言的语言</li>
<li>动态类型语言：所有 value 有统一的 type <code>dyn</code>，一切类型检查都是通过运行时打上的类型标记的语言</li>
</ul>
<p>去说静态类型/动态类型，而不是强/弱类型。</p>
<p>如果你想说的是类型安全与类型不安全，which 我们可以不规范的定义为：</p>
<ul>
<li>类型安全的：如果在静态检查中通过的代码永远不会发生未定义的类型错误，它是类型安全的</li>
<li>类型不安全：不是类型安全的语言</li>
</ul>
<p>去说类型安全/不安全，而不是强/弱类型。</p>
<p>（进一步的，在严谨的讨论中，我们会用 sound, complete, total 这样的词来形容类型系统）</p>
<ul>
<li>sound: 如果类型系统认为程序是合法的（类型正确的），那么运行时就不会出现类型错误</li>
<li>complete: 所有在运行时不会出错的程序，类型系统都能通过它们。</li>
<li>total: 类型检查算法总能在有限步骤内完成</li>
</ul>
<p>如果你想讨论的是隐式类型转换，which 我们可以不规范的定义为</p>
<ul>
<li>语言充斥着/很少出现 许多隐式的行为，这些行为允许自动地将一个值从一个类型转换到另一个类型，以匹配定义好的操作</li>
</ul>
<p>那就去说隐式类型转换，而不是强/弱类型</p>
<hr>
<p>强/弱类型被说了这么久，甚至连一个公认的定义都没有。不管你以前怎么理解强/弱类型的赶快把这个词扔进垃圾堆吧.</p>`,headings:[{depth:2,slug:`q-什么是强类型`,text:`Q: 什么是强类型？`},{depth:2,slug:`一千个计算机人有一千个强类型`,text:`一千个计算机人有一千个强类型`},{depth:2,slug:`不要再说强弱类型语言了`,text:`不要再说强/弱类型语言了`}]};export{e as default};