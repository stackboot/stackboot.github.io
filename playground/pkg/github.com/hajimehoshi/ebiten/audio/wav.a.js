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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �Rh��'github.com/hajimehoshi/ebiten/audio/wavwavbytesfmt#github.com/hajimehoshi/ebiten/audio4github.com/hajimehoshi/ebiten/audio/internal/convertio�	
$$ exports $$
pv0wavNgithub.com/hajimehoshi/ebiten/audio/wav	Decode contextContext
audioFgithub.com/hajimehoshi/ebiten/audioplayersplayersplayersPlayerplayersB srcReadSeekCloserCloserioio 
Close   6  ReadSeekerReader Read p2nerr6  Seeker Seek offset
whence 
 6       sampleRate buf pos
 volume srcM
Mutexsyncsync
state sema Lockmn   Unlockmn    mRWMutex
wn writerSem readerSem readerCount readerWait 

RLockrwz   RUnlockrwz   Lockrwz   Unlockrwz   RLockerrwz  Locker Lock    Unlock       
ClosepJ  6 readToBufferpJlength  6 bufferToInt16pJlengthInBytes  proceedpJlength  PlaypJ  6 IsPlayingpJ    RewindpJ  6 SeekpJoffsetDurationtimetime

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    6 
PausepJ  6 CurrentpJ  � VolumepJ   SetVolumepJvolume     z 
ReadpBb  6 addPlayerpBplayerJ  removePlayerpBplayerJ  hasPlayerpBplayerJ   hasSourcepBsrcP    
errCh 6 initCh   initedCh   pingCount sampleRate frames
 framesReadOnly
 writtenBytes
 mn 
pingc<   loopc<   Updatec<  6 SampleRatec<   bufferSizec<   srcP Stream 
inner P size 
 Reads�p2  6 Seeks�offset
whence 
 6 
Closes�  6 Sizes�  
  6 �AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D3D=$packages["github.com/hajimehoshi/ebiten/audio"];a    $r=D.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EDE=$packages["github.com/hajimehoshi/ebiten/audio/internal/convert"];a    $r=E.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["io"];a    $r=C.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F�F=$pkg.Stream=$newType(0,$kindStruct,"wav.Stream",true,"github.com/hajimehoshi/ebiten/audio/wav",true,function(inner_,size_){this.$val=this;if(arguments.length===0){this.inner=$ifaceNil;this.size=new $Int64(0,0);return;}this.inner=inner_;this.size=size_;});�.K.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([J],[$Int,$error],false)},{prop:"Seek",name:"Seek",pkg:"",typ:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int64],false)}];��F.init("github.com/hajimehoshi/ebiten/audio/wav",[{prop:"inner",name:"inner",exported:false,typ:D.ReadSeekCloser,tag:""},{prop:"size",name:"size",exported:false,typ:$Int64,tag:""}]);Stream2github.com/hajimehoshi/ebiten/audio.ReadSeekCloser)github.com/hajimehoshi/ebiten/audio/wav.J)github.com/hajimehoshi/ebiten/audio/wav.K.github.com/hajimehoshi/ebiten/audio/wav.Stream G��G=$pkg.stream=$newType(0,$kindStruct,"wav.stream",true,"github.com/hajimehoshi/ebiten/audio/wav",false,function(src_,headerSize_,dataSize_,remaining_){this.$val=this;if(arguments.length===0){this.src=$ifaceNil;this.headerSize=new $Int64(0,0);this.dataSize=new $Int64(0,0);this.remaining=new $Int64(0,0);return;}this.src=src_;this.headerSize=headerSize_;this.dataSize=dataSize_;this.remaining=remaining_;});�.L.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([J],[$Int,$error],false)},{prop:"Seek",name:"Seek",pkg:"",typ:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int64],false)}];�FG.init("github.com/hajimehoshi/ebiten/audio/wav",[{prop:"src",name:"src",exported:false,typ:D.ReadSeekCloser,tag:""},{prop:"headerSize",name:"headerSize",exported:false,typ:$Int64,tag:""},{prop:"dataSize",name:"dataSize",exported:false,typ:$Int64,tag:""},{prop:"remaining",name:"remaining",exported:false,typ:$Int64,tag:""}]);stream2github.com/hajimehoshi/ebiten/audio.ReadSeekCloser)github.com/hajimehoshi/ebiten/audio/wav.J)github.com/hajimehoshi/ebiten/audio/wav.L.github.com/hajimehoshi/ebiten/audio/wav.stream II=$sliceType($emptyInterface);I JJ=$sliceType($Uint8);J KK=$ptrType(F);K.github.com/hajimehoshi/ebiten/audio/wav.Stream LL=$ptrType(G);L.github.com/hajimehoshi/ebiten/audio/wav.stream 6(*github.com/hajimehoshi/ebiten/audio/wav.Stream).Read�F.ptr.prototype.Read=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=b.inner.Read(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Read=function(a){return this.$val.Read(a);};Stream.github.com/hajimehoshi/ebiten/audio/wav.Stream 6(*github.com/hajimehoshi/ebiten/audio/wav.Stream).Seek�%F.ptr.prototype.Seek=function(a,b){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  �d=c.inner.Seek(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Seek};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Seek=function(a,b){return this.$val.Seek(a,b);};Stream.github.com/hajimehoshi/ebiten/audio/wav.Stream 7(*github.com/hajimehoshi/ebiten/audio/wav.Stream).Close��F.ptr.prototype.Close=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  !b=a.inner.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Close=function(){return this.$val.Close();};Stream.github.com/hajimehoshi/ebiten/audio/wav.Stream 6(*github.com/hajimehoshi/ebiten/audio/wav.Stream).Size��F.ptr.prototype.Size=function(){var $ptr,a;a=this;  �return a.size;    };F.prototype.Size=function(){return this.$val.Size();};Stream.github.com/hajimehoshi/ebiten/audio/wav.Stream 6(*github.com/hajimehoshi/ebiten/audio/wav.stream).Read�G.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if((c=b.remaining,(c.$high<0||(c.$high===0&&c.$low<=0)))){  �$s=-1;return[0,C.EOF];    }    if((d=b.remaining,e=(new $Int64(0,a.$length)),(d.$high<e.$high||(d.$high===e.$high&&d.$low<e.$low)))){  �a=$subslice(a,0,$flatten64(b.remaining));    }  �g=b.src.Read(a);$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;h=f[0];i=f[1];  �b.remaining=(j=b.remaining,k=(new $Int64(0,h)),new $Int64(j.$high-k.$high,j.$low-k.$low));  $s=-1;return[h,i];    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Read=function(a){return this.$val.Read(a);};stream.github.com/hajimehoshi/ebiten/audio/wav.streamio.EOF 6(*github.com/hajimehoshi/ebiten/audio/wav.stream).Seek�<G.ptr.prototype.Seek=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;    d=b;    if(d===(0)){  �a=(e=c.headerSize,new $Int64(a.$high+e.$high,a.$low+e.$low));    }else if(d===(1)){    }else if(d===(2)){  �a=(f=(g=c.headerSize,h=c.dataSize,new $Int64(g.$high+h.$high,g.$low+h.$low)),new $Int64(f.$high+a.$high,f.$low+a.$low));  *b=0;    }  Dj=c.src.Seek(a,b);$s=1;case 1:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[0];l=i[1];    if(!($interfaceIsEqual(l,$ifaceNil))){  |$s=-1;return[new $Int64(0,0),l];    }  �if((m=(n=c.headerSize,new $Int64(k.$high-n.$high,k.$low-n.$low)),(m.$high<0||(m.$high===0&&m.$low<0)))){$s=2;continue;}$s=3;continue;    case 2:  �o=B.Errorf("wav: invalid offset",new I([]));$s=4;case 4:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}$s=-1;return[new $Int64(0,0),o];    case 3:  �c.remaining=(p=c.dataSize,q=(r=c.headerSize,new $Int64(k.$high-r.$high,k.$low-r.$low)),new $Int64(p.$high-q.$high,p.$low-q.$low));    if((s=c.remaining,(s.$high<0||(s.$high===0&&s.$low<0)))){  	Ec.remaining=new $Int64(0,0);  	W$s=-1;return[c.dataSize,$ifaceNil];    }  	r$s=-1;return[(t=c.headerSize,new $Int64(k.$high-t.$high,k.$low-t.$low)),$ifaceNil];    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Seek};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Seek=function(a,b){return this.$val.Seek(a,b);};stream
fmt.Errorf)github.com/hajimehoshi/ebiten/audio/wav.I.github.com/hajimehoshi/ebiten/audio/wav.stream 7(*github.com/hajimehoshi/ebiten/audio/wav.stream).Close��G.ptr.prototype.Close=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  	�b=a.src.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Close=function(){return this.$val.Close();};stream.github.com/hajimehoshi/ebiten/audio/wav.stream 6(*github.com/hajimehoshi/ebiten/audio/wav.stream).Size��G.ptr.prototype.Size=function(){var $ptr,a;a=this;  
Rreturn a.dataSize;    };G.prototype.Size=function(){return this.$val.Size();};stream.github.com/hajimehoshi/ebiten/audio/wav.stream .github.com/hajimehoshi/ebiten/audio/wav.DecodeH� 
H=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;b=$f.b;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;bh=$f.bh;bi=$f.bi;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=$makeSlice(J,12);  e=C.ReadFull(b,c);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];  1if(!((f===c.$length))){$s=2;continue;}$s=3;continue;    case 2:  Fh=B.Errorf("wav: invalid header",new I([]));$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return[K.nil,h];    case 3:    if(!($interfaceIsEqual(g,$ifaceNil))){  �$s=-1;return[K.nil,g];    }  �if(!A.Equal($subslice(c,0,4),(new J($stringToBytes("RIFF"))))){$s=5;continue;}$s=6;continue;    case 5:  �i=B.Errorf("wav: invalid header: 'RIFF' not found",new I([]));$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return[K.nil,i];    case 6:  if(!A.Equal($subslice(c,8,12),(new J($stringToBytes("WAVE"))))){$s=8;continue;}$s=9;continue;    case 8:  ?j=B.Errorf("wav: invalid header: 'WAVE' not found",new I([]));$s=10;case 10:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}$s=-1;return[K.nil,j];    case 9:  �k=new $Int64(0,0);  �l=(new $Int64(0,c.$length));  �m=0;  �n=0;  �o=false;   p=0;  case 11:  $q=$makeSlice(J,8);  =s=C.ReadFull(b,q);$s=13;case 13:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}r=s;t=r[0];u=r[1];  _if(!((t===q.$length))){$s=14;continue;}$s=15;continue;    case 14:  uv=B.Errorf("wav: invalid header",new I([]));$s=16;case 16:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}$s=-1;return[K.nil,v];    case 15:    if(!($interfaceIsEqual(u,$ifaceNil))){  �$s=-1;return[K.nil,u];    }  �l=(w=new $Int64(0,8),new $Int64(l.$high+w.$high,l.$low+w.$low));  �ad=(x=(y=(z=(new $Int64(0,(4>=q.$length?($throwRuntimeError("index out of range"),undefined):q.$array[q.$offset+4]))),aa=$shiftLeft64((new $Int64(0,(5>=q.$length?($throwRuntimeError("index out of range"),undefined):q.$array[q.$offset+5]))),8),new $Int64(z.$high|aa.$high,(z.$low|aa.$low)>>>0)),ab=$shiftLeft64((new $Int64(0,(6>=q.$length?($throwRuntimeError("index out of range"),undefined):q.$array[q.$offset+6]))),16),new $Int64(y.$high|ab.$high,(y.$low|ab.$low)>>>0)),ac=$shiftLeft64((new $Int64(0,(7>=q.$length?($throwRuntimeError("index out of range"),undefined):q.$array[q.$offset+7]))),24),new $Int64(x.$high|ac.$high,(x.$low|ac.$low)>>>0));  Bif(A.Equal($subslice(q,0,4),(new J($stringToBytes("fmt "))))){$s=18;continue;}if(A.Equal($subslice(q,0,4),(new J($stringToBytes("data"))))){$s=19;continue;}$s=20;continue;    case 18:  �if((ad.$high<0||(ad.$high===0&&ad.$low<16))){$s=22;continue;}$s=23;continue;    case 22:  �ae=B.Errorf("wav: invalid header: maybe non-PCM file?",new I([]));$s=24;case 24:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}$s=-1;return[K.nil,ae];    case 23:  af=$makeSlice(J,$flatten64(ad));  /ah=C.ReadFull(b,af);$s=25;case 25:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ag=ah;ai=ag[0];aj=ag[1];  Rif(!((ai===af.$length))){$s=26;continue;}$s=27;continue;    case 26:  iak=B.Errorf("wav: invalid header",new I([]));$s=28;case 28:if($c){$c=false;ak=ak.$blk();}if(ak&&ak.$blk!==undefined){break s;}$s=-1;return[K.nil,ak];    case 27:    if(!($interfaceIsEqual(aj,$ifaceNil))){  �$s=-1;return[K.nil,aj];    }  �al=(((0>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+0])>>0))|((((1>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+1])>>0))<<8>>0);  �if(!((al===1))){$s=29;continue;}$s=30;continue;    case 29:  
am=B.Errorf("wav: format must be linear PCM",new I([]));$s=31;case 31:if($c){$c=false;am=am.$blk();}if(am&&am.$blk!==undefined){break s;}$s=-1;return[K.nil,am];    case 30:  Kan=(((2>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+2])>>0))|((((3>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+3])>>0))<<8>>0);    ao=an;  �if(ao===(1)){$s=33;continue;}if(ao===(2)){$s=34;continue;}$s=35;continue;    case 33:  �o=true;    $s=36;continue;    case 34:  �o=false;    $s=36;continue;case 35:  �ap=B.Errorf("wav: channel num must be 1 or 2 but was %d",new I([new $Int(an)]));$s=37;case 37:if($c){$c=false;ap=ap.$blk();}if(ap&&ap.$blk!==undefined){break s;}$s=-1;return[K.nil,ap];    case 36:    case 32:  -p=(((14>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+14])>>0))|((((15>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+15])>>0))<<8>>0);  _if(!((p===8))&&!((p===16))){$s=38;continue;}$s=39;continue;    case 38:  �aq=B.Errorf("wav: bits per sample must be 8 or 16 but was %d",new I([new $Int(p)]));$s=40;case 40:if($c){$c=false;aq=aq.$blk();}if(aq&&aq.$blk!==undefined){break s;}$s=-1;return[K.nil,aq];    case 39:  �ax=(ar=(as=(at=(new $Int64(0,(4>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+4]))),au=$shiftLeft64((new $Int64(0,(5>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+5]))),8),new $Int64(at.$high|au.$high,(at.$low|au.$low)>>>0)),av=$shiftLeft64((new $Int64(0,(6>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+6]))),16),new $Int64(as.$high|av.$high,(as.$low|av.$low)>>>0)),aw=$shiftLeft64((new $Int64(0,(7>=af.$length?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+7]))),24),new $Int64(ar.$high|aw.$high,(ar.$low|aw.$low)>>>0));    if(!((ay=(new $Int64(0,a.SampleRate())),(ay.$high===ax.$high&&ay.$low===ax.$low)))){  �m=(((ax.$low+((ax.$high>>31)*4294967296))>>0));  �n=a.SampleRate();    }  �l=(az=ad,new $Int64(l.$high+az.$high,l.$low+az.$low));    $s=21;continue;    case 19:  k=ad;  ($s=12;continue s;    $s=21;continue;case 20:  Cba=$makeSlice(J,$flatten64(ad));  `bc=C.ReadFull(b,ba);$s=41;case 41:if($c){$c=false;bc=bc.$blk();}if(bc&&bc.$blk!==undefined){break s;}bb=bc;bd=bb[0];be=bb[1];  �if(!((bd===ba.$length))){$s=42;continue;}$s=43;continue;    case 42:  �bf=B.Errorf("wav: invalid header",new I([]));$s=44;case 44:if($c){$c=false;bf=bf.$blk();}if(bf&&bf.$blk!==undefined){break s;}$s=-1;return[K.nil,bf];    case 43:    if(!($interfaceIsEqual(be,$ifaceNil))){  �$s=-1;return[K.nil,be];    }  �l=(bg=ad,new $Int64(l.$high+bg.$high,l.$low+bg.$low));    case 21:    case 17:    $s=11;continue;case 12:  bh=new G.ptr(b,l,k,k);    if(o||!((p===16))){  �bh=E.NewStereo16(bh,o,!((p===16)));    if(o){  k=$mul64(k,(new $Int64(0,2)));    }    if(!((p===16))){  6k=$mul64(k,(new $Int64(0,2)));    }    }    if(!((m===n))){  rbi=E.NewResampling(bh,k,m,n);  �bh=bi;  �k=bi.Size();    }  �$s=-1;return[new F.ptr(bh,k),$ifaceNil];    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.b=b;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.bh=bh;$f.bi=bi;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Decode=H;Decodebytes.Equal
fmt.ErrorfBgithub.com/hajimehoshi/ebiten/audio/internal/convert.NewResampling@github.com/hajimehoshi/ebiten/audio/internal/convert.NewStereo16.github.com/hajimehoshi/ebiten/audio/wav.Decode)github.com/hajimehoshi/ebiten/audio/wav.I)github.com/hajimehoshi/ebiten/audio/wav.J)github.com/hajimehoshi/ebiten/audio/wav.K.github.com/hajimehoshi/ebiten/audio/wav.Stream.github.com/hajimehoshi/ebiten/audio/wav.streamio.ReadFull �"{"Base":5899,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/gopath/src/github.com/hajimehoshi/ebiten/audio/wav/decode.go","Base":1,"Size":5897,"Lines":[0,31,34,101,169,212,215,265,268,339,408,484,555,589,590,634,646,647,656,665,672,678,679,718,774,776,777,814,835,863,876,878,879,926,973,997,999,1000,1047,1050,1125,1190,1227,1229,1230,1278,1311,1335,1337,1338,1391,1423,1438,1440,1441,1462,1495,1513,1531,1549,1551,1552,1599,1646,1669,1688,1691,1725,1748,1751,1776,1801,1816,1818,1819,1866,1931,1948,1968,2001,2023,2041,2087,2111,2114,2152,2169,2185,2188,2213,2259,2262,2309,2348,2370,2388,2413,2416,2446,2448,2449,2497,2530,2552,2554,2555,2608,2640,2659,2661,2662,2716,2719,2791,2845,2848,2905,2908,2980,3061,3086,3119,3139,3187,3190,3207,3225,3228,3273,3339,3342,3388,3454,3457,3458,3474,3496,3527,3548,3567,3582,3602,3610,3617,3642,3676,3697,3746,3750,3768,3787,3791,3809,3892,3903,3949,4016,4034,4105,4110,4139,4174,4196,4246,4251,4270,4290,4295,4337,4357,4418,4423,4469,4492,4503,4519,4530,4547,4559,4644,4649,4699,4749,4842,4847,4937,4987,5024,5064,5069,5091,5137,5156,5172,5183,5212,5247,5269,5319,5324,5343,5363,5368,5390,5394,5397,5436,5455,5481,5505,5529,5532,5566,5622,5634,5651,5655,5682,5699,5703,5706,5743,5815,5823,5845,5848,5895],"Infos":null}]}
 