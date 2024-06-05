emcc -lembind \
  embinding.cpp \
  -O2 \
  -s MODULARIZE=1 \
  -o yourOutput.js  \
  -sENVIRONMENT="web" \
  -I ../eigen/  \
  -I ../spatial/src/  \
  -I ../boost_1_78_0/  \
  -std=c++14 \
  -sNO_DISABLE_EXCEPTION_CATCHING \
  -Wno-enum-constexpr-conversion \
  --no-entry

sed -i '1s;^;\/* eslint-disable *\/;' yourOutput.js
# for Mac add '' after -i
sed -i '' '1s;^;\/* eslint-disable *\/;' yourOutput.js


sed -i 's|yourOutput.wasm|/wasm/yourOutput.wasm|' yourOutput.js


https://ppuzio.medium.com/c-in-the-browser-with-webassembly-via-emscripten-vite-and-react-bd82e0598a5e


perl -i -p0e  "s/(if \(typeof exports === 'object' && typeof module === 'object'\))[\s\S]*/export default Module;/g" yourOutput.js 
