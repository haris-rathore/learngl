cmake_minimum_required(VERSION 3.20)
project(learngl LANGUAGES C CXX)

add_subdirectory(glfw-3.4)

file(GLOB_RECURSE SOURCES
        src/*.cpp
        src/*.hpp
        glad/src/glad.c
)

add_executable(app ${SOURCES})

target_include_directories(app PRIVATE glad/include)
# Include directory needs to be specified because glad.h includes <KHR/khrplatform.h> with angle brackets

if(MINGW)
        target_link_libraries(app PRIVATE glfw opengl32 gdi32)
elseif(APPLE)
        target_link_libraries(app PRIVATE glfw "-framework Cocoa" "-framework OpenGL" "-framework IOKit")
elseif(UNIX) # LINUX
        target_link_libraries(app PRIVATE glfw GL) 
endif()
