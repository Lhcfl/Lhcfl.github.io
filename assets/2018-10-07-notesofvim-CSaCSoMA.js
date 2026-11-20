var e={frontmatter:{title:`Vim学习笔记`,date:`2018-10-07T13:19:09`,tags:[`Vim`,`Code`],toc:!0,thumbnail:`https://gitee.com/lhcfl/photobed/raw/master/ACG/57.jpg`,copyright:`CC BY-SA 3.0`,categories:[]},titleHtml:`Vim学习笔记`,html:`<p>Vim 的学习笔记</p>
<!-- more -->
<hr>
<h2 id="基础按键"><a href="#基础按键">基础按键</a></h2>
<table>
<thead>
<tr>
<th>按键</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>什么都不按 　　　　</td>
<td>普通模式</td>
</tr>
<tr>
<td><kbd>i</kbd></td>
<td>输入模式</td>
</tr>
<tr>
<td><kbd>Esc</kbd></td>
<td>从输入模式退出</td>
</tr>
<tr>
<td><kbd>：</kbd></td>
<td>命令模式</td>
</tr>
<tr>
<td><kbd>v</kbd></td>
<td>可视模式</td>
</tr>
<tr>
<td><kbd>↑</kbd></td>
<td>上</td>
</tr>
<tr>
<td><kbd>↓</kbd></td>
<td>下</td>
</tr>
<tr>
<td><kbd>←</kbd></td>
<td>左</td>
</tr>
<tr>
<td><kbd>→</kbd></td>
<td>右</td>
</tr>
</tbody>
</table>
<h2 id="基础命令"><a href="#基础命令">基础命令</a></h2>
<h3 id="普通模式"><a href="#普通模式">普通模式</a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:open [file]</code></td>
<td>打开文件</td>
</tr>
<tr>
<td><code>:qa!</code></td>
<td>强退</td>
</tr>
<tr>
<td><code>:![command]</code></td>
<td>在 shell 执行<code>[command]</code>这条命令</td>
</tr>
<tr>
<td><code>:w</code></td>
<td>保存</td>
</tr>
<tr>
<td><code>:q</code></td>
<td>退出</td>
</tr>
<tr>
<td><code>:set</code></td>
<td>设置</td>
</tr>
<tr>
<td><code>:set guifont [font]</code></td>
<td>设置字体为<code>[font]</code></td>
</tr>
<tr>
<td><code>:set guifont [font]:h[number]</code>　　　　</td>
<td>设置字体为<code>[font]</code>，字号为<code>[number]</code></td>
</tr>
<tr>
<td><code>dd</code></td>
<td>删除整行</td>
</tr>
<tr>
<td><code>[number]dd</code></td>
<td>删除下<code>[number]</code>行</td>
</tr>
<tr>
<td><code>u</code></td>
<td>撤销</td>
</tr>
<tr>
<td><code>[number]=[方向键]</code></td>
<td>向<code>[方向键]</code>方向<code>[number]</code>行自动缩进</td>
</tr>
<tr>
<td><code>r</code></td>
<td>用你下一个输入的字符替换后面一个字符</td>
</tr>
</tbody>
</table>
<h3 id="可视模式"><a href="#可视模式">可视模式</a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>y</code>　　　　</td>
<td>复制</td>
</tr>
<tr>
<td><code>p</code></td>
<td>粘贴</td>
</tr>
</tbody>
</table>
<h2 id="一个方便的vimrc"><a href="#一个方便的vimrc">一个方便的.vimrc</a></h2>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> ts</span><span style="color:#D73A49">=</span><span style="color:#005CC5">4</span><span style="color:#032F62">                    "设置tab为4空格</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> expandtab</span><span style="color:#032F62">               "用空格替代tab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> nocompatible</span><span style="color:#6A737D">            " 关闭 vi 兼容模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">syntax on</span><span style="color:#6A737D">                   " 自动语法高亮</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> number</span><span style="color:#6A737D">                  " 显示行号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> cursorline</span><span style="color:#6A737D">              " 突出显示当前行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> ruler</span><span style="color:#6A737D">                   " 打开状态栏标尺</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> shiftwidth</span><span style="color:#D73A49">=</span><span style="color:#005CC5">4</span><span style="color:#6A737D">            " 设定 &#x3C;&#x3C; 和 >> 命令移动时的宽度为 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> softtabstop</span><span style="color:#D73A49">=</span><span style="color:#005CC5">4</span><span style="color:#6A737D">           " 使得按退格键时可以一次删掉 4 个空格</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">colorscheme</span><span style="color:#24292E"> molokai</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> nobackup</span><span style="color:#6A737D">                " 覆盖文件时不备份</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> autochdir</span><span style="color:#6A737D">               " 自动切换当前目录为当前文件所在的目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">"filetype plugin indent on   " 开启插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> backupcopy</span><span style="color:#D73A49">=</span><span style="color:#24292E">yes</span><span style="color:#6A737D">          " 设置备份时的行为为覆盖</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> ignorecase</span><span style="color:#005CC5"> smartcase</span><span style="color:#6A737D">    " 搜索时忽略大小写，但在有一个或以上大写字母时仍保持对大小写敏感</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> nowrapscan</span><span style="color:#6A737D">              " 禁止在搜索到文件两端时重新搜索</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> incsearch</span><span style="color:#6A737D">               " 输入搜索内容时就显示搜索结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> hlsearch</span><span style="color:#6A737D">                " 搜索时高亮显示被找到的文本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> noerrorbells</span><span style="color:#6A737D">            " 关闭错误信息响铃</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> novisualbell</span><span style="color:#6A737D">            " 关闭使用可视响铃代替呼叫</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#24292E"> t_vb</span><span style="color:#D73A49">=</span><span style="color:#6A737D">                   " 置空错误铃声的终端代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> magic</span><span style="color:#6A737D">                   " 设置魔术</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> hidden</span><span style="color:#6A737D">                  " 允许在有未保存的修改时切换缓冲区，此时的修改由 vim 负责保存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> guioptions</span><span style="color:#24292E">-</span><span style="color:#D73A49">=</span><span style="color:#24292E">T</span><span style="color:#6A737D">           " 隐藏工具栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> guioptions</span><span style="color:#24292E">-</span><span style="color:#D73A49">=</span><span style="color:#24292E">m</span><span style="color:#6A737D">           " 隐藏菜单栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> smartindent</span><span style="color:#6A737D">             " 开启新行时使用智能自动缩进</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> backspace</span><span style="color:#D73A49">=</span><span style="color:#24292E">indent,</span><span style="color:#005CC5">eol</span><span style="color:#24292E">,start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">                            " 不设定在插入状态无法用退格键和 Delete 键删除回车符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> cmdheight</span><span style="color:#D73A49">=</span><span style="color:#005CC5">1</span><span style="color:#6A737D">             " 设定命令行的行数为 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> laststatus</span><span style="color:#D73A49">=</span><span style="color:#005CC5">2</span><span style="color:#6A737D">            " 显示状态栏 (默认值为 1, 无法显示状态栏)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> statusline</span><span style="color:#D73A49">=\\</span><span style="color:#24292E"> %</span><span style="color:#24292E">&#x3C;</span><span style="color:#24292E">%F</span><span style="color:#005cc5">[</span><span style="color:#24292E">%1*%M%*%n%R%H</span><span style="color:#005cc5">]</span><span style="color:#24292E">%=\\ %y</span><span style="color:#D73A49">\\</span><span style="color:#24292E"> %</span><span style="color:#005CC5">0</span><span style="color:#005cc5">(</span><span style="color:#24292E">%</span><span style="color:#e36209">{</span><span style="color:#005CC5">&#x26;fileformat</span><span style="color:#e36209">}</span><span style="color:#D73A49">\\</span><span style="color:#24292E"> %</span><span style="color:#e36209">{</span><span style="color:#005CC5">&#x26;encoding</span><span style="color:#e36209">}</span><span style="color:#D73A49">\\</span><span style="color:#24292E"> %c:%l/%L%</span><span style="color:#005cc5">)</span><span style="color:#D73A49">\\</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">                            " 设置在状态行显示的信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">"set foldenable              " 开始折叠</span></span>
<span class="line"><span style="color:#6A737D">"</span></span>
<span class="line"><span style="color:#6A737D">"set foldmethod=syntax       " 设置语法折叠</span></span>
<span class="line"><span style="color:#6A737D">"</span></span>
<span class="line"><span style="color:#6A737D">"set foldcolumn=0            " 设置折叠区域的宽度</span></span>
<span class="line"><span style="color:#6A737D">"</span></span>
<span class="line"><span style="color:#6A737D">"setlocal foldlevel=1        " 设置折叠层数为</span></span>
<span class="line"><span style="color:#6A737D">"</span></span>
<span class="line"><span style="color:#6A737D">"set foldclose=all           " 设置为自动关闭折叠</span></span>
<span class="line"><span style="color:#6A737D">"</span></span>
<span class="line"><span style="color:#6A737D">"inoremap &#x3C;space> @=((foldclosed(line('.')) &#x3C; 0) ? 'zc' : 'zo')&#x3C;CR></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">                            " 用空格键来开关折叠</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">set</span><span style="color:#005CC5"> whichwrap</span><span style="color:#D73A49">+=</span><span style="color:#24292E">&#x3C;</span><span style="color:#24292E">,</span><span style="color:#24292E">></span><span style="color:#24292E">,</span><span style="color:#005cc5">[</span><span style="color:#24292E">,</span><span style="color:#005cc5">]</span></span>
<span class="line"><span style="color:#D73A49">inoremap</span><span style="color:#24292E"> </span><span style="color:rgba(255, 18, 18, 0.8)">(</span><span style="color:#24292E"> </span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">LEFT</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#D73A49">inoremap</span><span style="color:#24292E"> </span><span style="color:rgba(255, 18, 18, 0.8)">{</span><span style="color:#24292E"> </span><span style="color:#5a32a3">{</span><span style="color:#5a32a3">}</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">LEFT</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#D73A49">inoremap</span><span style="color:#24292E"> </span><span style="color:rgba(255, 18, 18, 0.8)">[</span><span style="color:#24292E"> </span><span style="color:#005cc5">[</span><span style="color:#005cc5">]</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">LEFT</span><span style="color:#24292E">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">" 插件类快捷键</span></span>
<span class="line"><span style="color:#D73A49">map</span><span style="color:#24292E"> </span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">c-b</span><span style="color:#24292E">></span><span style="color:#24292E"> :NERDTreeToggle</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">CR</span><span style="color:#24292E">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">inoremap</span><span style="color:#24292E"> </span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">silent</span><span style="color:#24292E">></span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">expr</span><span style="color:#24292E">></span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">Tab</span><span style="color:#24292E">></span><span style="color:#24292E"> </span><span style="color:#6F42C1">pumvisible</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">?</span><span style="color:#032F62"> "&#x3C;C-y>"</span><span style="color:#D73A49"> : </span><span style="color:#6F42C1">coc#pum#visible</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">?</span><span style="color:#6F42C1"> coc#_select_confirm</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span><span style="color:#D73A49"> : </span><span style="color:#032F62">"&#x3C;Tab>"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">" Use vim-plug</span></span>
<span class="line"><span style="color:#6A737D">" Plugged Start</span></span>
<span class="line"><span style="color:#6A737D">" Vim-Plug Start</span></span>
<span class="line"><span style="color:#D73A49">call</span><span style="color:#6F42C1"> plug#begin</span><span style="color:#005cc5">(</span><span style="color:#032F62">'~/.vim/plugged'</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#D73A49">Plug</span><span style="color:#032F62"> 'itchyny/lightline.vim'</span><span style="color:#6A737D">         " lightline插件底部状态栏</span></span>
<span class="line"><span style="color:#D73A49">Plug</span><span style="color:#032F62"> 'scrooloose/nerdtree'</span><span style="color:#6A737D">           " NERDTree</span></span>
<span class="line"><span style="color:#D73A49">Plug</span><span style="color:#032F62"> 'Chiel92/vim-autoformat'</span></span>
<span class="line"><span style="color:#D73A49">Plug</span><span style="color:#032F62"> 'dense-analysis/ale'</span></span>
<span class="line"><span style="color:#D73A49">Plug</span><span style="color:#032F62"> 'neoclide/coc.nvim'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">call</span><span style="color:#6F42C1"> plug#end</span><span style="color:#005cc5">(</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#6A737D">" Vim-Plug End</span></span>
<span class="line"><span style="color:#6A737D">" autocmd VimEnter * NERDTree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">" Plugged End</span></span>
<span class="line"></span></code></pre>`,headings:[{depth:2,slug:`基础按键`,text:`基础按键`},{depth:2,slug:`基础命令`,text:`基础命令`},{depth:3,slug:`普通模式`,text:`普通模式`},{depth:3,slug:`可视模式`,text:`可视模式`},{depth:2,slug:`一个方便的vimrc`,text:`一个方便的.vimrc`}]};export{e as default};