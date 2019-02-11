//rewrite by fabio vergani

s='';
for(v in g){
	s+=v+': '+v.replace(/f*[a-z][a-z]b*|(^..|_)(.)[^_]+/g,'$2')+'\n';

/*	
	.replace(/f*[a-z][a-z]b*|(^..|_)(.)[^_]+/g,'$2')
f*[a-z][a-z]b*|(^..|_)(.)[^_]+
f*[a-z][a-z]b*|(^..|_)(.)[^_]+
	
	console.log(v.replace(/[a-z]/g,''))
	s=v.match(/[A-Z]/g).join('');	
	g[v[0]+v[6]]=g[v];
	//
	s=s+v[0]+v[6]+': '+v+'\n'
*/
};
console.log(s)
//

/*

console.log(s)
*/


/*

g.shaderSource((v=g.createShader(35633)),`

	attribute vec2 v;
	void main(){
		gl_Position=vec4(v-1.,0,1);
	}

`);

g.compileShader(v);
g.attachShader((p=g.createProgram()),v);

g.shaderSource((v=g.createShader(35632)),`
	precision lowp float;
	uniform float T;

	float v(vec3 v){
		vec3 f=v,i=v;
		float m=.785,x=cos(m),r=sin(m);
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
g.compileShader(v);
g.attachShader(p,v);
g.linkProgram(p);
g.useProgram(p);
//
v=34962;
g.bindBuffer(v,g.createBuffer(v));
g.bufferData(v,new Int8Array([0,0,0,6,6,0]),35044);
g.enableVertexAttribArray(0);
g.vertexAttribPointer(0,2,5120,0,2,0);
//
v=0;
(x=()=>{
g.uniform1f(g.getUniformLocation(p,'T'),(v+=.02));
g.drawArrays(4,0,3);
setTimeout(x,20);
})();
*/

/*
shaderSource
compileShader
attachShader
linkProgram
useProgram
bindBuffer
bufferData
enableVertexAttribArray
vertexAttribPointer
uniform1f
getUniformLocation
drawArrays
*/