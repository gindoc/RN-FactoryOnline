package com.example.cwenhui.nestrntoandroid;

import android.os.Bundle;

import com.cboy.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class LiveActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "NestRNToAndroid";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

    //    @Override
//    protected boolean getUseDeveloperSupport() {
//        return BuildConfig.DEBUG;
//    }

//    @Override
//    protected List<ReactPackage> getPackages() {
//        return Arrays.<ReactPackage>asList(
//                new MainReactPackage()
//        );
//    }
}