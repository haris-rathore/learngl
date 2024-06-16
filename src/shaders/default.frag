#version 330 core

in vec3 color;
in vec2 tex;
out vec4 frag_color;

uniform sampler2D texture1;
uniform sampler2D texture2;

void main(){
    frag_color = mix(texture(texture1, tex), texture(texture2, tex), 0.2);
}