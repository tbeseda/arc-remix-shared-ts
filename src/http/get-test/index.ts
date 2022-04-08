import tsMessage from 'shared/ts-message';
import jsMessage from '@architect/shared/js-message';

export const handler = async () => {
  return {
    tsMessage: tsMessage(),
    jsMessage: jsMessage(),
  }
}
