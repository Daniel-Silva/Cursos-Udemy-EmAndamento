package br.com.udemy.funcoesstring;

public class Program {

	public static void main(String[] args) {
		
		String nome = " Daniel Silva ";
		
		//Caracteres minúsculo
		System.out.println(nome.toLowerCase());
		
		//Caracteres maiúsculo
		System.out.println(nome.toUpperCase());

		//Eliminar espaços no começo e no final
		System.out.println(nome.trim());
		
		//Remove à partir do indice indicado
		System.out.println(nome.substring(2));
		
		//Remove à partir do indice indicado até o segundo indice indicado
		System.out.println(nome.substring(2,9));
	}

}
