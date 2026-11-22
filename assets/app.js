/* L.B.X. — 公共脚本：进度系统 / 故障升级 / 隐藏信号 */
(function(){
  var KEY='lbx_progress';
  var P={};
  try{P=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){P={}}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(P))}catch(e){}}
  window.LBX={flag:function(k){return !!P[k]},mark:function(k){P[k]=1;save();applyGlitch()},get:function(){return P},save:save};

  function applyGlitch(){
    var n=0;for(var k in P)if(P[k])n++;
    if(n>=2)document.body.classList.add('glitch');
  }
  applyGlitch();

  // 扫描线层
  var sl=document.createElement('div');sl.className='scanline';document.body.appendChild(sl);

  // 控制台彩蛋（只在玩家打开开发者工具时显示）
  var msg='%cL.B.X. 深空信号监测站 %c\n\n内部系统 · 未经授权禁止访问\n\n'+
          '%c若你正在寻找「那一段」：它从未停止播送。\n频率记在值班日志里，工号记在人员表里。%c';
  try{console.log(msg,
    'font-family:monospace;font-size:14px;color:#22333a',
    'font-family:monospace;color:#888',
    'font-family:monospace;font-size:12px;color:#9c2f22',
    'font-family:monospace;color:#888');}catch(e){}
})();
