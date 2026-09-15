var e={frontmatter:{date:`2026-03-30T03:18:12`,updatedDate:`2026-03-30T03:18:12`,title:"`text-autospace` 和盘古之白",tags:[`排版`],category:``,toc:!1,incomplete:!1,hidden:!1,thumbnail:`/images/text-autospace-2025.png`,displayThumbnail:!0,copyright:`CC BY-SA 4.0`,categories:[]},titleHtml:`<code>text-autospace</code> 和盘古之白`,html:`<p>前置閱讀：<a href="https://stblog.penclub.club/posts/StopPanguing/">移除盘古：为什么你应该停止在中西文间使用空格</a></p>
<div class="tip">
<p>本頁面已啓用 <code>text-autospace: normal;</code></p>
</div>
<!-- more -->
<blockquote>
<p>漢學家稱這個空白字元為「盤古之白」，因為它劈開了全形字和半形字之間的混沌。另有研究顯示，打字的時候不喜歡在中文和英文之間加空格的人，感情路都走得很辛苦，有七成的比例會在 34 歲的時候跟自己不愛的人結婚，而其餘三成的人最後只能把遺產留給自己的貓。畢竟愛情跟書寫都需要適時地留白。</p>
</blockquote>
<p>許多人會認爲，在中文和英文之間加空格可以讓文本更易讀，或者單純的是爲了美觀。「盤古之白」是在這一背景下誕生的一個著名工具，用於自動給中文和英文中添加空格。</p>
<p>然而，我覺得應該從根本上質疑這個問題：在中英文之間的空格到底是純粹的作爲排版作用，還是兼具語義作用？</p>
<p>讓我們考慮一個句子：</p>
<blockquote>
<p>超声B型扫描成像检测（以下简称B超）是当前临床应用最为广泛的医学影像学检查技术之一。</p>
</blockquote>
<p>在這個句子中，B超是一個專有名詞。如果我們在B和超之間添加空格，會變成「B 超」，這樣就會讓人誤以爲B和超是兩個獨立的詞語，反而降低了可讀性。相反，如果我們不添加空白，B超作爲一個整體的專有名詞就會更清晰。</p>
<p>但是，「超聲B型」則是一個複合詞，B 相當於是外來成分。理論上，如果沒有約定俗成，我們也可以將類似的東西命名爲「超聲あ型」,「超聲II型」，「超聲2型」。因此，在這種情況下，區分B和中文之間的空白是有意義的，因爲它可以幫助讀者更好地理解這個詞語的結構。</p>
<p>我們可以寫下不同的版本：</p>
<div style="text-autospace: normal">
<p>自動空格：超声B型扫描成像检测（以下简称B超）是当前临床应用最为广泛的医学影像学检查技术之一。</p>
</div>
<div style="text-autospace: no-autospace">
<p>沒有空格：超声B型扫描成像检测（以下简称B超）是当前临床应用最为广泛的医学影像学检查技术之一。</p>
</div>
<div style="text-autospace: no-autospace">
<p>手動空格：超声 B 型扫描成像检测（以下简称 B 超）是当前临床应用最为广泛的医学影像学检查技术之一。</p>
</div>
<div style="text-autospace: no-autospace">
<p>手動一半：超声 B 型扫描成像检测（以下简称B超）是当前临床应用最为广泛的医学影像学检查技术之一。</p>
</div>
<p>这些版本哪个更好应该是一个主观的、见仁见智的话题。当然我们也可以注意到，自动空格也没有智能到能对B和超之间的关系进行语义分析，所以它也会在一些不合适的地方添加空格。</p>
<p>儘管存在這樣的缺陷，自動化的空白添加肯定是比手動的更好的。</p>`,headings:[]};export{e as default};