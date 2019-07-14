package com.example.imaz.assetsapp;

import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public String getResponse(HttpURLConnection connection)
    {
        try {
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(
                            connection.getInputStream()));
            StringBuffer sb = new StringBuffer("");
            String line = "";

            while ((line = in.readLine()) != null) {

                sb.append(line);
                break;
            }

            in.close();
            return sb.toString();
        }catch(Exception e)
        {
            return e.getMessage();
        }
    }

    public void addAssetActivity(View view) {
        Intent i=new Intent(getApplicationContext(),AddAssetsActivity.class);
        startActivity(i);
    }

    public void addTaskActivity(View view) {
        Intent i=new Intent(getApplicationContext(),AddTaskActivity.class);
        startActivity(i);
    }

    public void addWorkerActivity(View view) {
        Intent i=new Intent(getApplicationContext(),AddWorkerActivity.class);
        startActivity(i);
    }

    public void allocateTaskActivity(View view) {
        Intent i=new Intent(getApplicationContext(),AllocateTaskActivity.class);
        startActivity(i);
    }


    public void getAllTasks(View view) {
        Intent i=new Intent(getApplicationContext(),AllTasksActivity.class);
        startActivity(i);
    }
}
