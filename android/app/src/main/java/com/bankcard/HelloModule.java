package com.bankcard;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

public class HelloModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public HelloModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    static {
        System.loadLibrary("hello_world_jni"); //this loads the library when the class is loaded
    }

    @Override
    public boolean canOverrideExistingModule() {
        return true;
    }

    @Override
    public String getName() {
        return "HelloWorldTest";
    }

    @ReactMethod
    public void say(Promise promise) {
        promise.resolve("Hello World!");
    }

    @ReactMethod
    public void helloWorld(Promise promise) {
        try {
            String hello = helloWorldJNI();
            promise.resolve(hello);
        } catch (Exception e) {
            promise.reject("ERR", e);
        }
    }

    public native String helloWorldJNI();
}