����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �Q���+github.com/hajimehoshi/ebiten/internal/looplooperrorsgithub.com/gopherjs/gopherjs/js,github.com/hajimehoshi/ebiten/internal/clock+github.com/hajimehoshi/ebiten/internal/sync)github.com/hajimehoshi/ebiten/internal/uitime�
$$ exports $$
pv0loopVgithub.com/hajimehoshi/ebiten/internal/loop	CurrentFPS    GraphicsContext  Invalidate    SetSize 
widthheight
scale  UpdateAndDraw updateCount 6  	RegisterPing ping      	Run 
g:
widthheight
scale
title err6  CC=$packages["errors"];a    $r=C.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B/B=$packages["github.com/gopherjs/gopherjs/js"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D<D=$packages["github.com/hajimehoshi/ebiten/internal/clock"];a    $r=D.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E;E=$packages["github.com/hajimehoshi/ebiten/internal/sync"];a    $r=E.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F9F=$packages["github.com/hajimehoshi/ebiten/internal/ui"];a    $r=F.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["time"];a    $r=A.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I��I=$pkg.runContext=$newType(0,$kindStruct,"loop.runContext",true,"github.com/hajimehoshi/ebiten/internal/loop",false,function(running_,currentFPS_,runningSlowly_,frames_,framesForFPS_,lastUpdated_,lastFPSUpdated_,lastClockFrame_,ping_,m_){this.$val=this;if(arguments.length===0){this.running=false;this.currentFPS=0;this.runningSlowly=false;this.frames=new $Int64(0,0);this.framesForFPS=new $Int64(0,0);this.lastUpdated=new $Int64(0,0);this.lastFPSUpdated=new $Int64(0,0);this.lastClockFrame=new $Int64(0,0);this.ping=$throwNilPointerError;this.m=new E.RWMutex.ptr(new $packages["github.com/gopherjs/gopherjs/nosync"].RWMutex.ptr(false,0));return;}this.running=running_;this.currentFPS=currentFPS_;this.runningSlowly=runningSlowly_;this.frames=frames_;this.framesForFPS=framesForFPS_;this.lastUpdated=lastUpdated_;this.lastFPSUpdated=lastFPSUpdated_;this.lastClockFrame=lastClockFrame_;this.ping=ping_;this.m=m_;});��P.methods=[{prop:"startRunning",name:"startRunning",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([],[],false)},{prop:"isRunning",name:"isRunning",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([],[$Bool],false)},{prop:"endRunning",name:"endRunning",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([],[],false)},{prop:"getCurrentFPS",name:"getCurrentFPS",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([],[$Float64],false)},{prop:"updateFPS",name:"updateFPS",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([$Float64],[],false)},{prop:"updateCount",name:"updateCount",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([$Int64],[$Int],false)},{prop:"registerPing",name:"registerPing",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([S],[],false)},{prop:"render",name:"render",pkg:"github.com/hajimehoshi/ebiten/internal/loop",typ:$funcType([L],[$error],false)}];��I.init("github.com/hajimehoshi/ebiten/internal/loop",[{prop:"running",name:"running",exported:false,typ:$Bool,tag:""},{prop:"currentFPS",name:"currentFPS",exported:false,typ:$Float64,tag:""},{prop:"runningSlowly",name:"runningSlowly",exported:false,typ:$Bool,tag:""},{prop:"frames",name:"frames",exported:false,typ:$Int64,tag:""},{prop:"framesForFPS",name:"framesForFPS",exported:false,typ:$Int64,tag:""},{prop:"lastUpdated",name:"lastUpdated",exported:false,typ:$Int64,tag:""},{prop:"lastFPSUpdated",name:"lastFPSUpdated",exported:false,typ:$Int64,tag:""},{prop:"lastClockFrame",name:"lastClockFrame",exported:false,typ:$Int64,tag:""},{prop:"ping",name:"ping",exported:false,typ:S,tag:""},{prop:"m",name:"m",exported:false,typ:E.RWMutex,tag:""}]);
runContext+github.com/gopherjs/gopherjs/nosync.RWMutex;github.com/hajimehoshi/ebiten/internal/loop.GraphicsContext-github.com/hajimehoshi/ebiten/internal/loop.P-github.com/hajimehoshi/ebiten/internal/loop.S6github.com/hajimehoshi/ebiten/internal/loop.runContext3github.com/hajimehoshi/ebiten/internal/sync.RWMutex L��L=$pkg.GraphicsContext=$newType(8,$kindInterface,"loop.GraphicsContext",true,"github.com/hajimehoshi/ebiten/internal/loop",true,null);��L.init([{prop:"Invalidate",name:"Invalidate",pkg:"",typ:$funcType([],[],false)},{prop:"SetSize",name:"SetSize",pkg:"",typ:$funcType([$Int,$Int,$Float64],[],false)},{prop:"UpdateAndDraw",name:"UpdateAndDraw",pkg:"",typ:$funcType([$Int],[$error],false)}]);GraphicsContext;github.com/hajimehoshi/ebiten/internal/loop.GraphicsContext M�WM=$pkg.loopGraphicsContext=$newType(0,$kindStruct,"loop.loopGraphicsContext",true,"github.com/hajimehoshi/ebiten/internal/loop",false,function(runContext_,graphicsContext_){this.$val=this;if(arguments.length===0){this.runContext=P.nil;this.graphicsContext=$ifaceNil;return;}this.runContext=runContext_;this.graphicsContext=graphicsContext_;});��T.methods=[{prop:"SetSize",name:"SetSize",pkg:"",typ:$funcType([$Int,$Int,$Float64],[],false)},{prop:"Update",name:"Update",pkg:"",typ:$funcType([],[$error],false)},{prop:"Invalidate",name:"Invalidate",pkg:"",typ:$funcType([],[],false)}];��M.init("github.com/hajimehoshi/ebiten/internal/loop",[{prop:"runContext",name:"runContext",exported:false,typ:P,tag:""},{prop:"graphicsContext",name:"graphicsContext",exported:false,typ:L,tag:""}]);loopGraphicsContext;github.com/hajimehoshi/ebiten/internal/loop.GraphicsContext-github.com/hajimehoshi/ebiten/internal/loop.P-github.com/hajimehoshi/ebiten/internal/loop.T?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext PP=$ptrType(I);P6github.com/hajimehoshi/ebiten/internal/loop.runContext QQ=$structType("",[]);Q R!R=$ptrType(F.RegularTermination);R<github.com/hajimehoshi/ebiten/internal/ui.RegularTermination SS=$funcType([],[],false);S TT=$ptrType(M);T?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext JJ=P.nil;currentRunContext-github.com/hajimehoshi/ebiten/internal/loop.P=github.com/hajimehoshi/ebiten/internal/loop.currentRunContext6github.com/hajimehoshi/ebiten/internal/loop.runContext KcontextInitCh     K=new $Chan(Q,0);-github.com/hajimehoshi/ebiten/internal/loop.Q9github.com/hajimehoshi/ebiten/internal/loop.contextInitCh /github.com/hajimehoshi/ebiten/internal/loop.nowGeG=function(){var $ptr;  return(new $Int64(0,$parseFloat($global.performance.now())*1e+06));    };now/github.com/hajimehoshi/ebiten/internal/loop.now 6github.com/hajimehoshi/ebiten/internal/loop.CurrentFPSHMH=function(){var $ptr;  �return J.getCurrentFPS();    };$pkg.CurrentFPS=H;
CurrentFPS6github.com/hajimehoshi/ebiten/internal/loop.CurrentFPS=github.com/hajimehoshi/ebiten/internal/loop.currentRunContext:github.com/hajimehoshi/ebiten/internal/loop.getCurrentFPS~ F(*github.com/hajimehoshi/ebiten/internal/loop.runContext).startRunning��I.ptr.prototype.startRunning=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  'a.m.RWMutex.Lock();  3$deferred.push([$methodVal(a.m.RWMutex,"Unlock"),[]]);  Ga.running=true;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};I.prototype.startRunning=function(){return this.$val.startRunning();};
runContextstartRunning~6github.com/hajimehoshi/ebiten/internal/loop.runContext C(*github.com/hajimehoshi/ebiten/internal/loop.runContext).isRunning��I.ptr.prototype.isRunning=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  �a.m.RWMutex.RLock();  �$deferred.push([$methodVal(a.m.RWMutex,"RUnlock"),[]]);  �return a.running;    }catch(err){$err=err;return false;}finally{$callDeferred($deferred,$err);}};I.prototype.isRunning=function(){return this.$val.isRunning();};
runContext
isRunning~6github.com/hajimehoshi/ebiten/internal/loop.runContext D(*github.com/hajimehoshi/ebiten/internal/loop.runContext).endRunning��I.ptr.prototype.endRunning=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  �a.m.RWMutex.Lock();  �$deferred.push([$methodVal(a.m.RWMutex,"Unlock"),[]]);  �a.running=false;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};I.prototype.endRunning=function(){return this.$val.endRunning();};
runContextendRunning~6github.com/hajimehoshi/ebiten/internal/loop.runContext G(*github.com/hajimehoshi/ebiten/internal/loop.runContext).getCurrentFPS��I.ptr.prototype.getCurrentFPS=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  	Da.m.RWMutex.RLock();  	Q$deferred.push([$methodVal(a.m.RWMutex,"RUnlock"),[]]);    if(!a.running){  	�return 0;    }  	�return a.currentFPS;    }catch(err){$err=err;return 0;}finally{$callDeferred($deferred,$err);}};I.prototype.getCurrentFPS=function(){return this.$val.getCurrentFPS();};
runContextgetCurrentFPS~6github.com/hajimehoshi/ebiten/internal/loop.runContext C(*github.com/hajimehoshi/ebiten/internal/loop.runContext).updateFPS��I.ptr.prototype.updateFPS=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  	�b.m.RWMutex.Lock();  	�$deferred.push([$methodVal(b.m.RWMutex,"Unlock"),[]]);  
	b.currentFPS=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};I.prototype.updateFPS=function(a){return this.$val.updateFPS(a);};
runContext
updateFPS~6github.com/hajimehoshi/ebiten/internal/loop.runContext J(*github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext).SetSize�IM.ptr.prototype.SetSize=function(a,b,c){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;  P$r=d.graphicsContext.SetSize(a,b,c);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:M.ptr.prototype.SetSize};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.SetSize=function(a,b,c){return this.$val.SetSize(a,b,c);};loopGraphicsContext?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext I(*github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext).Update�M.ptr.prototype.Update=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=a.runContext.render(a.graphicsContext);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Update};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Update=function(){return this.$val.Update();};loopGraphicsContext?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext3github.com/hajimehoshi/ebiten/internal/loop.render~ M(*github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext).Invalidate�M.ptr.prototype.Invalidate=function(){var $ptr,a,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  $r=a.graphicsContext.Invalidate();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:M.ptr.prototype.Invalidate};}$f.$ptr=$ptr;$f.a=a;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Invalidate=function(){return this.$val.Invalidate();};loopGraphicsContext?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext /github.com/hajimehoshi/ebiten/internal/loop.RunN�$N=function(a,b,c,d,e){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);f=$ifaceNil;    if(!(J===P.nil)){    f=C.New("loop: The game is already running");$s=-1;return f;    }  �J=new I.ptr(false,0,false,new $Int64(0,0),new $Int64(0,0),new $Int64(0,0),new $Int64(0,0),new $Int64(0,0),$throwNilPointerError,new E.RWMutex.ptr(new $packages["github.com/gopherjs/gopherjs/nosync"].RWMutex.ptr(false,0)));  J.startRunning();  /$deferred.push([$methodVal(J,"endRunning"),[]]);  Vg=G();  bJ.lastUpdated=g;  �J.lastFPSUpdated=g;  �$close(K);  �h=new M.ptr(J,a);  �i=F.Run(b,c,d,e,h);$s=1;case 1:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;    if(!($interfaceIsEqual(j,$ifaceNil))){  :k=$assertType(j,R,true);l=k[1];    if(l){    f=$ifaceNil;$s=-1;return f;    }    f=j;$s=-1;return f;    }    f=$ifaceNil;$s=-1;return f;    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return f;}if($curGoroutine.asleep){if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};$pkg.Run=N;Run
errors.New+github.com/gopherjs/gopherjs/nosync.RWMutex-github.com/hajimehoshi/ebiten/internal/loop.P-github.com/hajimehoshi/ebiten/internal/loop.R/github.com/hajimehoshi/ebiten/internal/loop.Run9github.com/hajimehoshi/ebiten/internal/loop.contextInitCh=github.com/hajimehoshi/ebiten/internal/loop.currentRunContext7github.com/hajimehoshi/ebiten/internal/loop.endRunning~?github.com/hajimehoshi/ebiten/internal/loop.loopGraphicsContext/github.com/hajimehoshi/ebiten/internal/loop.now6github.com/hajimehoshi/ebiten/internal/loop.runContext9github.com/hajimehoshi/ebiten/internal/loop.startRunning~3github.com/hajimehoshi/ebiten/internal/sync.RWMutex<github.com/hajimehoshi/ebiten/internal/ui.RegularTermination-github.com/hajimehoshi/ebiten/internal/ui.Run E(*github.com/hajimehoshi/ebiten/internal/loop.runContext).updateCount�nI.ptr.prototype.updateCount=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=this;  �c=0;  �d=false;  �f=(e=b.lastUpdated,new $Int64(a.$high-e.$high,a.$low-e.$low));    if((f.$high<0||(f.$high===0&&f.$low<0))){  return 0;    }    if(D.IsValid()&&!((g=b.lastClockFrame,h=D.Frame(),(g.$high===h.$high&&g.$low===h.$low)))){  Wd=true;  ei=D.Frame();    if((j=b.frames,(j.$high<i.$high||(j.$high===i.$high&&j.$low<i.$low)))){  �c=(((k=(l=b.frames,new $Int64(i.$high-l.$high,i.$low-l.$low)),k.$low+((k.$high>>31)*4294967296))>>0));    }  �b.lastClockFrame=i;    }else{    if((f.$high>0||(f.$high===0&&f.$low>83333333))){  Rc=0;  _b.lastUpdated=a;    }else{  �c=(((m=$div64($mul64(f,new $Int64(0,60)),new $Int64(0,1000000000),false),m.$low+((m.$high>>31)*4294967296))>>0));    }    }    if((c===0)&&(0<f.$high||(0===f.$high&&8333333<f.$low))){  c=1;    }    if((c===2)&&(0>f.$high||(0===f.$high&&24999999>f.$low))){  fc=1;    }    if(c>3){  �c=3;    }    if(d){  �b.lastUpdated=a;    }else{  �b.lastUpdated=(n=b.lastUpdated,o=$div64($mul64((new $Int64(0,c)),new $Int64(0,1000000000)),new $Int64(0,60),false),new $Int64(n.$high+o.$high,n.$low+o.$low));    }  b.frames=(p=b.frames,q=(new $Int64(0,c)),new $Int64(p.$high+q.$high,p.$low+q.$low));  &return c;    };I.prototype.updateCount=function(a){return this.$val.updateCount(a);};
runContextupdateCount~2github.com/hajimehoshi/ebiten/internal/clock.Frame4github.com/hajimehoshi/ebiten/internal/clock.IsValid6github.com/hajimehoshi/ebiten/internal/loop.runContext 8github.com/hajimehoshi/ebiten/internal/loop.RegisterPingO��O=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Xb=$recv(K);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b[0];  iJ.registerPing(a);    $s=-1;return;}return;}if($f===undefined){$f={$blk:O};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.RegisterPing=O;RegisterPing8github.com/hajimehoshi/ebiten/internal/loop.RegisterPing9github.com/hajimehoshi/ebiten/internal/loop.contextInitCh=github.com/hajimehoshi/ebiten/internal/loop.currentRunContext9github.com/hajimehoshi/ebiten/internal/loop.registerPing~ F(*github.com/hajimehoshi/ebiten/internal/loop.runContext).registerPing��I.ptr.prototype.registerPing=function(a){var $ptr,a,b;b=this;  �b.m.RWMutex.Lock();  �b.ping=a;  �b.m.RWMutex.Unlock();    };I.prototype.registerPing=function(a){return this.$val.registerPing(a);};
runContextregisterPing~6github.com/hajimehoshi/ebiten/internal/loop.runContext @(*github.com/hajimehoshi/ebiten/internal/loop.runContext).render�I.ptr.prototype.render=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  &c=G();  3b.m.RWMutex.Lock();  ?if(!(b.ping===$throwNilPointerError)){$s=1;continue;}$s=2;continue;    case 1:  T$r=b.ping();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  ab.m.RWMutex.Unlock();  pd=b.updateCount(c);  �e=a.UpdateAndDraw(d);$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return f;    }  �b.framesForFPS=(g=b.framesForFPS,h=new $Int64(0,1),new $Int64(g.$high+h.$high,g.$low+h.$low));    if((i=((j=(k=b.lastFPSUpdated,new $Int64(c.$high-k.$high,c.$low-k.$low)),new A.Duration(j.$high,j.$low))),(0>i.$high||(0===i.$high&&1000000000>i.$low)))){  /$s=-1;return $ifaceNil;    }  >m=($flatten64(b.framesForFPS))*1e+09/($flatten64((l=b.lastFPSUpdated,new $Int64(c.$high-l.$high,c.$low-l.$low))));  �b.updateFPS(m);  �b.lastFPSUpdated=c;  �b.framesForFPS=new $Int64(0,0);  �$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.render};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.render=function(a){return this.$val.render(a);};
runContextrender~/github.com/hajimehoshi/ebiten/internal/loop.now6github.com/hajimehoshi/ebiten/internal/loop.runContext8github.com/hajimehoshi/ebiten/internal/loop.updateCount~6github.com/hajimehoshi/ebiten/internal/loop.updateFPS~time.Duration �{"Base":5356,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/gopath/src/github.com/hajimehoshi/ebiten/internal/loop/now_js.go","Base":1,"Size":861,"Lines":[0,31,34,101,169,212,215,265,268,339,408,484,555,589,590,603,604,617,618,627,635,636,671,673,674,693,767,859],"Infos":null},{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/gopath/src/github.com/hajimehoshi/ebiten/internal/loop/run.go","Base":863,"Size":4492,"Lines":[0,31,34,101,169,212,215,265,268,339,408,484,555,589,590,603,604,613,623,631,632,680,727,772,774,775,803,845,847,848,873,894,918,939,961,983,1005,1027,1049,1072,1101,1103,1104,1110,1141,1182,1184,1185,1223,1235,1255,1273,1275,1276,1316,1329,1350,1368,1370,1371,1407,1419,1439,1458,1460,1461,1508,1521,1542,1559,1589,1600,1603,1624,1626,1627,1673,1685,1705,1725,1727,1728,1761,1804,1842,1856,1858,1859,1893,1922,1955,1957,1958,2032,2081,2083,2084,2131,2178,2180,2181,2226,2258,2260,2261,2351,2382,2439,2442,2477,2511,2549,2550,2562,2597,2635,2636,2658,2659,2709,2774,2823,2837,2841,2854,2857,2869,2871,2872,2922,2934,2949,2950,2976,2988,2999,3002,3003,3062,3076,3097,3117,3146,3150,3173,3183,3232,3312,3325,3348,3359,3417,3421,3424,3425,3444,3508,3520,3523,3589,3601,3604,3605,3621,3633,3636,3637,3648,3670,3680,3752,3755,3756,3782,3796,3798,3799,3832,3849,3887,3889,3890,3939,3951,3966,3980,3982,3983,4038,4050,4051,4063,4083,4094,4097,4111,4112,4139,4187,4200,4203,4221,4222,4248,4302,4315,4318,4410,4435,4457,4477,4478,4490],"Infos":null}]}
 