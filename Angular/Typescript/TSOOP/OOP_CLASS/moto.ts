import { Veiculo } from './veiculo';

export class Moto extends Veiculo {
    public acelerar(): void {
        this.velocidade += 20;
    }
}