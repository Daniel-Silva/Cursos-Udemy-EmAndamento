package br.com.udemy.estruturas;

import java.util.Locale;
import java.util.Scanner;

public class SegundoExercicio {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		double r, a, pi = Math.PI;
		
		r = sc.nextDouble();
		a = pi * r * r;
		
		System.out.printf("A=%.4f%n", a);
		
		sc.close();

	}
}
