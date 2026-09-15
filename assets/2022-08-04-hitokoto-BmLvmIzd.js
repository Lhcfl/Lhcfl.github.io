var e={frontmatter:{title:`一言`,date:`2022-08-04T17:07:44`,tags:[],author:`一言网(https://hitokoto.cn)`,copyright:`CC BY-SA 3.0`,categories:[]},titleHtml:`一言`,html:`<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto + "   ——" + data.from
    })
    .catch(console.error)
<\/script>
<p id="hitokoto_text">这里将会显示一句话<p>
<!-- more -->
<p>源代码</p>
<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">script</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#6F42C1">  fetch</span><span style="color:#005cc5">(</span><span style="color:#032F62">"https://v1.hitokoto.cn"</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">    .</span><span style="color:#6F42C1">then</span><span style="color:#005cc5">(</span><span style="color:#e36209">(</span><span style="color:#E36209">response</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#24292E"> response.</span><span style="color:#6F42C1">json</span><span style="color:#e36209">(</span><span style="color:#e36209">)</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">    .</span><span style="color:#6F42C1">then</span><span style="color:#005cc5">(</span><span style="color:#e36209">(</span><span style="color:#E36209">data</span><span style="color:#e36209">)</span><span style="color:#24292E"> </span><span style="color:#D73A49">=</span><span style="color:#D73A49">></span><span style="color:#24292E"> </span><span style="color:#e36209">{</span></span>
<span class="line"><span style="color:#D73A49">      const</span><span style="color:#005CC5"> hitokoto</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">getElementById</span><span style="color:#5a32a3">(</span><span style="color:#032F62">"hitokoto_text"</span><span style="color:#5a32a3">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">      hitokoto.href </span><span style="color:#D73A49">=</span><span style="color:#032F62"> "https://hitokoto.cn/?uuid="</span><span style="color:#D73A49"> +</span><span style="color:#24292E"> data.uuid;</span></span>
<span class="line"><span style="color:#24292E">      hitokoto.innerText </span><span style="color:#D73A49">=</span><span style="color:#24292E"> data.hitokoto </span><span style="color:#D73A49">+</span><span style="color:#032F62"> "   ——"</span><span style="color:#D73A49"> +</span><span style="color:#24292E"> data.from;</span></span>
<span class="line"><span style="color:#24292E">    </span><span style="color:#e36209">}</span><span style="color:#005cc5">)</span></span>
<span class="line"><span style="color:#24292E">    .</span><span style="color:#6F42C1">catch</span><span style="color:#005cc5">(</span><span style="color:#24292E">console.error</span><span style="color:#005cc5">)</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">script</span><span style="color:#24292E">></span></span></code></pre>`,headings:[]};export{e as default};