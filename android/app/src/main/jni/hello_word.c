//hello_world.c
#include <jni.h>

jstring Java_com_bankcard_HelloModule_helloWorldJNI(JNIEnv* env, jobject thiz) {
  return (*env)->NewStringUTF(env, "Hello World,Andrew!");
}
