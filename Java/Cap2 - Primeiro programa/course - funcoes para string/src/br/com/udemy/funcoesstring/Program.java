package br.com.udemy.funcoesstring;

public class Program {

	public static void main(String[] args) {
		
		String nome = " Daniel Silva ";
		
		//Caracteres min�sculo
		System.out.println(nome.toLowerCase());
		
		//Caracteres mai�sculo
		System.out.println(nome.toUpperCase());

		//Eliminar espa�os no come�o e no final
		System.out.println(nome.trim());
		
		//Remove � partir do indice indicado
		System.out.println(nome.substring(2));
		
		//Remove � partir do indice indicado at� o segundo indice indicado
		System.out.println(nome.substring(2,9));
	}

}
