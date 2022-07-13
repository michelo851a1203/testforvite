import { mount, VueWrapper } from '@vue/test-utils';
import MainTest from '../components/MainTest.vue';

test('mount component', async () => {
  const buttonTitle = 'testClickHello';
  const timesNumber = 2.5;
  const initialInputNumber = 0;
  const inputTitleInitialResult = `${buttonTitle} - ${timesNumber * initialInputNumber}`

  const wrapper = mount(MainTest, {
    props: {
      buttonTitle,
      timesNumber,
    },
  });

  expect(wrapper.text()).toContain(inputTitleInitialResult);
  expect(wrapper.html()).toMatchSnapshot();
  await wrapper.get('button').trigger('click');
  expect(wrapper.text()).toContain(`${buttonTitle} - ${timesNumber * (initialInputNumber + 1)}`);
  testEmitWithWrapper(wrapper, 1);
});

const testEmitWithWrapper = (
  wrapper: VueWrapper<any>,
  expectNumber: number,
) => {
  const wrapperEmit = wrapper.emitted()['update:callbackClick'];
  const lastIndex = wrapperEmit.length - 1;
  expect(wrapperEmit).toBeTruthy();
  expect(wrapperEmit[lastIndex]).toEqual([expectNumber]);
}

