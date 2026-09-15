var e={frontmatter:{title:`vite-plugin-vue-layouts 使用记`,date:`2025-04-20T23:24:37`,tags:[`Code`,`Frontend`,`Vue`],copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`vite-plugin-vue-layouts 使用记`,html:`<p>前言： <a href="https://uvr.esm.is/">unplugin-vue-router</a> 是 unplugin 的一款插件，旨在在 <code>src/pages</code> 等目录下使用文件驱动的 routing 来避免手写 vue-router 配置带来的麻烦与潜在的失误，是约定优于配置的一个展现。</p>
<p><a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts">vite-plugin-vue-layouts</a> 是与 unplugin-vue-router 非常般配的一款插件，旨在为 views 指定共享的 layout，在复杂前端工程上或许非常有用。</p>
<p>二者是 <a href="https://vuetifyjs.com/">vuetify</a> 前端框架推荐使用的插件。</p>
<p><del>然后就被它的【刻意的设计】坑了一把</del></p>
<!-- more -->
<h2 id="背景故事使用上述二插件简单化页面组织"><a href="#背景故事使用上述二插件简单化页面组织">背景故事：使用上述二插件简单化页面组织</a></h2>
<p>一个经典的，<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/SPA">SPA</a>的前端，以我写下这篇博客时正在编写的阅读器为例，可能有这样的页面：</p>
<ul>
<li>一个 <code>/tabs</code> 阅读器页面下面包含
<ul>
<li><code>/tabs/:bookname</code> 读书页面</li>
<li><code>/tabs/new</code> 新标签页</li>
<li><code>/tabs/settings</code> 阅读器设置页</li>
</ul>
</li>
<li><code>/</code> 下的所有页面保持一致的风格，共享 sidebar 和 header footer 等
<ul>
<li><code>/books/all</code> 显示全部书库</li>
<li><code>/books/user</code> 显示个人书库</li>
<li><code>/book/:bookname</code> 显示书本详情</li>
<li><code>/profile</code> 显示个人信息</li>
<li><code>/topup</code> 充值页面</li>
</ul>
</li>
<li>登录系列页面保持一致的风格，但是和 <code>/</code> 不同，因为登录界面需要向用户展示产品亮点
<ul>
<li><code>/login</code> 登录</li>
<li><code>/register</code> 注册</li>
<li><code>/forgot-password</code> 忘记密码</li>
<li><code>/confirm</code> 验证邮件</li>
</ul>
</li>
</ul>
<p>这里一致的风格不能重复编写代码，于是我们需要手动嵌套路由和编写 layout 文件，</p>
<p>用传统的 vue-router 编写 router.js 需要配置大量繁复的内容：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> routes</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> </span><span style="color:#005cc5">[</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#24292E">    path: </span><span style="color:#032F62">'/tabs'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">    component: TabsLayout,</span></span>
<span class="line"><span style="color:#24292E">    children: </span><span style="color:#5a32a3">[</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">''</span><span style="color:#24292E">, redirect: </span><span style="color:#032F62">'/tabs/new'</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'new'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/tabs/New.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'settings'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/tabs/Settings.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">':bookname'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/tabs/Read.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">]</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#24292E">    path: </span><span style="color:#032F62">'/'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">    component: MainLayout,</span></span>
<span class="line"><span style="color:#24292E">    children: </span><span style="color:#5a32a3">[</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#24292E">        path: </span><span style="color:#032F62">"/books"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        component: BooksListLayout,</span></span>
<span class="line"><span style="color:#24292E">        children: </span><span style="color:#e36209">[</span></span>
<span class="line"><span style="color:#24292E">          </span><span style="color:#5a32a3">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'all'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#005cc5">(</span><span style="color:#032F62">'@/pages/books/All.vue'</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#5a32a3">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">          </span><span style="color:#5a32a3">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'user'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#005cc5">(</span><span style="color:#032F62">'@/pages/books/User.vue'</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#5a32a3">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        </span><span style="color:#e36209">]</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#24292E">        path: </span><span style="color:#032F62">"/books"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        component: BooksInfoLayout,</span></span>
<span class="line"><span style="color:#24292E">        children: </span><span style="color:#e36209">[</span></span>
<span class="line"><span style="color:#24292E">          </span><span style="color:#5a32a3">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">':bookname'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#005cc5">(</span><span style="color:#032F62">'@/pages/book/Detail.vue'</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#5a32a3">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">        </span><span style="color:#e36209">]</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">}</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'profile'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/Profile.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'topup'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/TopUp.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">]</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#24292E">    path: </span><span style="color:#032F62">'/'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">    component: AuthLayout,</span></span>
<span class="line"><span style="color:#24292E">    children: </span><span style="color:#5a32a3">[</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'login'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/auth/Login.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'register'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/auth/Register.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'forgot-password'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/auth/ForgotPassword.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">      </span><span style="color:#005cc5">{</span><span style="color:#24292E"> path: </span><span style="color:#032F62">'confirm'</span><span style="color:#24292E">, </span><span style="color:#6F42C1">component</span><span style="color:#24292E">: </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#D73A49"> import</span><span style="color:#e36209">(</span><span style="color:#032F62">'@/pages/auth/Confirm.vue'</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#005cc5">}</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">]</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#e36209">}</span></span>
<span class="line"><span style="color:#005cc5">]</span></span></code></pre>
<p>这里我还只写了十几个页面，就已经有了这么繁琐的 vue-router 配置。实际上的大项目页面只会远远地更多，甚至可能达到上百上千个。例如，<a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/router.definition.ts">Misskey 的 router defination</a> 在写下这篇文章的时候就有 597 行，大约 150 个页面，未来只会更多。</p>
<p>并且，这样一个 router 使用 typescript 的话需要非常复杂的类型体操才能做到根据配置得到 route 的实际类型。比如，在不用任何插件的情况下，你可能不小心 push 一个 <code>/forget-password</code> —— 只有一个 <code>o</code> <code>e</code> 的差别，非常难以发现。这为代码造成了潜在的安全隐患。尤其是大型项目，多人协作的情况下，数百个页面不可能都记得拼写，某次失误便可能把错误的 route 引入。</p>
<p>这就是 unplugin-vue-router 的方便之处与优势。有了这个插件，我们直接编写这样的文件结构：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├─ pages/</span></span>
<span class="line"><span>│  ├─ tabs/</span></span>
<span class="line"><span>│  │  ├─ [bookname].vue</span></span>
<span class="line"><span>│  │  ├─ new.vue</span></span>
<span class="line"><span>│  │  └─ settings.vue</span></span>
<span class="line"><span>│  ├─ tabs.vue</span></span>
<span class="line"><span>│  ├─ books/</span></span>
<span class="line"><span>│  │  ├─ all.vue</span></span>
<span class="line"><span>│  │  └─ user.vue</span></span>
<span class="line"><span>│  ├─ books.vue</span></span>
<span class="line"><span>│  ├─ book/</span></span>
<span class="line"><span>│  │  └─ [bookname].vue</span></span>
<span class="line"><span>│  ├─ book.vue</span></span>
<span class="line"><span>│  ├─ profile.vue</span></span>
<span class="line"><span>│  ├─ topup.vue</span></span>
<span class="line"><span>│  ├─ (auth)/</span></span>
<span class="line"><span>│  ├─ ├─ login.vue</span></span>
<span class="line"><span>│  ├─ ├─ register.vue</span></span>
<span class="line"><span>│  ├─ ├─ forgot-password.vue</span></span>
<span class="line"><span>│  └─ └─ confirm.vue</span></span>
<span class="line"><span>│  └─ (auth).vue</span></span></code></pre>
<p>就能直接自动生成上述的 router defination！不仅如此，它还会全自动地为你生成一个 <code>typed-router.d.ts</code> 之类的文件，自动生成完善的类型检查。它内部可能是</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> interface</span><span style="color:#6F42C1"> RouteNamedMap</span><span style="color:#24292E"> </span><span style="color:#005cc5">{</span></span>
<span class="line"><span style="color:#032F62">  "/[...path]"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/[...path]"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/:path(.*)"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">{</span><span style="color:#24292E"> </span><span style="color:#E36209">path</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> ParamValue</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">true</span><span style="color:#005cc5">></span><span style="color:#24292E"> </span><span style="color:#5a32a3">}</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#5a32a3">{</span><span style="color:#24292E"> </span><span style="color:#E36209">path</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> ParamValue</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">false</span><span style="color:#005cc5">></span><span style="color:#24292E"> </span><span style="color:#5a32a3">}</span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#032F62">  "/forget-password"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/forget-password"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/forget-password"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#005cc5">></span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#005cc5">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#032F62">  "/login"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/login"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/login"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#e36209">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#e36209">></span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#e36209">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#e36209">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#032F62">  "/register"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/register"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/register"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#5a32a3">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#5a32a3">></span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#5a32a3">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#5a32a3">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#032F62">  "/tabs"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/tabs"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/tabs"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#005cc5">></span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#005cc5">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#005cc5">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#032F62">  "/tabs/new"</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> RouteRecordInfo</span><span style="color:rgba(255, 18, 18, 0.8)">&#x3C;</span></span>
<span class="line"><span style="color:#032F62">    "/tabs/new"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">    "/tabs/new"</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#e36209">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#e36209">></span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">    Record</span><span style="color:#e36209">&#x3C;</span><span style="color:#005CC5">never</span><span style="color:#24292E">, </span><span style="color:#005CC5">never</span><span style="color:#e36209">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">></span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#6A737D">  // ...</span></span>
<span class="line"><span style="color:#005cc5">}</span></span></code></pre>
<p>你现在可以放心地</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">router.</span><span style="color:#6F42C1">push</span><span style="color:#005cc5">(</span><span style="color:#e36209">{</span><span style="color:#24292E"> name: </span><span style="color:#032F62">"/(auth)/login"</span><span style="color:#24292E"> </span><span style="color:#e36209">}</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span></code></pre>
<p>其中 name 是根据路径自动生成的。tsc 会帮你检查类型，确定你的 name 里面不包含 typo 了。</p>
<p>容易看出，这种文件组织方式好是好，就是显得不太直观。共用一套 layout 的组件必须得放在同一个以括号代表的文件夹下面，给搜索带来了一定程度上的不便。</p>
<p>这时候就轮到 vite-plugin-vue-layouts 出场了。利用 layout 机制（本质上就是自动创建 nesting routes），我们可以把项目结构简化成</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├─ layouts/</span></span>
<span class="line"><span>│  ├─ default.vue         # / 下的所有页面共享</span></span>
<span class="line"><span>│  ├─ tabs.vue            # /tabs 下的阅读器页面</span></span>
<span class="line"><span>│  └─ auth.vue            # 登录/注册页面</span></span>
<span class="line"><span>├─ pages/</span></span>
<span class="line"><span>│  ├─ tabs/</span></span>
<span class="line"><span>│  │  ├─ [bookname].vue</span></span>
<span class="line"><span>│  │  ├─ new.vue</span></span>
<span class="line"><span>│  │  └─ settings.vue</span></span>
<span class="line"><span>│  ├─ tabs.vue</span></span>
<span class="line"><span>│  ├─ books/</span></span>
<span class="line"><span>│  │  ├─ all.vue</span></span>
<span class="line"><span>│  │  └─ user.vue</span></span>
<span class="line"><span>│  ├─ books.vue</span></span>
<span class="line"><span>│  ├─ book/</span></span>
<span class="line"><span>│  │  └─ [bookname].vue</span></span>
<span class="line"><span>│  ├─ book.vue</span></span>
<span class="line"><span>│  ├─ profile.vue</span></span>
<span class="line"><span>│  ├─ topup.vue</span></span>
<span class="line"><span>│  ├─ login.vue</span></span>
<span class="line"><span>│  ├─ register.vue</span></span>
<span class="line"><span>│  ├─ forgot-password.vue</span></span>
<span class="line"><span>│  └─ confirm.vue</span></span></code></pre>
<p>在 layouts 中集中处理那些共性相关的部分，减少使用 nesting</p>
<h2 id="坑点来了"><a href="#坑点来了">坑点来了</a></h2>
<p>细心的人不难注意到我们还是需要 <code>tabs.vue</code> nesting。这是为什么呢？</p>
<p>因为这个库的作者的品味问题。一个没有自身组件的 route 也会默认得到一个 layout，所以如果你在 tabs/new 里面配置 layout 的话，恭喜你，你会获得这样的嵌套：</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>[default [tab]]</span></span></code></pre>
<p>但我们期望的其实是</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>[tab]</span></span></code></pre>
<p>糟糕的是，作为一个很 experimental 的库，vite-plugin-vue-layouts 的文档非常语焉不详……我花了几十分钟才在 github 的 issue 上找到这个问题，并看到了作者的答复，</p>
<p>解决此问题的最简单的方法是创建 <code>tabs.vue</code> 并将布局设置为 false……</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">template</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">  </span><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">RouterView</span><span style="color:#24292E"> /</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#24292E">/</span><span style="color:#22863A">template</span><span style="color:#24292E">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">route</span><span style="color:#6F42C1"> lang</span><span style="color:#24292E">=</span><span style="color:#032F62">"yaml"</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#22863A">meta</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#22863A">  layout</span><span style="color:#24292E">: </span><span style="color:#005CC5">false</span></span>
<span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#24292E">/</span><span style="color:#22863A">route</span><span style="color:#24292E">></span></span></code></pre>
<p>非常丑陋。或许这确实是个品味问题……</p>`,headings:[{depth:2,slug:`背景故事使用上述二插件简单化页面组织`,text:`背景故事：使用上述二插件简单化页面组织`},{depth:2,slug:`坑点来了`,text:`坑点来了`}]};export{e as default};