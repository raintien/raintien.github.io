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
  var phone = ''


+'  <!--回版頭-->'
+'  <div id="gotop" class="for_phone">TOP</div>'

  

+'    <!--短促活動標-->'
+'    <div class="Area_logo for_phone">'
+'      <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1"><img class="lazy" data-original="' + getartImgPath('images/m_logo.png') + '"></a>' //www用
+'    </div>'



+'    <!--Phone置底選單-->'
+'    <div class="Fixedfooter for_phone">'
+'      <div class="Fixedfooter_bg"></div>'

+'      <div class="Fixedfooter_box" data-title="選單">'
+'        <div class="bg"><b></b><i></i></div>'

          //短促用
+'        <ul data-num="5">'
+'          <li class="Fixedfooter-slide"><a href="javascript:void(0);"><i></i><span>精選會場</span></a></li>' 
+'          <li class="Fixedfooter-slide"><a href="javascript:void(0);"><i></i><span>必買專區</span></a></li>'
+'          <li class=""><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrOHLug&n=1"><i></i><span>主會場</span></a></li>' //www用
+'          <li class="Fixedfooter-slide"><a href="javascript:void(0);"><i></i><span>熱門活動</span></a></li>'
+'          <li class=""><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVsgWv56&n=1"><i></i><span>攻略</span></a></li>'
+'        </ul>'

+'      </div>'


+'      <div class="Fixedfooter_agree Fixedfooter_agree1" data-title="浮層區-Phone置底選單(精選會場)">'
+'        <span class="trainglelist" style="left:33.6%;"></span>'
+'        <ul>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtF8jvO&n=1">家電瘋搶</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtKUgZZ&n=1">3C達人</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtL8khh&n=1">日用婦幼</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtLkhSe&n=1">美妝保養</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtMIQly&n=1">流行時尚</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtN5A6c&n=1">健康樂活</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtNiUBo&n=1">家居寢飾</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRCulS&n=1">美食搶購</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtRpMTn&n=1">休閒票券</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSPdxV&n=1">圖書影音</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momomall.com.tw/edm/Edm.jsp?lpn=202006297eJw2OW6fxjr&n=1">摩天商城</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtSycGr&n=1">電視熱銷</a></li>'
+'        </ul>'
+'      </div>'
+'      <div class="Fixedfooter_agree Fixedfooter_agree2" data-title="浮層區-Phone置底選單(必買專區)">'
+'        <span class="trainglelist" style="left:61.5%;"></span>'
+'        <ul>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVsYihUS&n=1">雙12神券</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtDPaqW&n=1">買1送1</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVtDPaqW&n=1&tag=[id]tag-Area_PDmustbuy">1212專區</a></li>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVshW4Ro&n=1">人氣夯貨</a></li>'


+'        </ul>'
+'      </div> '
+'      <div class="Fixedfooter_agree Fixedfooter_agree3" data-title="浮層區-Phone置底選單(熱門活動)">'
+'        <span class="trainglelist" style="left:89%;"></span>'
+'        <ul>'
+'          <li class="Nav-slide"><a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrpByuB&n=1">搶億萬紅包</a></li>'
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt6dBoJ&n=1">滿額送樂園券</a></li>'
  
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVrvHUTA&n=1">滿額送2%</a></li>'
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HL62HyDbW&n=1">滿額送麥當勞</a></li>'
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/12 00:00:00" data-TimeSwitch_end="2020/12/12 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt8WHh2&n=1">免費看電影</a></li>'
  
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9kZfH&n=1">滿額雙重送</a></li>'
  
+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/01 00:00:00" data-TimeSwitch_end="2020/12/11 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?npn=1vEIAwfDTCdc&n=1">超取送拿鐵</a></li>'

+'          <li class="Nav-slide" style="display:none;" data-TimeSwitch_start="2020/12/13 00:00:00" data-TimeSwitch_end="2020/12/14 23:59:59" data-TimeSwitch_Myswitch="1">'
+'            <a href="https://www.momoshop.com.tw/edm/cmmedm.jsp?lpn=O4HKVt9AiSU&n=1">抽頂級住宿</a></li>'
+'        </ul>'
+'      </div> '


+'    </div>'  


  //載入頁面
  $('#js-for_phone').append(phone)
  
  //更新延遲讀圖
  lazyLoadInstance.update();

});

