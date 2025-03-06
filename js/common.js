var tagsDict = {
  Branding: {
    title: "Branding 品牌设计",
    color: "#FADE53",
    width: "calc(100% - 4.25em)",
  },
  Packaging: {
    title: "Packaging 包装设计",
    color: "#C7ADFA",
    width: "calc(100% - 4.25em)",
  },
  Graphics: {
    title: "Graphics 平面设计",
    color: "#83BEFE",
    width: "calc(100% - 4.25em)",
  },
  Interior: {
    title: "Interior 空间设计",
    color: "#74DF9F",
    width: "calc(100% - 4.25em)",
  },
  "IP/NFT": {
    title: "IP/NFT",
    color: "#FEB8EC",
    width: "calc(100%)",
  },
  UI: {
    title: "UI 界面设计",
    color: "#74DF9F",
    width: "calc(100% - 4.25em)",
  },
  Other: {
    title: "illustrate",
    color: "#FD9898",
    width: "calc(100%)",
  },
};
// 1、处理出顶部标签
var tagsStr = "";
for (const key in tagsDict) {
  //console.log(12, key)
  tagsStr +=
    '<a href="./index.html?tag=' + key + '">' + tagsDict[key].title + "</a>";
}

//console.log(15, tagsStr)
var headerStr = `
          <a href="./index.html">
            <img src="./img/noplan_logo.svg" title="NOPLAN" height="24px"/>
          </a>
          <div class="menu-list-box">
              <img src="img/common/menu.png" width="21px" onclick="toggleMenu()"/>
              <div class="menu-list">
                <div class="href-item href-work">
                <span>WORK</span>
                  <div class="href-work-tags">${tagsStr}</div>
                </div>
                <a href="./service.html" class="href-item">SERVICE</a>
                <a href="./about.html" class="href-item">ABOUT</a>
                <span class="menu-list-copy"> Noplan Design 丨<a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2022008788号-1</a>
                
                </span>
                </div>

          </div>
`;
if (document.getElementsByClassName("header")) {
  document.getElementsByClassName("header")[0].innerHTML = headerStr;
}

var hasShow = false;
function toggleMenu() {
  var menuList = document.querySelector(".menu-list");
  hasShow = !hasShow;
  if (!hasShow) {
    menuList.classList.remove("show");
  } else {
    menuList.classList.add("show");
  }
}

if (document.getElementsByClassName("footer")) {
  var footerStr = `
  <div class="footer-box">
    <div class="footer-left footer-address flex">
      <div>
          <div class="footer-box-title">ADDRESS</div>
          <div class="footer-address-cn regular-text"> 厦门市 湖里区 <br> 后埔东二里92号 <br> 无计划设计 </div>
       </div>
      <div>
          <div class="footer-box-title"></div>
          <div class="footer-address-en regular-text"> NoplanDesign <br>No.92 <br> HouPuDongErLi  <br>Xiamen</div>
      </div>
    </div>
    <div class="footer-center footer-address flex">
      <div>
          <div class="footer-box-title">CONNET</div>
          <div class="footer-address-en regular-text">
              Wechat: koroo000<br> Phone: 15006023459 <br>Email: koroo@noplan.design <br>Redbook: NOPLAN STUDIO
          </div>
      </div>

    </div>
    <div class="footer-right flex">
      <div>
        <a href="https://www.xiaohongshu.com/user/profile/63788c21000000001f01fc25?xhsshare=CopyLink&appuid=6195c6ad0000000021029284&apptime=1711290807" target="_blank">
         <img class="xiaohongshu_icon" src="img/common/xiaohongshu.svg" title="xiaohongshu" height="45px"/>
         </a>
      </div>
      <div>
        <a href="https://noplan.zcool.com.cn/" target="_blank">
          <img src="img/common/zhanku.svg" title="zhanku" height="45px"/>
        </a>
      </div>
      <div>
        <a href="https://www.behance.net/noplanstudio" target="_blank">
          <img src="img/common/behance-circle.svg" title="behance" height="45px"/>
        </a>
      </div>
      
    </div>
  </div>
  <p class="text-center regular-text">
  <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2023014891号-4</a>丨 PixLoad Design &copy;️2024. All copyrights reserviced.</p>
  `;
  document.getElementsByClassName("footer")[0].innerHTML = footerStr;
}
