#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

DHT dht(25, DHT11);



String ID_DISPOSITIVO = "1";        /////// DEFINIR O NÚMERO DO DISPOSITIVO
const char *ssid = "POCO M3";       /////// DEFINIR O NOME DA REDE
const char *password = "internet2022"; /////// DEFINIR A SENHA DA REDE
String serverName = "http://apirenatonogueira.kinghost.net:21041/api/Drives";





int NAO_CONECTADO = 14;
int CONECTADO = 26;
int ENVIANDO_REQUISICAO = 33;
int SUCESSO = 34;
int FALHA = 12;
int SENSOR = 25; 
int BOTAO = 32;






WiFiServer server(80);

void setup()
{
    dht.begin();
    pinMode(NAO_CONECTADO, OUTPUT);
    pinMode(CONECTADO, OUTPUT);
    pinMode(ENVIANDO_REQUISICAO, OUTPUT);
    pinMode(SUCESSO, OUTPUT);
    pinMode(FALHA, OUTPUT);
    pinMode(BOTAO, INPUT);
    pinMode(SENSOR, INPUT);
    digitalWrite(NAO_CONECTADO, HIGH);
    digitalWrite(CONECTADO, LOW);
    digitalWrite(ENVIANDO_REQUISICAO, LOW);
    digitalWrite(SUCESSO, LOW);
    digitalWrite(FALHA, LOW);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        digitalWrite(NAO_CONECTADO, HIGH);
        
        delay(500);
        digitalWrite(NAO_CONECTADO, LOW);
    }
    
 
    server.begin();
}

void loop()
{
    if (WiFi.status() != WL_CONNECTED)
    {
        digitalWrite(14, HIGH);
    }
    else
    {
        digitalWrite(14, LOW);
    }

    if (digitalRead(32) == HIGH)
    { // Se o botão for acionado
        digitalWrite(26, HIGH);
        delay(1000);
        digitalWrite(26, LOW);
        HTTPClient http;
        float temp = dht.readTemperature();
        delay(2000);
        String TEMPERATURE= (String)temp;
        http.begin(serverName.c_str());
        http.addHeader("Content-Type", "application/json");

        String toSend = "{\"id_button\": " + ID_DISPOSITIVO + ",  \"temperature\": \""+ TEMPERATURE + "\"}";
        int httpResponse = http.POST(toSend.c_str());
        delay(2000);
        if (httpResponse > 0)
        {
            
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(26, HIGH);
            delay(100);
            digitalWrite(26, LOW);
            delay(100);
        }
        else
        {
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
            digitalWrite(14, HIGH);
            delay(100);
            digitalWrite(14, LOW);
            delay(100);
        }

        http.end();
    }
}
