//rewrite by fabio vergani
with(g){
	shaderSource(v=createShader(i=35633),`

		attribute vec2 v;
		void main(){gl_Position=vec4(v-1.,0,1);}

	`);
	compileShader(v);
	attachShader(p=createProgram(),v);
	shaderSource(v=createShader(--i),`

		precision lowp float;
		uniform float T;
		float v(vec3 v){
			vec3 f=v,i=v;
			float x=cos(.78),r=sin(.78);
			f.yx*=mat2(x,r,-r,x);
			i.yx*=mat2(x,-r,r,x);
			return min(min(length(max(abs(f)-vec3(.12,.8,.2),0.)),length(max(abs(i)-vec3(.12,.8,.2),0.)))-.1,v.y+.76);
		}
		vec3 v(vec3 f,vec3 m){
			for(int x=0;x<600;++x){
				float i=v(f);
				if(i<.001)return f;
				f+=m*i;
				if(length(f)>10.)break;
			}
			return vec3(-1.);
		}
		void main(){
			vec3 f=vec3(.1),x=normalize(vec3(gl_FragCoord.xy/512.-.5,1)),i=vec3(0,0,-3),r=vec3(1);
			float m=cos(T),l=sin(T),z=1.;mat2 n=mat2(m,l,-l,m);vec2 d=vec2(0,.01);
			i.xz*=n;
			x.xz*=n;
			for(int y=0;y<4;++y){
				vec3 c=v(i,x),e=normalize(v(c)-vec3(v(c-d.yxx),v(c-d.xyx),v(c-d.xxy))),a=v(c+r*.01,r);
				if(c.x==-1.)break;
				float g=mod(floor(c.x)+floor(c.z)+floor(c.y),2.);
				f+=vec3(.7,.5,.4)*(g+.1)*z;
				if(a.x!=-1.)f-=.3*z;
				x=normalize(reflect(x,e));
				i=c+x*.01;
				z*=.2;
			}
			gl_FragColor=vec4(f,1);
		}

	`);
	compileShader(v);
	attachShader(p,v);
	linkProgram(p);
	useProgram(p);
	bindBuffer(v=34962,createBuffer(v));
	bufferData(v,new Int8Array([0,0,0,6,6,0]),35044);
	enableVertexAttribArray(0);
	vertexAttribPointer(0,2,5120,0,2,0);
	r=requestAnimationFrame;
	v=0;
	r(i=()=>{uniform1f(getUniformLocation(p,'T'),v+=.02);drawArrays(4,0,3);r(i)})
}
