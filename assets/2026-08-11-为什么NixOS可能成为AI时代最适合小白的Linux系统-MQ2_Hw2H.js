var e={frontmatter:{date:`2026-08-11T10:15:10`,updatedDate:`2026-08-11T10:15:10`,title:`为什么NixOS可能成为AI时代最适合小白的Linux系统`,tags:[`AI`,`Nix`,`Linux`],category:null,toc:!0,incomplete:!1,hidden:!1,displayThumbnail:!1,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`为什么NixOS可能成为AI时代最适合小白的Linux系统`,html:`<p>对，我指的是真小白：没有任何Linux使用经验的人。甚至，我觉得没有任何Linux使用经验的人比已有使用经验者<em lang="zh">更适合</em>一上来就使用NixOS。</p>
<p>这个结论听起来可能很离谱，毕竟NixOS在Linux圈子里一直以极客而闻名。Nix社区内部也完全不推荐、乃至劝退小白入门使用NixOS。我之所以下定这个结论，是因为AI的发展已经超出了许多老东西（？）对Nix学习难度的印象。</p>
<!-- more -->
<div class="bg-primary-50 px-4 py-1 font-sans">
<p><strong>Disclaimer</strong>: 在我这里，你至少要有最低限度的折腾意愿和学习意愿才能称为小白。如果连折腾意愿都没有的人根本不会去安装实机Linux，请出门左转WSL。</p>
<p>本文有一部分AI辅助生成，大部分都是人类编写。</p>
</div>
<p>关于Nix的好处，许多文章已经讲得够多了；而我想要证明的是，Nix不但对于老手而言是方便的包管理器、解决依赖地狱的工具，而且它对于新手而言也是非常合适、甚至可能是最合适的Linux选择。</p>
<p>首先让我讲一个故事：关于我如何开始使用NixOS。</p>
<h2 id="我如何放弃和重拾linux"><a href="#我如何放弃和重拾linux">我如何放弃和重拾Linux</a></h2>
<p>我从2025年12月开始尝试使用NixOS，虽然姑且也算是从2017年就开始用过Linux了，但此前没有Ubuntu以外的Linux系统使用经验。<del>I don't use Arch, btw.</del> 甚至我也没有Nix语言和Nix包管理器的使用经验，对我来说，Nix完全是全新事物。</p>
<p>在2020年之前我也曾受限于家里6年老电脑过于孱弱的性能而重度使用Linux，将Ubuntu作为主力机使用，很久没有进入过Windows界面。当然这可能也要怪我追新，在性能孱弱的电脑上安装Windows 10，不过总而言之，在当时使用Ubuntu并不是一个非常愉快的经历。此时QQ尚未有很好的原生Linux支持，以至于我不得不开一个Windows XP的虚拟机来使用这些软件。感谢老登们对更换系统的惯性，使得在2020年大把的国产软件都不得不仍然为XP提供支持，分出1G内存给XP虚拟机吃，3G内存留给Linux，居然能同时兼顾国产软件的日常使用和其他软件的流畅体验。</p>
<p>然而，直到2025年我对Linux的印象仍然是：难受。</p>
<p>首先虽然我追新，但是意外地实用主义，我是因为相信对于维护良好的系统越新越好才追新的。因而，并没有折腾桌面环境，也没有继续深入了解，基本上就是照搬Windows软件，于是：</p>
<ul>
<li>
<p>ubuntu当年默认的ibus中文输入法真是烂完了，于是我尝试安装搜狗拼音输入法，而在ubuntu下折腾fcitx真是麻烦。而搜狗输入法用的是过时的库，在当时升级ubuntu版本以后直接炸了</p>
</li>
<li>
<p>作为新手，吃过神秘古老教程假设你的电脑是X11环境的亏；于是神秘教程会让你卸载wayland，然后改成x11，在此期间折腾半天冒着无法进入图形界面的风险换来的是体验降级，而且把依赖关系弄得很混乱，apt会列出满满一屏幕的可以autoremove的项，全是不认识的库，根本不敢冒风险。</p>
</li>
<li>
<p>在ubuntu下安装NVIDIA驱动也是困难多多。一些教程会让你进入tty界面安装。各种意义上的折磨。</p>
</li>
</ul>
<p>在这样的情况下，购入一台性能强劲的新电脑后，我就头也不回地放弃了Linux，在数年以内都几乎再也没进过Ubuntu的启动项。而WSL发展也相当完善，大部分需要Linux的课程、实验、项目等，都能在WSL下几乎无需配置地使用。</p>
<p>直到2025年，终于在我4年使用下，Windows变得卡顿无比，到了我无法忍受的地步。说真的，微软真该反思一下，我40GB内存、1.5TB SSD硬盘能跑到8GB/s读取速度，i7-12700H CPU的强劲电脑居然能动不动98%内存占用、卡到鼠标动弹不得，干什么吃的？——总而言之，我不得不为此完全格式化了系统并重新安装。尽管运行速度肉眼可见地变快了，但我花费了许多时间来重新安装我必要的软件和配置、还因为记错了安装步骤导致了一些意外的坑，还由于忘记一些游戏的存在，永远丢失了它们的存档。是的，在此之前，我连dotfiles仓库都没有，以至于我不得不依赖记忆重现我的配置。</p>
<p>这让我意识到，我需要某种东西帮我管理我在系统上安装了哪些必要软件、进行了哪些必要配置，防止这种事情重演。显然，在Windows下做到这件事情很难。省略一些在虚拟机下对比各个Linux系统安装软件的方便程度——挣扎之后，我最后心一横，决定实机安装NixOS。</p>
<p>令我惊讶的是，在最初的磨合之后，NixOS居然意外地适合入门与日常使用。虽然也有经过多年轻度Linux经验以后，我已经不是过去的初学者的因素在里面。接下来我将阐述为什么：</p>
<h2 id="初学者宿敌那些被自己忘记的配置"><a href="#初学者宿敌那些被自己忘记的配置">初学者宿敌：那些被自己忘记的配置</a></h2>
<p>如果有人向我提问：小白用Linux最痛苦的是什么？我会回答：你永远不知道自己以前跟着奇怪的教程改动过什么。</p>
<p>不是需要用命令行解决很多问题。跟着教程来不过是复制粘贴的事，并且现代Linux已经优化到了大部分操作不需要一行命令的程度。最让人崩溃的，是你在完全是新手的时候，为了搞定某个问题，照着某篇不知道哪里搜来的不知道过时了多久的教程改了一个配置文件，或者装了一个连名字都不记得的lib包。然后某一天，要装个新软件，或者系统更新了一下，突然就遇到了没人遇到过的神秘错误。在冷门教程的组合下，你甚至可能是世界上第一个遇到这种问题的人，不管怎么搜都搜不到一个解决方案。</p>
<p>你自己在完全不懂的某个地方埋下的雷，在未来几天、几个月、甚至几年，化作过去的子弹正中眉心，构成了一个只存在于这台机器上的bug。就算找一个经验丰富的朋友来排查，也得先几个小时搞清楚这台机器到底被做了什么，更别提在网上提问。</p>
<p>这是传统Linux发行版最致命的弱点：<strong>系统状态是隐式的、不可追溯的、随时间累积的</strong>。它比代码的屎山更恐怖，因为每一天、每一条命令、每一次手动编辑都在系统上做出改动，当你自己都不记得画过什么的时候，它就会比接手一个10年的老屎山项目还难受，屎山代码尚且有点基本的结构，而面对一个用了多年的系统，鬼知道这都有些什么？</p>
<p>即使我在几年内一直使用WSL来进行Linux开发，都无法避免系统逐渐变成屎山的问题，以至于不得不把WSL都重装过一次。更别提实机了。</p>
<p>更可怕的是，这种问题除了学习以外是无解的。小白不可能不去“乱改配置”——因为他们根本分不清哪些是"乱改"，哪些是常规操作。而一旦人学会了使用各种技巧规避这些问题，大概率这个人已经是别人口中的专家了。</p>
<h2 id="nixos整个系统是一份配置文件"><a href="#nixos整个系统是一份配置文件">NixOS：整个系统是一份配置文件</a></h2>
<p>NixOS的核心理念非常激进：<strong>整个操作系统的状态，由一份配置文件声明式地定义</strong>。你的NixOS配置仓库内，显式的定义了这个系统的一切。想装哪些软件、想开启哪些服务、想要什么样的桌面环境、想要什么字体——你在<code>/etc/nix/configuration.nix</code><sup><a href="#user-content-fn-conf" id="user-content-fnref-conf" data-footnote-ref aria-describedby="footnote-label">1</a></sup>里写下一行行Nix配置，NixOS就会根据这个文件生成一个完整的系统。没写上去的东西，就不会存在。这意味着你再也不需要再担心"系统当前是什么状态"这个原本根本没法回答的问题。只需要看配置文件就行了。配置文件里写了什么，系统就是什么。配置文件里没有的，就不存在。</p>
<p>而且，Nix不止是一个包管理器。它同时是一门语言，同时带有一份别人已经写好的丰富的配置（nixpkgs），和截至写下这篇文章时约140,000个软件包。这意味着大部分重复的需求别人已经有现成的解决方案可以复用，而你只需要简单的复制粘贴到你的配置文件里就能开启。</p>
<p>这对新手来说是极大的好处。在传统Linux上，用户会积累大量的，既不知道在哪里，也不知道是干什么的配置。系统配置分散在 <code>/etc</code> 的几十个文件里、分散在包管理器的数据库里、分散在 <code>~/.config</code> 的各种角落里。不仅没有任何一个地方能告诉你这个系统到底长什么样，而且在你自己需要修改的时候，也需要在天书般的路径里去修改。FHS标准对于熟练的Linux用户可能已经习惯了，但是对新手，尤其是会一点点英语的新手而言，就是彻彻底底的天书。谁能告诉我，怎么区分 <code>/bin</code>, <code>/sbin</code>, <code>/usr/bin</code>, <code>/usr/sbin</code>, <code>/usr/local/bin</code>？为什么 <code>/usr</code> 不是user是Unix System Resources？凭什么有的软件配置在 <code>/etc</code>，有的在 <code>/var</code> 有的在 <code>~/.config</code> 有的在 <code>~/.local/share</code> 有的在 <code>~/.local/state</code> 甚至还有 <code>~/.claude.json</code> 这种直接丢home dir的设计？而且同一个软件为什么可能还会读上面说得所有目录？它们之间还会相互覆盖？要回答这些问题，小白需要去学习FHS标准，去理解XDG Base Directory Specification，然后知道了这些规范以后还要去接受一个无奈的事实是很多软件根本就是乱放的配置文件，本来就不遵守规范。</p>
<p>现在，Nix配置文件使得用户只需要看一个文件、一个仓库，就能回答这个问题。更妙的是，这个仓库如何组织，完全看用户自己。整个系统的配置全集就摆在面前，在一个每天都会接触到的Git仓库里。当有了一些经验之后，可以坐下来，打开你的配置文件仓库，每个文件都读一遍。会看到一些一年前写上去的选项，当时可能抄自某篇教程，完全不知道它是什么意思；而现在有了更多上下文，可以判断它到底还有没有用。有用的，加一行注释说明为什么要设这个。没用的，删掉。删完之后rebuild，如果系统正常，就永久减少了一份技术债务。</p>
<p>对于想要深度学习Nix的新手而言，可以看到Nix配置仓库从一个神秘咒语合集，慢慢变成一份真正属于自己的、每一行都理解的、干净的系统说明书。它的进度和学习曲线是完全同步的。一个新手用户的flake看起密密麻麻全是复制粘贴的咒语，而一个老手的flake干净整洁，只有自己真正需要并且理解的配置。而对于只是实用主义者而言，Nix配置仓库只需要提供一个报错时的甩锅来源就可以了。如果某种配置发生了冲突，很多时候Nix可以直接帮你检查出来，例如开启sddm在没有开启x11 server的时候没有enable wayland support——这句话对于传统发行版又不知道要新手学多少看不懂的名词才能理解呢！</p>
<h2 id="ai时代的nixos"><a href="#ai时代的nixos">AI时代的NixOS</a></h2>
<p>这里就引出了AI和NixOS的化学反应。曾几何时，Nix最大的难度在于作为函数式语言的上手难度、和配置文件和各个软件根本不同的问题。这简直害苦了Linux老手，自己的dotfiles要费力去重写成Nix格式的，重写成Nix格式以后构建又慢、文档又少，还得翻nixpkgs源代码去看配置怎么生成的。</p>
<p>而得益于AI发展，现在的小白安装系统后，已经不再需要辛苦地人肉去搜索一个个软件如何安装和配置，也不用辛苦去学习Nix语言了。把你的要求交给AI，AI会一步步教你怎么解决。<strong>而NixOS简直是最适合AI的操作系统。</strong></p>
<h3 id="配置文件是最好的harness"><a href="#配置文件是最好的harness">配置文件是最好的harness</a></h3>
<p>AI行业都知道，Agent = model + harness，而NixOS简直就是给了Agent一个绝妙的harness。一个Agent帮忙排查问题，最大的瓶颈往往不是AI本身的能力，而是<strong>它不具备系统状态的上下文</strong>。用户贴一段报错信息过去，它只能根据这段报错信息本身来猜，不知道装了什么包、版本是什么、配置文件改了什么。即使是自主的Agent，也经常会在排查时胡乱安装或者删除某些包，甚至不小心执行删掉重要文件的命令。传统Linux系统的状态是一堆脏数据，没有人（包括用户自己）能完整描述系统状态。你只能在一大堆FHS和XDG路径里凭着经验猜。</p>
<p>但在NixOS上，情况完全不一样。NixOS的配置是干净的、结构化的、可机器读取的，甚至是LLM最擅长的文本格式。整个系统的定义就在几个 <code>.nix</code> 文件里。一个Agent只要读你的仓库，不需要任何命令去查系统信息，就已经掌握了关于系统的几乎全部信息。当你给出你的需求的时候，它可以同时看到内核参数、systemd服务配置、安装的每一个包和版本、桌面环境配置、字体设置——以及这些配置之间的依赖关系。甚至，AI自己的修改也是文本而不是命令。NixOS完美的解决了AI在维护其他操作系统的时候，可能在上一个session里给出了某种命令，下一个session就完全不知道的情况。AI自己的修改同样被存储在NixOS配置中，被用户和AI一起理解、审阅，稳定的系统环境可以作为git commit来提交、存储、备份和共享。</p>
<p>这不仅仅是“信息更多”的问题，而是一个<strong>质变</strong>。这相当于给了每个NixOS新手发一个熟练的老手一对一指导，仅仅需要充值10块钱deepseek api然后装个烂大街的coding agent，<a href="https://github.com/utensils/mcp-nixos">配一个nixos-mcp</a>就行了。更进一步的，可能在找一个适合Nix的SKILL.md或者干脆放AGENTS.md里。也相当于给Agent一个别的系统一辈子都赶不上的harness，试问，哪个系统能做到靠git commit定位3个月前能稳定运行的系统配置，然后直接用git diff去排查什么更改导致了某个功能坏掉啊？</p>
<h3 id="generation是最好的系统备份"><a href="#generation是最好的系统备份">Generation是最好的系统备份</a></h3>
<p>NixOS另一个对新手来说堪称革命性的特性是generation。</p>
<p>每次 <code>nixos-rebuild switch</code>，NixOS不会覆盖之前的系统状态，而是创建一个新的"世代"（generation）。如果新配置把系统搞崩了——比如显卡驱动挂了、进不了桌面、甚至开机不了——没关系，重启的时候在GRUB菜单里选择上一个世代，回车，系统就完美还原到了那一次能成功的状态 <sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref aria-describedby="footnote-label">2</a></sup>。</p>
<p>这听起来像是btrfs快照也能做到的事情，但实际上generation要强大得多。还原是存储了当前系统的全部磁盘状态，无论有用的没用的，虽然能精确还原所有状态，但不该还原的也一起还原了。而且，还原一般是定期快照，这意味着快照之间的修改也就丢失了。</p>
<p>NixOS的generation则是基于符号链接的，切换不同的generation只会把对应配置文件从一个链接换到另一个链接，其他部分则根本不会被改变。这使得切换generation毫无代价，只有该改变的改变了，不该改变的一点都没变。不仅如此，generation不要求btrfs，无论什么文件系统都几乎不占额外空间，文件系统上同一个包的不同版本如果内容相同，它们共享同一份存储。在几十个世代之间随意切换完全没有负担，不需要担心磁盘空间——共享存储机制让囤积几十个甚至几百个世代都完全不是问题。</p>
<p>更好的是，generation之间的切换是原子的。如果失败了，NixOS会帮你自动回滚到上一个系统，仿佛这次切换没发生过。传统运维脚本，如果你前八步成功，第九步失败，机器就会停在一种很难描述的中间状态。NixOS当然也可能失败，但是由于你上次是成功的，因此只要重跑一次上次generation的，就把系统安全地切回了上一个正确状态。</p>
<p>这个特性彻底改变了新手的心理模型。在传统系统上，每改一下配置，都要承担一部分的心理压力。这个参数改了会不会出事？万一出事了怎么改回来？不敢轻举妄动，动了之后出了问题也不知道如何还原。而在NixOS上，这个问题不存在了。完全可以放心大胆地折腾——大不了重启选上一个世代。这个安全感是不可替代的，它意味着可以<strong>真正地尝试和学习</strong>，而不需要战战兢兢。</p>
<p>这不仅对于人类如此，对于Agent同样如此。相比与人类，Agent通常“过于胆大”——你敢放任它不受监督地运行，它真敢一不小心删掉整个home目录。更别说配置系统这么危险的操作。对于传统操作系统，放任Agent修改，改着改着系统就进入了完全不懂的诡异样子，炸了也不知道怎么修起。对于NixOS，你真的几乎可以放任Agent修改<sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref aria-describedby="footnote-label">3</a></sup>，所有的变化你都能用git跟踪，即使出了问题也能回滚。</p>
<h2 id="这并非天方夜谭"><a href="#这并非天方夜谭">这并非天方夜谭</a></h2>
<p>事实上冒出这个想法也是来自我的一位朋友的亲身经历。这位朋友在我科普NixOS之前，没有任何Linux的使用经验（连WSL都没用过），甚至不知道Linux是什么。在她开始对尝试Linux操作系统产生兴趣时，一上手就选择了NixOS这一点无疑是吓坏了我们，毕竟我们都知道NixOS的上手难度（笑）</p>
<p>然而，她真的借助AI的力量磕磕绊绊地安装成功以后（虽然带着一大堆新手特有的神秘错误），我们都有点震惊了。我们几个Nix User之间产生了不同的看法：有人认为在AI帮助下安装NixOS是非常不明智的选择，谁知道AI会给出多错误的答案。而我作为AI投降派（？）则觉得，大家最后都要被越来越聪明的LLM爆掉的，万一Nix真能和AI擦出什么火花也说不定呢——</p>
<p>然后我看了她的配置文件，说真的我被吓到了，被人工智障的水平吓到。我头一次看到如此逆天的Nix配置文件，nix-ld列了一大堆看不懂的神秘包，开了一堆看不懂的神秘systemd服务，完全由AI生成，甚至连QQ都是LLM打的包，真不知道这AI干了什么从nixpkgs下扒下来了pkgs.qq的源码然后不知道搞了什么神秘patch（据说是为了让剪贴板工作）。</p>
<p>彼时的她，不知道sudo是什么，不会敲命令，不知道什么是 <code>~</code> 目录什么是 <code>.</code>，连rm都不会用。我意识到她都不知道怎么打出来 <code>sudo rm -rf .git</code> 的时候，已经心凉了一截，但我没想到的是在LLM神力和热爱学习的心帮助下，她居然真的继续用了下来，并且逐渐上手了Linux的使用。现在再看她公开出来的配置文件仓库，居然有模有样的，该有的目录层次结构都有，虽然细看配置还是有点初学者，但是起码确实是正常的用起来了。上次看配置文件时，那些吓人的一眼LLM胡言乱语的nix-ld配置也被删掉了。</p>
<p>这使我强烈地觉得，初学者，哪怕是完全没接触过Linux的初学者，或许配合AI的NixOS就是最适合的发行版，甚至能和Linux Mint分个高下。Linux Mint虽然几乎完全做到了图形化，不需要命令行就能完成许多需求 <sup><a href="#user-content-fn-3" id="user-content-fnref-3" data-footnote-ref aria-describedby="footnote-label">4</a></sup>，但是一旦需要动命令行修改配置文件了，NixOS就能获取很大优势。除了NixOS以外，我完全不觉得有哪个系统会像这样，在LLM胡说八道拉了一坨大的在系统配置里的情况下，居然能干净地删除它们。要是别的发行版，可能只能带着安装的一大堆不知道什么用处也不敢卸载甚至不一定敢升级的奇妙lib过日子了。而，Linux相比与Windows最大的优势不就是命令行工具好用、环境更好配置吗？单比图形界面本来就比不过Windows吧（笑）</p>
<h2 id="奇思妙想nixos-copilot"><a href="#奇思妙想nixos-copilot">奇思妙想：NixOS Copilot</a></h2>
<p>沿着这个思路往下推，一个自然的产物就是，某个团队或者公司可以发行一个深度定制的带有预装Agent的NixOS发行版。 <del>不妨叫它NixOS 365 Copilot副驾驶</del></p>
<p>它的形态可能是这样的：下载一个ISO，烧进U盘，启动。图形化安装界面直接给几个预设主题、桌面环境、甚至预期用途——"日常办公"、"编程开发"、"影音娱乐"，选一个，输入用户名和密码，剩下的自动完成。</p>
<p>装完之后的系统也不是一张白纸。它自带一个初始化好的flake仓库，这个仓库里已经配好了桌面环境、输入法、常用软件、以及一套审美过关的主题。home目录下已经软链接上了这个仓库。</p>
<p>最关键的是，在现眼的地方，系统预装了一个AI Agent。这个Agent配好了Nix相关的MCP和skill。用skill教会LLM添加一个nix配置项的流程，先搜索nixpkgs有没有现成的options和packages，然后根据难度搜索有没有人分享了现成的flake，实在不行再自己编。当配置文件变得复杂以后，它也会根据SKILL自动重构仓库，然后<code>nix-diff</code>一下发现没有任何实际变化则完美收工。它将知道怎么怎么改修改配置文件最好、最方便后续维护。</p>
<p>用户不需要一开始就懂Nix语言，甚至不需要懂什么是包管理器——想装个VS Code，跟它说“帮我装VS Code”就行了。它去 <code>configuration.nix</code> 里加一行 <code>programs.vscode.enable</code>，然后rebuild，装完之后通知一声。遇到任何问题——"为什么我的蓝牙连不上？"——不需要去搜索，只需要打开agent对话框，描述问题。agent自己读 <code>hardware-configuration.nix</code>，检查内核模块、蓝牙相关包和硬件enable选项，发现没开 <code>hardware.bluetooth.enable</code>，加上，rebuild，好了。</p>
<p>而且因为改动都是在Git仓库里的，Agent的每一次操作都可以自带一次git commit。每一条系统变更都有清晰可追溯的记录，便于回顾系统是在哪一天、哪一次一步步变成现在这个样子的。</p>
<h2 id="后记"><a href="#后记">后记</a></h2>
<p>当然NixOS也有它独特的麻烦。不遵循FHS，所以一部分小众软件无法在Nix下正常运行，想要运行nixpkgs上没有的软件只能在网上四处搜别人的flake，或者绝望地自己学如何打包。但总体而言，这种情况非常少，也有nix-ld和appimage/flatpak等多种方式解决。<del>真的实在不行的话要不你上docker吧，虽然违背Nix初心，但你就说能不能用吧</del></p>
<p>或许，随着Linux生态的完善和Agent的发展，我们真的能看到NixOS意外异军突起爆冷成为最受欢迎的Linux系统吧。——万一呢？</p>
<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label"><a href="#footnote-label">Footnotes</a></h2>
<ol>
<li id="user-content-fn-conf">
<p>这是默认的NixOS配置文件名，当然你可以逐渐建立一整个仓库替换它。 <a href="#user-content-fnref-conf" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-1">
<p>唯一的问题是如果你在非Nix下写了配置，然后又在Nix里再写了一遍，会被Nix的版本覆盖，这种情况下rollback也会丢配置 <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 2" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-2">
<p>当然，你还是不能让Agent随手帮你 <code>rm -rf /</code>，这个神仙来了都救不了，类似的，也不能让Agent瞎操作把ssh私钥删了 <a href="#user-content-fnref-2" data-footnote-backref="" aria-label="Back to reference 3" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-3">
<p>一个例子是 <a href="https://www.bilibili.com/video/BV1YvenzUEFf">「女友体验Linux」 全程禁用命令行，颠覆刻板印象，纯小白也能轻松上手！——Bilibili</a> <a href="#user-content-fnref-3" data-footnote-backref="" aria-label="Back to reference 4" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,headings:[{depth:2,slug:`我如何放弃和重拾linux`,text:`我如何放弃和重拾Linux`},{depth:2,slug:`初学者宿敌那些被自己忘记的配置`,text:`初学者宿敌：那些被自己忘记的配置`},{depth:2,slug:`nixos整个系统是一份配置文件`,text:`NixOS：整个系统是一份配置文件`},{depth:2,slug:`ai时代的nixos`,text:`AI时代的NixOS`},{depth:3,slug:`配置文件是最好的harness`,text:`配置文件是最好的harness`},{depth:3,slug:`generation是最好的系统备份`,text:`Generation是最好的系统备份`},{depth:2,slug:`这并非天方夜谭`,text:`这并非天方夜谭`},{depth:2,slug:`奇思妙想nixos-copilot`,text:`奇思妙想：NixOS Copilot`},{depth:2,slug:`后记`,text:`后记`},{depth:2,slug:`footnote-label`,text:`Footnotes`}]};export{e as default};