#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

void main(){

int maximo = 0;
int botao;
float temperatura;
int mes;
int dia;
int hora;
int minuto;
int segundo;

 printf("INSERT INTO drives(id_button, temperature, tgr, createdAt, updatedAt) VALUES (1, 2.0, true, '2023-10-6 8:19:25', '2023-10-6 8:19:25'),");

while(maximo<= 10000){

    botao = 1+rand()%3;
    temperatura = 1+ rand()%10;
    mes = 1+rand()%12;
    dia= 1+rand()%28;
    hora= 1+rand()%23;
    minuto= 1+ rand()%59;
    segundo = 1+ rand()%59;

    //printf("(%d, %.1f, true, '2023-%d-%d %d:%d:%d', '2023-%d-%d %d:%d:%d'),", botao, temperatura, mes, dia, hora, minuto, segundo, mes, dia, hora, minuto, segundo );
    printf("(2, %.1f, true, '2023-%d-%d %d:%d:%d', '2023-%d-%d %d:%d:%d'),", temperatura, mes, dia, hora, minuto, segundo, mes, dia, hora, minuto, segundo ); //forcando o botão 1 a ter mais acionamentos

maximo++;
}

printf("(1, 2.0, true, '2023-10-6 8:19:25', '2023-10-6 8:19:25');");

}
