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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �S���crypto/sha1sha1cryptohash��
$$ exports $$
pv0sha1crypto/sha1BlockSize$!�	New   HashhashhashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2   Size$!(	Sum data2 (2 AA=$packages["crypto"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["hash"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D�
D=$pkg.digest=$newType(0,$kindStruct,"sha1.digest",true,"crypto/sha1",false,function(h_,x_,nx_,len_){this.$val=this;if(arguments.length===0){this.h=I.zero();this.x=J.zero();this.nx=0;this.len=new $Uint64(0,0);return;}this.h=h_;this.x=x_;this.nx=nx_;this.len=len_;});�NO.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([K],[$Int,$error],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([K],[K],false)},{prop:"checkSum",name:"checkSum",pkg:"crypto/sha1",typ:$funcType([],[L],false)},{prop:"ConstantTimeSum",name:"ConstantTimeSum",pkg:"",typ:$funcType([K],[K],false)},{prop:"constSum",name:"constSum",pkg:"crypto/sha1",typ:$funcType([],[L],false)}];��D.init("crypto/sha1",[{prop:"h",name:"h",exported:false,typ:I,tag:""},{prop:"x",name:"x",exported:false,typ:J,tag:""},{prop:"nx",name:"nx",exported:false,typ:$Int,tag:""},{prop:"len",name:"len",exported:false,typ:$Uint64,tag:""}]);digestcrypto/sha1.Icrypto/sha1.Jcrypto/sha1.Kcrypto/sha1.Lcrypto/sha1.Ocrypto/sha1.digest II=$arrayType($Uint32,5);I JJ=$arrayType($Uint8,64);J KK=$sliceType($Uint8);K LL=$arrayType($Uint8,20);L MM=$arrayType($Uint8,8);M NN=$arrayType($Uint32,16);N OO=$ptrType(D);Ocrypto/sha1.digest Hblock 	    H=G;blockcrypto/sha1.blockcrypto/sha1.blockGeneric crypto/sha1.initC6C=function(){var $ptr;  'A.RegisterHash(3,E);    };	    C();crypto.RegisterHashcrypto/sha1.Newcrypto/sha1.init (*crypto/sha1.digest).Reset�D.ptr.prototype.Reset=function(){var $ptr,a;a=this;  �a.h[0]=1732584193;  �a.h[1]=4023233417;  a.h[2]=2562383102;  a.h[3]=271733878;  "a.h[4]=3285377520;  2a.nx=0;  <a.len=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digestcrypto/sha1.digest crypto/sha1.NewE~E=function(){var $ptr,a;  �a=new D.ptr(I.zero(),J.zero(),0,new $Uint64(0,0));  �a.Reset();  �return a;    };$pkg.New=E;Newcrypto/sha1.Icrypto/sha1.Jcrypto/sha1.Newcrypto/sha1.digest (*crypto/sha1.digest).Size~D.ptr.prototype.Size=function(){var $ptr,a;a=this;  �return 20;    };D.prototype.Size=function(){return this.$val.Size();};digestcrypto/sha1.digest (*crypto/sha1.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var $ptr,a;a=this;  return 64;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digestcrypto/sha1.digest (*crypto/sha1.digest).Write� D.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  bb=a.$length;  od.len=(e=d.len,f=(new $Uint64(0,b)),new $Uint64(e.$high+f.$high,e.$low+f.$low));  �if(d.nx>0){$s=1;continue;}$s=2;continue;    case 1:  �g=$copySlice($subslice(new K(d.x),d.nx),a);  �d.nx=d.nx+(g)>>0;  �if(d.nx===64){$s=3;continue;}$s=4;continue;    case 3:  �$r=H(d,new K(d.x));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �d.nx=0;    case 4:  �a=$subslice(a,g);    case 2:  if(a.$length>=64){$s=6;continue;}$s=7;continue;    case 6:  h=(a.$length&~63)>>0;  6$r=H(d,$subslice(a,0,h));$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  Ha=$subslice(a,h);    case 7:    if(a.$length>0){  hd.nx=$copySlice(new K(d.x),a);    }  �$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.Write=function(a){return this.$val.Write(a);};digestcrypto/sha1.Kcrypto/sha1.blockcrypto/sha1.digest (*crypto/sha1.digest).Sum�cD.ptr.prototype.Sum=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=$clone(b,D);  d=c.checkSum();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=$clone(d,L);  $s=-1;return $appendSlice(a,new K(e));    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.Sum};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.Sum=function(a){return this.$val.Sum(a);};digestcrypto/sha1.Kcrypto/sha1.Lcrypto/sha1.checkSum~crypto/sha1.digest (*crypto/sha1.digest).checkSum�	PD.ptr.prototype.checkSum=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  fb=a.len;  �c=J.zero();  �c[0]=128;  �if((d=$div64(b,new $Uint64(0,64),true),(d.$high<0||(d.$high===0&&d.$low<56)))){$s=1;continue;}$s=2;continue;    case 1:  �f=a.Write($subslice(new K(c),0,$flatten64((e=$div64(b,new $Uint64(0,64),true),new $Uint64(0-e.$high,56-e.$low)))));$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=3;continue;case 2:  h=a.Write($subslice(new K(c),0,$flatten64((g=$div64(b,new $Uint64(0,64),true),new $Uint64(0-g.$high,120-g.$low)))));$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}h;    case 3:  Db=$shiftLeft64(b,(3));  Si=0;while(true){if(!(i<8)){break;}  p((i<0||i>=c.length)?($throwRuntimeError("index out of range"),undefined):c[i]=(($shiftRightUint64(b,((56-(8*i>>>0)>>>0))).$low<<24>>>24)));  hi=i+(1)>>>0;    }  �j=a.Write($subslice(new K(c),0,8));$s=6;case 6:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}j;    if(!((a.nx===0))){  �$panic(new $String("d.nx != 0"));    }  �k=L.zero();  �l=a.h;m=0;while(true){if(!(m<5)){break;}n=m;o=((m<0||m>=l.length)?($throwRuntimeError("index out of range"),undefined):l[m]);  (p=$imul(n,4),((p<0||p>=k.length)?($throwRuntimeError("index out of range"),undefined):k[p]=(((o>>>24>>>0)<<24>>>24))));  !(q=($imul(n,4))+1>>0,((q<0||q>=k.length)?($throwRuntimeError("index out of range"),undefined):k[q]=(((o>>>16>>>0)<<24>>>24))));  A(r=($imul(n,4))+2>>0,((r<0||r>=k.length)?($throwRuntimeError("index out of range"),undefined):k[r]=(((o>>>8>>>0)<<24>>>24))));  `(s=($imul(n,4))+3>>0,((s<0||s>=k.length)?($throwRuntimeError("index out of range"),undefined):k[s]=((o<<24>>>24))));    m++;}  }$s=-1;return k;    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.checkSum};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.checkSum=function(){return this.$val.checkSum();};digest	checkSum~crypto/sha1.Jcrypto/sha1.Kcrypto/sha1.Lcrypto/sha1.digest %(*crypto/sha1.digest).ConstantTimeSum��D.ptr.prototype.ConstantTimeSum=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  	c=$clone(b,D);  	d=c.constSum();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=$clone(d,L);  	/$s=-1;return $appendSlice(a,new K(e));    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.ConstantTimeSum};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.ConstantTimeSum=function(a){return this.$val.ConstantTimeSum(a);};digestcrypto/sha1.Kcrypto/sha1.Lcrypto/sha1.constSum~crypto/sha1.digest (*crypto/sha1.digest).constSum��D.ptr.prototype.constSum=function(){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  	~b=M.zero();  	�c=$shiftLeft64(a.len,3);  	�d=0;while(true){if(!(d<8)){break;}  	�((d<0||d>=b.length)?($throwRuntimeError("index out of range"),undefined):b[d]=(($shiftRightUint64(c,((56-(8*d>>>0)>>>0))).$low<<24>>>24)));  	�d=d+(1)>>>0;    }  	�e=((a.nx<<24>>>24));  	�f=e-56<<24>>>24;  
>g=(((((f<<24>>24))>>7<<24>>24)<<24>>>24));  
�h=128;  
�i=0;while(true){if(!(i<64)){break;}  
�j=((((((i-e<<24>>>24)<<24>>24))>>7<<24>>24)<<24>>>24));  f(l=a.x,((i<0||i>=l.length)?($throwRuntimeError("index out of range"),undefined):l[i]=((((((~j<<24>>>24)&h)>>>0))|(((j&(k=a.x,((i<0||i>=k.length)?($throwRuntimeError("index out of range"),undefined):k[i])))>>>0)))>>>0)));  �h=(h&(j))>>>0;    if(i>=56){  $(o=a.x,((i<0||i>=o.length)?($throwRuntimeError("index out of range"),undefined):o[i]=(((m=a.x,((i<0||i>=m.length)?($throwRuntimeError("index out of range"),undefined):m[i]))|(((g&(n=i-56<<24>>>24,((n<0||n>=b.length)?($throwRuntimeError("index out of range"),undefined):b[n])))>>>0)))>>>0)));    }  
�i=i+(1)<<24>>>24;    }  �$r=H(a,new K(a.x));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �p=L.zero();  �q=a.h;r=0;while(true){if(!(r<5)){break;}s=r;t=((r<0||r>=q.length)?($throwRuntimeError("index out of range"),undefined):q[r]);  �(u=$imul(s,4),((u<0||u>=p.length)?($throwRuntimeError("index out of range"),undefined):p[u]=((g&(((t>>>24>>>0)<<24>>>24)))>>>0)));  �(v=($imul(s,4))+1>>0,((v<0||v>=p.length)?($throwRuntimeError("index out of range"),undefined):p[v]=((g&(((t>>>16>>>0)<<24>>>24)))>>>0)));  (w=($imul(s,4))+2>>0,((w<0||w>=p.length)?($throwRuntimeError("index out of range"),undefined):p[w]=((g&(((t>>>8>>>0)<<24>>>24)))>>>0)));  B(x=($imul(s,4))+3>>0,((x<0||x>=p.length)?($throwRuntimeError("index out of range"),undefined):p[x]=((g&((t<<24>>>24)))>>>0)));    r++;}  ly=0;while(true){if(!(y<64)){break;}    if(y<56){  �(z=a.x,((y<0||y>=z.length)?($throwRuntimeError("index out of range"),undefined):z[y]=h));  �h=0;    }else{  (ab=a.x,((y<0||y>=ab.length)?($throwRuntimeError("index out of range"),undefined):ab[y]=(aa=y-56<<24>>>24,((aa<0||aa>=b.length)?($throwRuntimeError("index out of range"),undefined):b[aa]))));    }  �y=y+(1)<<24>>>24;    }  �$r=H(a,new K(a.x));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �ac=a.h;ad=0;while(true){if(!(ad<5)){break;}ae=ad;af=((ad<0||ad>=ac.length)?($throwRuntimeError("index out of range"),undefined):ac[ad]);    ag=$imul(ae,4);  �((ag<0||ag>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ag]=((((ag<0||ag>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ag])|((((~g<<24>>>24)&(((af>>>24>>>0)<<24>>>24)))>>>0)))>>>0));    ah=($imul(ae,4))+1>>0;  �((ah<0||ah>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ah]=((((ah<0||ah>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ah])|((((~g<<24>>>24)&(((af>>>16>>>0)<<24>>>24)))>>>0)))>>>0));    ai=($imul(ae,4))+2>>0;  ((ai<0||ai>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ai]=((((ai<0||ai>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ai])|((((~g<<24>>>24)&(((af>>>8>>>0)<<24>>>24)))>>>0)))>>>0));    aj=($imul(ae,4))+3>>0;  +((aj<0||aj>=p.length)?($throwRuntimeError("index out of range"),undefined):p[aj]=((((aj<0||aj>=p.length)?($throwRuntimeError("index out of range"),undefined):p[aj])|((((~g<<24>>>24)&((af<<24>>>24)))>>>0)))>>>0));    ad++;}  S$s=-1;return p;    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.constSum};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.constSum=function(){return this.$val.constSum();};digest	constSum~crypto/sha1.Kcrypto/sha1.Lcrypto/sha1.Mcrypto/sha1.blockcrypto/sha1.digest crypto/sha1.SumF�eF=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=new D.ptr(I.zero(),J.zero(),0,new $Uint64(0,0));  �b.Reset();  �c=b.Write(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;  �d=b.checkSum();$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:F};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Sum=F;Sumcrypto/sha1.Icrypto/sha1.Jcrypto/sha1.Sumcrypto/sha1.checkSum~crypto/sha1.digest crypto/sha1.blockGenericG��G=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �c=N.zero();  �d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=d;j=e;k=f;l=g;m=h;  �while(true){if(!(b.$length>=64)){break;}  hn=0;while(true){if(!(n<16)){break;}  �o=$imul(n,4);  �((n<0||n>=c.length)?($throwRuntimeError("index out of range"),undefined):c[n]=(((((((((((o<0||o>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+o])>>>0))<<24>>>0)|((((p=o+1>>0,((p<0||p>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+p]))>>>0))<<16>>>0))>>>0)|((((q=o+2>>0,((q<0||q>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+q]))>>>0))<<8>>>0))>>>0)|(((r=o+3>>0,((r<0||r>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+r]))>>>0)))>>>0));  xn=n+(1)>>0;    }  �s=i;t=j;u=k;v=l;w=m;x=s;y=t;z=u;aa=v;ab=w;  �ac=0;  �while(true){if(!(ac<16)){break;}  �ad=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;  �ae=((x<<5>>>0)|(x>>>27>>>0))>>>0;  �af=((y<<30>>>0)|(y>>>2>>>0))>>>0;  �ah=(((ae+ad>>>0)+ab>>>0)+(ag=ac&15,((ag<0||ag>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ag]))>>>0)+1518500249>>>0;  ai=ah;aj=x;ak=af;al=z;am=aa;x=ai;y=aj;z=ak;aa=al;ab=am;  �ac=ac+(1)>>0;    }  Cwhile(true){if(!(ac<20)){break;}  Zar=((((((an=((ac-3>>0))&15,((an<0||an>=c.length)?($throwRuntimeError("index out of range"),undefined):c[an]))^(ao=((ac-8>>0))&15,((ao<0||ao>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ao])))>>>0)^(ap=((ac-14>>0))&15,((ap<0||ap>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ap])))>>>0)^(aq=(ac)&15,((aq<0||aq>=c.length)?($throwRuntimeError("index out of range"),undefined):c[aq])))>>>0;  �(as=ac&15,((as<0||as>=c.length)?($throwRuntimeError("index out of range"),undefined):c[as]=(((ar<<1>>>0)|(ar>>>31>>>0))>>>0)));  �at=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;  �au=((x<<5>>>0)|(x>>>27>>>0))>>>0;  �av=((y<<30>>>0)|(y>>>2>>>0))>>>0;  ax=(((au+at>>>0)+ab>>>0)+(aw=ac&15,((aw<0||aw>=c.length)?($throwRuntimeError("index out of range"),undefined):c[aw]))>>>0)+1518500249>>>0;  1ay=ax;az=x;ba=av;bb=z;bc=aa;x=ay;y=az;z=ba;aa=bb;ab=bc;  Qac=ac+(1)>>0;    }  Wwhile(true){if(!(ac<40)){break;}  nbh=((((((bd=((ac-3>>0))&15,((bd<0||bd>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bd]))^(be=((ac-8>>0))&15,((be<0||be>=c.length)?($throwRuntimeError("index out of range"),undefined):c[be])))>>>0)^(bf=((ac-14>>0))&15,((bf<0||bf>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bf])))>>>0)^(bg=(ac)&15,((bg<0||bg>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bg])))>>>0;  �(bi=ac&15,((bi<0||bi>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bi]=(((bh<<1>>>0)|(bh>>>31>>>0))>>>0)));  �bj=(((y^z)>>>0)^aa)>>>0;  �bk=((x<<5>>>0)|(x>>>27>>>0))>>>0;   bl=((y<<30>>>0)|(y>>>2>>>0))>>>0;  bn=(((bk+bj>>>0)+ab>>>0)+(bm=ac&15,((bm<0||bm>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bm]))>>>0)+1859775393>>>0;  Abo=bn;bp=x;bq=bl;br=z;bs=aa;x=bo;y=bp;z=bq;aa=br;ab=bs;  eac=ac+(1)>>0;    }  gwhile(true){if(!(ac<60)){break;}  ~bx=((((((bt=((ac-3>>0))&15,((bt<0||bt>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bt]))^(bu=((ac-8>>0))&15,((bu<0||bu>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bu])))>>>0)^(bv=((ac-14>>0))&15,((bv<0||bv>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bv])))>>>0)^(bw=(ac)&15,((bw<0||bw>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bw])))>>>0;  �(by=ac&15,((by<0||by>=c.length)?($throwRuntimeError("index out of range"),undefined):c[by]=(((bx<<1>>>0)|(bx>>>31>>>0))>>>0)));  �bz=(((((((y|z)>>>0))&aa)>>>0))|(((y&z)>>>0)))>>>0;  ca=((x<<5>>>0)|(x>>>27>>>0))>>>0;  cb=((y<<30>>>0)|(y>>>2>>>0))>>>0;  <cd=(((ca+bz>>>0)+ab>>>0)+(cc=ac&15,((cc<0||cc>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cc]))>>>0)+2400959708>>>0;  `ce=cd;cf=x;cg=cb;ch=z;ci=aa;x=ce;y=cf;z=cg;aa=ch;ab=ci;  uac=ac+(1)>>0;    }  �while(true){if(!(ac<80)){break;}  �cn=((((((cj=((ac-3>>0))&15,((cj<0||cj>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cj]))^(ck=((ac-8>>0))&15,((ck<0||ck>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ck])))>>>0)^(cl=((ac-14>>0))&15,((cl<0||cl>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cl])))>>>0)^(cm=(ac)&15,((cm<0||cm>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cm])))>>>0;  �(co=ac&15,((co<0||co>=c.length)?($throwRuntimeError("index out of range"),undefined):c[co]=(((cn<<1>>>0)|(cn>>>31>>>0))>>>0)));  cp=(((y^z)>>>0)^aa)>>>0;  cq=((x<<5>>>0)|(x>>>27>>>0))>>>0;  /cr=((y<<30>>>0)|(y>>>2>>>0))>>>0;  Lct=(((cq+cp>>>0)+ab>>>0)+(cs=ac&15,((cs<0||cs>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cs]))>>>0)+3395469782>>>0;  pcu=ct;cv=x;cw=cr;cx=z;cy=aa;x=cu;y=cv;z=cw;aa=cx;ab=cy;  �ac=ac+(1)>>0;    }  �i=i+(x)>>>0;  �j=j+(y)>>>0;  �k=k+(z)>>>0;  �l=l+(aa)>>>0;  �m=m+(ab)>>>0;  �b=$subslice(b,64);    }  �cz=i;da=j;db=k;dc=l;dd=m;a.h[0]=cz;a.h[1]=da;a.h[2]=db;a.h[3]=dc;a.h[4]=dd;    };blockGenericcrypto/sha1.Ncrypto/sha1.blockGeneric �~{"Base":6683,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/crypto/sha1/sha1.go","Base":1,"Size":4083,"Lines":[0,55,109,159,160,235,248,249,258,268,276,278,279,293,332,334,335,376,392,393,428,449,450,458,470,490,510,530,550,570,572,573,632,653,668,685,694,706,708,709,736,752,768,784,800,816,826,837,839,840,900,923,941,952,962,964,965,1009,1010,1064,1065,1120,1133,1154,1169,1196,1208,1229,1249,1261,1265,1277,1280,1302,1331,1349,1361,1364,1381,1406,1409,1417,1419,1420,1462,1529,1539,1561,1592,1594,1595,1636,1650,1710,1728,1743,1761,1791,1801,1834,1837,1838,1858,1869,1901,1936,1939,1958,1959,1975,1996,1999,2000,2023,2048,2078,2110,2141,2167,2170,2171,2186,2188,2189,2263,2317,2327,2349,2380,2382,2383,2424,2444,2461,2493,2529,2532,2533,2551,2620,2692,2693,2750,2786,2848,2849,2915,2964,2965,2999,3019,3020,3035,3104,3139,3143,3146,3147,3210,3228,3229,3252,3277,3314,3353,3391,3426,3429,3430,3466,3541,3555,3577,3594,3605,3630,3634,3637,3638,3716,3734,3735,3760,3799,3840,3880,3917,3920,3921,3936,3938,3939,3985,4020,4034,4045,4060,4081],"Infos":null},{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/crypto/sha1/sha1block.go","Base":4085,"Size":2352,"Lines":[0,55,109,159,160,173,174,182,200,218,236,254,256,257,328,376,419,437,438,510,533,582,621,649,663,748,752,753,791,792,834,880,918,927,949,970,996,1025,1061,1096,1100,1122,1189,1224,1225,1246,1272,1301,1337,1372,1376,1398,1465,1500,1518,1544,1573,1609,1644,1648,1670,1737,1772,1804,1805,1831,1860,1896,1931,1935,1957,2024,2059,2077,2103,2132,2168,2203,2207,2208,2218,2228,2238,2248,2258,2259,2275,2278,2279,2350],"Infos":null},{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/crypto/sha1/sha1block_generic.go","Base":6438,"Size":244,"Lines":[0,55,109,159,160,204,205,218,219],"Infos":null}]}
 