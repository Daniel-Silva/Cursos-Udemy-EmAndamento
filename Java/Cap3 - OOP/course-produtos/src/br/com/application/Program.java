package br.com.application;

import java.util.Locale;
import java.util.Scanner;

import br.com.entidade.Produto;

public class Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		Produto produto = new Produto();
		System.out.println("Digite os dados do produto");
		System.out.println("Nome: ");
		produto.nome = sc.nextLine();
		System.out.println("Preço: ");
		produto.preco = sc.nextDouble();
		System.out.println("Quantidade em estoque: ");
		produto.quantidade = sc.nextInt();
		
		System.out.println(produto.nome + ", "+ produto.preco + ", "+ produto.quantidade);
		
		sc.close();
	}

}
