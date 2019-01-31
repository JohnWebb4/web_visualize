#include <stdio.h>

extern setInterval(int (* callback)());

int runCallback(int (*callback)()) {
  return callback();
}

int tick() {

}

int main(int argc, char ** argv) {
  printf("Hello World!\n");
}
