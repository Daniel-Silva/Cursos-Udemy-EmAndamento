package br.com.udemy.castingeconversaodetipos;

public class Program {

	public static void main(String[] args) {
		
		// Exemplo 1
		double a; //64bits
		float b; //32bits
		
		a = 5.0;
		b = (float)a;
		
		System.out.println(b);
		
		// Exemplo 2
		double a2;
		int b2;
		
		a2 = 5.7;
		b2 = (int)a2;
		
		System.out.println(b2);
	}

}
