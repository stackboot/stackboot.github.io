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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �o$��loglogfmt#github.com/gopherjs/gopherjs/nosyncioosruntimetime�
(
$$ exports $$
pv0loglog0	
Fatal v   	Fatalf format v   	Fatalln v   	
Flags    LUTC$!@
Ldate$!Llongfile$!Lmicroseconds$!Logger 
mu 
MutexnosyncFgithub.com/gopherjs/gopherjs/nosynclocked  LockmP   UnlockmP    prefix   flag  out Writerioio 
Write p2nerr6   buf 2  SetOutputlLw\  formatHeaderlLbuf2tTimetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZone~ getlx  x Stringlx    lookuplxsec

name offset
isDST 
start
end
 lookupFirstZonelx   firstZoneUsedlx    lookupNamelxname unix
offset
isDST ok   VStringtr    Formattrlayout    AppendFormattrb2layout  2 setLoctrlocx  
Aftertrur   Beforetrur   
Equaltrur   IsZerotr    abstr   locabstr name offsetabs Datetr year
month
MonthStringm�    day Yeartr   
Monthtr  � Daytr   Weekdaytr  WeekdayStringd�     ISOWeektr yearweek 
Clocktr hourminsec Hourtr   Minutetr   Secondtr   Nanosecondtr   YearDaytr   AddtrdDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    r Subtrur � AddDatetr
yearsmonthsdays r datetrfull year
month�dayyday UTCtr  r 
Localtr  r Intrlocx r Locationtr  x Zonetr name offset Unixtr  
 UnixNanotr  
 MarshalBinarytr  2 6 UnmarshalBinarytrdata2 6 GobEncodetr  2 6 GobDecodetrdata2 6 MarshalJSONtr  2 6 UnmarshalJSONtrdata2 6 MarshalTexttr  2 6 UnmarshalTexttrdata2 6 Truncatetrd� r 
Roundtrd� r file line  OutputlLcalldepths  6 PrintflLformat v   
PrintlLv   PrintlnlLv   
FatallLv   FatalflLformat v   FatallnlLv   
PaniclLv   PanicflLformat v   PaniclnlLv   
FlagslL   SetFlagslLflag  PrefixlL    SetPrefixlLprefix   Lshortfile$! LstdFlags$!
Ltime$!	New out\prefix flag L 	Output calldepths  6 	
Panic v   	Panicf format v   	Panicln v   	Prefix     	
Print v   	Printf format v   	Println v   	SetFlags flag  	SetOutput w\  	SetPrefix prefix   /AA=$packages["fmt"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E3E=$packages["github.com/gopherjs/gopherjs/nosync"];a    $r=E.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["os"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["runtime"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["time"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�CG=$pkg.Logger=$newType(0,$kindStruct,"log.Logger",true,"log",true,function(mu_,prefix_,flag_,out_,buf_){this.$val=this;if(arguments.length===0){this.mu=new E.Mutex.ptr(false);this.prefix="";this.flag=0;this.out=$ifaceNil;this.buf=Z.nil;return;}this.mu=mu_;this.prefix=prefix_;this.flag=flag_;this.out=out_;this.buf=buf_;});��AD.methods=[{prop:"SetOutput",name:"SetOutput",pkg:"",typ:$funcType([B.Writer],[],false)},{prop:"formatHeader",name:"formatHeader",pkg:"log",typ:$funcType([AB,F.Time,$String,$Int],[],false)},{prop:"Output",name:"Output",pkg:"",typ:$funcType([$Int,$String],[$error],false)},{prop:"Printf",name:"Printf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Print",name:"Print",pkg:"",typ:$funcType([AC],[],true)},{prop:"Println",name:"Println",pkg:"",typ:$funcType([AC],[],true)},{prop:"Fatal",name:"Fatal",pkg:"",typ:$funcType([AC],[],true)},{prop:"Fatalf",name:"Fatalf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Fatalln",name:"Fatalln",pkg:"",typ:$funcType([AC],[],true)},{prop:"Panic",name:"Panic",pkg:"",typ:$funcType([AC],[],true)},{prop:"Panicf",name:"Panicf",pkg:"",typ:$funcType([$String,AC],[],true)},{prop:"Panicln",name:"Panicln",pkg:"",typ:$funcType([AC],[],true)},{prop:"Flags",name:"Flags",pkg:"",typ:$funcType([],[$Int],false)},{prop:"SetFlags",name:"SetFlags",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Prefix",name:"Prefix",pkg:"",typ:$funcType([],[$String],false)},{prop:"SetPrefix",name:"SetPrefix",pkg:"",typ:$funcType([$String],[],false)}];�0G.init("log",[{prop:"mu",name:"mu",exported:false,typ:E.Mutex,tag:""},{prop:"prefix",name:"prefix",exported:false,typ:$String,tag:""},{prop:"flag",name:"flag",exported:false,typ:$Int,tag:""},{prop:"out",name:"out",exported:false,typ:B.Writer,tag:""},{prop:"buf",name:"buf",exported:false,typ:Z,tag:""}]);Logger)github.com/gopherjs/gopherjs/nosync.Mutex	io.Writerlog.ABlog.AClog.AD
log.Loggerlog.Z	time.Time ZZ=$sliceType($Uint8);Z AAAA=$arrayType($Uint8,20);AA ABAB=$ptrType(Z);ABlog.Z ACAC=$sliceType($emptyInterface);AC ADAD=$ptrType(G);AD
log.Logger Istd     I=H(C.Stderr,"",3);log.Newlog.std	os.Stderr log.NewHmH=function(a,b,c){var $ptr,a,b,c;  �return new G.ptr(new E.Mutex.ptr(false),b,c,a,Z.nil);    };$pkg.New=H;New)github.com/gopherjs/gopherjs/nosync.Mutex
log.Loggerlog.Newlog.Z (*log.Logger).SetOutput��G.ptr.prototype.SetOutput=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  /b.mu.Lock();  <$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  Qb.out=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetOutput=function(a){return this.$val.SetOutput(a);};Logger
log.Logger log.itoaJ�$J=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  9d=AA.zero();  Ee=19;  Wwhile(true){if(!(b>=10||c>1)){break;}  rc=c-(1)>>0;  zg=(f=b/10,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero"));  �((e<0||e>=d.length)?($throwRuntimeError("index out of range"),undefined):d[e]=((((48+b>>0)-($imul(g,10))>>0)<<24>>>24)));  �e=e-(1)>>0;  �b=g;    }  �((e<0||e>=d.length)?($throwRuntimeError("index out of range"),undefined):d[e]=(((48+b>>0)<<24>>>24)));  �a.$set($appendSlice(a.$get(),$subslice(new Z(d),e)));    };itoalog.AAlog.Zlog.itoa (*log.Logger).formatHeader��G.ptr.prototype.formatHeader=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=this;  Na.$set($appendSlice(a.$get(),e.prefix));    if(!(((e.flag&32)===0))){  �F.Time.copy(b,$clone(b,F.Time).UTC());    }  �if(!(((e.flag&7)===0))){$s=1;continue;}$s=2;continue;    case 1:  �if(!(((e.flag&1)===0))){$s=3;continue;}$s=4;continue;    case 3:  �g=$clone(b,F.Time).Date();$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];j=f[2];  J(a,h,4);  a.$set($append(a.$get(),47));  3J(a,((i>>0)),2);  Oa.$set($append(a.$get(),47));  kJ(a,j,2);  �a.$set($append(a.$get(),32));    case 4:  �if(!(((e.flag&6)===0))){$s=6;continue;}$s=7;continue;    case 6:  �l=$clone(b,F.Time).Clock();$s=8;case 8:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;m=k[0];n=k[1];o=k[2];  �J(a,m,2);  �a.$set($append(a.$get(),58));  J(a,n,2);  /a.$set($append(a.$get(),58));  KJ(a,o,2);    if(!(((e.flag&4)===0))){  �a.$set($append(a.$get(),46));  �J(a,(p=$clone(b,F.Time).Nanosecond()/1000,(p===p&&p!==1/0&&p!==-1/0)?p>>0:$throwRuntimeError("integer divide by zero")),6);    }  �a.$set($append(a.$get(),32));    case 7:    case 2:    if(!(((e.flag&24)===0))){    if(!(((e.flag&16)===0))){  3q=c;  Hr=c.length-1>>0;while(true){if(!(r>0)){break;}    if(c.charCodeAt(r)===47){  �q=$substring(c,(r+1>>0));  �break;    }  cr=r-(1)>>0;    }  �c=q;    }  �a.$set($appendSlice(a.$get(),c));  �a.$set($append(a.$get(),58));  �J(a,d,-1);  a.$set($appendSlice(a.$get(),": "));    }    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.formatHeader};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.formatHeader=function(a,b,c,d){return this.$val.formatHeader(a,b,c,d);};LoggerformatHeader~
log.Loggerlog.itoa	time.Time (*log.Logger).Output�uG.ptr.prototype.Output=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);c=this;  �d=$clone(F.Now(),F.Time);  e="";  f=0;  #c.mu.Lock();  0$deferred.push([$methodVal(c.mu,"Unlock"),[]]);    if(!(((c.flag&24)===0))){  �c.mu.Unlock();  �g=false;  �h=D.Caller(a);e=h[1];f=h[2];g=h[3];    if(!g){  e="???";  f=0;    }  &c.mu.Lock();    }  6c.buf=$subslice(c.buf,0,0);  I$r=c.formatHeader((c.$ptr_buf||(c.$ptr_buf=new AB(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c))),$clone(d,F.Time),e,f);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  rc.buf=$appendSlice(c.buf,b);    if((b.length===0)||!((b.charCodeAt((b.length-1>>0))===10))){  �c.buf=$append(c.buf,10);    }  �j=c.out.Write(c.buf);$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[1];  �$s=-1;return k;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:G.ptr.prototype.Output};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};G.prototype.Output=function(a,b){return this.$val.Output(a,b);};Loggerlog.AB
log.Loggerlog.Zlog.formatHeader~runtime.Callertime.Now	time.Time (*log.Logger).Printf��G.ptr.prototype.Printf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  �d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Printf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Printf=function(a,b){return this.$val.Printf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Print��G.ptr.prototype.Print=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  bc=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Print};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Print=function(a){return this.$val.Print(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Println��G.ptr.prototype.Println=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Println};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Println=function(a){return this.$val.Println(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Fatal��G.ptr.prototype.Fatal=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatal};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatal=function(a){return this.$val.Fatal(a);};Logger
fmt.Sprint
log.Loggeros.Exit (*log.Logger).Fatalf��G.ptr.prototype.Fatalf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  _d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  �C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalf=function(a,b){return this.$val.Fatalf(a,b);};Loggerfmt.Sprintf
log.Loggeros.Exit (*log.Logger).Fatalln��G.ptr.prototype.Fatalln=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  .C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Fatalln};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Fatalln=function(a){return this.$val.Fatalln(a);};Loggerfmt.Sprintln
log.Loggeros.Exit (*log.Logger).Panic��G.ptr.prototype.Panic=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=A.Sprint(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  �e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  �$panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panic};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panic=function(a){return this.$val.Panic(a);};Logger
fmt.Sprint
log.Logger (*log.Logger).Panicf��G.ptr.prototype.Panicf=function(a,b){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  _d=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  f=c.Output(2,e);$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  �$panic(new $String(e));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicf};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicf=function(a,b){return this.$val.Panicf(a,b);};Loggerfmt.Sprintf
log.Logger (*log.Logger).Panicln��G.ptr.prototype.Panicln=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  c=A.Sprintln(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  )e=b.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  9$panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Panicln};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Panicln=function(a){return this.$val.Panicln(a);};Loggerfmt.Sprintln
log.Logger (*log.Logger).Flags��G.ptr.prototype.Flags=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  �a.mu.Lock();  �$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  �return a.flag;    }catch(err){$err=err;return 0;}finally{$callDeferred($deferred,$err);}};G.prototype.Flags=function(){return this.$val.Flags();};Logger
log.Logger (*log.Logger).SetFlags��G.ptr.prototype.SetFlags=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  #b.mu.Lock();  0$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  Eb.flag=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetFlags=function(a){return this.$val.SetFlags(a);};Logger
log.Logger (*log.Logger).Prefix��G.ptr.prototype.Prefix=function(){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);a=this;  �a.mu.Lock();  �$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  �return a.prefix;    }catch(err){$err=err;return"";}finally{$callDeferred($deferred,$err);}};G.prototype.Prefix=function(){return this.$val.Prefix();};Logger
log.Logger (*log.Logger).SetPrefix��G.ptr.prototype.SetPrefix=function(a){var $ptr,a,b,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  Db.mu.Lock();  Q$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  fb.prefix=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};G.prototype.SetPrefix=function(a){return this.$val.SetPrefix(a);};Logger
log.Logger log.SetOutputK�BK=function(a){var $ptr,a,$deferred;var $err=null;try{$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);  �I.mu.Lock();  �$deferred.push([$methodVal(I.mu,"Unlock"),[]]);  I.out=a;    }catch(err){$err=err;}finally{$callDeferred($deferred,$err);}};$pkg.SetOutput=K;	SetOutputlog.SetOutputlog.std 	log.FlagsL@L=function(){var $ptr;  `return I.Flags();    };$pkg.Flags=L;Flags	log.Flagslog.std log.SetFlagsMCM=function(a){var $ptr,a;  �I.SetFlags(a);    };$pkg.SetFlags=M;SetFlagslog.SetFlagslog.std 
log.PrefixNBN=function(){var $ptr;   7return I.Prefix();    };$pkg.Prefix=N;Prefix
log.Prefixlog.std log.SetPrefixOEO=function(a){var $ptr,a;   �I.SetPrefix(a);    };$pkg.SetPrefix=O;	SetPrefixlog.SetPrefixlog.std 	log.PrintP� P=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !�b=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;return;}return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Print=P;Print
fmt.Sprint	log.Printlog.std 
log.PrintfQ�6Q=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  "Dc=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    $s=-1;return;}return;}if($f===undefined){$f={$blk:Q};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Printf=Q;Printffmt.Sprintf
log.Printflog.std log.PrintlnR�$R=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;    $s=-1;return;}return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Println=R;Printlnfmt.Sprintlnlog.Printlnlog.std 	log.FatalS�/S=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�b=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  #�C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatal=S;Fatal
fmt.Sprint	log.Fatallog.stdos.Exit 
log.FatalfT�ET=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $0c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  $ZC.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:T};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalf=T;Fatalffmt.Sprintf
log.Fatalflog.stdos.Exit log.FatallnU�3U=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $�b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  $�C.Exit(1);    $s=-1;return;}return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Fatalln=U;Fatallnfmt.Sprintlnlog.Fatallnlog.stdos.Exit 	log.PanicV�AV=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %db=A.Sprint(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  %{d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  %�$panic(new $String(c));    $s=-1;return;}return;}if($f===undefined){$f={$blk:V};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panic=V;Panic
fmt.Sprint	log.Paniclog.std 
log.PanicfW�WW=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &c=A.Sprintf(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  &,e=I.Output(2,d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  &>$panic(new $String(d));    $s=-1;return;}return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicf=W;Panicffmt.Sprintf
log.Panicflog.std log.PaniclnX�EX=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &�b=A.Sprintln(a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  &�d=I.Output(2,c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  &�$panic(new $String(c));    $s=-1;return;}return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Panicln=X;Paniclnfmt.Sprintlnlog.Paniclnlog.std 
log.OutputY��Y=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  (�c=I.Output(a+1>>0,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:Y};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Output=Y;Output
log.Outputlog.std �m{"Base":10499,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/log/log.go","Base":1,"Size":10497,"Lines":[0,55,109,159,160,239,314,390,463,532,559,631,694,764,829,841,842,851,858,864,870,881,889,897,899,900,986,994,1045,1114,1183,1255,1273,1334,1366,1433,1488,1566,1642,1733,1814,1918,2018,2091,2093,2094,2166,2239,2310,2383,2404,2479,2543,2576,2621,2674,2676,2677,2732,2782,2849,2902,2961,3015,3017,3018,3075,3117,3130,3151,3162,3164,3165,3205,3206,3299,3340,3379,3395,3413,3439,3447,3461,3492,3499,3507,3510,3521,3544,3576,3578,3579,3660,3694,3717,3731,3734,3780,3805,3837,3859,3887,3915,3943,3964,3992,3996,4037,4068,4090,4118,4139,4167,4188,4222,4251,4288,4293,4321,4325,4328,4369,4399,4416,4456,4480,4504,4515,4521,4526,4542,4546,4577,4604,4626,4657,4660,4662,4663,4734,4802,4869,4934,5004,5027,5084,5122,5139,5153,5166,5187,5228,5290,5306,5320,5368,5379,5395,5407,5411,5425,5428,5447,5488,5517,5558,5588,5591,5621,5633,5635,5636,5685,5739,5798,5838,5840,5841,5889,5942,6017,6018,6068,6123,6202,6203,6273,6316,6347,6359,6361,6362,6434,6493,6533,6545,6547,6548,6622,6667,6700,6712,6714,6715,6782,6825,6848,6864,6874,6876,6877,6946,7005,7037,7053,7063,7065,7066,7137,7182,7207,7223,7233,7235,7236,7286,7317,7330,7351,7366,7368,7369,7419,7457,7470,7491,7506,7508,7509,7561,7596,7609,7630,7647,7649,7650,7702,7746,7759,7780,7799,7801,7802,7868,7898,7913,7936,7949,7951,7952,8011,8030,8050,8052,8053,8112,8138,8158,8160,8161,8222,8245,8266,8268,8269,8330,8362,8385,8387,8388,8437,8438,8493,8546,8577,8610,8612,8613,8669,8723,8770,8812,8814,8815,8872,8927,8960,8995,8997,8998,9066,9097,9130,9142,9144,9145,9215,9262,9304,9316,9318,9319,9391,9424,9459,9471,9473,9474,9539,9570,9593,9611,9621,9623,9624,9691,9738,9770,9788,9798,9800,9801,9870,9903,9928,9946,9956,9958,9959,10030,10098,10165,10227,10290,10364,10393,10438,10495],"Infos":null}]}
 