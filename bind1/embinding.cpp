#include <emscripten/bind.h>
#include "some_module.h"

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("functionWithPointer", 
    emscripten::optional_override(
        [](std::string firstArg) {
            return functionWithPointer(firstArg.c_str());
        })
    );
}
