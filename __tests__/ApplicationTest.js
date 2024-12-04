import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    if (input === undefined) {
      throw new Error('NO INPUT');
    }

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join(LINE_SEPARATOR);

const expectLogContains = (received, expects) => {
  expects.forEach((exp) => {
    expect(received).toContain(exp);
  });
};

const runExceptions = async ({ inputs = [], expectedErrorMessage = [] }) => {
  // given
  mockQuestions([...inputs]);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(expectedErrorMessage);
};

const run = async ({ inputs = [], expected = [] }) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions(inputs);

  // when
  const app = new App();
  await app.run();

  const output = getOutput(logSpy);

  // then
  if (expected.length > 0) {
    expectLogContains(output, expected);
  }
};

describe('주문 테스트', () => {
  test('예외 테스트', async () => {
    await runExceptions({
      inputs: ['피망(2개), 콜라(3개)'],
      expectedErrorMessage: '[ERROR]:',
    });
  });

  test.each([
    [
      ['햄버거(5개), 샐러드(2개), 콜라(3개)'],
      [
        '[주문 내역]',
        '햄버거(5개): 50,000원',
        '샐러드(2개): 16,000원',
        '콜라(3개): 6,000원',
        '총 주문 금액: 72,000원',
        '배달비: 1,000원',
        '[서비스]',
        '서비스 만두(5개)',
        '[최종 결제 금액]',
        '73,000원',
      ],
    ],
    [
      ['감자튀김(3개), 샐러드(2개), 콜라(2개), 오렌지 주스(1개)'],
      [
        '[주문 내역]',
        '감자튀김(3개): 15,000원',
        '샐러드(2개): 16,000원',
        '콜라(2개): 4,000원',
        '오렌지 주스(1개): 3,000원',
        '총 주문 금액: 38,000원',
        '배달비: 2,000원',
        '[최종 결제 금액]',
        '40,000원',
      ],
    ],
  ])('기능 테스트', async (inputs, expected) => {
    await run({
      inputs,
      expected,
    });
  });
});
