import {Component, OnInit} from '@angular/core';
import {Piece} from '../../../models/piece.model';
import {GameService} from '../../../services/game/game.service';
import {GameState} from '../../../models/gameState.enum';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  pieceClickStatus = false;
  pieces = this.gameService.redPieces;
  gameState: GameState;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  get filterFlag() {
    const flags = this.pieces;
    return flags.filter(x => x.value === 0);
  }

  get filterBomb() {
    const bombs = this.pieces;
    return bombs.filter(x => x.value === 11);
  }

  get filterMarshal() {
    const marshals = this.pieces;
    return marshals.filter(x => x.value === 10);
  }

  get filterGeneral() {
    const generals = this.pieces;
    return generals.filter(x => x.value === 9);
  }

  get filterColonel() {
    const Colonels = this.pieces;
    return Colonels.filter(x => x.value === 8);
  }

  get filterMajor() {
    const majors = this.pieces;
    return majors.filter(x => x.value === 7);
  }

  get filterCaptain() {
    const captains = this.pieces;
    return captains.filter(x => x.value === 6);
  }

  get filterLieutenant() {
    const lieutenants = this.pieces;
    return lieutenants.filter(x => x.value === 5);
  }

  get filterSergeant() {
    const sergeants = this.pieces;
    return sergeants.filter(x => x.value === 4);
  }

  get filterMiner() {
    const miners = this.pieces;
    return miners.filter(x => x.value === 3);
  }

  get filterScout() {
    const scouts = this.pieces;
    return scouts.filter(x => x.value === 2);
  }

  get filterSpy() {
    const spies = this.pieces;
    return spies.filter(x => x.value === 1);
  }

  selectPiece(piece: Piece) {

    console.log('Piece selected triggered! Data: ' + piece.id);
    const index = this.pieces.indexOf(piece);
    console.log('index of selected piece: ' + index);
    this.pieces.splice(index, 1);
    this.pieceClickStatus = !this.pieceClickStatus;
    this.gameService.selectedPiece = piece;

    // TODO: Selectie leegmaken nadat de piece op de het board is geplaatst

    // TODO: Wellicht bij selectie afbeelding opacity aanpassen en pas verwijderen als het op het board geplaatst is.


  }
}
