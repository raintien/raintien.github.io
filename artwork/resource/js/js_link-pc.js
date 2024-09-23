/*
 * Ghvzon
 * 共用元件 js_link-v3.2.0
 *******************************************************************
 *  --2020.01.14--使用新版lazyload.js(v3.2.0)
 *  --2019.04.03--修改上傳圖片路徑設定9~16行(v3.1)
 *******************************************************************
 */

$(function(){
  /*上傳圖片路徑*/
  var artjsSrc = $('#artjs').attr('src');
  var artjsimgEcm  = artjsSrc.substring(0,artjsSrc.indexOf("images\/"));
  var artjsimgEcm_t = '?' + artjsSrc.split('?')[1]; //圖片版本 預設抓最新 '?t=' + new Date().getTime()、與路徑同版本 '?' + artjsSrc.split('?')[1];
  // 圖檔路徑
  function getartImgPath(imgName){
    return artjsimgEcm + imgName + artjsimgEcm_t;
  };
  var pc = ''

  

+'  <!--活動標-->'
+'  <div class="Area_logo for_pc ">'
+'    <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1"><img class="lazy" data-original="' + getartImgPath('images/logo.png') + '"></a>'
+'  </div>'


  
+'    <!-----↓PC分會場Header↓--- -->'
+'    <div class="cantantBase cantantBase1 for_pc" style="">'
+'      <div class="box">'
+'        <div class="momologo"><a href="https://www.momoshop.com.tw/main/Main.jsp"></a></div>'
+'        <div class="myplis_logo"><a></a></div>'

    //短促用--正式主、分會場
+'        <ul>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1">主會場</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtF8jvO&n=1">家電瘋搶<span style="display:none;">家電瘋搶</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtKUgZZ&n=1">3C達人<span style="display:none;">3C達人</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtL8khh&n=1">日用婦幼<span style="display:none;">日用婦幼</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtLkhSe&n=1">美妝保養<span style="display:none;">美妝保養</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtMIQly&n=1">潮流時尚<span style="display:none;">潮流時尚</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtN5A6c&n=1">健康樂活<span style="display:none;">健康樂活</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtNiUBo&n=1">家居寢飾<span style="display:none;">家居寢飾</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRCulS&n=1">美食搶購<span style="display:none;">美食搶購</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRpMTn&n=1">休閒票券<span style="display:none;">休閒票券</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSPdxV&n=1">圖書影音<span style="display:none;">圖書影音</span></a></li>'
+'          <li><a href="https://www.momomall.com.tw/edm/Edm.jsp?lpn=202006297eJw2OW6fxjr&n=1">摩天商城<span style="display:none;">摩天商城</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSycGr&n=1">電視熱銷<span style="display:none;">電視購物</span></a></li>'

+'        </ul>'

+'      </div>'
+'    </div>'
+'    <!----- ↑PC分會場Header↑----->'



+'    <!-----↓PC分會場Header↓--- -->'
+'    <div class="cantantBase cantantBase2 for_pc" style="">'
+'      <div class="box">'
+'        <div class="momologo"><a href="https://www.momoshop.com.tw/main/Main.jsp"></a></div>'

          //短促用--正式機制頁
+'        <ul>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1">主會場</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVsgWv56&n=1">雙12攻略</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrpByuB&n=1">搶億萬紅包</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrvHUTA&n=1">滿額送2%</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt6dBoJ&n=1">滿額送電影券</a></li>'
  
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HL62HyDbW&n=1">送麥當勞優惠</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt8WHh2&n=1">送看電影一個月</a></li>'
  
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9kZfH&n=1">滿額雙重送</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9AiSU&n=1">下單抽夢幻住宿</a></li>'
  
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVsYihUS&n=1">爆殺神券</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtDPaqW&n=1&tag=[id]tag-Area_PDmustbuy">1212專區</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVshW4Ro&n=1">直播人氣夯貨</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O0Y2mh4ttZH&n=1">銀行優惠</a></li>'
+'        </ul>'
  
+'      </div>'
+'    </div>'
+'    <!----- ↑PC分會場Header↑----->'



+'    <!--↓PC黏人精-分會場↓-->'
+'    <div class="fixarea fixarea_off for_pc">'


    //短促用
+'      <div class="fix_top" style="">'
+'       <div class="fix_top_box">'
+'          <a title="回活動主頁" href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1"><img class="lazy"  data-original="' + getartImgPath('images/fixed_Area_main.png') + '" /></a>'
+'       </div>'
+'      </div>'


+'      <div class="fix_title" style=""><img class="lazy" data-original="' + getartImgPath('images/fixed_Area_title1.png') + '" /></div>'
+'      <div class="fix_box fix_main" style="">'

    //短促用
+'        <ul>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVsgWv56&n=1">雙12省錢攻略</a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O0Y2mh4ttZH&n=1">銀行優惠</a></li>'
  
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt6dBoJ&n=1">滿額送電影券</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrvHUTA&n=1">滿額送2%</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtDPaqW&n=1&tag=[id]tag-Area_PDmustbuy">搶破盤價<br>$1212up</a></li>'
  
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtDPaqW&n=1&tag=[id]tag-Area_PDmustbuy">秒殺剁手搶</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HL62HyDbW&n=1">送麥當勞<br>買1送1</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9kZfH&n=1">滿額雙重送</a></li>'
  
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?npn=1vEIAwfDTCdc&n=1">超取送拿鐵</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt8WHh2&n=1">免費看電影</a></li>'
+'          <li style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9AiSU&n=1">抽頂級住宿</a></li>'

+'        </ul>'
  

+'      </div>'
+'      <div class="fix_title" style=""><img class="lazy" data-original="' + getartImgPath('images/fixed_Area_title2.png') + '" /></div>'
+'      <div class="fix_box fix_other fix_other_x2" style="">'


    //短促用--正式
+'        <ul>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtF8jvO&n=1">家電<span style="display:none;">家電瘋搶</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtKUgZZ&n=1">3C<span style="display:none;">3C達人</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtL8khh&n=1">日用<span style="display:none;">日用婦幼</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtL8khh&n=1">婦幼<span style="display:none;">日用婦幼</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtLkhSe&n=1">美妝<span style="display:none;">美妝保養</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtMIQly&n=1">時尚<span style="display:none;">潮流時尚</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtN5A6c&n=1">保健<span style="display:none;">健康樂活</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtNiUBo&n=1">家居<span style="display:none;">家居寢飾</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtNiUBo&n=1">寢飾<span style="display:none;">家居寢飾</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRCulS&n=1">美食<span style="display:none;">美食搶購</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRpMTn&n=1">休閒<span style="display:none;">休閒票券</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSPdxV&n=1">圖書<span style="display:none;">圖書影音</span></a></li>'
+'          <li><a href="https://www.momomall.com.tw/edm/Edm.jsp?lpn=202006297eJw2OW6fxjr&n=1">商城<span style="display:none;">摩天商城</span></a></li>'
+'          <li><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSycGr&n=1">電視<span style="display:none;">電視購物</span></a></li>' 
+'        </ul>'

+'      </div>'
//+'      <div class="fix_footer"><a><img class="lazy" data-original="' + getartImgPath('images/fixed_Area_footer.png') + '"/></a></div>'
+'    </div>'
+'    <!--↑PC黏人精-分會場↑-->' 

  
  //載入頁面
  $('#js-for_pc').append(pc)
  
  //更新延遲讀圖
  lazyLoadInstance.update();
  
});
