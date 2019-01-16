package br.com.udemy.funcoes;

import java.util.Scanner;

public class Program {
	public static void main (String[] args) {
		
		Scanner sc = new Scanner(System.in);
			
			System.out.println("Digite 3 numeros: ");
			int a = sc.nextInt();
			int b = sc.nextInt();
			int c = sc.nextInt();
			
			int maior = max(a, b, c);			
			mostrarMaior(maior);
			
		sc.close();
		
	}
	
	public static int max(int x, int y, int z) {
		int aux;
		
		if(x > y && x> z) {
			aux = x;
		} else if (y > z) {
			aux = y;
		}else {
			aux = z;
		}
		
		return aux;
	}
	
	public static void mostrarMaior(int valor) {
		System.out.println("O maior n�mero entre os 3 �: " + valor);
	}
}
