const CONSOLE_MESSAGE = Object.freeze({
  requestBuying: '구입금액을 입력해 주세요.\n',
  returnBuying: (quantitiy) => `${quantitiy}개를 구매했습니다.\n`,
  requestLottoNumbers: '당첨 번호를 입력해 주세요.\n',
  requestBonusNumber: '보너스 번호를 입력해 주세요.\n',
  returnWinning: '당첨 통계\n---\n',
  returnEachResult: (matchCount, prize, winCount) =>
    `${matchCount}개 일치 (${prize}원) - ${winCount}개 \n`,
  returnLottoROI: (lottoROI) => `총 수익률은 ${lottoROI}%입니다.\n`,
});

const ERROR_MESSAGE = Object.freeze({
  invalidAmountError:
    '[ERROR] 입력한 구입금액이 유효하지 않습니다. 구입금액은 0이상, 1,000원 단위의 숫자여야합니다.',
  invalidInputNumbers:
    '[ERROR] 입력이 유효하지 않습니다. 로또 번호는 숫자여야하며, 각 숫자의 구분은 쉼표(,) 입니다.',
  invalidInputBonusNumber:
    '[ERROR] 입력이 유효하지 않습니다. 보너스 번호는 숫자여야 합니다.',
  notUniqueNumbers: '[ERROR] 중복되는 숫자가 있습니다.',
  notUniqueBonusNumber: `[ERROR] 보너스 넘버가 중복되는 숫자입니다.`,
  notNumberCountSix: '[ERROR] 로또 번호는 6개여야 합니다.',
  outOfRange: '[ERROR] 숫자가 주어진 범위를 벗어났습니다. 범위는 1~45 입니다.',
});

const LOTTO = Object.freeze({
  price: 1000,
  numberMax: 45,
  numberMin: 1,
  numberCount: 6,
});

export { CONSOLE_MESSAGE, ERROR_MESSAGE, LOTTO };
