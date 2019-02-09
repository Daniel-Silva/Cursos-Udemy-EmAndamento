package br.com.entidade;

public class Produto {
	public String nome;
	public double preco;
	public int quantidade;
	
	public double valorTotalNoEstoque() {
		return this.preco * this.quantidade;
	}
	
	public void addProduto(int quantidade) {
		this.quantidade += quantidade;
	}
	
	public void removeProduto(int quantidade) {
		this.quantidade -= quantidade;
	}
}
