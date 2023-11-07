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
    '[ERROR] 입력한 구입금액이 유효하지 않습니다. 구입금액은 1,000원 단위여야하며 숫자여야합니다.',
});

const LOTTO = Object.freeze({
  price: 1000,
  numberMax: 45,
  numberMim: 1,
  numberCount: 6,
});

export { CONSOLE_MESSAGE, ERROR_MESSAGE, LOTTO };
