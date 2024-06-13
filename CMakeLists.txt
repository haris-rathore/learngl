cmake_minimum_required(VERSION 3.20)
project(learngl LANGUAGES C CXX)

add_executable(app
        src/glad.c
        src/main.cpp
        src/shader.cpp
)
target_include_directories(app PRIVATE include)
target_link_directories(app PRIVATE lib)

target_link_libraries(app 
	PRIVATE glfw3 opengl32 stdc++ gdi32)
