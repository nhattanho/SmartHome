 /* Toolboard : NodeMCU 1.0
 * Pin DHT : D3
 */

// Libraries
#include <ESP8266WiFi.h>
#include "DHT.h"
#include <Wire.h>

#define DHTTYPE DHT22
#define DHTPIN D3
DHT dht(DHTPIN, DHTTYPE);

// SSID
const char* ssid     = "Phuc";      // Wifi name
const char* password = "12345678";  // Wifi password

// Host
const char* host = "dweet.io";

void setup() {
  dht.begin();

  // Serial
  Serial.begin(115200);
  delay(10);

  // We start by connecting to a WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  
  delay(5000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("connecting to ");
  Serial.println(host);
    // Use WiFiClient class to create TCP connections
    
  WiFiClient client;
  const int httpPort = 80;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }

    // We now create a URI for the request
  char url[200];
  sprintf(url, "/dweet/for/maianhtien?Temperature=%f&Humidity=%f", t, h);
  //String url = "/dweet/get/latest/dweet/for/maianhtien";

    // Send request
  Serial.print("Requesting URL: ");
  Serial.println(url);
  
  client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
  unsigned long timeout = millis();
  while (client.available() == 0) {
    if (millis() - timeout > 5000) {
      Serial.println(">>> Client Timeout !");
      client.stop();
      return;
    }
  }
    // Read all the lines from the answer
  while(client.available()){
    String line = client.readStringUntil('\r');
    Serial.print(line);
  }

  // Close connecting
  Serial.println();
  Serial.println("closing connection");
  client.stop();
}
