document.addEventListener('DOMContentLoaded', function() {
  "use strict";
  document.getElementById('header-main').innerHTML =
    '<div class="glass-card" style="margin-bottom: 30px;">' +
      '<div>' +
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #dc143c 0%, #8b0000 100%); backdrop-filter: blur(25px); border-radius: 18px; box-shadow: 0 15px 40px rgba(220, 20, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);">' +
          '<tr>' +
            '<td height="20" colspan="2"></td>' +
          '</tr>' +
          '<tr>' +
            '<td width="5%"></td>' +
            '<td valign="baseline" style="text-align: left; font-size: 26px; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif; color: #FFFFFF; text-shadow: 0 3px 12px rgba(0, 0, 0, 0.5); padding: 25px; font-weight: 800; letter-spacing: 0.5px;">' +
              '<p><strong>南京大学工程医学研究组</strong> <span style="font-size: 20px; opacity: 0.9; font-weight: 600;">(EMG@NJU)</span></p>' +
              '<p style="font-size: 16px; opacity: 0.85; font-weight: 400; margin-top: 8px; letter-spacing: 0.3px;">Engineering Medicine Research Group, Nanjing University</p>' +
            '</td>' +
          '</tr>' +
          '<tr>' +
            '<td height="20" colspan="4"></td>' +
          '</tr>' +
        '</table>' +
      '</div>' +
      '<div style="margin-top: 20px;">' +
        '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(25px); border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);">' +
          '<tr>' +
            '<td width="4%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
	        '<td width="13%" height="15"></td>' +
            '<td width="4%" height="15"></td>' +
          '</tr>' +
          '<tr>' +
            '<td width="4%" style="text-align: center">&nbsp;</td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><span><strong><a href="../index.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">研究首页</a></strong></span></td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="reseaches.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">研究领域</a></strong></td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="members.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">团队成员</a></strong></td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="publications.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">发表论文</a></strong></td>' +
	  	    '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="../ResearchPlatform/platform.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">电镜中心</a></strong></td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="news.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">新闻速递</a></strong></td>' +
            '<td width="13%" style="text-align: center; padding: 18px 8px;"><strong><a href="education.html" style="font-size: 20px; color: #f8f9fa; font-weight: 700; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); letter-spacing: 0.3px; position: relative; display: inline-block;" onmouseover="this.style.color=\'#ff6b6b\'; this.style.transform=\'translateY(-3px)\'; this.style.textShadow=\'0 4px 12px rgba(255, 107, 107, 0.5)\'" onmouseout="this.style.color=\'#f8f9fa\'; this.style.transform=\'translateY(0)\'; this.style.textShadow=\'0 2px 4px rgba(0, 0, 0, 0.2)\'">人才培养</a></strong></td>' +
            '<td width="4%">&nbsp;</td>' +
          '</tr>' +
          '<tr>' +
            '<td width="4%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
            '<td width="13%" height="15"></td>' +
	        '<td width="13%" height="15"></td>' +
            '<td width="4%" height="15"></td>' +
          '</tr>' +
        '</table>' +
      '</div>' +
    '</div>';
}); 