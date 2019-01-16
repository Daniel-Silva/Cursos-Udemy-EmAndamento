package br.com.udemy.estruturas;

import java.util.Scanner;

public class PrimeiroExercicio {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int soma = 0;
		
		System.out.println("Digite um valor: ");
		int n1 = sc.nextInt();
		int n2 = sc.nextInt();
		soma = n1 + n2;
		
		System.out.println("SOMA = " + soma);
		sc.close();
		
	}

}
