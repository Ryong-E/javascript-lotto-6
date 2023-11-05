import Lottos from '../models/Lottos.js';
import WinningNumber from '../models/WinningNumber.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottos;

  #winnginNumber;

  constructor() {
    this.#lottos = new Lottos();
    this.#winnginNumber = new WinningNumber();
  }

  async play() {
    await this.askPurchase();
  }

  async askPurchase() {
    try {
      const purchase = await InputView.askPurchase();
      this.#lottos.setPurchase(purchase);
      this.#lottos.generateLotto();
      OutputView.printLotto(this.#lottos.getLottos());
    } catch (error) {
      OutputView.print(error.message);
      await this.askPurchase();
    }
  }

  async askWinningNumber() {
    try {
      const winningNumber = await InputView.askWinningNumber();
      this.#winnginNumber.setWinningNumber(winningNumber);
    } catch (error) {
      OutputView.print(error.message);
      await this.askWinningNumber();
    }
  }
}
export default LottoController;