import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

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

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expects) => {
  expects.forEach((exp) => {
    expect(received).toContain(exp);
  });
};

const runExceptions = async ({ inputs = [], expectedErrorMessage = [] }) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions([...inputs]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(expectedErrorMessage)
  );
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
      expected: ['[ERROR]:'],
    });
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
    ]
  ],
  [
    ['감자튀김(9개), 샐러드(8개), 콜라(8개), 오렌지 주스(9개)'],
    [
      '[주문 내역]',
      '감자튀김(9개): 45,000원',
      '샐러드(8개): 64,000원',
      '콜라(8개): 16,000원',
      '오렌지 주스(9개): 27,000원',
      '총 주문 금액: 152,000원',
      '배달비: 0원',
      '[최종 결제 금액]',
      '152,000원',
    ]
  ],
])('기능 테스트', async (inputs, expected) => {
  await run({
    inputs: inputs,
    expected: expected,
  });
});
