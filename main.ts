import{mkdirSync,readdirSync,readFileSync,writeFileSync}from"node:fs";
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output",T="#4d')-.2!!!!!!!!,,,,,,,(,,,(,,,!,,,!!!!!!!!!!!!!CGGC#!!!!!!!!!!!(+!!!!!!!!!!!!!!''$'";
let o=new Uint8Array(0),l=0;
function R(p,q){
let n=p.length,D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,M=new Int32Array(256),i=0,x=0,t=0;
o=new Uint8Array(65536);l=0;
for(;;){
if(t==1e6)return 10;
if(x<0||x>=n)return 9;
let b=p[x],k=(T.charCodeAt(b)||0)-35;
if(k<0)return 5;
let f=k>>4,g=(k>>2)&3,h=k&3;
if(x+f>=n)return 9;
t++;
let y=x+1+f;
if(s<g)return 2;
if(s-g+h>256)return 3;
x=y;
switch(b){
case 0:return 0;
case 1:D[s++]=p[y-1]<<24>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{let w=D[s-1];D[s-1]=D[s-2];D[s-2]=w;break}
case 6:D[s]=D[s-2];s++;break;
case 7:{let w=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=w;break}
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{let r=(p[y-2]|p[y-1]<<8)<<16>>16,v=1;if(b>48)v=D[--s];if(b==48||(b==49)==(v==0))x=y+r;break}
case 51:if(c==64)return 7;C[c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(!c)return 8;x=C[--c];break;
case 64:{let a=D[s-1];if(a<0||a>255)return 6;D[s-1]=M[a];break}
case 65:{let a=D[s-1];if(a<0||a>255)return 6;s-=2;M[a]=D[s];break}
case 80:{let w=String(D[s-1]);if(l+w.length>65536)return 11;s--;for(let j=0;j<w.length;j++)o[l++]=w.charCodeAt(j);break}
case 81:if(l>65535)return 11;o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return D[--s]&255;
default:{let a=D[s-2],z=D[s-1],r;if(!z&&b>18&&b<23)return 4;r=b==16?a+z:b==17?a-z:b==18?Math.imul(a,z):b==19?a/z:b==20?a%z:b==21?(a>>>0)/(z>>>0):b==22?(a>>>0)%(z>>>0):b==24?a&z:b==25?a|z:b==26?a^z:b==28?a<<(z&31):b==29?a>>(z&31):b==30?a>>>(z&31):b==32?a==z?1:0:b==33?a<z?1:0:(a>>>0)<(z>>>0)?1:0;s-=2;D[s++]=r}
}
}
}
for(const d of readdirSync(I).sort()){
let e=R(readFileSync(I+"/"+d+"/program.bin"),readFileSync(I+"/"+d+"/input.bin"));
mkdirSync(O+"/"+d,{recursive:!0});
writeFileSync(O+"/"+d+"/stdout.bin",o.subarray(0,l));
writeFileSync(O+"/"+d+"/exit.txt",e+"\n");
}
