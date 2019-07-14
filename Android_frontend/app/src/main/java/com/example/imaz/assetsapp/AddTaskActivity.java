package com.example.imaz.assetsapp;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class AddTaskActivity extends AppCompatActivity {
    EditText name,freq;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_task);
        name=findViewById(R.id.taskName);
        freq=findViewById(R.id.frequency);
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

    public void save(View view) {
        String n=name.getText().toString();
        String fr=freq.getText().toString();
        JSONObject data=new JSONObject();
        try {
            data.put("name",n);
            data.put("frequency",fr);
            AddTask task=new AddTask();
            task.execute("https://vert-choucroute-93551.herokuapp.com/add-task",data.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    class AddTask extends AsyncTask<String,Void,String>
    {
        @Override
        protected String doInBackground(String... params) {
            try {
                URL url=new URL(params[0]);
                HttpURLConnection connection=(HttpURLConnection)url.openConnection();
                connection.addRequestProperty("Accept","application/json");
                connection.addRequestProperty("Content-Type","application/json");
                connection.setRequestMethod("POST");
                connection.setDoOutput(true);
                connection.connect();
                DataOutputStream outputStream=new DataOutputStream(connection.getOutputStream());
                outputStream.writeBytes(params[1]);
                Log.i("Sending...",params[1]);
                int resp=connection.getResponseCode();
                if(resp!=200) {
                    return String.valueOf(resp);
                }
                else
                {
                    String response=getResponse(connection);
                    Log.i(" RESPONSE CODE",String.valueOf(resp));
                    Log.i("RESPONSE DATA",response);
                    outputStream.flush();
                    outputStream.close();
                    return String.valueOf(resp);
                }

            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }

            return null;
        }

        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);
            if(s!=null)
                Toast.makeText(AddTaskActivity.this, ""+s, Toast.LENGTH_SHORT).show();
        }
    }
}
