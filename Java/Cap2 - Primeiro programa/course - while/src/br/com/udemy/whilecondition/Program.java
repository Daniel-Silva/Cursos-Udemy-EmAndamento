package br.com.udemy.whilecondition;

import java.util.Locale;
import java.util.Scanner;

public class Program {
	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		System.out.print("Digite um n�mero: ");
		double x = sc.nextDouble();
		
		while(x >= 0.0) {
			double sr = Math.sqrt(x);
			System.out.printf("%.3f%n", sr);
			System.out.print("Digite um n�mero: ");
			x = sc.nextDouble();
		}
		
		System.out.println("Numero Negativo");
		
		sc.close();
	}
}
