package br.com.udemy.tiposprimitivos;

public class Program {

	public static void main(String[] args) {
		
		// Tipo Byte (-128 a 127)
		byte n1 = 10;
		
		//Tipo boolean (verdadeiro ou falso)
		boolean completed = false;
		
		//Tipo char (unicode \u0000 a \uFFFF) - Apenas um caractere ou o valor unicode
		char gender = 'F';
		char letter = '\u0075';
		
		//Tipo int (Inteiro entre -2147483648 a 2147483647)
		int n2 = 3500;
		
		//Tipo long (Inteiro entre -9223372036854775808 a 9223372036854775807)
		long n3 = 2147483648L;
		
		//Tipo float (Pontos flutuantes de 32bits)
		float n4 = 2.75F;
		
		//Tipo double (Pontos flutuantes de 64bits)
		double n5 = 75.2579;
		
		System.out.println("n1: "+ n1);
		System.out.println("completed: "+ completed);
		System.out.println("gender: "+ gender);
		System.out.println("letter: "+ letter);
		System.out.println("n2: " + n2);
		System.out.println("n3: "+ n3);
		System.out.println("n4: "+ n4);
		System.out.println("n5: "+ n5);
	}

}
