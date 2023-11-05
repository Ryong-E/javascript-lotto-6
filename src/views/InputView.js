import { Console } from '@woowacourse/mission-utils';
import LottoValidator from '../validators/LottoValidator.js';
import PurChaseValidator from '../validators/PurchaseValidator.js';
import { INPUT_MESSAGE } from '../constant.js';

class InputView {
  static async askPurchase() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.purchase);
    PurChaseValidator.checkPurchase(answer);

    return answer;
  }

  static async askWinningNumber() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.winning_number);
    LottoValidator.isLotto(answer);

    return answer;
  }

  static async askBonusNumber(winningNumbers) {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.bonus_number);
    LottoValidator.bonusValidate(winningNumbers, answer);

    return answer;
  }
}
export default InputView;